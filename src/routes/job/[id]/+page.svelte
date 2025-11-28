<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { job } = data;
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
  <a href="/" class="text-violet-500 hover:underline">&larr; Back to Listings</a>
</div>

<div class="job-detail-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <!-- Header -->
  <div class="job-header bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center sm:text-left sm:flex items-center">
    <div
      class="logo-background w-24 h-24 sm:w-32 sm:h-32 rounded-full flex-shrink-0 mx-auto sm:mx-0 flex items-center justify-center"
      style="background-color: {job.logoBackground}"
    >
      <img src="{job.logo}" alt="{job.company} logo" class="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
    </div>
    <div class="sm:ml-8 mt-6 sm:mt-0">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{job.company}</h1>
      <a
        href={job.website}
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-500 dark:text-gray-400 hover:underline"
      >
        {job.website}
      </a>
    </div>
  </div>

  <!-- Job Details -->
  <div class="job-body bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mt-8">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div>
        <p class="text-gray-500 dark:text-gray-400">{job.postedAt} • {job.contract}</p>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-2">{job.position}</h2>
        <p class="text-violet-500 dark:text-violet-400 mt-1 font-bold">{job.location}</p>
      </div>
      <a
        href={job.apply}
        target="_blank"
        rel="noopener noreferrer"
        class="apply-button bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded mt-6 sm:mt-0 w-full sm:w-auto text-center"
      >
        Apply Now
      </a>
    </div>

    <div class="prose dark:prose-invert max-w-none mt-8">
      <p>{job.description}</p>

      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8">Requirements</h3>
      <p>{job.requirements.content}</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        {#each job.requirements.items as item}
          <li>{item}</li>
        {/each}
      </ul>

      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8">What You Will Do</h3>
      <p>{job.role.content}</p>
      <ol class="list-decimal list-inside mt-4 space-y-2">
        {#each job.role.items as item}
          <li>{item}</li>
        {/each}
      </ol>
    </div>
  </div>
</div>

<footer class="job-footer bg-white dark:bg-gray-800 mt-12 py-6">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
    <div class="hidden sm:block">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">{job.position}</h3>
      <p class="text-gray-500 dark:text-gray-400">{job.company}</p>
    </div>
    <a
      href={job.apply}
      target="_blank"
      rel="noopener noreferrer"
      class="apply-button bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded w-full sm:w-auto text-center"
    >
      Apply Now
    </a>
  </div>
</footer>
