const { Router } = require('express');

const {
    crearCita,obtenerCitas} 
        = require('../controllers/citas');


const router = Router();
router.post('/', crearCita);
router.get('/', obtenerCitas);


module.exports = router;