<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { job } = data;
</script>

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
  <div class="flex items-center mb-8">
    <div
      class="w-24 h-24 rounded-lg flex items-center justify-center"
      style="background-color: {job.logoBackground}"
    >
      <img src={job.logo} alt="{job.company} logo" class="w-12 h-12" />
    </div>
    <div class="ml-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{job.company}</h1>
      <a href={job.website} class="text-gray-500 dark:text-gray-400" target="_blank" rel="noopener noreferrer">
        {job.website}
      </a>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.position}</h2>
  <p class="text-gray-500 dark:text-gray-400 mb-6">{job.postedAt} • {job.contract}</p>
  <a href={job.apply} class="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition-colors">
    Apply Now
  </a>

  <div class="mt-8 space-y-6 text-gray-700 dark:text-gray-300">
    <p>{job.description}</p>

    <div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Requirements</h3>
      <p>{job.requirements.content}</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        {#each job.requirements.items as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>

    <div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What You Will Do</h3>
      <p>{job.role.content}</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        {#each job.role.items as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
