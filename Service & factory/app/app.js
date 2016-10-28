var angularMFRP = angular.module('angularMFRP',['ngRoute']);

angularMFRP.config(['$routeProvider', function($routeProvider, $rootScope) {
    $routeProvider
		.when('/', {

            templateUrl: 'pages/home.html',
            controller: 'home'
        })
        .when('/restaurants', {

            templateUrl: 'pages/restaurants.html',
            controller: 'restaurant'
        })
		
		
		}]);
