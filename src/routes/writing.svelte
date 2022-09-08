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
  <title>Writing</title>
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
</style>
