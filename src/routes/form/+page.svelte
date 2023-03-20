<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { saveNotes, updateNote } from "../../firestore";
  import { uploadFile } from "./../../storage";

  let form: HTMLFormElement;
  let title: HTMLInputElement;
  let description: HTMLTextAreaElement;
  let message: HTMLSpanElement;
  let image: HTMLInputElement;
  let id: string;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const getParams = {
      id: params.get("id"),
      title: params.get("title"),
      description: params.get("description"),
      image: params.get("image"),
    };
    if (
      getParams.id &&
      getParams.title &&
      getParams.description &&
      getParams.image
    ) {
      id = getParams.id;
      title.value = getParams.title;
      description.value = getParams.description;
    }
  });
  const handleSubmit = async (event: Event) => {
    try {
      event.preventDefault();
      const titleValue = title.value;
      const descriptionValue = description.value;
      const file = image.files?.[0];
      let imageURL = "";

      if (!titleValue && !descriptionValue && !file)
        return (message.textContent = "Ingresa valores validos");

      if (file instanceof File) {
        imageURL = await uploadFile(file);
      }
      if (id) {
        await updateNote(id, {
          id,
          title: titleValue,
          description: descriptionValue,
          image: imageURL,
        });

        await goto("/blog");
      } else {
        await saveNotes(titleValue, descriptionValue, imageURL);
        form.reset();
      }

      message.textContent = "";
    } catch (error) {
      console.log(error);
    }
  };
</script>

<section class="form-container-section">
  <div class="message">
    <span bind:this={message} />
  </div>
  <div class="container-form">
    <form on:submit={handleSubmit} bind:this={form}>
      <input type="text" placeholder="title the note" bind:this={title} />
      <input type="file" bind:this={image} required />
      <textarea
        placeholder="description the note"
        bind:this={description}
        rows={3}
      />

      <button type="submit">{id ? "update" : "guardar"}</button>
    </form>
  </div>
  <a href="/blog">blog</a>
</section>

<style>
</style>
