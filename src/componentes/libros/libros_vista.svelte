<script>
  import axios from "axios";
  import { BASEURLWEB } from "../../assets/ApiRutas";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { librosEdit } from "../../assets/store";
  

  let datos = []

  const getlibros = async () => {
    const respuesta = await axios.get(BASEURLWEB + "/libros");
    datos = respuesta.data
    console.log(datos)
  }
  onMount(() => {
    getlibros()
  })
  const bottonNuevo = () => {
    navigate("/libros/new");
  }
  const buttonEdit = (libros) => {
    librosEdit.set(libros)
    navigate("/libros/edit")
    return undefined
    }
    
const botonDelete= async(id_libro) =>{
    try {
        const confirmacion = window.confirm("Esta seguro de eliminar este libro")
        if(confirmacion){
            const respuesta = await axios.delete (BASEURLWEB+"/libros"+id_libro)
            window.alert(respuesta.data.message)
            navigate("/libros")
            location.reload()
        }
        
    } catch (er) {
        window.alert(er.respuesta.data.message)
        
    }
    
}
  const oneDeleteclick= (e,id_autor)=>{
        botonDelete(id_autor)
        return undefined
   }
</script>

<main>
  <div class="fluid">
    <nav class="padding-titulo">
      <h3>Tabla de Libros</h3>
      <div class="max" />
      <button on:click={bottonNuevo} class="border">
        <span class="material-symbols-outlined">add_circle</span>
      </button>
    </nav>

    <table class="border">
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Año_Publicación</th>
          <th>Editorial</th>
          <th>Id_Autor</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {#if datos.length == 0}
          <tr>
            <th>Cargando</th>
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
          </tr>
        {:else}
          {#each datos as libros}
            <tr>
              <td>{libros.lt_id_libro}</td>
              <td>{libros.lt_nombre}</td>
              <td>{libros.lt_categoria}</td>
              <td>{libros.lt_publicacion}</td>
              <td>{libros.lt_editorial}</td>
              <td>{libros.lt_id_autor}</td>
              <td>
                <button class="transparent square" on:click={buttonEdit(libros)}>
                    <i class="material-symbols-outlined">edit</i>
                </button>
                <button class="transparent square"on:click={oneDeleteclick(event,libros.lt_id_autor)}>
                    <i class="material-symbols-outlined">delete</i>
                </button>

              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
</main>

<style>
  .padding-titulo {
    padding-top: 1%;
    padding-bottom: 2%;
  }
</style>
