const router = require('express').Router()
const drinksController = require('../controllers/drinks')

router.route('/drinks')
  .get(drinksController.index)
  .post(drinksController.create)

router.route('/drinks/:id')
  .get(drinksController.show)

module.exports = router
