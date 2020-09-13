module.exports = function(app) {
  var controller = app.controllers.cursos;
  console.log(controller, 'CURSOS');
  app.get('/courses', controller.listCourses);
  app.get('/courses/:id', controller.getCourse);
};
