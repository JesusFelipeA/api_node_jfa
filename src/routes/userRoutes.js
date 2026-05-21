const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// API JSON
router.get('/api', userController.obtenerUsuarios);

// Views CRUD
router.get('/', userController.renderUsers);

router.post('/add', userController.crearUsuario);

router.post('/update/:id', userController.actualizarUsuario);

router.get('/delete/:id', userController.eliminarUsuario);

module.exports = router;