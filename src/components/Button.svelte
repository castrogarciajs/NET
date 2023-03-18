<script lang="ts">
  export let nameButton: string, buttonCss: string, path: string;
</script>

<button class={buttonCss}>
  <a href={path}>{nameButton}</a>
</button>
