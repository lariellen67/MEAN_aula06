const cursos = [
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
  controller.listaCursos = function (req, res) {
    res.json(cursos);
  };
  controller.obtemCurso = function (req, res) {
    console.log('Curso selecionado: ' + req.params.id);
    const cursoId = req.params.id;
    const curso = cursos.filter(function (curso) {
      return curso._id == cursoId;
    })[0];
    curso ? res.json(curso) : res.status(404).send('Curso não encontrado :(');
  };
  controller.removeCurso = function (req, res) {
    var cursoId = req.params.id;
    cursos = cursos.filter(function (curso) {
      return curso._id != cursoId;
    });
    res.sendStatus(204).end();
  };

  return controller;
};
