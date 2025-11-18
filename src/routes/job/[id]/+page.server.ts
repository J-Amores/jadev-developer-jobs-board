import type { PageServerLoad } from './$types';
import fs from 'fs/promises';
import path from 'path';
import type { Job } from '$lib/types/job.types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const filePath = path.resolve(process.cwd(), 'assets/data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const jobs: Job[] = JSON.parse(jsonData);

  const job = jobs.find((j) => j.id === parseInt(params.id));

  if (!job) {
    throw error(404, 'Job not found');
  }

  return {
    job,
  };
};
