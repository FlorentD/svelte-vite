<script>
  import { Router, Route } from 'svelte-routing';
  import { ApolloClient, InMemoryCache } from '@apollo/client/core';
  import { setClient } from 'svelte-apollo';
  import { Menu, Body, Layout } from './components/layout';
  import AppMenu from './menu/Menu.svelte';
  import Main from './components/Main.svelte';
  import Why from './components/Why.svelte';
  import Films from './components/Films.svelte';

  let url = '';

  const client = new ApolloClient({
    uri: '/.netlify/functions/graphql',
    cache: new InMemoryCache(),
  });
  setClient(client);
</script>

<Router {url}>
  <Layout>
    <Menu><AppMenu /></Menu>
    <Body>
      <Route path="/"><Main /></Route>
      <Route path="/why"><Why /></Route>
      <Route path="/films"><Films /></Route>
    </Body>
  </Layout>
</Router>
