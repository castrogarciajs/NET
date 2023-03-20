<script lang="ts">
  import { deleteNote } from "../firestore";
  import { goto } from "$app/navigation";

  export let title: string;
  export let description: string;
  export let image: string;
  export let id: string;

  let buttonDelete: HTMLButtonElement;
  let buttonUpdate: HTMLButtonElement;

  const handleClickDelete = async () => {
    const { id } = buttonDelete.dataset;
    if (id) {
      await deleteNote(id);
    }
  };

  const handleClickUpdate = async () => {
    const { id } = buttonUpdate.dataset;
    const url = `/form?id=${id}&title=${title}&description=${description}&image=${image}`;

    await goto(url);
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
      bind:this={buttonDelete}>Delete</button
    >
    <button
      class="card-button-update"
      data-id={id}
      on:click={handleClickUpdate}
      bind:this={buttonUpdate}>Update</button
    >
  </div>
</div>
