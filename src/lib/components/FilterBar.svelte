<script lang="ts">
  import {
    location,
    contract,
    locations,
    contractTypes,
    searchTerm,
  } from '$lib/stores/filters';
  import { derived } from 'svelte/store';

  function resetFilters() {
    searchTerm.set('');
    location.set('');
    contract.set('');
  }

  const filtersActive = derived(
    [searchTerm, location, contract],
    ([$searchTerm, $location, $contract]) => {
      return $searchTerm.trim() !== '' || $location.trim() !== '' || $contract.trim() !== '';
    }
  );
</script>

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center space-x-4">
  <div class="flex-1">
    <label for="location" class="sr-only">Location</label>
    <select
      id="location"
      bind:value={$location}
      aria-label="Location"
      class="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-md px-4 py-2 text-gray-900 dark:text-white"
    >
      <option value="">Filter by location...</option>
      {#each $locations as loc}
        <option value={loc}>{loc}</option>
      {/each}
    </select>
  </div>

  <div class="flex-1">
    <label for="contract" class="sr-only">Contract Type</label>
    <select
      id="contract"
      bind:value={$contract}
      aria-label="Contract Type"
      class="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-md px-4 py-2 text-gray-900 dark:text-white"
    >
      <option value="">Filter by contract...</option>
      {#each $contractTypes as type}
        <option value={type}>{type}</option>
      {/each}
    </select>
  </div>

  <button
    on:click={resetFilters}
    class="font-bold py-2 px-4 rounded-md transition-colors"
    class:bg-red-500={$filtersActive}
    class:text-white={$filtersActive}
    class:hover:bg-red-600={$filtersActive}
    class:bg-gray-200={!$filtersActive}
    class:text-gray-500={!$filtersActive}
    class:cursor-not-allowed={!$filtersActive}
    disabled={!$filtersActive}
  >
    Reset
  </button>
</div>
