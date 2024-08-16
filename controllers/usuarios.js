import instance from "../banco/conexao.js"


export function listar(){
    return instance.query('SELECT * FROM usuarios')
}

export function buscarPorId(id){
    return instance.query('SELECT * FROM usuarios WHERE id = ?', id)
}

export function modificarUsuario(id, usuarioModificado){
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id == id)
    usuarios[usuarioIndex]= usuarioModificado
    return usuarios
}

export function adicionarUsuario(usuario){
    usuarios.push(usuario)
    return usuarios
}

export function apagarUsuario(id) {
    usuarios = usuarios.filter(usuario => usuario.id !== parseInt(id));
    return usuarios;
}
