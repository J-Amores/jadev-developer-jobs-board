document.addEventListener('DOMContentLoaded', () => {
  const jobListingsContainer = document.querySelector('.job-listings');

  if (!jobListingsContainer) {
    console.error('Job listings container not found');
    return;
  }

  fetch('assets/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(jobs => {
      if (!jobs || jobs.length === 0) {
        jobListingsContainer.innerHTML = '<p>No job listings found.</p>';
        return;
      }

      const jobListingsHTML = jobs.map(job => `
        <div class="job-card" data-job-id="${job.id}">
          <div class="job-card-header">
            <img src="${job.logo}" alt="${job.company} logo" class="company-logo" style="background-color: ${job.logoBackground};">
          </div>
          <div class="job-card-body">
            <p class="job-meta">
              <span class="posted-at">${job.postedAt}</span>
              <span class="contract">${job.contract}</span>
            </p>
            <h3 class="job-title">${job.position}</h3>
            <p class="company-name">${job.company}</p>
          </div>
          <div class="job-card-footer">
            <p class="location">${job.location}</p>
          </div>
        </div>
      `).join('');

      jobListingsContainer.innerHTML = jobListingsHTML;

      const jobCards = document.querySelectorAll('.job-card');
      jobCards.forEach(card => {
        card.addEventListener('click', () => {
          const jobId = card.dataset.jobId;
          console.log(`Navigating to job details for job ID: ${jobId}`);
          // window.location.href = `job-details.html?id=${jobId}`;
        });
      });
    })
    .catch(error => {
      console.error('Error fetching job listings:', error);
      jobListingsContainer.innerHTML = '<p>Error loading job listings. Please try again later.</p>';
    });
});
