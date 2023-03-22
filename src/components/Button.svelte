<script lang="ts">
  import { signInWithPopup } from "firebase/auth";
  import { auth } from "../firebase";
  import { provider } from "../auth";
  import { goto } from "$app/navigation";

  const handleSing = async () => {
    await signInWithPopup(auth, provider);
    await goto("/form")
  };

  export let nameButton: string;
</script>

<button class="button-navigation" on:click={handleSing}>
  {nameButton}
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
</style>
