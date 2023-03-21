<script>
  import Button from '../components/Button.svelte'
  import Title from '../components/Title.svelte'
</script>

<section class="container-error">
  <Title nameApp="Algon Anda Mal"/>
  <Button nameButton="Pagina Princial" path="/"/>
</section>

<style>
  .container-error {
    background: linear-gradient(to bottom, #bbd59f, #343434);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
  }
</style>