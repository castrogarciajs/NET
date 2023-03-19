<script lang="ts">
  import { deleteNote } from "../firestore";

  export let title: string;
  export let description: string;
  export let image: string;
  export let id: string;

  let idCard: HTMLButtonElement;
  const handleClickDelete = async () => {
    const { id } = idCard.dataset;
    if (id) {
      await deleteNote(id);
    }
  };
</script>

<div class="card">
  <div class="card-header">
    <img src={image} alt={title} class="card-image" />
  </div>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p class="card-description">{description}</p>
  </div>
  <div class="card-button">
    <button
      data-id={id}
      class="card-button-delete"
      on:click={handleClickDelete}
      bind:this={idCard}>Delete</button
    >
  </div>
</div>
