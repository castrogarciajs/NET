<script lang="ts">
  /** @Components */
  import Button from "../components/Button.svelte";
  import Title from "../components/Title.svelte";

  /** * @TITLE titulo inicial de la app*/
  let nameButton = "GET STARTED";
</script>

<div class="container-svelte">
  <Title nameApp="NET" />
  <Button {nameButton} path="/form" />
</div>

<style>
  :root {
    --color-principle: #343434;
    --color-line: #ececec;
    --color-bg: #bbd59f;
    --font-char: Arial, Helvetica, sans-serif;
  }
  .container-svelte {
    background: linear-gradient(to bottom, var(--color-bg), var(--color-principle));
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
  }
</style>
