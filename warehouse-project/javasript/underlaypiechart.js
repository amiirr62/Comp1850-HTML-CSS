
    // Wait for the page to fully load
    window.addEventListener('load', () => {
      const ctx = document.getElementById('underlayPieChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [
            'PSC3 Smart Cushion',
            'P73 Voyage',
            'Gold HC Underlay',
            'Blue HC Underlay',
            'Green HC Underlay',
            'Other'
          ],
          datasets: [{
            label: 'Underlay Stock',
            data: [12, 9, 7, 5, 8, 3], // Replace with your actual values
            backgroundColor: [
              '	#ff69b4', // Pink
              '#696969', // Dime Grey
              '#ffc107', // Amber (Gold)
              '#03a9f4', // Light Blue
              '#32cd32', // Light Green
              '#9e9e9e'  // Grey
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            },
            title: {
              display: true,
              text: 'Current Underlay Stock'
            }
          }
        }
      });
    });
  


