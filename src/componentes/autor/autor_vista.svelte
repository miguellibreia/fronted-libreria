<script>
    import axios from "axios";
    import { BASEURLWEB } from "../../assets/ApiRutas";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { librosEdit } from "../../assets/store";
    
  
    let datos = []
  
    const getautor = async () => {
      const respuesta = await axios.get(BASEURLWEB + "/autor");
      datos = respuesta.data
      console.log(datos)
    }
    onMount(() => {
      getautor()
    })
    const bottonNuevo = () => {
      navigate("/autor/new");
    }
    const buttonEdit = (libros) => {
      librosEdit.set(libros)
      navigate("/autor/edit")
      return undefined
      }
      
  const botonDelete= async(id_autor) =>{
      try {
          const confirmacion = window.confirm("Esta seguro de eliminar este autor")
          if(confirmacion){
              const respuesta = await axios.delete (BASEURLWEB+"/autor"+id_autor)
              window.alert(respuesta.data.message)
              navigate("/autor")
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
        <h3>Tabla de Autores</h3>
        <div class="max" />
        <button on:click={bottonNuevo} class="border">
          <span class="material-symbols-outlined">add_circle</span>
        </button>
      </nav>
  
      <table class="border">
        <thead>
          <tr>
            <th>CODIGO</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>CIUDAD</th>
            <th>PAIS</th>
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
            {#each datos as autor}
              <tr>
                <td>{autor.al_id_autor}</td>
                <td>{autor.al_nombre}</td>
                <td>{autor.al_apellido}</td>
                <td>{autor.al_ciudad}</td>
                <td>{autor.al_pais}</td>
                
                <td>
                  <button class="transparent square" on:click={buttonEdit(autor)}>
                      <i class="material-symbols-outlined">edit</i>
                  </button>
                  <button class="transparent square"on:click={oneDeleteclick(event,autor.al_id_autor)}>
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
  