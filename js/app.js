angular.module('searchResult',["ngRoute"])
    .config(($routeProvider) => {
    $routeProvider
        .when("/",{
            templateUrl : "index.html"
        })
        .otherwise("/")
})