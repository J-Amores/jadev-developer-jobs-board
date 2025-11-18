<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { Sun, Moon } from 'lucide-svelte';

  function toggleTheme() {
    theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }
</script>

<button on:click={toggleTheme} aria-label="Toggle Theme" class="text-white p-2 rounded-full hover:bg-white/20 transition-colors">
  {#if $theme === 'light'}
    <Moon class="w-6 h-6" />
  {:else}
    <Sun class="w-6 h-6" />
  {/if}
</button>
