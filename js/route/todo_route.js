const route = require('../app.js')

console.log("in the router")

route.config(($routeProvider) => {
    $routeProvider
        .when("/",{
            templateUrl : "home.html"
        })
        .when("/about", {
            templateUrl : "about.html"
        })
})