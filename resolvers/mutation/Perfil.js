const {perfis} = require('../../data/db')
module.exports = {
    novoPerfil(_,args){
        const perfil = {
            id:perfis.length+1,
            nome:args.nome
        }
        perfis.push(perfil);
        return perfil;
    },
    excluirPerfil(_,{id}){
        var i = perfis.findIndex(p=>p.id===id);
        if(i<0)return null
        const excluido = perfis.splice(i,1);
        return excluido[0]
    },
    alterarPerfil(_,args){
        var i = perfis.findIndex(p=>p.id===args.id);
        if(i<0)return null
        const perfil = {
            ...perfis[i],
            ...args
        }
        perfis.splice(i,1,perfil)
        
        return perfil
    }
}