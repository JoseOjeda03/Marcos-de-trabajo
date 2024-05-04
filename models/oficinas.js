const { Schema, model } = require('mongoose');

const OficinaSchema = Schema(
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

      zona: {
        type: String,
        required: true,
        trim: true,
      },
      Disponible: {
        type: String,
        required: true,
        trim: true,
      },
      ref: {
        type: String,
        required: true,
        trim: true,
      },



        
  },
  {
    timestamps: true,
  }
);



module.exports = model( 'Oficinas', OficinaSchema );

