<script lang="ts">
  import { logOut } from "../auth";

  const handleClick = async () => {
    await logOut
  }
</script>

<nav class="navbar-net">
  <div>
    <h2 class="title-net">NET</h2>
  </div>
  <div class="menu-net">
    <a href="/" class="nav">Home</a>
    <a href="/form" class="nav">Add note</a>
    <a href="/blog" class="nav">Notes</a>
    <a href="/" class="nav" on:click={handleClick}>Sing Out</a>
  </div>
</nav>

<style>
  .navbar-net {
    background-color: #343434;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, Helvetica, sans-serif;
  }

  .title-net {
    color: #bbd59f;
    font-size: 2rem;
    margin: 0;
  }

  .menu-net {
    display: flex;
    align-items: center;
  }

  .nav {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    margin-right: 20px;
    transition: all 0.3s ease-in-out;
    border-bottom: 2px solid transparent;
  }

  .nav:hover {
    color: #bbd59f;
    border-color: #bbd59f;
  }
</style>
