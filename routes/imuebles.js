const { Router } = require('express');

const { obtenerImueble,
    obtenerImuebleDispo,
    obtenerImuebleid,crearImueble} 
        = require('../controllers/imuebles');

const router = Router();
router.post('/', crearImueble);
router.get('/', obtenerImueble);
router.get('/:ref', obtenerImuebleDispo);
router.get('/id/:_id', obtenerImuebleid);

module.exports = router;