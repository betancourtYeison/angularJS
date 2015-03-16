var miAp = angular.module('miAp', ['ngAnimate']);

miAp.controller('AnimacionCtrl', function($scope) {
  $scope.visible = true;
});

miAp.animation('.animar', function() {
  return {
    leave: function(element, done) {
      element.text('Adios!');
      element.addClass('difuminar');
      done();
    },
    enter: function(element, done) {
      element.text('Hola!');
      element.addClass('difuminar');
      done();
    }
  }
});