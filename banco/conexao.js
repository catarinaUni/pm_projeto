import mysql from 'mysql2';

class Conexao {
    constructor() {
        if (!Conexao.instance) {
            this.conection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: ""
            });

            this.conection.connect((err) => {
                if (err) {
                    console.error('Erro ao conectar ao banco:', err);
                    throw err;
                }

                console.log("Conectado ao banco");
            });

            Conexao.instance = this;
        }

        return Conexao.instance;
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.conection.query(sql, args, (err, results) => {
                if (err) {
                    console.error('Erro ao executar consulta:', err);
                    return reject(err);
                }

                resolve(results);
            });
        });
    }
}

const instance = new Conexao();
Object.freeze(instance);


instance.query("CREATE DATABASE IF NOT EXISTS teste")
    .then(() => instance.query("USE teste"))
    .then(() => instance.query('CREATE TABLE IF NOT EXISTS usuarios (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), email VARCHAR(255))'))
    .then(() => console.log("Banco e tabela criados com sucesso"))
    .catch(err => console.error("Erro ao executar consultas:", err));

export default instance;
