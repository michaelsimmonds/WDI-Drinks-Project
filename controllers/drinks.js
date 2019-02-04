const Drink = require('../models/drink')

function indexRoute(req, res) {
  Drink
    .find()
    .then(drinks => res.json({ drinks }))
}

function createRoute(req, res) {
  Drink
    .create(req.body)
    .then(drink => res.status(201).json(drink))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute(req, res) {
  Drink
    .findById(req.params.id)
    .then(drink => res.status(200).json(drink))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute
}
