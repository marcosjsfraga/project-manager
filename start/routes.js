'use strict'

const Route = use('Route')

// -- Session routes
Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('users', 'UserController.store').validator('User')
Route.get('users', 'UserController.index')


Route.group(() => {

    // -- Role routes
    Route.get('roles', 'RoleController.index')

    // -- Team routes
    Route.resource('teams', 'TeamController')
        .apiOnly()
        .validator(new Map([[['teams.store', 'teams.update'], ['Team']]]))

}).middleware('auth') // All routes in this group can be authenticated


Route.group(() => {

    // -- Invite routes
    Route.post('invites', 'InviteController.store')
        .validator('Invite')
        .middleware('can:invites_create')

    // -- Project routes
    Route.resource('projects', 'ProjectController')
        .apiOnly()
        .validator(new Map([[['projects.store'], ['Project']]]))
        .middleware('can:projects_create')

    // -- Member routes
    Route.get('members', 'MemberController.index')
    Route.put('members/:id', 'MemberController.update')
        .middleware('is:administrator')

    // -- Permission routes
    Route.get('permissions', 'PermissionController.show')

}).middleware(['auth', 'team'])
