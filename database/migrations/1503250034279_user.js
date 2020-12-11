'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
    // static get connection () {
    //     return 'pg'
    // }

    up () {
        this.withSchema('public').create('users', (table) => {
            table.increments()
            table.string('name', 60).notNullable()
            table.string('email', 254).notNullable().unique()
            table.string('password', 60).notNullable()
            table.timestamps()
        })
    }

    down () {
        this.withSchema('public').drop('users')
    }
}

module.exports = UserSchema
