angular
  .module('ifsp')
  .controller('ContatosController', function ($resource, $scope) {
    $scope.contatos = [];
    $scope.filtro = '';
    const Contato = $resource('/contatos');
    function buscaContatos() {
      Contato.query(
        function (contatos) {
          $scope.contatos = contatos;
        },
        function (error) {
          console.log('Não foi possível obter a lista de contatos');
          console.log(error);
        }
      );
    }

    $scope.contatos = [
      { _id: 1, nome: 'Larissa Marques', email: 'larissa.marques@ifsp.edu.br' },
      { _id: 2, nome: 'Daniel Samarone', email: 'daniel.samarone@ifsp.edu.br' },
      { _id: 3, nome: 'Gabriela Mota', email: 'gabriela.mota@ifsp.edu.br' },
      { _id: 4, nome: 'Rodrigo Inoue', email: 'rodrigo.inoue@ifsp.edu.br' },
    ];

    buscaContatos();
  });
