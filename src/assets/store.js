import {writable } from "svelte/store"

const librosEdit=writable({
    lt_id_libro:"",
    lt_nombre:"",
    lt_categoria:"",
    lt_publicacion:"",
    lt_editorial:"",
    lt_id_autor:""
})

const autorEdit=writable({
    //al_id_autor:"",
    al_nombre: "",
    al_apellido: "",
    al_ciudad: "",
    al_pais: ""
})
 export{autorEdit}
export { librosEdit}