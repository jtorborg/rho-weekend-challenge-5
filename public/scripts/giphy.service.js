console.log('inside giphy.service.js');
//taking all of your requests redefin as this. instead of main. returning values instead of affecing variables
//saying what alias is going to be; this what the function is going to be for the service
angular.module('myApp').service('giphy', giphyService);

//these are privately scoped variables; they would need to publically scope it if you wanted to access outside of service

var API = 'http://api.giphy.com/v1/gifs/';


var key = '=dc6zaTOxFJmzC';
var random = 'random?api_key';
var search = 'search?q='
    //defining what this service is doing and how we call it and reuse it
function giphyService($http) {//pass in built-in $http; this is a privately scope
  //publically scoped variable
    this.getGiphy = function() {
            return $http.get(API + random + key)
                .then(function(response) {
                    console.log('response', response);
                    return response.data.data;//initial promise w/data

                }//placeholder promise to the controller (isn't coded)
              );


                //post request to save to our database; passes off data
        } //end of this.getGiphy
//pass variable main.query; matches what is on html form input and source tag
    this.searchGiphy = function(gifQuery) {
        return $http.get(API + search + gifQuery + '&api_key' + key)
            .then(function(response) {
                console.log('response', response.data.data);

                return response.data.data;
            });
    }


    // this.searchGiphy = function(gifQuery) {

    //send post to route; route will send to database
    //     return $http.post( route name is parameter )
    //         .then(function(response) {
    //             console.log('response', response.data.data);
    //
    //             return response.data.data;
    //         });

    //create your unique ; create a search form; package up that text and your id into an object
    // }
}//end of giphyService
