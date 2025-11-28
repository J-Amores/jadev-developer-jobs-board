<script lang="ts">
	export let searchTerm: string;
</script>

<div
	class="relative bg-white dark:bg-glass-white backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-3 shadow-lg dark:shadow-glass max-w-4xl mx-auto -mt-10 mb-16"
>
	<form on:submit|preventDefault class="flex flex-col md:flex-row gap-2">
		<div class="flex-1 flex items-center bg-gray-100 dark:bg-white/5 rounded-xl px-4 py-3 border border-transparent dark:border-white/5 focus-within:border-violet/50 transition-colors">
			<img
				src="/assets/desktop/icon-search.svg"
				alt="search"
				class="hidden md:block w-6 h-6 mr-4 text-violet"
			/>
			<input
				type="text"
				placeholder="Filter by title, companies, expertise..."
				class="w-full bg-transparent focus:outline-none text-very-dark-blue dark:text-white placeholder-gray-400 caret-violet"
				bind:value={searchTerm}
			/>
		</div>
		<button
			type="submit"
			class="bg-violet hover:bg-light-violet text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-violet/20 hover:shadow-violet/40 hover:-translate-y-0.5"
		>
			Search
		</button>
	</form>
</div>
