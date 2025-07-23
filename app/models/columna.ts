import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Columna extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombreColumna: string

  @column()
  declare tipoDato: string

  @column()
  declare requerido: boolean

  @column()
  declare tablaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
