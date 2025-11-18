import type { PageServerLoad } from './$types';
import fs from 'fs/promises';
import path from 'path';
import type { Job } from '$lib/types/job.types';

export const load: PageServerLoad = async () => {
  try {
    // Use process.cwd() for reliable path resolution in SvelteKit
    const filePath = path.join(process.cwd(), 'static/data/data.json');

    const jsonData = await fs.readFile(filePath, 'utf-8');
    const jobs: Job[] = JSON.parse(jsonData);

    return {
      jobs,
    };
  } catch (error) {
    console.error('Error loading jobs data:', error);
    return {
      jobs: [],
    };
  }
};
