angularMFRP.factory('getDataService', function($http) {
    
    
var deferred=$q.defer();

    $http.get('final.json')
            .then(function(data) { 
               deferred.resolve(data);


});

    return {
        getData: function(done) {
            $http.get('final.json')
            .success(function(data) { 
                done(data);
                console.log("This is dataService factory.js");
                console.log(data);
            })
            .error(function(error) {
                alert('An error occured');
            });
        }

    }


   



});