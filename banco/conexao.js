import mysql from 'mysql2';


class Conexao {
    constructor() {
        if (!Conexao.instance) {
            this.conection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: ""
            })

            this.conection.connect((err) => {
                if (err) throw err;

                console.log("Conectado ao banco")
            })

            Conexao.instance = this
        }

        return Conexao.instance;
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.conection.query((sql, args, err, results) => {
                if (err) return reject(err)

                resolve(results)
            })
        }
        )
    }
}

const instance = new Conexao()
Object.freeze(instance)

instance.query("CREATE DATABASE IF NOT EXISTS teste")
instance.query("USE teste")

export default instance;