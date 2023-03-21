<script lang="ts">
  export let nameButton: string, path: string;
</script>

<button class="button-navigation">
  <a href={path} class="link-navigation">{nameButton}</a>
</button>

<style>
  .button-navigation {
    background-color: var(--color-bg);
    border: 2px solid var(--color-line);
    color: var(--color-principle);
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  .button-navigation:hover {
    background-color: var(--color-principle);
    color: var(--color-bg);
  }

  .link-navigation {
    color: var(--color-principle);
    text-decoration: none;
  }

  .link-navigation:hover {
    color: var(--color-bg);
  }
</style>
