<script lang="ts">
  import type { PageData } from './$types';
  import JobCard from '$lib/components/JobCard.svelte';
  import FilterBar from '$lib/components/FilterBar.svelte';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import { jobs } from '$lib/stores/jobs';
  import { searchTerm, filteredJobs } from '$lib/stores/filters';

  export let data: PageData;
  $jobs = data.jobs;
</script>

<div class="space-y-8">
  <SearchBar bind:searchTerm={$searchTerm} />
  <FilterBar />

  {#if $filteredJobs.length === 0}
    <div class="text-center py-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">No Results Found</h2>
      <p class="text-gray-600 dark:text-gray-400 mt-2">
        Try adjusting your search or filters to find what you're looking for.
      </p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each $filteredJobs as job}
        <JobCard {job} />
      {/each}
    </div>
  {/if}
</div>
