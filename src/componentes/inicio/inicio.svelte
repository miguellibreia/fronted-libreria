<script>
    import {navigate } from "svelte-routing"

    const navegacionLibro =()=>{
        navigate("/libros")
    }
    const navegacionautor=()=>{
        navigate("/autor")
    }
</script>

<main> 
    <div class="fluid">
        
         <h2>Ejemplo Libreria  JavaScript</h2>
         <div class="row"> 
            <div>
                <button on:click={navegacionLibro}>
                    <h3> Libros</h3>
                </button>
                
            </div>
            <div>
                <button on:click={navegacionautor}>
                    <h3>Autores</h3>
                </button>
                
            </div>
         </div>
     </div>   
</main>

<style>

</style>