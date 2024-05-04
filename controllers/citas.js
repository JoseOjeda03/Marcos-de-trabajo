
const { response, request } = require('express');

const Cliente = require('../models/citas.js');

const crearCita =async (req = request, res = response) => {
    console.log(req.body)
    const Cita =await Cliente.create(req.body) ;
    res.json(Cita);
}

const obtenerCitas =async (req = request, res = response) => {

 
    const ususriocontr = await Cliente.find({"Disponible":"true"});
   console.log(ususriocontr)
   
    
    res.json(ususriocontr);
}

module.exports ={
    crearCita,obtenerCitas

}