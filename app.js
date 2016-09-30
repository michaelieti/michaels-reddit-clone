var app = angular.module('flapperNews', [])

//the scope variable is the bridge between Angular controllers
//and Angular templates (i.e. the HTML thing with the extra markup)
//Bind stuff to scope if you want it to be accessible in the template
//e.g. a function or a variable.
app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello World!';
        $scope.posts = [
            {title: 'post 1', upvotes: 5 },
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 4}
        ];
        // omg functions as first class citizens!!! javascript ftw
        // adds a new post to the posts list.
        $scope.addPost = function(){
            $scope.posts.push({title: 'A new post!', upvotes: 0});
        }
    }
]);


