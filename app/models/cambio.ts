import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cambio extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare registroId: number

  @column()
  declare usuarioId: number

  @column()
  declare tipoCambio: 'crear' | 'actualizar' | 'eliminar'

  @column()
  declare cambios: any

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
