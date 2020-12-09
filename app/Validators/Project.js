'use strict'

class Project {
    get validateAll () {
        // Validates all fields before returning a message
        return true
    }

    get rules () {
        return {
            // validation rules
            title: 'required'
        }
    }
}

module.exports = Project
