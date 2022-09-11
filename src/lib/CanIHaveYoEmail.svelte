<script>
  import { fade, fly } from 'svelte/transition';

  let emailInput;
  let emailSent = false;
  let submitEmail = () => {
    fetch('https://formcarry.com/s/Mmwa-p-fN', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email: emailInput })
    })
      .then((_) => (emailSent = true))
      .catch((error) => console.log(error));
    return false;
  };
</script>

<div class="have_yo_email_container">
  {#if !emailSent}
    <form on:submit|preventDefault={submitEmail} out:fade>
      <input type="email" placeholder="put-your@email.here" bind:value={emailInput} />
      <button type="submit">⇨</button>
    </form>
    <p out:fade>enter your email and I'll reach out! Let's talk about your ideas</p>
  {:else}
    <p in:fade={{ delay: 1000 }}>whoohoo! I'll reach out to you soon 😄</p>
  {/if}
</div>

<style lang="scss">
  .have_yo_email_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    form {
      position: relative;
      width: 250px;

      input {
        border: 1px solid transparent;
        border-radius: 1px;
        width: 250px;
        padding: 3px 0 3px 0.2rem;
        font-size: small;

        &:active,
        &:focus-visible {
          outline: none;
          border: 1px solid blue;
        }

        &::placeholder {
          font-size: small;
        }
      }

      button {
        cursor: pointer;
        font-size: small;
        background: none;
        border: 1px solid transparent;
        border-radius: 1px;
        position: absolute;
        right: -5px;
        top: 2px;
        bottom: 0px;
        padding: 0px 3px;

        &:focus-visible,
        &:active {
          outline: none;
          border: 1px solid blue;
        }
      }
    }

    p {
      font-size: small;
      margin: 0.25rem 0;
    }
  }
</style>
