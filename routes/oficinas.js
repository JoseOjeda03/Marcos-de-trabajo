const { Router } = require('express');

const {
    obtenerOficina,updateOficina,deleteOficina,obtenerImueble_id,crearoficina,obtenerOficnazona} 
        = require('../controllers/oficinas');

const router = Router();
router.post('/', crearoficina);
router.get('/', obtenerOficina);
router.get('/zona/:zona', obtenerOficnazona);
router.get('/:_id', obtenerImueble_id);
router.put('/add/:_id', updateOficina);
router.delete('/:_id', deleteOficina);



module.exports = router;