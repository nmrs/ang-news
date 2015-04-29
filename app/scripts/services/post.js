/* global app:false */

'use strict';


app.factory('Post', function($resource) {
	return $resource('https://brilliant-inferno-3945.firebaseio.com/posts/:id.json', { id: '@_id' });
});
