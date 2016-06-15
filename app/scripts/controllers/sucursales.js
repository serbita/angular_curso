'use strict';

var myapp = angular.module('cursoangularApp')
myapp.controller('sucursalesCtrl', function ($scope, $rootScope, sucursalesSrv) {


/*
  function startTimer () {
    timer.start();
    setTimeout(stopTimer,5000);
}

function stopTimer () {
    timer.stop();
}
*/

  sucursalesSrv.list(function(data) {

//    startTimer();

    $rootScope.sucursalList = data;
  });

});
