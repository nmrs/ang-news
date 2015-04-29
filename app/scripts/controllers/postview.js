/* global app:false */

'use strict';

app.controller('PostViewCtrl', ['$scope', '$routeParams', 'Post', function($scope, $routeParams, Post) {
	$scope.post = Post.get($routeParams.postId);
}]);