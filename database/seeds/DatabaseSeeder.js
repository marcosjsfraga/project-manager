'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
    async run () {
        const user = await User.create({
            name: 'Marcos Fraga',
            email: 'marcosjsfraga@gmail.com',
            password: '123'
        })

        await user.teams().create({
            name: 'Declabs',
            user_id: user.id
        })
    }
}

module.exports = DatabaseSeeder
