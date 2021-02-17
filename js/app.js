angular.module("to_do_app",["ngRoute"])
    .config(($routeProvider) => {
    $routeProvider
        .when("/",{
            templateUrl : "index.html"
        })
        .otherwise("/")
})