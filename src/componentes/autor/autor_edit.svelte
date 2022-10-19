<script>
    import axios from "axios"
    import {navigate } from "svelte-routing"
    import {BASEURLWEB} from "../../assets/ApiRutas"
    import {autorEdit } from "../../assets/store"
    
   
    let formAutor= {
        //id_autor:$autorEdit.al_id_autor,
        nombre:$autorEdit.al_nombre,
        apellido:$autorEdit.al_apellido,
        ciudad:$autorEdit.al_ciudad,
        pais:$autorEdit.al_pais,
        
    }
    

    const editarautor =async()=>{
        console.log(formAutor)
        try {
            const respuesta =await axios.put(BASEURLWEB+"/autor",formAutor)
            if (respuesta.status==200){
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
    <h3>Editar Autor</h3>
  </nav>
  
  <div>
    <div class="field label border">
      <input type="text" id="isbn" bind:value={formAutor.id_autor} disabled/>
      <label for="isbn">CODIGO</label>
    </div>

    <div class="field label border">
        <input type="text" id="nombres" bind:value={formAutor.nombre}/>
        <label for="nombres">NOMBRES</label>
      </div>

      <div class="field label border">
        <input type="text" id="apellido" bind:value={formAutor.apellido}/>
        <label for="apellido">APELLIDOS</label>
      </div>
      <div class="field label border">
        <input type="text" id="ciudad" bind:value={formAutor.ciudad}/>
        <label for="ciudad">CIUDAD</label>
      </div>

      <div class="field label border">
        <input type="text" id="pais" bind:value={formAutor.pais} />
        <label for="pais">PAIS</label>
      </div>
      
      
    <button on:click={editarautor}>Editar Autor</button>
  </div>
</div>  
    
</main>

<style>
    .padding-titulo{
        padding-top: 1%;
        padding-bottom: 2%;
    }
</style>
