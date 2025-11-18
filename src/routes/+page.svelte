<script lang="ts">
  import type { PageData } from './$types';
  import JobCard from '$lib/components/JobCard.svelte';
  import FilterBar from '$lib/components/FilterBar.svelte';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import { jobs } from '$lib/stores/jobs';
  import { searchTerm, location, fullTimeOnly, filteredJobs } from '$lib/stores/filters';

  export let data: PageData;
  $jobs = data.jobs;

  let limit = 9;
  $: visibleJobs = $filteredJobs.slice(0, limit);

  function loadMore() {
    limit += 9;
  }
</script>

<div class="space-y-8">
  <SearchBar bind:searchTerm={$searchTerm} />
  <FilterBar bind:location={$location} bind:fullTimeOnly={$fullTimeOnly} />

  {#if $filteredJobs.length === 0}
    <div class="text-center py-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">No Jobs Found</h2>
      <p class="text-gray-500 dark:text-gray-400 mt-2">
        We couldn't find any jobs matching your search. Try adjusting your filters.
      </p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each visibleJobs as job}
        <JobCard {job} />
      {/each}
    </div>

    {#if $filteredJobs.length > limit}
      <div class="text-center py-8">
        <button
          on:click={loadMore}
          class="bg-violet-500 hover:bg-violet-600 text-white font-bold py-4 px-6 rounded"
        >
          Load More
        </button>
      </div>
    {/if}
  {/if}
</div>
