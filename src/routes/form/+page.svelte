<script lang="ts">
  import { firestore } from "../../firebase";
  import { collection, addDoc } from "firebase/firestore";

  let form: HTMLFormElement;
  let title: HTMLInputElement;
  let description: HTMLTextAreaElement;
  let message: HTMLSpanElement;

  const saveNotes = (title: string, description: string) =>
    addDoc(collection(firestore, "notes"), { title, description });

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const titleValue = title.value;
    const descriptionValue = description.value;

    if (!titleValue && !descriptionValue) {
      return message.textContent = "Ingresa valores validos"
    }
    message.textContent = "";
    form.reset();
    return await saveNotes(titleValue, descriptionValue);
  };
</script>

<section>
  <div>
    <span bind:this={message}></span>
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
</section>

<style>
</style>
