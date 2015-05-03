/* global app:false */

'use strict';

app.controller('PostsCtrl', ['$scope', '$log', '$location', 'Post', function($scope, $log, $location, Post) {
	$scope.posts = Post.all;
	$scope.post = {url: 'http://', title: ''};

	$scope.deletePost = function(post) {
		Post.delete(post);
	};
}]);