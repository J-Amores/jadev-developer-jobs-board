<script lang="ts">
	import type { Job } from '$lib/types/job.types';

	export let job: Job;
</script>

<a
	href="/job/{job.id}"
	class="block relative group"
>
	<div class="h-full bg-white dark:bg-glass-white backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-violet/50 hover:shadow-glow hover:-translate-y-1 shadow-sm dark:shadow-none">
		<div
			class="absolute -top-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
			style="background-color: {job.logoBackground}"
		>
			<img src={job.logo} alt={job.company} class="w-full object-contain p-1" />
		</div>
		<div class="pt-6">
			<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
				<span>{job.postedAt}</span>
				<span class="w-1 h-1 rounded-full bg-gray-500"></span>
				<span>{job.contract}</span>
			</div>
			<h3
				class="font-bold text-xl text-very-dark-blue dark:text-white group-hover:text-violet transition-colors mb-1"
			>
				{job.position}
			</h3>
			<p class="text-gray-500 dark:text-gray-400 text-sm mb-6">{job.company}</p>
			<div class="flex items-center justify-between mt-auto">
				<p class="text-violet font-bold text-sm">{job.location}</p>
				<span class="text-violet opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
					&rarr;
				</span>
			</div>
		</div>
	</div>
</a>
