const { Schema, model } = require('mongoose');

const ImueblesSchema = Schema(
  {
    superficie: {
      type: String,
      required: true,
      trim: true,
    },
    direccion: {
      type: String,
      required: true,
      trim: true,
    },
    baños: {
      type: String,
      required: false,
      trim: true,
    },
    habitaciones: {
      type: String,
      required: false,
      trim: true,
    },
    cocina: {
        type: String,
        required: false,
        trim: true,
      },
      zona: {
        type: String,
        required: false,
        trim: true,
      },
      precio_venta: {
        type: String,
        required: true,
        trim: true,
      },
      precio_alquiler: {
        type: String,
        required: true,
        trim: true,
      },
      ref: {
        type: String,
        required: true,
        trim: true,
      },
      imueble: {
        type: String,
        required: true,
        trim: true,
      },
      caracteristica: {
        type: String,
        required: false,
        trim: true,
      },
      tamaño_par: {
        type: String,
        required: false,
        trim: true,
      },
      urbanisacion: {
        type: String,
        required: false,
        trim: true,
      },
      acondicionado: {
        type: String,
        required: false,
        trim: true,
      },
      diafono: {
        type: String,
        required: false,
        trim: true,
      },
      puertas_entrada: {
        type: String,
        required: false,
        trim: true,
      },
      Nombre_propetario: {
        type: String,
        required: true,
        trim: true,
      },
      telefono_propetario: {
        type: String,
        required: true,
        trim: true,
      },
      llaves_lugar: {
        type: String,
        required: true,
        trim: true,
      },
      Disponible: {
        type: String,
        required: true,
        trim: true,
      },


        
  },
  {
    timestamps: true,
  }
);



module.exports = model( 'Imuebles', ImueblesSchema );

