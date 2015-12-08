var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/login', {
            templateUrl: './view/login.html',
            controller: 'RegistrationController'
        })
        .when('/register', {
            templateUrl: './view/register.html',
            controller: 'RegistrationController'
        })
        .when('/succes', {
            templateUrl: './view/succes.html',
            controller: 'SuccesController'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);