<script>
  import { onMount } from 'svelte';
  import { animate } from '@arjunanimations/leaves';

  export let alt;
  export let src;

  const animationData = {
    className: 'elements_animation_container',
    numOfSprites: 5,
    pathsOfSprites: ['/favicon.png']
  };

  onMount(() => {
    // animate(animationData);
  });
</script>

<div class="elements_animation_container">
  <img class="oval" src="/oval.png" alt="" />
  <img class="main" {alt} {src} />
</div>

<style lang="scss">
  div {
    position: relative;
  }
  .main {
    width: 100%;
  }
  .oval {
    width: 100%;
    position: absolute;
    bottom: -18%;
    z-index: -1;

    @media screen and (max-width: 40rem) {
      // bottom: -20px;
    }
  }
</style>
