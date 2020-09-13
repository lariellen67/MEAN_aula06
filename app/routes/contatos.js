module.exports = function(app) {
  var controller = app.controllers.contatos;
  console.log(controller);
  app.get('/contacts', controller.listContacts);
  app.get('/contacts/:id', controller.getContact);
};
