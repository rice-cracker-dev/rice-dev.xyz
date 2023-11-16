<script>
  import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';

  const drawerStore = getDrawerStore();
</script>

<AppBar shadow="shadow-2xl shadow-black/10" gridColumns="grid-cols-3" slotTrail="place-content-end">
  <svelte:fragment slot="lead">
    <p>placeholder</p>
  </svelte:fragment>
  <div />
  <svelte:fragment slot="trail">
    <div class="flex items-center gap-4">
      <div class="hidden gap-4 lg:flex">
        <a href="/" class="btn hover:variant-soft">Home</a>
        <a href="/download" class="btn hover:variant-soft">Download</a>
        <a href="https://forum.rice-dev.xyz" target="_blank" class="btn hover:variant-soft">
          <Icon icon="ph:arrow-square-out" />
          <span>Forum</span>
        </a>
        <a href="/faqs" class="btn hover:variant-soft">FAQs</a>
      </div>

      <div class="lg:hidden">
        <button class="btn-icon hover:variant-soft" on:click={() => drawerStore.open()}>
          <Icon icon="ph:list" />
        </button>
      </div>
    </div>
  </svelte:fragment>
</AppBar>
