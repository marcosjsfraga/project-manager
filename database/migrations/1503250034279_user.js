'use strict'

const Env = use('Env')
const Schema = use('Schema')

class UserSchema extends Schema {
    up () {

        this.withSchema(Env.get('DB_SCHEMA', 'public')).create('users', (table) => {
            table.increments()
            table.string('name', 60).notNullable()
            table.string('email', 254).notNullable().unique()
            table.string('password', 60).notNullable()
            table.timestamps()
        })
    }

    down () {
        this.withSchema(Env.get('DB_SCHEMA', 'public')).drop('users')
    }
}

module.exports = UserSchema
