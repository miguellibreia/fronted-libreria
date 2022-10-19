<script>
  import {Router,Route,navigate } from "svelte-routing"
  import AutorCreate from "./componentes/autor/autor_create.svelte";
  import AutorEdit from "./componentes/autor/autor_edit.svelte";
  import AutorVista from "./componentes/autor/autor_vista.svelte";
  import Inicio from "./componentes/inicio/inicio.svelte";
  import LibrosCreate from "./componentes/libros/libros_create.svelte";
  import LibrosEdit from "./componentes/libros/libros_edit.svelte";
  import LibrosVista from "./componentes/libros/libros_vista.svelte";
</script>

<main>
  <Router>
    <Route exact path="/autor"><AutorVista/></Route>
    <Route exact path="/libros"><LibrosVista/></Route>
    <Route exact path ="/libros/new"><LibrosCreate/></Route>
    <Route exact path ="/autor/new"><AutorCreate/></Route>
    <Route exact path="/autor/edit"><AutorEdit/></Route>
    <Route exact path ="/libros/edit"><LibrosEdit/></Route>
    <Route exact path="/"><Inicio/></Route>


  </Router>
</main>

<style>
  
</style>
