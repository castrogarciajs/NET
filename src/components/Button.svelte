<script lang="ts">
  export let nameButton: string, path: string;
</script>

<button class="button-navigation">
  <a href={path} class="link-navigation">{nameButton}</a>
</button>


<style>
  .button-navigation {
    width: 120px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: blueviolet;
  }

  .link-navigation {
    text-decoration: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
  }
</style>

