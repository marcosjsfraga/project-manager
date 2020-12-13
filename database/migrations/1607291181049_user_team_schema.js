'use strict'

const Env = use('Env')
const Schema = use('Schema')

class UserTeamSchema extends Schema {
    up () {
        this.withSchema(Env.get('DB_SCHEMA', 'public')).create('user_teams', (table) => {
            table.increments()
            table
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table
                .integer('team_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('teams')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.timestamps()
        })
    }

    down () {
        this.withSchema(Env.get('DB_SCHEMA', 'public')).drop('user_teams')
    }
}

module.exports = UserTeamSchema
