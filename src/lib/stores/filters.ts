import { writable, derived } from 'svelte/store';
import { jobs } from '$lib/stores/jobs';
import type { Job } from '$lib/types/job.types';

export const searchTerm = writable('');
export const location = writable('');
export const contract = writable<string[]>([]);

export const filteredJobs = derived(
  [searchTerm, location, contract, jobs],
  ([$searchTerm, $location, $contract, $jobs]) => {
    return $jobs.filter((job: Job) => {
      const searchTermMatch =
        $searchTerm.trim() === '' ||
        job.position.toLowerCase().includes($searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes($searchTerm.toLowerCase());

      const locationMatch = $location === '' || job.location === $location;

      const contractMatch = $contract.length === 0 || $contract.includes(job.contract);

      return searchTermMatch && locationMatch && contractMatch;
    });
  }
);

export const locations = derived(jobs, ($jobs) => {
  const allLocations = $jobs.map((job) => job.location);
  return [...new Set(allLocations)];
});

export const contractTypes = derived(jobs, ($jobs) => {
  const allContracts = $jobs.map((job) => job.contract);
  return [...new Set(allContracts)];
});
