<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
</script>

<div>
  <div>
    <img src={image} alt={title} />
  </div>
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
</div>
