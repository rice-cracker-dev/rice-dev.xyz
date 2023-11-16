<script>
  import { AppRail, AppRailAnchor, Drawer } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
</script>

<Drawer position="right" width="auto" border="!rounded-none">
  <AppRail>
    <AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
      <svelte:fragment slot="lead">
        <Icon icon="ph:house-fill" class="text-2xl" />
      </svelte:fragment>

      <span>Home</span>
    </AppRailAnchor>
    <AppRailAnchor href="/download" selected={$page.url.pathname.startsWith('/download')}>
      <svelte:fragment slot="lead">
        <Icon icon="ph:download-simple" class="text-2xl" />
      </svelte:fragment>

      <span>Download</span>
    </AppRailAnchor>
    <AppRailAnchor href="https://forum.rice-dev.xyz" target="_blank">
      <svelte:fragment slot="lead">
        <Icon icon="ph:download-simple" class="text-2xl" />
      </svelte:fragment>

      <span>Download</span>
    </AppRailAnchor>
  </AppRail>
</Drawer>

<Drawer position="right" width="auto" border="!rounded-none">
  <AppRail>
    <AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
      <svelte:fragment slot="lead">
        <Icon icon="ph:house-fill" class="text-2xl" />
      </svelte:fragment>

      <span>Home</span>
    </AppRailAnchor>
    <AppRailAnchor href="/download" selected={$page.url.pathname.startsWith('/download')}>
      <svelte:fragment slot="lead">
        <Icon icon="ph:download-simple" class="text-2xl" />
      </svelte:fragment>

      <span>Download</span>
    </AppRailAnchor>
    <AppRailAnchor href="https://forum.rice-dev.xyz" target="_blank">
      <svelte:fragment slot="lead">
        <Icon icon="ph:chat-text-fill" class="text-2xl" />
      </svelte:fragment>

      <span>Forum</span>
    </AppRailAnchor>
    <AppRailAnchor href="/faqs" selected={$page.url.pathname.startsWith('/faqs')}>
      <svelte:fragment slot="lead">
        <Icon icon="ph:question-fill" class="text-2xl" />
      </svelte:fragment>

      <span>FAQs</span>
    </AppRailAnchor>
  </AppRail>
</Drawer>
