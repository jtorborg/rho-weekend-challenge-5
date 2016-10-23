console.log('inside favorite controller.js');
//myApp defined in module.js and ng-App
angular.module('myApp') //registered
    .controller('FavoriteController', FavoriteController); //controller name defined in ng-controller

function FavoriteController(giphy) {

//console.log('inside Favorite Controller function');

var favorite = this;
favorite.object = {};
favorite.array = [];


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
// favorite.comments = response.data.comments;
// console.log('response.data.comments', response.data.comments);
// favorite.pic = response.data.pic;
// console.log('response.data.pic', response.data.pic);

favorite.object = response.object;
favorite.array = response.data;
console.log("favorite array", favorite.array);
console.log("favorite array length", favorite.array.length);




         });
}; //end of getGiphy

} //FavoriteController
