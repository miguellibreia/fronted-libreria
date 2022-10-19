<script>
    import axios from "axios"
    import {navigate } from "svelte-routing"
    import {BASEURLWEB} from "../../assets/ApiRutas"
    import {librosEdit } from "../../assets/store"
    
   
    let formLibro= {
        id_libro:$librosEdit.lt_id_libro,
        nombre:$librosEdit.lt_nombre,
        categoria:$librosEdit.lt_categoria,
        publicacion:$librosEdit.lt_publicacion,
        editorial:$librosEdit.lt_editorial,
        id_autor:$librosEdit.lt_id_autor
    }
    

    const editarLibro =async()=>{
        console.log(formLibro)
        try {
            const respuesta =await axios.put(BASEURLWEB+"/libros",formLibro)
            if (respuesta.status==200){
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
    <h3>Editar Libro</h3>
  </nav>
  
  <div>
    <div class="field label border">
      <input type="text" id="isbn" bind:value={formLibro.id_libro} disabled/>
      <label for="isbn">ISBN</label>
    </div>

    <div class="field label border">
        <input type="text" id="nombres" bind:value={formLibro.nombre}/>
        <label for="nombres">Nombres</label>
      </div>

      <div class="field label border">
        <input type="text" id="categoria" bind:value={formLibro.categoria}/>
        <label for="categoria">Categoria</label>
      </div>
      <div class="field label border">
        <input type="text" id="publicacion" bind:value={formLibro.publicacion}/>
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
    <button on:click={editarLibro}>Editar  Libro</button>
  </div>
</div>  
    
</main>

<style>
    .padding-titulo{
        padding-top: 1%;
        padding-bottom: 2%;
    }
</style>
