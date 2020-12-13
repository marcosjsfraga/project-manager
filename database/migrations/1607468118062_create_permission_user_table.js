'use strict'

const Env = use('Env')
const Schema = use('Schema')

class PermissionUserTableSchema extends Schema {
  up () {
    this.withSchema(Env.get('DB_SCHEMA', 'public')).create('permission_user_team', table => {
      table.increments()
      table.integer('permission_id').unsigned().index()
      table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')
      table.integer('user_team_id').unsigned().index()
      table.foreign('user_team_id').references('id').on('user_teams').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.withSchema(Env.get('DB_SCHEMA', 'public')).drop('permission_user_team')
  }
}

module.exports = PermissionUserTableSchema
