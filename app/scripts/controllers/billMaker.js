'use strict';

var myapp = angular.module('cursoangularApp')
myapp.controller('billMakerCtrl', function ($scope) {

  //console.log('el item no existia en la lista bill');

  $scope.itemList=[{"_id":"552474d0d9e3d079f78e4ef0","nombre":"Té Dharamsala","categoria":"Bebidas","precio":18,"stock":39},{"_id":"552474d0d9e3d079f78e4ef1","nombre":"Cerveza tibetana Barley","categoria":"Bebidas","precio":19,"stock":17},{"_id":"552474d0d9e3d079f78e4ef2","nombre":"Sirope de regaliz","categoria":"Condimentos","precio":10,"stock":13},{"_id":"552474d0d9e3d079f78e4ef3","nombre":"Especias Cajun del chef Anton","categoria":"Condimentos","precio":22,"stock":53},{"_id":"552474d0d9e3d079f78e4ef4","nombre":"Mezcla Gumbo del chef Anton","categoria":"Condimentos","precio":21.35,"stock":0},{"_id":"552474d0d9e3d079f78e4ef5","nombre":"Mermelada de grosellas de la abuela","categoria":"Condimentos","precio":25,"stock":120}];
  $scope.itemsInBill=[];

  $scope.addItemToBill = function(itemId){

    var item = _.where($scope.itemList, {"_id": itemId})[0];
    var itemInBill = _.where($scope.itemsInBill, {"_id": itemId})[0];
    var cantidad = 1;

    if (typeof itemInBill != 'undefined'){
      cantidad = itemInBill.cantidad+1;
    }
    var total = cantidad * item.precio;
    var itemToAdd = {"cantidad":cantidad, "_id":itemId,"nombre":item.nombre,"precio":item.precio,"total":total};

    var index = _.findIndex($scope.itemsInBill, {"_id":itemId});
    if (index == -1) {
      //el item no existia en la lista bill
      $scope.itemsInBill.push(itemToAdd);

    } else {
      //el item existia en la lista bill
      $scope.itemsInBill[index]=itemToAdd;

    }

  };

});
