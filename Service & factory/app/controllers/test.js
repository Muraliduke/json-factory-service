angularMFRP.controller('test', function($scope, $http) {
    $http.get("final.json")
        .then(function(response) {
            var resp = response.data;
            

            console.log(resp);
            console.log(resp.Kolkata);

        });




});

angularMFRP.controller('test1', function($scope, $http) {
    $http.get("final1.json")
        .then(function(response) {
            var resp = response.data;
            

            //console.log(resp);
        });




});