<script>
  import '../app.css';
</script>

<div class="container">
  <h1 class="logo">
    <img
      src="/logo.svg"
      alt="Arjun Kalburgi's logo - it's a leaf that lays on it's side, with a sharp leaf blade and a soft stem - symbolizing that he grows sharply but remains humble."
    />
  </h1>

  <main>
    <slot />
  </main>

  <!-- <footer>
    <p>hit me up at <a href="mailto:askalburgi@gmail.com">askalburgi@gmail.com</a> to chat</p>
  </footer> -->
</div>

<style lang="scss">
  h1 {
    position: absolute;
    margin: 0;
    margin-left: 1rem;

    img {
      width: 10rem;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
