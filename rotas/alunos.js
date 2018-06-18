const express = require('express');
const router = express.Router();
const path = require("path");
router.get('/', function(req, res){
    res.sendFile(path.resolve('views/alunos.html'));
});
router.post('/', function(req, res){
    res.send('Aluno cadastrado!');
});
module.exports = router;