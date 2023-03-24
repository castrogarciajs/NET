<script lang="ts">
  /**@module */
  import { onMount } from "svelte";
  import { auth } from "../../firebase";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  import { saveNotes, updateNote } from "../../firestore";
  import { uploadFile } from "./../../storage";
  import Navbar from "../../components/Nav.svelte";

  /**@htmlElement esta forma de definir elementos en svelte me encanta luego puedo referirme a ellos usando bind:this esta palabra reservada es una directiva de svelte para hacer referencia a un elemento html en especifico*/
  let form: HTMLFormElement;
  let title: HTMLInputElement;
  let description: HTMLTextAreaElement;
  let message: HTMLSpanElement;
  let image: HTMLInputElement;
  let id: string;

  /**@functionOn esta funcion es bastante interesante su funcionalidad es renderiza al dectectar un refresh en el navegador mostarr el contenido dentro de ella */
  onMount(() => {
    if (!auth.currentUser) {
      goto("/");
    }
    /**@instance se realiza una isntancia de la clase URLSearchParams para obtener todos los parametro ingresado en la url*/
    const params = new URLSearchParams(window.location.search);
    const getParams = {
      id: params.get("id"),
      title: params.get("title"),
      description: params.get("description"),
      image: params.get("image"),
    };
    /**@true si existen los parametros deben ser obligaorio todos modifico el valor de cada elemento html para tenerlos en el formulario*/
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
  /**
   * @param event Funcion encargada de manejar el evento submit ejecuta toda la logica
   */
  const handleSubmit = async (event: Event) => {
    try {
      /**@refresh se cancela en refresh del navegador */
      event.preventDefault();

      /**@value se almacena el valor de cada elemento html*/
      const titleValue = title.value;
      const descriptionValue = description.value;
      const file = image.files?.[0];
      let imageURL = "";

      /**@verfiqued se realiza una condicional porque todos los datos deben de exisitir*/
      if (!titleValue && !descriptionValue && !file)
        return (message.textContent = "Ingresa valores validos");

      /**@verifiqued se verifica que el archivo ingresado en el input se instancia de File ya que no puede llegar siendo undefined */
      if (!file) {
        return;
      } else {
        imageURL = await uploadFile(file);
      }
      /**@verifiqued si existe el id actulizo los datos existente del formulario*/
      if (id) {
        if (auth.currentUser?.uid) {
          await updateNote(id, {
            id,
            title: titleValue,
            description: descriptionValue,
            image: imageURL,
            userId: auth.currentUser.uid,
          });
        }
        /**@route navego nuevamente al blog despues de actulizar los datos*/
        await goto("/blog");
      } else {
        /**@save guardo en firestore los datos ingresado y limpio el formulario*/
        if (auth.currentUser?.uid) {
          await saveNotes(
            titleValue,
            descriptionValue,
            imageURL,
            auth.currentUser?.uid
          )
        }
        Swal.fire(
          "Your note has been saved successfully !",
          "You clicked the button!",
          "success"
        );

        form.reset();
      }

      /**@message mensaje de error o de advertencia*/
      message.textContent = "";
    } catch (error) {
      console.log(error);
    }
  };
</script>

<Navbar />
<section class="form-container-section">
  <h1 class="name-profile">Welcome {auth.currentUser?.displayName}</h1>
  <div class="message">
    <span bind:this={message} class="message" />
  </div>
  <div class="container-form">
    <form on:submit={handleSubmit} bind:this={form}>
      <input type="text" placeholder="title the note" bind:this={title} />
      <input type="file" bind:this={image} />
      <textarea
        placeholder="description the note"
        bind:this={description}
        rows={3}
      />
      <button type="submit">{id ? "update" : "guardar"}</button>
    </form>
  </div>
</section>

<style>
  .form-container-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 91vh;
    background-color: #bbd59f;
  }
  .container-form {
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name-profile {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    background-color: #ececec;
    color: #343434;
  }

  input[type="text"]:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0 0 0 2px #343434;
  }

  input[type="file"] {
    display: none;
  }

  input[type="file"] {
    display: inline-block;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #343434;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  input[type="file"] {
    background-color: #1e1e1e;
  }

  button[type="submit"] {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #343434;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button[type="submit"]:hover {
    background-color: #1e1e1e;
  }
  .message {
    font-size: 3rem;
    color: #ff0000;
  }
</style>
