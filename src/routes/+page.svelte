<script lang="ts">
  import type { PageData } from './$types';
  import JobCard from '$lib/components/JobCard.svelte';
  import FilterBar from '$lib/components/FilterBar.svelte';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import { jobs } from '$lib/stores/jobs';
  import { searchTerm, location, fullTimeOnly, filteredJobs } from '$lib/stores/filters';

  export let data: PageData;
  $jobs = data.jobs;
</script>

<div class="space-y-8">
  <SearchBar bind:searchTerm={$searchTerm} />
  <FilterBar bind:location={$location} bind:fullTimeOnly={$fullTimeOnly} />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each $filteredJobs as job}
      <JobCard {job} />
    {/each}
  </div>
</div>
