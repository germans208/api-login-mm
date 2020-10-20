let express = require('express');
let router = express.Router();
let loginController = require('../controllers/loginController')
//let employeesController = require('../controllers/employeesController')
let trackingController = require('../controllers/trackingController')

router.post('/auth/signin', loginController.auth);
//router.get('/employees', employeesController.employeesList);
router.get('/tracking', trackingController.trackingList);
router.get('/tracking/:id', trackingController.tracking);


module.exports = router;