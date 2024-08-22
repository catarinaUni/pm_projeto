import express from 'express';
import * as userController from './controllers/usuarios.js'

const routes = express.Router();

routes.get("/usuarios", async (req, res) => {
    try {
        const lista = await userController.listar();
        return res.status(200).json(lista)
    }
    catch {
        console.log("erro")
    }

})

routes.get("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userController.buscarPorId(id)
        res.status(200).json(result)
    }
    catch {
        console.log("erro")
    }

})

routes.post("/usuarios", async (req, res) => {
    try {
        const usuario = req.body;
        const result = await userController.adicionarUsuario(usuario)
        res.status(201).json(result);
    }
    catch {
        console.log("erro")
    }

});

routes.delete("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userController.apagarUsuario(id);
        res.status(200).json(result);
    }

    catch {
        console.log("erro")
    }

});

routes.put("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const usuarioModificado = req.body;
        const result = await userController.modificarUsuario(id, usuarioModificado)
        res.status(200).json(result)
    }
    catch {
        console.log("erro")
    }

})


export default routes;