<script lang="ts">
	import { location, contract, contractTypes } from '$lib/stores/filters';

	function toggleContract(type: string) {
		contract.update((current) => {
			if (current.includes(type)) {
				return current.filter((t) => t !== type);
			} else {
				return [...current, type];
			}
		});
	}
</script>

<div class="relative bg-white dark:bg-glass-white backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-4 shadow-lg dark:shadow-glass mt-4">
	<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
		<div class="flex items-center w-full md:w-auto bg-gray-100 dark:bg-white/5 rounded-xl px-4 py-2 border border-transparent dark:border-white/5 focus-within:border-violet/50 transition-colors">
			<img src="/assets/desktop/icon-location.svg" alt="location" class="w-6 h-6 mr-4" />
			<input
				type="text"
				placeholder="Filter by location..."
				class="w-full bg-transparent focus:outline-none text-very-dark-blue dark:text-white placeholder-gray-400"
				bind:value={$location}
			/>
		</div>
		<div class="flex items-center gap-4 flex-wrap">
			{#each $contractTypes as type}
				<div class="flex items-center group cursor-pointer">
					<input
						type="checkbox"
						id="contract-{type}"
						class="w-5 h-5 mr-2 accent-violet bg-gray-200 dark:bg-white/10 border-gray-300 dark:border-white/20 rounded cursor-pointer"
						on:change={() => toggleContract(type)}
						checked={$contract.includes(type)}
					/>
					<label for="contract-{type}" class="font-bold text-sm whitespace-nowrap text-very-dark-blue dark:text-white group-hover:text-violet transition-colors cursor-pointer"
						>{type}</label
					>
				</div>
			{/each}
		</div>
	</div>
</div>
