<script>
	import '../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	onMount(() => {
		theme.init();
	});
</script>

<div class="bg-light-grey dark:bg-midnight min-h-screen">
	<header
		class="bg-pattern-mobile-header md:bg-pattern-tablet-header lg:bg-pattern-header bg-cover bg-no-repeat text-white p-4 h-[136px] md:h-[160px] rounded-bl-[100px]"
	>
		<div class="container mx-auto flex justify-between items-center pt-4 md:pt-7 lg:pt-3">
			<a href="/"><img src="/assets/desktop/logo.svg" alt="devjobs" /></a>
			<ThemeToggle />
		</div>
	</header>

	<main class="container mx-auto p-4 -mt-10 md:-mt-16 lg:-mt-20">
		<slot />
	</main>
</div>
