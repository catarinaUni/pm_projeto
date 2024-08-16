import express from 'express';
import * as userController from './controllers/usuarios.js'

const routes = express.Router();

routes.get("/usuarios", (req, res) => {
    res.status(200).json(userController.listar())
})

routes.get("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json(userController.buscarPorId(id))
})

routes.post("/usuarios", (req, res) => {
    const usuario = req.body;
    
    res.status(201).json(userController.adicionarUsuario(usuario));
});

routes.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json(userController.apagarUsuario(id));
});

routes.put("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    const usuarioModificado = req.body;
    console.log(id, usuarioModificado)
    res.status(200).json(userController.modificarUsuario(id, usuarioModificado))
})



export default routes;