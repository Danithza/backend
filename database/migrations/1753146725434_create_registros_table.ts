import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'registros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.json('contenido')
      table.integer('tabla_id').unsigned().references('id').inTable('tablas').onDelete('CASCADE')
      table.integer('usuario_id').unsigned().references('id').inTable('users')
      table.timestamps()

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
