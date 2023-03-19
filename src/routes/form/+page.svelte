<script lang="ts">
  import { saveNotes } from "../../firestore";
  import { uploadFile } from "./../../storage";

  let form: HTMLFormElement;
  let title: HTMLInputElement;
  let description: HTMLTextAreaElement;
  let message: HTMLSpanElement;
  let image: HTMLInputElement;

  const handleSubmit = async (event: Event) => {
    try {
      event.preventDefault();
      const titleValue = title.value;
      const descriptionValue = description.value;
      const file = image.files?.[0];
      if (!titleValue && !descriptionValue && !file)
        return (message.textContent = "Ingresa valores validos");
      let imageURL = '';
      if (file instanceof File) {
        imageURL = await uploadFile(file);
      }
      await saveNotes(titleValue, descriptionValue, imageURL);
      message.textContent = "";
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };
</script>

<section>
  <div>
    <span bind:this={message} />
  </div>
  <div>
    <form on:submit={handleSubmit} bind:this={form}>
      <input type="text" placeholder="title the note" bind:this={title} />
      <input type="file" bind:this={image} required />
      <textarea
        placeholder="description the note"
        bind:this={description}
        rows={3}
      />

      <button type="submit">Guardar</button>
    </form>
  </div>
  <a href="/blog">blog</a>
</section>

<style>
</style>
