import express from 'express';

const app = express();

const port = 9090;

app.listen(port, () =>{
    console.log(`Aplicação rodando na porta: ${port} `)
})
