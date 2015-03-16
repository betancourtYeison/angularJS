angular.module('miAp', ['ngRoute'])

.config(function ($routeProvider) {
	$routeProvider
	.when('/', {		
		templateUrl: 'vistas/inicio.html',
	})
	.when('/tareas', {
		controller: 'ControladorTareas',
		templateUrl: 'vistas/tareas.html'
	})
	.when('/empleados', {
		controller: 'ControladorEmpleados',
		templateUrl: 'vistas/empleados.html'
	})
	.otherwise({ 
		redirectTo: '/' 
	})
})

.factory('Empleados', function () {
	return [
			{
				nombre: 'Ana', paterno: 'Guzman', materno: 'Guzman', primerDia: new Date(),
				salario: 12000, telefono: 2342334, bono: 1.2323
			},
			{
				nombre: 'Adrian', paterno: 'Romero', materno: 'Paez', primerDia: new Date(),
				salario: 12000, telefono: 2392358, bono: 9.5431
			},
			{
				nombre: 'Rodolfo', paterno: 'Solares', materno: 'Madero', primerDia: new Date(),
				salario: 14000, telefono: 2344544, bono: 7.2222
			},
			{
				nombre: 'Manuel', paterno: 'Perez', materno: 'Solin', primerDia: new Date(),
				salario: 20000, telefono: 2920033, bono: 5.2783
			},
			{
				nombre: 'Alejandro', paterno: 'Mena', materno: 'Morales', primerDia: new Date(),
				salario: 13000, telefono: 2887767, bono: 1.4232
			},
			{
				nombre: 'Dana', paterno: 'Roman', materno: 'Herrena', primerDia: new Date(),
				salario: 18000, telefono: 2928322, bono: 4.4987
			}
		];
})

.factory('Tareas', function () {
	return 	[{texto: 'Ser Super Heroico con AngularJS', hecho: true}, {texto: 'Crear una ap con AngularJS', hecho: false},
					{texto: 'Mejorando la ap con AngularJS', hecho: true}];
})

.controller('ControladorTareas', function($scope, Tareas){
	$scope.tareas = Tareas;

	$scope.agregarTarea = function(){
		$scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: false});
		$scope.textoNuevaTarea = '';
	};

	$scope.restantes = function(){
		var cuenta = 0;
		angular.forEach($scope.tareas, function(tarea){
			cuenta += tarea.hecho ? 0 : 1;
		});
		return cuenta;
	};

	$scope.eliminar = function(){
		var tareasViejas =  $scope.tareas;
		$scope.tareas = [];
		angular.forEach(tareasViejas, function(tarea){
			if (!tarea.hecho) {
				$scope.tareas.push(tarea);
			};
		});
	};
})

.controller('ControladorEmpleados', function($scope, Empleados){
	$scope.empleados = Empleados;

	$scope.ordenarPor = function(orden){
		$scope.ordenSeleccionado = orden;
	};
})