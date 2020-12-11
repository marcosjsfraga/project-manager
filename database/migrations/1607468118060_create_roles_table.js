'use strict'

const Schema = use('Schema')

class RolesTableSchema extends Schema {
  up () {
    this.withSchema('public').create('roles', table => {
      table.increments()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.withSchema('public').drop('roles')
  }
}

module.exports = RolesTableSchema
