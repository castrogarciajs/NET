<script lang="ts">
  export let nameApp: String;
</script>

<h2 class="title-svelte move-svelte">{nameApp}</h2>

<style>
  .title-svelte {
    font-size: 2rem;
    color: #000;
    text-align: center;
    margin-top: 2rem;
  }
  .move-svelte {
    animation-name: move-up;
    animation-duration: 4s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }

  @keyframes move-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
