angularMFRP.controller('home', function($scope,$http,$location,Service,getDataService,firstprovider){
	
		$scope.team={};

/*service **/
		var promise=Service.getTeams();
		promise.then(function(response){

			var resp=response.data;
			console.log("This is service in controller")
			console.log(resp);


			//console.log(resp);
			
$scope.aa=resp;
			
			
			

			/***search**/
			
			$scope.next=function(){
				
						var city=$scope.cities;
		
						var search=$scope.searches;
		
						console.log(city+search);	
//$location.path("/restaurants");


$scope.a=resp[city];
var arr=$scope.a;
var z=[];








angular.forEach(arr, function (value, index) {
	// `this` will reference myArray: []
	var x=value.name;
	var y=value.cuisine;
	if(x.includes(search) || y.includes(search)){

		console.log(value.name+"index is "+index);
		z.push(arr[index]);

	}
	
	
});

/*$scope.sear=arr[0];
$scope.seard=arr[1];
console.log($scope.sear);*/

console.log(z);
$scope.zz=z;
/**** object push ***/

/*var z=[];
z.push($scope.sear);
z.push($scope.seard)
console.log(z);
$scope.bigsearch=z;*/
/**** object push ***/
	}

	
	/***search**/









		})
	
	/*service **/



	/******** using factory to call json  *******/
 getDataService.getData(function(response) {
            var resp = response;
            console.log("This is factory in Controller ");
            console.log(resp);



        });
var b=firstprovider.showdate();
console.log(b);

var c=firstprovider.providerjson();
console.log(c);
	/******** using factory to call json  *******/
	
});
