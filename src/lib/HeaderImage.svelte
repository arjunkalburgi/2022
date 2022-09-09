<script>
  export let alt;
  export let src;
</script>

<div>
  <div class="oval" />
  <img {alt} {src} />
</div>

<style lang="scss">
  div {
    position: relative;
  }
  img {
    width: 100%;
  }
  .oval {
    width: 75%;
    height: 180px;
    background: #a84909;
    border-radius: 100%;
    position: absolute;
    left: 15%;
    bottom: -80px;
    z-index: -1;

    @media screen and (max-width: 40rem) {
      height: 70px;
      bottom: -20px;
    }
  }
</style>
