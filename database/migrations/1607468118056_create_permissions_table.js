'use strict'

const Env = use('Env')
const Schema = use('Schema')

class PermissionsTableSchema extends Schema {
  up () {
    this.withSchema(Env.get('DB_SCHEMA', 'public')).create('permissions', table => {
      table.increments()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.withSchema(Env.get('DB_SCHEMA', 'public')).drop('permissions')
  }
}

module.exports = PermissionsTableSchema
