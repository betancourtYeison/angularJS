function ControladorPaginas($scope){
	$scope.paginas = 
		[
			{
				nombre: 'Controladores', descripcion: 'Contiene lista de tareas, puede ser agregada y eliminada', url: 'ejemplos/controladores'
			},
			{
				nombre: 'Filtros', descripcion: 'Contiene una tabla de empleados, busca y maneja filtros', url: 'ejemplos/filtros'
			},
			{
				nombre: 'Fabricas', descripcion: 'Contiene 2 controladores manejados mediante Fabricas', url: 'ejemplos/fabricas'
			},
			{
				nombre: 'Formularios', descripcion: 'Contiene un formulario didactico', url: 'ejemplos/formularios'
			},
			{
				nombre: 'Vistas - Rutas', descripcion: 'Contiene un menu para diferentes vistas', url: 'ejemplos/vistas-rutas'
			},
			{
				nombre: 'Directivas', descripcion: 'Contiene directivas creadas para utilizar en varias ocasiones', url: 'ejemplos/directivas'
			},
			{
				nombre: 'Animaciones', descripcion: 'Contiene un mensaje que es animado mediante un boton', url: 'ejemplos/animaciones'
			}
		];

	$scope.ordenarPor = function(orden){
		$scope.ordenSeleccionado = orden;
	};
};