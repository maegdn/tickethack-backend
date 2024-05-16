var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//une route GET qui prend 3 parametres (ville de départ, ville d'arrivée, et date)
// pour la date il faut chercher entre 0:00 et 23h59 

// graeter than et less than


const Trip = require('../models/trips');

// Route GET pour obtenir les trajets de train avec une ville de départ, une ville d'arrivée et une date spécifique
router.get('/', (req, res) => {
    const { departure, arrival, date } = req.query;
    // console.log(req.body);
    

    // Vérification des paramètres requis
    if (!departure || !arrival || !date) {
        return res.json({ message: "Missing parameters" });
    }

    // Recherche des trajets dans la base de données
    Trip.find({
        departure: departure,
        arrival: arrival,
        date: {
            $gte: new Date(date),
            $lt: new Date(date + 'T23:59:59.999Z')
        }
    }).then(trips => {
      console.log(trips)
      if (!trips || trips.length === 0) {
          return res.json({ message: "No trip found" });
      }
      
      res.json(trips);
  })
});

module.exports = router;

