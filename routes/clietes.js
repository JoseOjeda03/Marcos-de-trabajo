const { Router } = require('express');

const {
    crearCliente,obtenerCliente,obtenerCliente_id,updateCLiente,obtenerClientevali} 
        = require('../controllers/clientes');

const router = Router();
router.post('/', crearCliente);
router.get('/', obtenerCliente);
router.get('/validar/:usuarios', obtenerClientevali);

router.get('/:_id', obtenerCliente_id);
router.put('/add/:_id', updateCLiente);




module.exports = router;


