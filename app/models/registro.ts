import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Registro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare contenido: object

  @column()
  declare tablaId: number

  @column()
  declare usuarioId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
