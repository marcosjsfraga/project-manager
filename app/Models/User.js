'use strict'

const config = use('Config')
const Model = use('Model')
const Hash = use('Hash')

class User extends Model {

    // Connection
    static get connection() {
        config.set('database.pg.connection.database', 'projman_demo')

        return config.get('database.connection')
        // return this.useConnection !== "undefined" ?
        //        this.useConnection :
        //        config.get('database.connection')
    }
    static setUseConnection(access) {
        return access
    }
    // ./Connection

    // Table
    static get table () {
        // return 'users'
        return this.tableName !== "undefined"
                ?this.tableName
                :this.table
    }
    static setTableName () {
        return 'users'
    }
    // ./Table

    static boot () {
        super.boot()

        this.addHook('beforeSave', async (userInstance) => {
            if (userInstance.dirty.password) {
                userInstance.password = await Hash.make(userInstance.password)
            }
        })
    }

    teamJoins() {
        return this.hasMany('App/Models/UserTeam')
    }

    tokens () {
        return this.hasMany('App/Models/Token')
    }

    teams () {
        return this.belongsToMany('App/Models/Team').pivotModel('App/Models/UserTeam')
    }

    // Role methods
    async is (expression) {
        const team = await this.teamJoins()
            .where('team_id', this.currentTeam)
            .first()

        return team.is(expression)
    }

    async can (expression) {
        const team = await this.teamJoins()
            .where('team_id', this.currentTeam)
            .first()

        return team.can(expression)
    }

    async scope (required) {
        const team = await this.teamJoins()
            .where('team_id', this.currentTeam)
            .first()

        return team.scope(required)
    }
}

module.exports = User
