'use strict'

class Session {
    get validateAll () {
        // Validates all fields before returning a message
        return true
    }

    get rules () {
        return {
            // validation rules
            email: 'required|email|unique:users',
            password: 'required'
        }
    }
}

module.exports = Session
