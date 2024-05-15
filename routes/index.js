var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//une route GET qui prend 3 parametres (ville de départ, ville d'arrivée, et date)
// pour la date il faut chercher entre 0:00 et 23h59 

module.exports = router;
