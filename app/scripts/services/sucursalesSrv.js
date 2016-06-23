var myapp = angular.module('epantePagosApp')

myapp.factory('SucursalesSrv', function ($http,$rootScope,APISrv) {
	var factory = {};
  	//curl -X POST 'http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst' -d '{}'
  	//busca la lista de productos
/*	factory.list = function(callbackFunction) {
		$rootScope.isLoading = true;    
		$http.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst',{})
  		.then(function(res){
    		$rootScope.isLoading = false;      			
  			callbackFunction(res.data);
		});
  	};
*/
    factory.list = function() {
		return APISrv.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst',{});
	}

	return factory;
});


