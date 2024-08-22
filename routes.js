import express from 'express';
import * as userController from './controllers/usuarios.js'

const routes = express.Router();

routes.get("/usuarios", async (req, res) => {
    try{
        const lista = await userController.listar();
        return res.status(200).json(lista)
    }
    catch{
        console.log("erro")
    }
    
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
    res.status(200).json(userController.modificarUsuario(id, usuarioModificado))
})



export default routes;