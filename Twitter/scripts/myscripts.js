var app = angular.module("twitterApp", ["ngRoute","ngTweets"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/main.html",

    })
    .when("/jokesSearch", {
        templateUrl : "partials/jokes.html",
        controller : "jokesCtrl"
    })
    .when("/factsSearch", {
        templateUrl : "partials/facts.html",
        controller : "factsCtrl"
    });
});

app.controller("jokesCtrl", function ($scope, $http, tweets){

    tweets.get({
        widgetId: '810846962815746049'
    }).success(function(data){
        $scope.feed = data;
        console.log(data);
    });

    // Load the JSON data with an $HTTP request
    // $http.get("https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi")
    // .then(function(response) {
    //     $scope.recipeItems = response.data.hits;
    // });
});

app.controller("factsCtrl", function ($scope, $http, tweets){
    // Load the JSON data with an $HTTP request
        tweets.get({
        widgetId: '810848738717614081'
    }).success(function(data){
        $scope.feed = data;
        console.log(data);
    });
});