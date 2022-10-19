<script>
  import axios from "axios"
  import {navigate } from "svelte-routing"
  import {BASEURLWEB} from "../../assets/ApiRutas"
    let formAutor= {
         
        "nombre": "",
        "apellido": "",
        "ciudad": "",
        "pais": ""
    }
    const crearAutor =async()=>{
        console.log(formAutor)
        try {
            const respuesta =await axios.post(BASEURLWEB+"/autor",formAutor)
            if (respuesta.status==201){
                navigate("/autor")
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
      <h3>Nuevo Autor</h3>
    </nav>

    <div>
      <!-- <div class="field label border">
        <input type="text" id="isbn" bind:value={formAutor.id} disabled/>
        <label for="isbn">CODIGO</label>
      </div> -->

      <div class="field label border">
        <input type="text" id="nombres" bind:value={formAutor.nombre} />
        <label for="nombres">NOMBRES</label>
      </div>

      <div class="field label border">
        <input type="text" id="categoria" bind:value={formAutor.apellido} />
        <label for="categoria">APELLIDOS</label>
      </div>
      <div class="field label border">
        <input
          type="text"id="publicacion" bind:value={formAutor.ciudad}
        />
        <label for="publicacion">CIUDAD</label>
      </div>

      <div class="field label border">
        <input type="text" id="editorial" bind:value={formAutor.pais} />
        <label for="editorial">PAIS</label>
      </div>

      
      <button on:click={crearAutor}>Crear Autor</button>
    </div>
  </div>
</main>

<style>
  .padding-titulo {
    padding-top: 1%;
    padding-bottom: 2%;
  }
</style>