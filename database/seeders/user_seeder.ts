import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class UserSeeder {
  public async run () {
    await User.create({
      fullName: 'Administrador',
      email: 'admin@example.com',
      password: await hash.make('admin123'),
    })
  }
}
