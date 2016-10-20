console.log('inside giphy.service.js');
//taking all of your requests redefin as this. instead of main. returning values instead of affecing variables
//saying what alias is going to be; this what the function is going to be for the service
angular.module('myApp').service('giphy', giphyService);


var API = 'http://api.giphy.com/v1/gifs/';
var key = '=dc6zaTOxFJmzC';
var random = 'random?api_key';
var search = 'search?q='
    //defining what this service is doing and how we call it and reuse it
function giphyService($http) {
    this.getGiphy = function() {
            return $http.get(API + random + key)
                .then(function(response) {
                    console.log('response', response);
                    return response.data.data;
                });
        } //end of this.getGiphy
//pass variable main.query
    this.searchGiphy = function(gifQuery) {
        return $http.get(API + search + gifQuery + '&api_key' + key)
            .then(function(response) {
                console.log('response', response);
                return response.data.data;
            });
    }
}
