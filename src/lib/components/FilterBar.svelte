<script lang="ts">
  export let location = '';
  export let fullTimeOnly = false;
</script>

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center space-x-4">
  <div class="flex-1">
    <label for="location" class="sr-only">Location</label>
    <input
      type="text"
      id="location"
      placeholder="Filter by location..."
      bind:value={location}
      class="w-full bg-gray-100 dark:bg-gray-700 border-none rounded-md px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500"
    />
  </div>
  <div class="flex items-center">
    <input
      type="checkbox"
      id="full-time"
      bind:checked={fullTimeOnly}
      class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
    <label for="full-time" class="ml-2 text-gray-900 dark:text-white font-bold">Full Time Only</label>
  </div>
  <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
    Search
  </button>
</div>
