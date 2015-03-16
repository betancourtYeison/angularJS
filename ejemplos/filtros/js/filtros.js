function ControladorFiltros($scope){
	$scope.empleados = 
		[
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

	$scope.ordenarPor = function(orden){
		$scope.ordenSeleccionado = orden;
	};
};