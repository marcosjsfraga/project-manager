'use strict'

class User {
    get validateAll () {
        // Validates all fields before returning a message
        return true
    }

    get rules () {
        return {
            // validation rules
            name: 'required',
            email: 'required|email|unique:users',
            password: 'required|confirmed'
        }
    }
}

module.exports = User
