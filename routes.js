const express = require('express')
const routes = express.Router()
const instructor = require('./controllers/instructor')
const member = require('./controllers/member')

routes.get('/', function(req, res){
    return res.redirect('/instructor')
});
routes.get('/instructor', instructor.index);

routes.get('/instructor/create', instructor.create);

routes.get('/instructor/:id', instructor.show)

routes.get('/instructor/:id/edit', instructor.edit)

routes.post('/instructor', instructor.post)

//salvando infos
routes.put('/instructor', instructor.put)

//deletando infos
routes.delete('/instructor', instructor.delete)


//Members
routes.get('/member', member.index);

routes.get('/member/create', member.create)

routes.get('/member/:id', member.show)

routes.get('/member/:id/edit', member.edit)

routes.post('/member', member.post)

//salvando infos
routes.put('/member', member.put)

//deletando infos
routes.delete('/member', member.delete)


// Exportar
module.exports = routes