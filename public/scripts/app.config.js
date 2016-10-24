angular.module('myApp')
    .config(function($routeProvider, $locationProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'views/home.html',
                controller: 'MainController as main'
            }).when('/favorite', {
                templateUrl: 'views/favorite.html',
                controller: 'FavoriteController as favorite'
            }).otherwise({
                redirectTo: "/home"
            });


// lets us use normal looking links
// i.e. /home
// remember, to use this, need to set base href in html
$locationProvider.html5Mode(true);
});
