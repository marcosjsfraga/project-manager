'use strict'


const Env = use('Env')
const Schema = use('Schema')

class TokensSchema extends Schema {
    up () {
        this.withSchema(Env.get('DB_SCHEMA', 'public')).create('tokens', (table) => {
            table.increments()
            table.integer('user_id').unsigned().references('id').inTable('users')
            table.string('token', 255).notNullable().unique().index()
            table.string('type', 80).notNullable()
            table.boolean('is_revoked').defaultTo(false)
            table.timestamps()
        })
    }

    down () {
        this.drop('tokens')
    }
}

module.exports = TokensSchema
