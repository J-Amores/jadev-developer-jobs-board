<script lang="ts">
  export let searchTerm = '';
</script>

<div class="relative">
  <input
    type="text"
    placeholder="Filter by title, companies, expertise..."
    bind:value={searchTerm}
    class="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md px-10 py-4 border-none text-gray-900 dark:text-white placeholder-gray-500"
  />
  <svg class="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
  </svg>
</div>
