// Creating a date object
const months = Array.from({
    length: 12
}, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {
        month: "short"
    });
});

var random = Array.from({
    length: 12
}, () => Math.floor(Math.random() * 60));

var random1 = Array.from({
    length: 12
}, () => Math.floor(Math.random() * 40));

console.log(months);
console.log(random);
console.log(random1);

const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart1');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Timmar streamade på Twitch',
            data: random,
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
            data: random1,
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

var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "0fda91693ec79522a3fb0c5ac9fd03505626d713"

var api = new StravaApiV3.ActivitiesApi()

var id = 8182039122; // {Long} The identifier of the activity.

// var opts = {
//     'includeAllEfforts': false // {Boolean} To include all segments efforts.
// };

var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getActivityById(id, opts, callback);