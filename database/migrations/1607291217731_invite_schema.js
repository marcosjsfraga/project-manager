'use strict'

const Env = use('Env')
const Schema = use('Schema')

class InviteSchema extends Schema {
    up () {
        this.withSchema(Env.get('DB_SCHEMA', 'public')).create('invites', (table) => {
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
            table.string('email').notNullable()
            table.timestamps()
        })
    }

    down () {
        this.withSchema(Env.get('DB_SCHEMA', 'public')).drop('invites')
    }
}

module.exports = InviteSchema
