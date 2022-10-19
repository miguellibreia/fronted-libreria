<script>
  import axios from "axios"
  import {navigate } from "svelte-routing"
  import {BASEURLWEB} from "../../assets/ApiRutas"
    let formLibro= {
        id: "",
        nombre:"",
        categoria:"",
        publicacion:"",
        editorial:"",
        id_autor:""
    }
    const crearLibro =async()=>{
        console.log(formLibro)
        try {
            const respuesta =await axios.post(BASEURLWEB+"/libros",formLibro)
            if (respuesta.status==201){
                navigate("/libros")
            }

        } catch (er) {
            console.error(er.respuesta)
             window.alert(er.respuesta.data.message)        
        }
    }

</script>

<main>
  <div class="flui">
    <nav class="padding-titulo">
      <h3>Nuevo Libro</h3>
    </nav>

    <div>
      <div class="field label border">
        <input type="text" id="isbn" bind:value={formLibro.id} />
        <label for="isbn">ISBN</label>
      </div>

      <div class="field label border">
        <input type="text" id="nombres" bind:value={formLibro.nombre} />
        <label for="nombres">Nombres</label>
      </div>

      <div class="field label border">
        <input type="text" id="categoria" bind:value={formLibro.categoria} />
        <label for="categoria">Categoria</label>
      </div>
      <div class="field label border">
        <input
          type="text"
          id="publicacion"
          bind:value={formLibro.publicacion}
        />
        <label for="publicacion">Año Publicación</label>
      </div>

      <div class="field label border">
        <input type="text" id="editorial" bind:value={formLibro.editorial} />
        <label for="editorial">Editorial</label>
      </div>

      <div class="field label border">
        <input type="text" id="id_autor" bind:value={formLibro.id_autor} />
        <label for="id_autor">Id_Autor</label>
      </div>
      <button on:click={crearLibro}>Añadir Libro</button>
    </div>
  </div>
</main>

<style>
  .padding-titulo {
    padding-top: 1%;
    padding-bottom: 2%;
  }
</style>
