const express = require('express');
const cors = require('cors');
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPatch = '/api/usuarios';
        this.middlewares();
        this.routes();
    }
    middlewares(){

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use( this.usuariosPatch,require('../routes/usuarios'));
        // this.app.get('/api', (req, res) =>{
        //     res.status(200).json({
        //         msg:'get api'
        //     });
        // });
        // this.app.put('/api', (req, res) =>{
        //     res.json({
        //         msg:'put api'
        //     });
        // });
        // this.app.post('/api', (req, res) =>{
        //     res.status(201).json({
        //         msg:'post api'
        //     });
        // });
        // this.app.delete('/api', (req, res) =>{
        //     res.json({
        //         msg:'delete api'
        //     });
        // });
    }
    listen(){
        this.app.listen(this.port,() => {
            console.log('Servidor corriendo en el puerto:', this.port);
        });
    }
}
module.exports = Server;