import { writable } from 'svelte/store';
import type { Job } from '$lib/types/job.types';

export const jobs = writable<Job[]>([]);
