const express = require('express');
const router = express.Router();
const path = require("path");
router.get('/', function(req, res){
    res.sendFile(path.resolve('views/cursos.html'));
});
router.post('/', function(req, res){
    res.send('Curso cadastrado!');
});
router.get('/docentes', function(req, res){
    res.send('Lista de docentes.');
});
module.exports = router;


 