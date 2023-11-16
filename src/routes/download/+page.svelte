<script>
  import Icon from '@iconify/svelte';
</script>

<header class="hero-gradient">
  <div class="section-container grid grid-cols-1 items-center gap-16 xl:grid-cols-2">
    <div class="flex flex-col items-center gap-8 text-center xl:items-start xl:text-left">
      <h1 class="h1">
        AppGPT <br />
        poorly coded chatgpt frontend
      </h1>
      <p class="max-w-lg text-xl">
        just something i made whilst learning AvaloniaUI lol. <span class="text-warning-500">
          requires a chatgpt api key
        </span>
      </p>
      <a
        href="https://github.com/rice-cracker-dev/AppGPT"
        target="_blank"
        class="variant-filled-primary btn"
      >
        <Icon icon="ph:arrow-square-out" />
        <span>source code</span>
      </a>
    </div>

    <div class="relative hidden lg:block">
      <img
        src="/screenshots/appgpt.png"
        alt="forum screenshot"
        class="decoration absolute rounded-lg blur-3xl brightness-150"
      />
      <img src="/screenshots/appgpt.png" alt="forum screenshot" class="relative rounded-lg" />
    </div>
  </div>
</header>
