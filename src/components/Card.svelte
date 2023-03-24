<script lang="ts">
  import { deleteNote } from "../firestore";
  import { goto } from "$app/navigation";
  import { auth } from "../firebase";

  export let title: string;
  export let description: string;
  export let image: string;
  export let id: string;
  export let authIUser: string;

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
  console.log(authIUser, auth.currentUser?.uid)
</script>

{#if auth.currentUser?.uid === authIUser}
  <div class="card" data-iduser={authIUser}>
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
{:else}
  <div class="card">
    <div class="card-header">
      <img src={image} alt={title} class="card-image" />
    </div>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p class="card-description">{description}</p>
    </div>
  </div>
{/if}

<style>
  .card {
    display: inline-block;
    margin: 10px;
    width: 300px;
    background-color: #bbd59f;
    border: 1px solid #ececec;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-header {
    position: relative;
    padding-top: 60%;
  }

  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-body {
    padding: 20px;
  }

  .card-title {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
    color: #343434;
    font-family: Arial, Helvetica, sans-serif;
  }

  .card-description {
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    color: #343434;
    font-family: Arial, Helvetica, sans-serif;
  }

  .card-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-top: 1px solid #ececec;
  }

  .card-button button {
    background-color: #bbd59f;
    color: #343434;
    border: 1px solid #343434;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  .card-button-delete:hover {
    background-color: #ff0000;
    color: #ffffff;
  }
  .card-button-update:hover {
    background-color: #ffff00;
    color: #000000;
  }
</style>
