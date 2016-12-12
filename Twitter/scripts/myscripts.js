var app = angular.module("twitterApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/main.html"
    })
    .when("/celebritySearch", {
        templateUrl : "partials/celeb.html"
    })
    .when("/sportsSearch", {
        templateUrl : "partials/sports.html"
    });
});