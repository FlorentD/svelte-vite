<script>
  import { gql } from '@apollo/client/core';
  import { query } from 'svelte-apollo';

  const films = query(gql`
    {
      films {
        id
        image
        title
      }
    }
  `);
</script>

<h1>Films</h1>
{#if $films.loading}
  Loading...
{:else if $films.error}
  Error: {$films.error.message}
{:else}
  {#each $films.data.films as film}
    {film.title} by {film.image}
  {/each}
{/if}
