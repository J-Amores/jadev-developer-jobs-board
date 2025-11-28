<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  let currentTheme: 'light' | 'dark' = 'light';

  const unsubscribe = theme.subscribe(value => {
    currentTheme = value;
  });

  onMount(() => {
    return unsubscribe;
  });

  function toggle() {
    theme.toggle();
  }
</script>

<div class="flex items-center space-x-4">
	<img src="/assets/desktop/icon-sun.svg" alt="Light theme" class="w-5 h-5" />

	<button
		on:click={toggle}
		class="relative w-12 h-6 bg-white rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet focus:ring-opacity-50 hover:bg-light-violet"
		aria-label="Toggle theme"
	>
		<div
			class="absolute top-1 left-1 w-4 h-4 bg-violet rounded-full transition-all duration-300 ease-spring {currentTheme ===
			'dark'
				? 'translate-x-6'
				: 'translate-x-0'}"
		></div>
	</button>

	<img src="/assets/desktop/icon-moon.svg" alt="Dark theme" class="w-5 h-5" />
</div>
