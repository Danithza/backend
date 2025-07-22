import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  // GET /users
  async index({ response }: HttpContext) {
    const users = await User.all()
    return response.ok(users)
  }

  // POST /users → para administrador
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

    const user = await User.create(data)
    return response.created(user)
  }

  // POST /register → para usuarios normales
  async register({ request, response }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])

    // Puedes forzar valores por defecto si no quieres recibirlos desde el frontend
    const user = await User.create({
      ...data,
      isAdmin: false,
      isActive: true,
    })

    return response.created({
      message: 'Registro exitoso',
      user,
    })
  }

  // POST /login
  async login({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.findBy('email', email)

    if (!user || user.password !== password) {
      return response.unauthorized({ message: 'Correo o contraseña inválidos' })
    }

    return response.ok({
      message: 'Inicio de sesión exitoso',
      user,
    })
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
      return response.notFound({ message: 'Usuario eliminado correctamente' })
    }

    await user.delete()
    return response.ok({ message: 'Usuario eliminado correctamente' })
  }
}
