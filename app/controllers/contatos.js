var contacts = [
  { _id: 1, nome: 'Larissa Marques', email: 'larissa.marques@ifsp.edu.br' },
  { _id: 2, nome: 'Rodrigo Inoue', email: 'rodrigo.inoue@ifsp.edu.br' },
  { _id: 3, nome: 'Gabriela Mota', email: 'gabriela.mota@ifsp.edu.br' },
  { _id: 4, nome: 'Daniel Samarone', email: 'daniel.samarone@ifsp.edu.br' },
];

module.exports = function () {
  var controller = {};
  controller.listContacts = function (req, res) {
    res.json(contacts);
  };
  controller.getContact = function (req, res) {
    console.log('Contato selecionado: ' + req.params.id);
    var contactId = req.params.id;
    var contact = contacts.filter(function (contact) {
      return contact._id == contactId;
    })[0];
    contact
      ? res.json(contact)
      : res.status(404).send('Contato não encontrado :(');
  };
  return controller;
};
