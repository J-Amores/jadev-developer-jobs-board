<script lang="ts">
	import { location, contract } from '$lib/stores/filters';
</script>

<div class="relative bg-white dark:bg-very-dark-blue rounded-md p-4">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<img src="/assets/desktop/icon-location.svg" alt="location" class="w-6 h-6 mr-4" />
			<input
				type="text"
				placeholder="Filter by location..."
				class="w-full bg-transparent focus:outline-none"
				bind:value={$location}
			/>
		</div>
		<div class="flex items-center">
			<input
				type="checkbox"
				id="full-time"
				class="w-6 h-6 mr-4"
				on:change={() => ($contract = $contract === 'Full Time' ? '' : 'Full Time')}
				checked={$contract === 'Full Time'}
			/>
			<label for="full-time" class="font-bold">Full Time Only</label>
		</div>
	</div>
</div>
