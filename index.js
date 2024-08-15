import http from 'http';
import url from 'url'

import { login,
    logout } from './login.js';

    import { funcionario } from './funcionario.js';

const server = http.createServer((request, response) => {

    if (request.url.includes("login")) {
        let params = url.parse(request.url, true).query;
        console.log(params)
    }

    switch (request.url) {
        case "/login":
           login()

            break;

            case "/funcionario":
                funcionario()
     
                 break;

        default:
            response.end(JSON.stringify({ message: "nenhuma rota encontrada" }))
            break;
    }

});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})