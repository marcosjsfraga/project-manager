'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
    up () {
        this.withSchema('public').create('projects', (table) => {
            table.increments()
            table.string('title').notNullable()
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
        this.withSchema('public').drop('projects')
    }
}

module.exports = ProjectSchema
