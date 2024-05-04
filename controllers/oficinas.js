const { response, request } = require('express');

const Oficina = require('../models/oficinas.js');


const crearoficina =async (req = request, res = response) => {
    const usuario =await Oficina.create(req.body) ;
    res.json(usuario);
}
    const obtenerOficina =async (req = request, res = response) => {
        const usuario = await Oficina.find({"Disponible":"true"});
        res.json(usuario);
    }

    const obtenerImueble_id = async (req = request, res = response) => {
        
        const { _id } = req.params;
     
        const categorias = await Oficina.find({"_id":_id});
        res.json(categorias);
      };
    const updateOficina= async (req = request, res = response) =>{

        const options = { upsert: true };
        const { _id } = req.params;
        
        try {
            const data = await Oficina.findByIdAndUpdate(_id,req.body,{ useFindAndModify: false });

            if (!data) {
                res.status(404).send({
                    message: `No es posible actualizar el producto con id =${_id}.`
                });
            } else res.send({ message: "Producto actualizado correctamente." });
        }
        catch (err) {
            res.status(500).send({
                message: "Error actualizando el producto con id=" + _id
            });
        }
    };

    const obtenerOficnazona = async (req = request, res = response) => {
        
        const { zona } = req.params;
     
        const categorias = await Oficina.find({"zona":zona});
        res.json(categorias);
      };


    const deleteOficina= async (req = request, res = response) =>{
        const { _id } = req.params;

        try {
            const data = await Producto.findByIdAndRemove(_id)

            if (!data) {
                res.status(404).send({
                    message: `No fue posible borrar el producto con el id=${_id}.`
                });
            } else {
                res.send({
                    message: "El producto fue borrado correctamente!"
                });
            }
        } catch (err) {
            res.status(500).send({
                message: "Error, no fue posible borrar el producto con el id=" + _id
            });
        }
    };

module.exports ={
    obtenerOficina,updateOficina,deleteOficina,obtenerImueble_id,crearoficina,obtenerOficnazona

}