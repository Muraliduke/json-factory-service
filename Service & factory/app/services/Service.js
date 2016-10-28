angularMFRP.service('Service', function($http,$q) {
    var deferred=$q.defer();

    $http.get('final.json')
            .then(function(data) { 
               deferred.resolve(data);


});
            this.getTeams=function(){

                return deferred.promise
            }

        });