    var FrontEnd = document.getElementById("RaderChart_FrontEnd");
    var RaderChart_FrontEnd = new Chart(FrontEnd, {
        type: 'radar',
        data: {
            labels: ["HTML/CSS", "Javascript", "jQuery", "Vue.js", "Chart.js", "WordPress", ],
            datasets: [{
                label: 'FrontEnd',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: 'RGBA(0,123,190,0.5)',
                borderColor: 'RGBA(0,123,190,0.5)',
                borderWidth: 1,
                pointBackgroundColor: 'RGBA(0,112,192,0.8)'
            }, ],
        },
        options: {
            title: {
                display: true,
                text: ''
            },
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1,
                }
            }
        }
    });

    var BackEnd_DevOps = document.getElementById("RaderChart_BackEnd_DevOps");
    var RaderChart_BackEnd_DevOps = new Chart(BackEnd_DevOps, {
        type: 'radar',
        data: {
            labels: ["PHP", "Laravel", "MySQL", "AWS", "Git/GitHub", "Heroku", ],
            datasets: [{
                label: 'BackEnd / DevOps',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: 'RGBA(143,170,220, 0.5)',
                borderColor: 'RGBA(143,170,220, 0.5)',
                borderWidth: 1,
                pointBackgroundColor: 'RGBA(96,135,206,0.8)'
            }, ],
        },
        options: {
            title: {
                display: true,
                text: ''
            },
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1,
                }
            }
        }
    });
    