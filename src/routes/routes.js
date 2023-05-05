const express = require('express')
const clientController = require('../controllers/clientController')

const router = express.Router()
const routeName = 'clients'




// getAll : Return all the clients registered in the database
router.get(`/${routeName}`, clientController.getAll)


// getById: Return the client by the selected Id
router.get(`/${routeName}`, clientController.getById)

// getByCity: Return the client/ the clientes by the selected city


// create a new client in the database



// update a client by the selected Id


// delete a client by the selected Id



module.exports = router