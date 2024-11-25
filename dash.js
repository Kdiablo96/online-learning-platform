const ctx = document.getElementById('performanceChart').getContext('2d');
let performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Technical Skils', 'System Admistration', 'Software Development Lifecycle', 'IT Support and Troubleshooting', 'Soft Skills'],
        datasets: [{
            label: 'Scores',
            data: [85, 90, 78, 88, 92],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to change chart data
document.getElementById('changeData').addEventListener('click', () => {
    const newData = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    performanceChart.data.datasets[0].data = newData;
    performanceChart.update();
});
