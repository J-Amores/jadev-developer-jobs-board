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

<div class="relative bg-white dark:bg-very-dark-blue rounded-md p-4">
	<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
		<div class="flex items-center w-full md:w-auto">
			<img src="/assets/desktop/icon-location.svg" alt="location" class="w-6 h-6 mr-4" />
			<input
				type="text"
				placeholder="Filter by location..."
				class="w-full bg-transparent focus:outline-none"
				bind:value={$location}
			/>
		</div>
		<div class="flex items-center gap-4 flex-wrap">
			{#each $contractTypes as type}
				<div class="flex items-center">
					<input
						type="checkbox"
						id="contract-{type}"
						class="w-5 h-5 mr-2 accent-violet"
						on:change={() => toggleContract(type)}
						checked={$contract.includes(type)}
					/>
					<label for="contract-{type}" class="font-bold text-sm whitespace-nowrap"
						>{type}</label
					>
				</div>
			{/each}
		</div>
	</div>
</div>
