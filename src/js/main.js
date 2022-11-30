// Creating a date object
const months = Array.from({
    length: 12
}, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {
        month: "short"
    });
})

console.log(months);

const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart1');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Timmar streamade på Twitch',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: 'rgba(100, 65, 165, 1)'
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

new Chart(ctx1, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Timmar cyklat på Strava',
            data: [44, 22, 13, 15, 0, 24],
            borderWidth: 1,
            backgroundColor: 'rgba(100, 65, 165, 1)'
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

function addData(chart, label, data) {
    console.log('addData');
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    console.log('removeData');
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function updateConfigAsNewObject(chart) {
    console.log('updateConfigAsNewObject');
    chart.options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                display: true
            }
        }
    };
    chart.update();
}