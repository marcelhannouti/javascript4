function arrow(nombre,apellidos) {
    return  nombre + " "+ apellidos
}
console.log(arrow("marc","hannouti"));


function bool (respuesta) {
    console.log(respuesta)
}

bool(true)

function parametro (...param){
param.forEach((param) =>{
    console.log(param)
})
}
parametro("dsv","dv","dvdsvv","advs","dvv")

