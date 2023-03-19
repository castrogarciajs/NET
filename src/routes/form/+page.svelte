<script lang="ts">
  import { saveNotes } from "../../firestore";

  let form: HTMLFormElement;
  let title: HTMLInputElement;
  let description: HTMLTextAreaElement;
  let message: HTMLSpanElement;

  const handleSubmit = async (event: Event) => {
    try {
      event.preventDefault();
      const titleValue = title.value;
      const descriptionValue = description.value;

      if (!titleValue && !descriptionValue) {
        return (message.textContent = "Ingresa valores validos");
      }
      message.textContent = "";
      form.reset();
      return await saveNotes(titleValue, descriptionValue);
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
