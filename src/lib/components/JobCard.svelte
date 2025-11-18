<script lang="ts">
	import type { Job } from '$lib/types/job.types';

	export let job: Job;
</script>

<a href="/job/{job.id}" class="bg-white dark:bg-very-dark-blue p-8 rounded-md block relative">
	<div
		class="absolute -top-6 w-12 h-12 rounded-2xl flex items-center justify-center"
		style="background-color: {job.logoBackground}"
	>
		<img src={job.logo} alt={job.company} class="w-full" />
	</div>
	<div class="pt-6">
		<p class="text-dark-grey">{job.postedAt} • {job.contract}</p>
		<h3 class="font-bold text-xl mt-2 text-very-dark-blue dark:text-white">{job.position}</h3>
		<p class="text-dark-grey mt-2">{job.company}</p>
		<p class="text-violet mt-6 font-bold">{job.location}</p>
	</div>
</a>
