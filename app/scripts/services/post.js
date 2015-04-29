/* global app:false */
/* global Firebase:false */

app.factory('Post', function($firebaseArray, FIREBASE_URL) {
	'use strict';
	var ref = new Firebase(FIREBASE_URL + 'posts');
	var posts = $firebaseArray(ref);

	var Post = {
		all: posts,
		create: function(post) {
			return posts.$add(post);
		},
		get: function(postId) {
			return posts[posts.$indexFor(postId)];
		},
		delete: function(post) {
			return posts.$remove(post);
		}
	};

	return Post;
});
