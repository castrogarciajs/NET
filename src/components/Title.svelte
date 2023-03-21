<script lang="ts">
  export let nameApp: String;
</script>

<h1 class="title-svelte">{nameApp}</h1>

<style>
  .title-svelte {
    color: var(--color-principle);
    font-size: 8rem;
    font-weight: bold;
    text-align: center;
    transition: font-size 0.2s ease-in-out;
    margin: 0;
  }

  .title-svelte:hover {
    font-size: max(8px, calc(2rem + 4px));
  }
</style>
