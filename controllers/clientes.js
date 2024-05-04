const { response, request } = require('express');

const Cliente = require('../models/cliente.js');


const crearCliente =async (req = request, res = response) => {
    const Clientes =await Cliente.create(req.body) ;
    res.json(Clientes);
}
    const obtenerCliente =async (req = request, res = response) => {
        const usuario = await Cliente.find({"Disponible":"true"});
        res.json(usuario);
    }
    const obtenerClientevali =async (req = request, res = response) => {
        const { usuarios } = req.params;
     
        const ususriocontr = await Cliente.find({"usuario":usuarios});
       console.log(ususriocontr)
       
        
        res.json(ususriocontr);
    }

    const obtenerCliente_id = async (req = request, res = response) => {
        
        const { _id } = req.params;
     
        const categorias = await Cliente.find({"_id":_id});
        res.json(categorias);
      };
    const updateCLiente= async (req = request, res = response) =>{

        const options = { upsert: true };
        const { _id } = req.params;
        console.log(req.body);
        try {
            const data = await Cliente.findByIdAndUpdate(_id,req.body,{ useFindAndModify: false });

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

   
module.exports ={
    crearCliente,obtenerCliente,obtenerCliente_id,updateCLiente,obtenerClientevali

}