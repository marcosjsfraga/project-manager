'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Session routes
Route.post('sessions', 'SessionController.store')
Route.post('users', 'UserController.store')

// Team routes
Route.group(() => {
    Route.resource('teams', 'TeamController').apiOnly()
}).middleware('auth') // All routes in this group can be authenticated

// Invite routes
Route.group(() => {
    Route.post('invites', 'InviteController.store')
}).middleware(['auth', 'team'])
