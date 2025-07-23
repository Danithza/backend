import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'columnas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre_columna')
      table.string('tipo_dato') // 'string', 'number', 'date'
      table.boolean('requerido').defaultTo(false)
      table.integer('tabla_id').unsigned().references('id').inTable('tablas').onDelete('CASCADE')
      table.timestamps()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
