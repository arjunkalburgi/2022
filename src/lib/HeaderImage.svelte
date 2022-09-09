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
    width: 390px;
    height: 180px;
    background: #a84909;
    border-radius: 100%;
    position: absolute;
    left: 12%;
    bottom: -80px;
    z-index: -1;
  }
</style>
