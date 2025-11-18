import { writable, derived } from 'svelte/store';
import { jobs } from '$lib/stores/jobs';
import type { Job } from '$lib/types/job.types';

export const searchTerm = writable('');
export const location = writable('');
export const fullTimeOnly = writable(false);

export const filteredJobs = derived(
  [searchTerm, location, fullTimeOnly, jobs],
  ([$searchTerm, $location, $fullTimeOnly, $jobs]) => {
    return $jobs.filter((job: Job) => {
      const searchTermMatch =
        $searchTerm.trim() === '' ||
        job.position.toLowerCase().includes($searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes($searchTerm.toLowerCase());

      const locationMatch =
        $location.trim() === '' ||
        job.location.toLowerCase().includes($location.toLowerCase());

      const fullTimeMatch = !$fullTimeOnly || job.contract === 'Full Time';

      return searchTermMatch && locationMatch && fullTimeMatch;
    });
  }
);
