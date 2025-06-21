
  const ctx = document.getElementById('activityChart').getContext('2d');
  const activityChart = new Chart(ctx, {
    type: 'bar', // or 'line', 'pie', etc.
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'Weekly Total Activity (hrs)',
        data: [2, 4, 3, 5, 1, 0, 2], // replace with your data
        backgroundColor: 'rgba(233, 13, 196, 0.6)',
        borderColor: 'rgb(14, 14, 13)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

