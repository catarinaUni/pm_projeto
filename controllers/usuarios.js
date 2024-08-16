let usuarios = [
    {
        "id": 1,
        "nome": "joão",
        "email": ""
    },
    {
        "id": 2,
        "nome": "joão2",
        "email": ""
    },
    {
        "id": 3,
        "nome": "joão3",
        "email": ""
    },
    {
        "id": 4,
        "nome": "joão4",
        "email": ""
    }
]


export function listar(){
    return usuarios
}

export function buscarPorId(id){
    return usuarios.find(usuario => usuario.id == id)
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