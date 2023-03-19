<script lang="ts">

  /** @Components */
  import Button from "../components/Button.svelte";
  import Title from "../components/Title.svelte";

  let nameButton = "Welcome";
</script>

<div class="container-svelte">
  <Title nameApp="Svelte App" />
  <Button {nameButton} path="/blog" />
</div>

<style>
  /**
      #2F2E41,
      #7B6D9D,
      #F2C57C,
      #F27E7E,
  */
  .container-svelte {
    background-image: linear-gradient(
      to bottom right,
      #8b5cf6,
      #a78bfa,
      #d6bcfa,
      #e0e7ff,
      #f3f4f6,
      #e5e7eb,
      #d1d5db,
      #9ca3af
    );
    background-size: 200% 200%;
    animation: gradient-animation 3s ease infinite;
    height: 100vh;
    display: flex;
    justify-content: center;

    align-items: center;
    flex-direction: column;
  }

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
