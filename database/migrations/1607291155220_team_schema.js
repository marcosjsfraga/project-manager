'use strict'

const Schema = use('Schema')

class TeamSchema extends Schema {
    up () {
        this.withSchema('public').create('teams', (table) => {
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
        this.withSchema('public').drop('teams')
    }
}

module.exports = TeamSchema
