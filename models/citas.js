const { Schema, model } = require('mongoose');

const CitasSchema = Schema(
  {
    idPro: {
        type: String,
        required: true,
        trim: true,
      },
      idCli: {
        type: String,
        required: true,
        trim: true,
      },
    imuble: {
      type: String,
      required: true,
      trim: true,
    },
    direccionPro: {
      type: String,
      required: true,
      trim: true,
    },
    telefonoPro: {
        type: String,
        required: true,
        trim: true,
      },
      nombrePro: {
        type: String,
        required: true,
        trim: true,
      },
      nombreCli: {
        type: String,
        required: true,
        trim: true,
      },
      direccionCli: {
        type: String,
        required: true,
        trim: true,
      },
      telefonoCli: {
        type: String,
        required: true,
        trim: true,
      },
      dia: {
        type: String,
        required: true,
        trim: true,
      },
      comentario: {
        type: String,
        required: true,
        trim: true,
      },



        
  },
  {
    timestamps: true,
  }
);



module.exports = model( 'Citas', CitasSchema );

