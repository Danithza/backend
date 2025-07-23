import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cambios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuario_id').unsigned().references('id').inTable('users')
      table.integer('registro_id').unsigned().references('id').inTable('registros').onDelete('CASCADE')
      table.enum('tipo_cambio', ['crear', 'actualizar', 'eliminar'])
      table.json('cambios')
      table.timestamp('fecha', { useTz: true })

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
