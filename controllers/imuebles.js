const { response, request } = require('express');

const Imueble = require('../models/imuebles.js');


const crearImueble =async (req = request, res = response) => {
  const usuario =await Imueble.create(req.body) ;
  res.json(usuario);
}
    const obtenerImueble =async (req = request, res = response) => {
        const usuario = await Imueble.find({"Disponible":"true"});
        res.json(usuario);
    }
    const obtenerImuebleDispo = async (req = request, res = response) => {
        
        const { ref } = req.params;
     
        const categorias = await Imueble.find({"ref":ref});
        res.json(categorias);
      };

      const obtenerImuebleid = async (req = request, res = response) => {
        
        const { _id } = req.params;
     
        const categorias = await Imueble.find({"_id":_id});
        res.json(categorias);
      };




module.exports ={
    obtenerImueble,obtenerImuebleDispo,obtenerImuebleid,crearImueble

}