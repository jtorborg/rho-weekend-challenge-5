console.log('inside main controller.js');

angular.module('myApp')
.controller('MainController', MainController);

//pass in service instead of $http  giphy. wherever you want to call it
function MainController(giphy) {
    var main = this;
    main.randomImage = {};

    main.searchImage = [];

    //$http get calls
    //whatever the name of your service file is
    main.getGiphy = function() {
        //console.log('inside getGiphy function');
        giphy.getGiphy()
        //response will be promise; response gets passed into then
            .then(function(giphyresponse) {
              //this is available in html now
                main.randomImage = giphyresponse;
                //returning response once it is run

            });
    }; //end of getGiphy

    main.searchGiphy = function(response) {
      //getting passed on search giphy
        giphy.searchGiphy(response)
            .then(function(response) {
                console.log('response', response);
                main.searchImage = response;
            });
    }; //end of searchGiphy
} //end MainController
