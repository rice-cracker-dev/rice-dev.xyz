<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<header class="hero-gradient">
  <div class="section-container grid grid-cols-1 items-center gap-16 xl:grid-cols-2">
    <div class="flex flex-col items-center gap-8 text-center xl:items-start xl:text-left">
      <h1 class="h1">
        rice-dev forum <br />
        a very goofy forum
      </h1>
      <p class="max-w-lg text-xl">
        my own forum built from scratch. please join my forum i need members lolololol
      </p>
      <a href="https://forum.rice-dev.xyz" target="_blank" class="variant-filled-primary btn">
        <Icon icon="ph:arrow-square-out" />
        <span>join forum</span>
      </a>
    </div>

    <div class="relative hidden lg:block">
      <img
        src="/screenshots/forum.png"
        alt="forum screenshot"
        class="decoration absolute rounded-lg blur-3xl brightness-150"
      />
      <img src="/screenshots/forum.png" alt="forum screenshot" class="relative rounded-lg" />
    </div>
  </div>
</header>
