var app = angular.module('myApp', []);
app.controller('MainController', MainController);
var API = 'http://api.giphy.com/v1/gifs/';
var key = '=dc6zaTOxFJmzC';
var random = 'random?api_key';
var search = 'search?q='

function MainController($http) {
    var main = this;
    main.randomImage = {};

    main.searchImage = [];
    //console.log('MainController loaded');
    //main.giphy = [{title: 'A New Hope'}, {title: 'The Phantom Menace'}];

    //$http get calls
    main.getGiphy = function() {
        //console.log('inside getGiphy function');
        $http.get(API + random + key)
            .then(function(response) {
                console.log('response', response);
                main.randomImage = response.data.data;
                console.log('main random image', main.randomImage);
                console.log('main random image url', main.randomImage.image_url);
            });
    }; //end of getGiphy

    //path to search     /v1/gifs/search

    //public beta key       dc6zaTOxFJmzC

    //key of params in config object set to key =

    main.searchGiphy = function() {
        console.log('inside searchGiphy function');
        $http.get(API + search + main.query + '&api_key' + key)
            .then(function(response) {
                console.log('response', response);
                main.searchImage = response.data.data;
                console.log('main search image', main.searchImage);
                console.log('main search image first index', main.searchImage[0]);
                main.searchimage1 = main.searchImage[0];
                console.log('main search image embed url', main.searchImage[0].embed_url);
                console.log('main search image url', main.searchImage[0].url);
                console.log('main search image url . images', main.searchImage[0].images.downsized.url);



            });
    }; //end of searchGiphy
} //end MainController
