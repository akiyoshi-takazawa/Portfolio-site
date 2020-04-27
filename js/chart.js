    var FrontEnd = document.getElementById("RaderChart_FrontEnd");
    var RaderChart_FrontEnd = new Chart(FrontEnd, {
        type: 'radar',
        data: {
            labels: ["HTML/CSS", "Javascript", "jQuery", "Vue.js", "Chart.js", "WordPress", ],
            datasets: [{
                label: 'FrontEnd',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: 'RGBA(225,95,150, 0.5)',
                borderColor: 'RGBA(225,95,150, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(255,0,0)'
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
                backgroundColor: 'RGBA(115,255,25, 0.5)',
                borderColor: 'RGBA(115,255,25, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(0,128,0)'
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
    