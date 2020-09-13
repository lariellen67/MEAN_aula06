var courses = [
  {
    _id: 1,
    nome: 'Análise e Desenvolvimento de Sistemas',
    email: 'ads@ifsp.edu.br',
  },
  { _id: 2, nome: 'Letras', email: 'letras@ifsp.edu.br' },
  {
    _id: 3,
    nome: 'Engenharia de Produção',
    email: 'engenharia.producao@ifsp.edu.br',
  },
  { _id: 4, nome: 'Administração', email: 'adm@ifsp.edu.br' },
];

module.exports = function () {
  var controller = {};
  controller.listCourses = function (req, res) {
    res.json(courses);
  };
  controller.getCourse = function (req, res) {
    console.log('Curso selecionado: ' + req.params.id);
    var courseId = req.params.id;
    var course = courses.filter(function (course) {
      return course._id == courseId;
    })[0];
    course ? res.json(course) : res.status(404).send('Curso não encontrado :(');
  };

  return controller;
};
