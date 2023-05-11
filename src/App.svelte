<script>
  import {fly} from 'svelte/transition';
  import {quintOut} from 'svelte/easing';
  import hashtagLogo from './assets/hashtag.svg';
  import Counter from './lib/Counter.svelte';
  
  let textOn = true;
  function slipOff() {
    textOn = false;
  }
</script>

<main>
  <div>
    <!--<a href="https://github.com/hashtabb" target="_blank" rel="noreferrer">-->
    <div on:click={slipOff}>
      <img src={hashtagLogo} class="logo" alt="hashtag Logo" />
    </div>
  </div>
  {#if textOn}
  <h1 out:fly="{{y : 500, duration : 8000, easing: quintOut }}">Click above to see my github page</h1>
  {/if}
<!--
  <div class="card">
    <Counter />
  </div>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>-->
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #b4b6d8aa);
  }
</style>
