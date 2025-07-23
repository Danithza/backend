import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
  // GET /users
  async index({ response }: HttpContext) {
    const users = await User.all()
    return response.ok(users)
  }

  // POST /users
  async store({ request, response }: HttpContext) {
    const data = request.only([
      'fullName',
      'email',
      'password',
      'isAdmin',
      'isActive',
      'isTemporaryPassword',
      'mustChangePassword',
    ])

    // Hashear la contraseña antes de guardar
    if (data.password) {
      data.password = await hash.make(data.password)
    }

    const user = await User.create(data)
    return response.created(user)
  }

  // GET /users/:id
  async show({ params, response }: HttpContext) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ message: 'Usuario no encontrado' })
    }

    return response.ok(user)
  }

  // PUT /users/:id
  async update({ params, request, response }: HttpContext) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ message: 'Usuario no encontrado' })
    }

    const data = request.only([
      'fullName',
      'email',
      'password',
      'isAdmin',
      'isActive',
      'isTemporaryPassword',
      'mustChangePassword',
    ])

    user.merge(data)
    await user.save()

    return response.ok(user)
  }

  // DELETE /users/:id
  async destroy({ params, response }: HttpContext) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ message: 'Usuario no encontrado' })
    }

    await user.delete()
    return response.ok({ message: 'Usuario eliminado correctamente' })
  }
}
