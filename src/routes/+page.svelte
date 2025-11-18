<script lang="ts">
	import type { PageData } from './$types';
	import JobCard from '$lib/components/JobCard.svelte';
	import FilterBar from '$lib/components/FilterBar.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { jobs } from '$lib/stores/jobs';
	import { searchTerm, filteredJobs } from '$lib/stores/filters';

	export let data: PageData;
	$jobs = data.jobs;

	let limit = 9;
	$: visibleJobs = $filteredJobs.slice(0, limit);

	function loadMore() {
		limit += 9;
	}
</script>

<div class="space-y-8">
	<div class="relative">
		<SearchBar bind:searchTerm={$searchTerm} />
		<div class="hidden md:block">
			<FilterBar />
		</div>
	</div>

	{#if $filteredJobs.length === 0}
		<div class="text-center py-16">
			<h2 class="text-2xl font-bold text-very-dark-blue dark:text-white">No Jobs Found</h2>
			<p class="text-grey dark:text-dark-grey mt-2">
				We couldn't find any jobs matching your search. Try adjusting your filters.
			</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-7 lg:gap-x-[30px] lg:gap-y-16">
			{#each visibleJobs as job}
				<JobCard {job} />
			{/each}
		</div>

		{#if $filteredJobs.length > limit}
			<div class="text-center py-8">
				<button
					on:click={loadMore}
					class="bg-violet hover:bg-light-violet text-white font-bold py-4 px-6 rounded"
				>
					Load More
				</button>
			</div>
		{/if}
	{/if}
</div>
