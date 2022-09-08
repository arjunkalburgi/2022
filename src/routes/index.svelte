<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="hero">
  <img alt="me with a big smile, welcoming you to my site" src="/sra.jpg" />
  <div>
    <h2>Hiya!</h2>
    <p>
      Welcome to my site, this is my lovely digital way to introduce myself. tysm for coming, please
      scroll down
    </p>
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
      display: grid;
      grid-template-columns: 40% auto;

      img {
        width: 100%;
      }
    }
  }

  .welcome {
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
