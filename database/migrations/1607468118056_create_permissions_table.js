'use strict'

const Schema = use('Schema')

class PermissionsTableSchema extends Schema {
  up () {
    this.withSchema('public').create('permissions', table => {
      table.increments()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.withSchema('public').drop('permissions')
  }
}

module.exports = PermissionsTableSchema
