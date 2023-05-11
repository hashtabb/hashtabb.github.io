<script>
  import {fly} from 'svelte/transition';

  import {cubicOut, backIn, bounceInOut} from 'svelte/easing';
  import hashtagLogo from './assets/hashtag.svg';
  import Counter from './lib/Counter.svelte';
  let hashtagPath ='./assets/hashtag.svg';
  let textOn = true;

  function slipOff() {
    textOn = false;
  }

  function typewriter(node, { speed = 1, delay = 0, easing = bounceInOut}) {
    const valid = (
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE
    );

    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      delay,
      easing,
      tick: t => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      }
	};
  }
  function jumpUp(node, {delay = 0, duration = 2000, easing = backIn}) {
    const style = getComputedStyle(node);
	  const opacity = +style.opacity;
	  const transform = style.transform === 'none' ? '' : style.transform;
    return {
      delay,
      duration,
      easing,
      css: (t,u) => `transform: translate(0px, ${(u) * -600}px);`
    };
  } // old code for changing top ${500 - Math.trunc((100)*((t - 0.01) ** 2 - 0.001))}

</script>
<svelte:head>
    <title>Hashtabb</title> 
    <link rel = "icon" href={hashtagPath} type='image/svg'>
</svelte:head>
<main>
  
    <!--<a href="https://github.com/hashtabb" target="_blank" rel="noreferrer">-->
    
  {#if textOn}
    <img on:click={slipOff} out:jumpUp="{{delay : 0, duration: 2500}}" src={hashtagLogo} class="logo" alt="hashtag Logo" />
  <!--
  <h1 out:fly="{{y : 500, duration : 8000, easing: quintOut }}">Click above to see my github page</h1>
  -->
  {/if}
  {#if !textOn}
  <h2 transition:typewriter="{{speed : .3, delay: 3000}}">#hashtabb </h2>
  {/if}
<!--
  <div class="card">
    <Counter />
  </div>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>-->
</main>


<!-- font options include: UniSans, ProximaNova, Verdana, Frutiger -->
<style>
  h2 {
    position: fixed;
    top: 0;
    left: 0;
    font-family: UniSans, Verdana, Sans-Serif;
    text-align: left;
    color: #ffffff;
  }
  .logo {
    position: fixed;
    top: 400px;
    left: 750px;
    height: 6em;
    padding: 1.5em;
    will-change: filter, left, top;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #b4b6d8aa);
  }


</style>
