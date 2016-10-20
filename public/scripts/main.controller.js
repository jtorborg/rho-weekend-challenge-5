console.log('inside main controller.js');
//myApp defined in module.js and ng-App
angular.module('myApp')
.controller('MainController', MainController); //controller name defined in ng-controller

//pass in service instead of $http  //giphy is the service; defined in giphy.service.js
function MainController(giphy) {
    var main = this;
    main.randomImage = {};

    main.searchImage = [];

    //move $http get calls and call them here
    //whatever the name of your service file is

    main.getGiphy = function() {
        //giphy refers to giphy.service.js
        giphy.getGiphy()
        //response will be promise; response gets passed into then
            .then(function(giphyresponse) {
              //this is available in html now
                main.randomImage = giphyresponse;
                //returning response once it is run

            });
    }; //end of getGiphy

    main.searchGiphy = function() {
      //getting passed on search giphy
        giphy.searchGiphy(main.query)
            .then(function(searchImage) {
                //console.log('response', response);
                main.query = searchImage;
            });
    }; //end of searchGiphy
} //end MainController
