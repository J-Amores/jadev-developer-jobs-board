<script lang="ts">
  import type { Job } from "$lib/types/job.types";

  export let job: Job;
</script>

<a href={`/job/${job.id}`} class="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
  <div
    class="w-12 h-12 rounded-full flex items-center justify-center -mt-6 ml-4"
    style="background-color: {job.logoBackground}"
  >
    <img src={`/${job.logo}`} alt="{job.company} logo" class="w-6 h-6" />
  </div>
  <div class="p-6">
    <p class="text-gray-500 dark:text-gray-400">{job.postedAt} • {job.contract}</p>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-2">{job.position}</h3>
    <p class="text-gray-500 dark:text-gray-400 mt-1">{job.company}</p>
    <p class="text-blue-500 dark:text-blue-400 mt-4 font-bold">{job.location}</p>
  </div>
</a>
