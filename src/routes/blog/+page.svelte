<script lang="ts">
  /**@module */
  import { getNote } from "../../firestore";
  import { auth } from "../../firebase";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import Card from "../../components/Card.svelte";
  import Navbar from "../../components/Nav.svelte";
  import type { NOTE } from "../../interfaces/notes";

  onMount(() => {
    if (!auth.currentUser) {
      goto("/");
    }
  });
  /**@array este array sera el encargado de obtener cada nota*/
  let notes: Array<NOTE> = [];
  getNote((querySnapshot) => {
    /**@clear se limpia antes de agregar una nueva nota*/
    notes = [];
    querySnapshot.forEach((doc) => {
      /**@destructuring obtenemos los datos enviados a firestore*/
      const { title, description, image, userId } = doc.data();
      if (auth.currentUser?.uid) {
        notes.push({
          id: doc.id,
          title,
          description,
          image,
          userId,
        });
      }
    });
  });
</script>

<Navbar />
<div class="container-card">
  {#each notes as note}
    <Card
      authIUser={note.userId}
      title={note.title}
      description={note.description}
      image={note.image}
      id={note.id}
    />
  {/each}
</div>

<style>
  .container-card {
    background-color: #bbd59f;
  }
</style>
