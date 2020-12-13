'use strict'

const Env = use('Env')
const Schema = use('Schema')

class TeamSchema extends Schema {
    up () {
        this.withSchema(Env.get('DB_SCHEMA', 'public')).create('teams', (table) => {
            table.increments()
            table.string('name', 60)
            table
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.string('slug').notNullable().unique()
            table.timestamps()
        })
    }

    down () {
        this.withSchema(Env.get('DB_SCHEMA', 'public')).drop('teams')
    }
}

module.exports = TeamSchema
