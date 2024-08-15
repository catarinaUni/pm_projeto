let usuarios = [
    {
        id: 1,
        nome: 'joão',
        email: ''
    },
    {
        id: 2,
        nome: 'joão2',
        email: ''
    },
    {
        id: 3,
        nome: 'joão3',
        email: ''
    },
    {
        id: 4,
        nome: 'joão4',
        email: ''
    }
]


export function listar(){
    return usuarios
}

export function buscarPorId(){
    //transforma os itens de ''usuarios' em variaveis 'usuario' individuais
    return usuarios.find(usuario => usuario.id == id)
}