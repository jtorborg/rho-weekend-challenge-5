console.log('inside main controller.js');
//myApp defined in module.js and ng-App
angular.module('myApp') //registered
    .controller('MainController', MainController); //controller name defined in ng-controller

//pass in service instead of $http  //giphy is the service; defined in giphy.service.js
function MainController(giphy) {
    var main = this;
    main.randomImage = {};
    main.searchImage = [];
    main.comments = '';
    main.favoritesCount = 0;
    main.favorites = {};






    //move $http get calls and call them here
    //whatever the name of your service file is

    main.getGiphy = function() { //function available to controller and on the DOM
        //giphy refers to giphy.service.js
        giphy.getGiphy() //calling function that lives in service file
            //services has two scopes a private and a public scope
            //response will be promise; response gets passed into then
            .then(function(giphyresponse) { //giphyresponse is response.data.data
                //main.randomImage is defined here and is available in html now
                main.randomImage = giphyresponse;
                //returning response once it is run

            });
    }; //end of getGiphy

    main.searchGiphy = function() {
        //getting passed on search giphy
        //main.query matches what is on html
        giphy.searchGiphy(main.query) //sent to service; once initial promsie is sent back; function after .then is run; ".then" waits for promise to be fulfilled
            .then(function(searchImage) {
                //console.log('response', response);
                main.query = searchImage;
            });
    }; //end of searchGiphy

    main.saveGiphy = function(comments, pic) { //input is a placeholder
        //getting passed on search giphy
        //main.query matches what is on html
        // console.log("comments", comments);
        // console.log("pic", pic);
        main.favorites ={comments:comments,pic:pic};/////!!!!@@@###$$%%//must match database columns
        main.favoriteCount++;
        console.log(main.favorites);
        giphy.saveGiphy(main.favorites)
            .then(function(response) {
console.log('response', response);
console.log('response.data', response.data);
console.log('response.data[0].comments', response.data[0].comments);
console.log('response.data[0].pic', response.data[0].pic);



            //remove .then because there is not http request; can only execute when a promise is fulfilled or created; waiting function


    }); //end of saveGiphy

}
} //end MainController
