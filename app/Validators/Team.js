'use strict'

class Team {
    get validateAll () {
        // Validates all fields before returning a message
        return true
    }

    get rules () {
        return {
            // validation rules
            name: 'required'

        }
    }
}

module.exports = Team
