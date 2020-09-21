angular
  .module('ifsp')
  .controller('CursosController', function ($resource, $scope) {
    $scope.cursos = [];
    $scope.filtro = '';
    const Curso = $resource('/cursos');
    function buscaCursos() {
      Curso.query(
        function (cursos) {
          $scope.cursos = cursos;
        },
        function (error) {
          console.log('Não foi possível obter a lista de cursos');
          console.log(error);
        }
      );
    }

    buscaCursos();

    $scope.remove = function (curso) {
      console.log(curso);
      Curso.delete({ id: curso._id }, buscaCursos, function (error) {
        console.log('Não foi possível remover o curso');
        console.log(error);
        $scope.mensagem = { texto: 'Não foi possível remover o contato' };
      });
    };
  });
