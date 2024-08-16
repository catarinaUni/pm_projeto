import express from 'express';
import * as userController from './controllers/usuarios.js'

const routes = express.Router();

routes.get("/usuarios", (req, res) => {
    res.json(userController.listar())
})

routes.get("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    res.json(userController.buscarPorId(id))
})

routes.post("/usuarios", (req, res) => {
    const usuario = req.body;
    
    res.json(userController.adicionarUsuario(usuario));
});

routes.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    res.json(userController.apagarUsuario(id));
});

routes.put("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    const usuarioModificado = req.body;
    console.log(id, usuarioModificado)
    res.json(userController.modificarUsuario(id, usuarioModificado))
})



export default routes;