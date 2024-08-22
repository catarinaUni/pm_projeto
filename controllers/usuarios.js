import instance from "../banco/conexao.js"


export function listar(){
    return instance.query('SELECT * FROM usuarios')
}

export function buscarPorId(id){
    return instance.query('SELECT * FROM usuarios WHERE id = ?', id)
}

export function modificarUsuario(id, usuarioModificado){
    const nome = usuarioModificado.nome;
    const email = usuarioModificado.email;
    return instance.query(`UPDATE usuarios SET nome = ${nome}, email = ${email} WHERE id = ${id}`)

}

export function adicionarUsuario(usuario){
    return instance.query(`INSERT INTO usuarios (nome, email) values (${usuario.nome}, ${usuario.email})`, usuario)
}

export function apagarUsuario(id) {
}
