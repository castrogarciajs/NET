<script lang="ts">
  export let nameButton: string, buttonCss: string, toNavigation: () => void;
</script>

<button class={buttonCss} on:click={toNavigation}>
  {nameButton}
</button>
