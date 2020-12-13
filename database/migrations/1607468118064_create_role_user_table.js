'use strict'

const Env = use('Env')
const Schema = use('Schema')

class RoleUserTableSchema extends Schema {
  up () {
    this.withSchema(Env.get('DB_SCHEMA', 'public')).create('role_user_team', table => {
      table.increments()
      table.integer('role_id').unsigned().index()
      table.foreign('role_id').references('id').on('roles').onDelete('cascade')
      table.integer('user_team_id').unsigned().index()
      table.foreign('user_team_id').references('id').on('user_teams').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.withSchema(Env.get('DB_SCHEMA', 'public')).drop('role_user_team')
  }
}

module.exports = RoleUserTableSchema
