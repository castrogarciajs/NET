<script lang="ts">

  /** @Components */
  import Button from "../components/Button.svelte";
  import Title from "../components/Title.svelte";
  
  /** * @TITLE titulo inicial de la app*/
  let nameButton = "WELCOME";
</script>

<div class="container-svelte">
  <Title nameApp="Svelte App" />
  <Button {nameButton} path="/form" />
</div>

<style></style>
