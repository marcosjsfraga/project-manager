'use strict'

const Env = use('Env')
const Schema = use('Schema')

class ProjectSchema extends Schema {
    up () {
        this.withSchema(Env.get('DB_SCHEMA', 'public')).create('projects', (table) => {
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
        this.withSchema(Env.get('DB_SCHEMA', 'public')).drop('projects')
    }
}

module.exports = ProjectSchema
