console.log('inside favorite controller.js');
//myApp defined in module.js and ng-App
angular.module('myApp') //registered
    .controller('FavoriteController', FavoriteController); //controller name defined in ng-controller

function FavoriteController(giphy) {

console.log('insdie Favorite Controller function');

var favorite = this;

favorite.faveControllerGiphy = function(giphy) { //function available to controller and on the DOM

console.log('inside faveControllerGiphy');
    // //giphy refers to giphy.service.js
    // giphy.faveServiceGiphy() //calling function that lives in service file
    //     //services has two scopes a private and a public scope
    //     //response will be promise; response gets passed into then
    //     .then(function() { //giphyresponse is response.data.data
    //         //what is defined here and is available in html now
    //         favorite.randomImage = giphyresponse;
    //         //returning response once it is run

        // });
}; //end of getGiphy

}
