const express = require('express');
const rotasCursos = require('./rotas/cursos.js');
const rotasAlunos = require('./rotas/alunos.js');
const app = express();

app.use('/cursos', rotasCursos);
app.use('/alunos', rotasAlunos); 

app.get("/", function(req, res){
    res.send('Página Inicial!');
});

app.listen(3000, function(){
    console.log('app rodando na porta 3000');
});

 