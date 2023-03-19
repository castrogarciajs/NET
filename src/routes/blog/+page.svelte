<script lang="ts">
  import { realTimeDate } from "../../firestore";
  import NetCard from "../../components/NetCard.svelte";
  import type { NOTE } from "../../interfaces/notes";

  let notes: Array<NOTE> = [];
  realTimeDate((querySnapshot) => {
    notes = [];
    querySnapshot.forEach((doc) => {
      const { title, description, image } = doc.data();
      notes.push({ id: doc.id, title, description, image });
    });
  });
</script>

<div>
  {#each notes as note}
    <NetCard
      title={note.title}
      description={note.description}
      image={note.image}
      id={note.id}
    />
  {/each}
</div>
