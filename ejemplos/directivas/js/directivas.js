angular.module('directivaSimple', [])
	.controller('Controlador', function($scope){
		$scope.texto1 = {titulo: 'Directivas', subtitulo: 'AngularJS desde un archivo php'};
		$scope.texto2 = {titulo: 'Scope', subtitulo: 'AngularJS'};
	})
	.directive('miEncabezado', function() {
		return {
			restrict: 'E',
			scope: {
				textoVariable: '=texto'
			},
			templateUrl: 'vistas/mi-encabezado.php'		
		}
	})