import instance from "../banco/conexao.js"


export async function listar(){
    try {
        const resultados = await instance.query('SELECT * FROM usuarios');
        return resultados;
    } catch (err) {
        throw err
    }
}

export async function buscarPorId(id){
    try {
        const resultados = await instance.query('SELECT * FROM usuarios WHERE id = ?', id);
        return resultados;
    } catch (err) {
        throw err
    }
}

export async function modificarUsuario(id, usuarioModificado){
    try {
        const resultados = await instance.query(`UPDATE usuarios SET nome = "${usuarioModificado.nome}", email = "${usuarioModificado.email}" WHERE id = ${id}`);
        return resultados;
    } catch (err) {
        throw err
    }


}

export async function adicionarUsuario(usuario){
    try {
        const resultados = await instance.query(`INSERT INTO usuarios (nome, email) values ("${usuario.nome}", "${usuario.email}")`, usuario);
        return resultados;
    } catch (err) {
        throw err
    }
}

export async function apagarUsuario(id) {
    try {
        const resultados = await instance.query(`DELETE FROM usuarios WHERE id = ${id}`);
        return resultados;
    } catch (err) {
        throw err
    }
}
