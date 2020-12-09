'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Session routes
Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('users', 'UserController.store').validator('User')

Route.group(() => {
    // Team routes
    Route.resource('teams', 'TeamController')
        .apiOnly()
        .validator(new Map([[['teams.store', 'teams,update'], ['Team']]]))
}).middleware('auth') // All routes in this group can be authenticated

// Invite routes
Route.group(() => {
    Route.post('invites', 'InviteController.store').validator('Invite')

    // Project routes
    Route.resource('projects', 'ProjectController')
        .apiOnly()
        .validator(new Map([[['projects.store', ['Project']]]]))
}).middleware(['auth', 'team'])
