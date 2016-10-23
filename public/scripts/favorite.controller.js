console.log('inside favorite controller.js');
//myApp defined in module.js and ng-App
angular.module('myApp') //registered
    .controller('FavoriteController', FavoriteController); //controller name defined in ng-controller

function FavoriteController(giphy) {

console.log('inside Favorite Controller function');

var favorite = this;

favorite.faveGiphy = function() { //function available to controller and on the DOM

console.log('inside faveGiphy');
    // //giphy refers to giphy.service.js
    giphy.faveGiphy() //calling function that lives in service file
    //     //services has two scopes a private and a public scope
    //     //response will be promise; response gets passed into then
         .then(function(response) { //giphyresponse is response.data.data
    //         //what is defined here and is available in html now
    //         favorite.randomImage = giphyresponse;
    //         //returning response once it is run
console.log("response received in favorite controller", response);
console.log("response received in favorite controller data", response.data);
console.log("response received in favorite controller ", response.data[28].comments);
console.log("response received in favorite controller ", response.data[28].pic);
favorite.comments = response.data[28].comments;
favorite.pic = response.data[28].pic;


         });
}; //end of getGiphy

} //FavoriteController
