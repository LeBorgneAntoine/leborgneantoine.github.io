/**
 * definition of the application route
 */
app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});