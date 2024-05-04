const { Schema, model } = require('mongoose');

const ClienteSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    direccion: {
      type: String,
      required: true,
      trim: true,
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
      },
      sexo: {
        type: String,
        required: true,
        trim: true,
      },
      Disponible: {
        type: String,
        required: true,
        trim: true,
      },
      usuario: {
        type: String,
        required: true,
        trim: true,
      },
      contraseña: {
        type: String,
        required: true,
        trim: true,
      },



        
  },
  {
    timestamps: true,
  }
);



module.exports = model( 'Clientes', ClienteSchema );

