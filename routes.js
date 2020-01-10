const express = require('express')
const routes = express.Router()
const instructor = require('./instructor')

routes.get('/', function(req, res){
    return res.redirect('/instructor')
});
routes.get('/instructor', function(req, res){
    return res.render('instructor/index')
});
routes.get('/instructor/create', function(req, res){
    return res.render('instructor/create')
});

routes.get('/instructor/:id', instructor.show)

routes.get('/instructor/:id/edit', instructor.edit);

routes.post('/instructor', instructor.post);
routes.get('/members', function(req, res){
    return res.render('members/index')
});

// Exportar
module.exports = routes