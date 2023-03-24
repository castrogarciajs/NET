<script>
  import Title from '../components/Title.svelte'
</script>

<section class="container-error">
  <Title nameApp="Algon Anda Mal"/>
  <button class="button-navigation">
    <a href="/">Pagina principal</a>
  </button>
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
</style>