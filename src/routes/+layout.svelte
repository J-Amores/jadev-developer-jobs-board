<script>
	import '../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data;

	onMount(() => {
		theme.init();
	});
</script>

<div class="min-h-screen relative">
	<!-- Decorative background elements -->
	<div class="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
		<div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet/20 blur-[100px] animate-pulse"></div>
		<div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[100px] animate-pulse" style="animation-delay: 2s"></div>
	</div>

	<header class="relative z-10 pt-10 pb-20 md:pt-16 md:pb-32">
		<div class="container mx-auto px-4 flex justify-between items-center max-w-[1110px]">
			<a href="/" class="text-2xl font-bold text-very-dark-blue dark:text-white tracking-tight hover:text-violet transition-colors">
				devjobs<span class="text-violet">.</span>
			</a>
			<ThemeToggle />
		</div>
		
		<div class="container mx-auto px-4 mt-12 md:mt-20 text-center max-w-3xl">
			<h1 class="text-4xl md:text-6xl font-bold text-very-dark-blue dark:text-white mb-6 leading-tight">
				Find your next <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet to-light-violet">dream job</span>
			</h1>
			<p class="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
				Discover the best developer roles in the industry. curated for you.
			</p>
		</div>
	</header>

	{#key data.url}
		<main
			in:fade={{ duration: 300, delay: 300 }}
			out:fade={{ duration: 300 }}
			class="container mx-auto p-4 -mt-10 md:-mt-16 lg:-mt-20 max-w-[1110px]"
		>
			<slot />
		</main>
	{/key}
</div>
