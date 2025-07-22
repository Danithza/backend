import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unsigned()
      table.string('full_name')
      table.string('email').unique()
      table.string('password')
      table.boolean('is_admin').defaultTo(false)
      table.boolean('must_change_password').defaultTo(false)
      table.boolean('is_temporary_password').defaultTo(false)
      table.boolean('is_active').defaultTo(true)
      table.timestamps()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
