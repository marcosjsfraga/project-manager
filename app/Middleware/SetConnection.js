'use strict'

const Database = use('Adonis/Src/Database')

class SetConnection {

    async handle ({ request }, next) {
        const tenant_id = request.header('TENANT_ID')

        // Add team variable to request
        request.tenantId = tenant_id

        // console.log('...Middleware:SetConnection...')
        // console.log(`tenantId: ${tenant_id}`)

        // call next to advance the request
        await next()
    }
}

module.exports = SetConnection
