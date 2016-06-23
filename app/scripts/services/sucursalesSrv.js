var myapp = angular.module('epantePagosApp')

myapp.factory('SucursalesSrv', function ($http,$rootScope,APISrv) {
	var factory = {};

  	factory.list = function () {
     return APISrv.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst',{})
          .then(function (res) {                        
               return res.data;
          },
          function () {
              console.error('albums retrieval failed.');
              return "error";
          });
  	};

	return factory;
});


