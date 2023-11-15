<script lang="ts">
  import { AppBar, AppShell } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';

  import '@fontsource-variable/outfit';
  import '../app.postcss';

  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<AppShell>
  <svelte:fragment slot="pageHeader">
    <AppBar
      background={scrollY > 10 ? 'bg-surface-100-800-token' : 'bg-initial'}
      padding="px-8 py-6 lg:px-32"
      gridColumns="grid-cols-3"
      slotTrail="place-content-end"
    >
      <svelte:fragment slot="lead">
        <img src="/favicon.png" alt="" class="h-8" />
      </svelte:fragment>
      <div />
      <svelte:fragment slot="trail">
        <div class="hidden items-center gap-4 lg:flex">
          <button class="btn hover:variant-soft">Home</button>
          <button class="btn hover:variant-soft">Download</button>
          <a href="https://forum.rice-dev.xyz" class="btn hover:variant-soft">
            <Icon icon="ph:arrow-square-out" />
            <span>Forum</span>
          </a>
          <button class="btn hover:variant-soft">FAQs</button>
        </div>

        <div class="lg:hidden">
          <button class="btn-icon hover:variant-soft">
            <Icon icon="ph:list" />
          </button>
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>
