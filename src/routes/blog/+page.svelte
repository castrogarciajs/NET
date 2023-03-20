<script lang="ts">
  /**@module */
  import { getNote } from "../../firestore";
  import Card from "../../components/Card.svelte";
  import type { NOTE } from "../../interfaces/notes";

  /**@array este array sera el encargado de obtener cada nota*/
  let notes: Array<NOTE> = [];
  getNote((querySnapshot) => {
    /**@clear se limpia antes de agregar una nueva nota*/
    notes = [];
    querySnapshot.forEach((doc) => {
      /**@destructuring obtenemos los datos enviados a firestore*/
      const { title, description, image } = doc.data();
      notes.push({ id: doc.id, title, description, image });
    });
  });
</script>

<div>
  {#each notes as note}
    <Card
      title={note.title}
      description={note.description}
      image={note.image}
      id={note.id}
    />
  {/each}
</div>
