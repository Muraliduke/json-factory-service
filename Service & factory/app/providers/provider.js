angularMFRP.provider('firstprovider', function($http,$q) {


var deferred=$q.defer();

    $http.get('final.json')
            .then(function(data) { 
               deferred.resolve(data);


});

return{


	$get:function(){

		return{

			showdate:function(){
				var date=new Date();
				return date.getHours();
			},
			providerjson:function(){
				return deferred.promise;
			}


		}/*returns injector value*/
	}


} /*returns provider value*/


});