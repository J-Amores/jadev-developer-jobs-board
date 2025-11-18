<script lang="ts">
	export let searchTerm: string;
</script>

<div class="relative bg-white dark:bg-very-dark-blue rounded-md p-4">
	<form on:submit|preventDefault>
		<div class="flex items-center">
			<img
				src="/assets/desktop/icon-search.svg"
				alt="search"
				class="hidden md:block w-6 h-6 mr-4"
			/>
			<input
				type="text"
				placeholder="Filter by title, companies, expertise..."
				class="w-full bg-transparent focus:outline-none"
				bind:value={searchTerm}
			/>
			<button
				type="submit"
				class="bg-violet hover:bg-light-violet text-white font-bold py-3 px-5 rounded-md ml-4"
			>
				Search
			</button>
		</div>
	</form>
</div>
