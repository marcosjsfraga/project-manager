'use strict'

class Invite {
    get validateAll () {
        // Validates all fields before returning a message
        return true
    }

    get rules () {
        return {
            // validation rules
            invites: 'required|array',
            'invites.*': 'required|email'
        }
    }
}

module.exports = Invite
