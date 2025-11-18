import type { PageServerLoad } from './$types';
import fs from 'fs/promises';
import path from 'path';
import type { Job } from '$lib/types/job.types';

export const load: PageServerLoad = async () => {
  const filePath = path.resolve(process.cwd(), 'assets/data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const jobs: Job[] = JSON.parse(jsonData);

  return {
    jobs,
  };
};
