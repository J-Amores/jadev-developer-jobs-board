import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import type { Job } from '$lib/types/job.types';

export const load: PageServerLoad = async ({ params }) => {
  try {
    // Use process.cwd() for reliable path resolution in SvelteKit
    const filePath = path.join(process.cwd(), 'static/data/data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const jobs: Job[] = JSON.parse(jsonData);

    const job = jobs.find((j) => j.id.toString() === params.id);

    if (!job) {
      throw error(404, 'Job not found');
    }

    return {
      job,
    };
  } catch (fileError) {
    console.error('Error loading job data:', fileError);
    throw error(500, 'Failed to load job data');
  }
};
