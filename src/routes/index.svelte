<script context="module">
  export const prerender = true;
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    // Use a `limit` querystring parameter to fetch a limited number of posts
    // e.g. fetch('posts.json?limit=5') for 5 most recent posts
    const posts = await fetch('/writing.json').then((res) => res.json());
    return {
      props: {
        posts
      }
    };
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <ul>
    {#each posts as { slug, title, author, description, date }}
      <li><a href="/writing/{slug}">{title}</a></li>
    {/each}
  </ul>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
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
