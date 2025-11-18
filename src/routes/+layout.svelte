<script>
  import "../app.css";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { theme } from "$lib/stores/theme";
  import { onMount } from "svelte";

  onMount(() => {
    theme.init();
  });
</script>

<div class="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark min-h-screen">
  <header class="bg-primary-light dark:bg-primary-dark text-white p-4 relative z-10">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">DevJobs</h1>
      <ThemeToggle />
    </div>
  </header>

  <main class="container mx-auto p-4">
    <slot />
  </main>
</div>
