const app = angular.module("to_do_app", ["ngRoute"])

console.log("in the router")

app.config(($routeProvider) => {
    $routeProvider
        .when("/",{
            templateUrl : "../../public/partials/home.html"
        })
        .otherwise("/")
})