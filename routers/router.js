const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const homeController = require('../controllers/homeController');
const departmentController = require('../controllers/departmentController');
const jobPositionController = require('../controllers/jobPositionController');
const employeeController = require('../controllers/employeeController');
// Routes
router.get('/', homeController.view);
router.get('/login', loginController.login);
router.post('/login', loginController.post);
router.get('/logout', loginController.logout);

router.get('/department', departmentController.view);
router.get('/add-department', departmentController.form);
router.post('/add-department', departmentController.create);
router.get('/delete-department/:id', departmentController.delete);

router.get('/job-position', jobPositionController.view);
router.get('/add-job-position', jobPositionController.form);
router.post('/add-job-position', jobPositionController.create);
router.get('/delete-job-position/:id', jobPositionController.delete);

router.get('/employee', employeeController.view);
router.get('/add-employee', employeeController.form);
router.post('/add-employee', employeeController.create);
router.get('/delete-employee/:id', employeeController.delete);
module.exports = router;