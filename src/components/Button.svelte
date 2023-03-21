<script lang="ts">
  export let nameButton: string, path: string;
</script>

<button class="button-navigation">
  <a href={path} class="link-navigation">{nameButton}</a>
</button>

<style>
  .button-navigation {
    background-color: #bbd59f;
    border: 2px solid #ececec;
    color: #343434;
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
    background-color: #343434;
    color: #bbd59f;
  }

  .link-navigation {
    color: #343434;
    text-decoration: none;
  }

  .link-navigation:hover {
    color: #bbd59f;
  }
</style>
