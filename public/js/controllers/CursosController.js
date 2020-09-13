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

    $scope.cursos = [
      {
        _id: 1,
        nome: 'Análise e Desenvolvimento de Sistemas',
        coord: 'thiago.homem@ifsp.edu.br',
      },
      { _id: 2, nome: 'Gestão Pública', coord: 'felipe.basile@ifsp.edu.br' },
      { _id: 3, nome: 'Letras', coord: 'theresa@ifsp.edu.br' },
      {
        _id: 4,
        nome: 'Engenharia da Produção',
        coord: 'rita@ifsp.edu.br',
      },
    ];

    buscaCursos();
  });
