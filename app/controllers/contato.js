var contatos = [
  { _id: 1, nome: 'Larissa Marques', email: 'larissa.marques@ifsp.edu.br' },
  { _id: 2, nome: 'Rodrigo Inoue', email: 'rodrigo.inoue@ifsp.edu.br' },
  { _id: 3, nome: 'Gabriela Mota', email: 'gabriela.mota@ifsp.edu.br' },
  { _id: 4, nome: 'Daniel Samarone', email: 'daniel.samarone@ifsp.edu.br' },
];

module.exports = function () {
  var controller = {};
  controller.listaContatos = function (req, res) {
    res.json(contatos);
  };
  controller.obtemContato = function (req, res) {
    console.log('Contato selecionado: ' + req.params.id);
    var contatoId = req.params.id;
    var contato = contatos.filter(function (contato) {
      return contato._id == contatoId;
    })[0];
    contato
      ? res.json(contato)
      : res.status(404).send('Contato não encontrado :(');
  };
  controller.removeContato = function (req, res) {
    var contatoId = req.params.id;
    contatos = contatos.filter(function (contato) {
      return contato._id != contatoId;
    });
    res.sendStatus(204).end();
  };
  return controller;
};
