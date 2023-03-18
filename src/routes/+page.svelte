<script lang="ts">
  /** @Firebase module */
  import { initializeApp } from "firebase/app";
  import { firebaseConfig } from "../firebase.config";

  /**@tools svelte*/

  /** @Components */
  import Button from "../components/Button.svelte";
  import Title from "../components/Title.svelte";

  /** @app */
  export const app = initializeApp(firebaseConfig);
  let nameButton = "Welcome";

</script>

<div class="flex justify-center items-center h-screen flex-col">
  <Title nameApp="Svelte App" cssTitle="text-5xl font-bold text-white mb-10" />
  <Button
    {nameButton}
    buttonCss="bg-red-500 rounded-md w-32 p-2"
    path="/blog"
  />
</div>
