<script>
  import { onMount } from 'svelte';
  import { animate } from '@arjunanimations/leaves';

  const animationData = {
    className: 'bg_animation_container',
    numOfSprites: 6,
    pathsOfSprites: ['/cloud/blue.PNG', '/cloud/purp.PNG'],
    noRotation: true,
    noSpin: true,
    width: 500,
    height: 500
  };

  onMount(() => {
    animate(animationData);
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="hero">
  <div class="bg_animation_container">
    <div />
  </div>

  <div class="content">
    <img alt="me with a big smile, welcoming you to my site" src="/sra.jpg" />
    <div>
      <h2>Hiya!</h2>
      <p>
        Welcome to my site, this is my lovely digital way to introduce myself. tysm for coming,
        please scroll down
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    &.hero {
      padding: 20vh 0;
      position: relative;

      .bg_animation_container {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow-x: hidden;

        display: flex;
        div {
          height: 100px;
          width: 100%;
          margin-top: auto;
          background-image: linear-gradient(#fff0, white);
        }
      }

      .content {
        display: grid;
        grid-template-columns: 40% auto;
        padding: 0 10vw;
        grid-gap: 5vw;
        align-items: center;

        img {
          width: 100%;
        }
      }
    }
  }
</style>
