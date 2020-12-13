'use strict'

const Env = use('Env')
const Schema = use('Schema')

class PermissionRoleTableSchema extends Schema {
  up () {
    this.withSchema(Env.get('DB_SCHEMA', 'public')).create('permission_role', table => {
      table.increments()
      table.integer('permission_id').unsigned().index()
      table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')
      table.integer('role_id').unsigned().index()
      table.foreign('role_id').references('id').on('roles').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.withSchema(Env.get('DB_SCHEMA', 'public')).drop('permission_role')
  }
}

module.exports = PermissionRoleTableSchema
