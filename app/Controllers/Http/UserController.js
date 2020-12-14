'use strict'

const Database = use('Adonis/Src/Database')
const User = use('App/Models/User')
const Invite = use('App/Models/Invite')

class UserController {

    async index({ request }) {
        const tenant_id = request.header('tenant_id')

        // Set database connection
        User.useConnection = tenant_id
        User.tableName = 'public.users'

        const users = await User.all()

        return users
    }

    async store ({ request, response, auth }) {
        // const tenant_id = request.header('tenant_id')
        const data = request.only(['name', 'email', 'password'])

        const teams = await teamsQuery.pluck('team_id')

        const teamsQuery = Invite.query().where('email', data.email)

        if (teams.lenght === 0) {
            return response
                .status(401)
                .send({ message: 'Você não foi convidado para um time.' })
        }

        const user = await User.create(data)

        await user.teams().attach(teams)

        // Delete invitations
        await teamsQuery.delete()

        const token = await auth.attempt(data.email, data.password)

        return token
    }
}

module.exports = UserController
