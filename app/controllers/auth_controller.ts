import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import User from '#models/user'

export default class AuthController {
  // Login
  public async login({ request, response, auth }: HttpContext) {
  const { email, password } = request.only(['email', 'password'])

  const user = await User.findBy('email', email)
  if (!user) {
    return response.unauthorized({ message: 'Usuario no encontrado' })
  }

  // ❌ Validación directa sin hash
  if (user.password !== password) {
    return response.unauthorized({ message: 'Contraseña incorrecta' })
  }

  const token = await auth.use('api').createToken(user)
  return response.ok({ token, user })
}

  // Registro
  public async register({ request, response }: HttpContext) {
    const data = request.only(['email', 'password'])
    data.password = await hash.make(data.password)

    const user = await User.create(data)
    return response.created({ user })
  }

  // Obtener usuario autenticado
  public async me({ auth, response }: HttpContext) {
    const user = auth.user
    return response.ok({ user })
  }
}
