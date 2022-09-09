<script>
  import { onMount } from 'svelte';
  import { animate } from '@arjunanimations/leaves';

  const animationData = {
    className: 'bg_animation_container',
    numOfSprites: 10,
    pathsOfSprites: ['/cloud/blue.PNG', '/cloud/purp.PNG'],
    noRotation: true,
    noSpin: true,
    width: 800,
    height: 800
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
    <img alt="me with a big smile, welcoming you to my site" src="/welcome.gif" />
    <div>
      <h2>Hiya!</h2>
      <p>Welcome to my site, this is my lovely digital way to introduce myself. tysm for coming!</p>
      <p>This site is still being worked on, please come back soon</p>
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
        overflow: hidden;
        z-index: -1;

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

    @media screen and (max-width: 40rem) {
      &.hero {
        padding: 10vh 0;

        .bg_animation_container {
          height: 60%;
          top: 0;
        }
        .content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          img {
            width: 70%;
          }
        }
      }
    }
  }
</style>
