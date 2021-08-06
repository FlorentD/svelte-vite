<script>
  import { Router, Route } from 'svelte-routing';
  import { Menu, Body, Layout } from './components/layout';
  import AppMenu from './menu/Menu.svelte';
  import Main from './components/Main.svelte';
  import Why from './components/Why.svelte';

  let url = '';
</script>

<Router {url}>
  <Layout>
    <Menu><AppMenu /></Menu>
    <Body>
      <Route path="/"><Main /></Route>
      <Route path="/why"><Why /></Route>
    </Body>
  </Layout>
</Router>
