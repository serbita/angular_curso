var myapp = angular.module('cursoangularApp')
myapp.factory('sucursalesSrv', function ($rootScope, $http) {
	var factory = {};

  	//curl -X POST 'http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst' -d '{}'
  	//busca la lista de productos
	factory.list = function(callbackFunction) {
		$http.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst',{})
  		.then(function(res){
  			callbackFunction(res.data);
		});
  	};

	return factory;

});

//busca un producto
//curl -X GET 'http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/get?_id=552474d0d9e3d079f78e4f28' 

