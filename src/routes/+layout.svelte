<script lang="ts">
  import type { AfterNavigate } from '@sveltejs/kit';
  import { initializeStores, AppShell } from '@skeletonlabs/skeleton';
  import { afterNavigate } from '$app/navigation';
  import Navbar from '$lib/components/Navbar.svelte';
  import '@fontsource-variable/outfit';
  import '../app.postcss';
  import Drawer from '$lib/components/Drawer.svelte';

  initializeStores();

  afterNavigate((params: AfterNavigate) => {
    const isNewPage: boolean = params.from?.route.id !== params.to?.route.id;
    const elemPage = document.querySelector('#page');
    if (isNewPage && elemPage) {
      elemPage.scrollTop = 0;
    }
  });
</script>

<Drawer />

<AppShell>
  <svelte:fragment slot="pageHeader">
    <Navbar />
  </svelte:fragment>

  <slot />
</AppShell>
