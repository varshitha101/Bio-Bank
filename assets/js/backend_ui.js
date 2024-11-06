function genderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('mf');
    var myChart = echarts.init(chartDom);
    myChart.clear();

    var option;
    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center',
                inverse: true,
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center',

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' },
                    ],
                    center: ['50%', '50%'],
                    scale: [1, -1],
                }
            ]
        }
    };

    option && myChart.setOption(option);
}

function attendChart(Present, Absent) {
    var chartDom = document.getElementById('attendance');
    var myChart = echarts.init(chartDom);

    myChart.clear();

    var option;

    if (Present === 0 && Absent === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (Present === "00" && Absent === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = Present + Absent;
        const prePercent = ((Present / total) * 100).toFixed(2);
        const abPercent = ((Absent / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center',

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: prePercent, name: 'Present' },
                        { value: abPercent, name: 'Absent' },
                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);
}

function eligibilityChart(eligibleCount, ineligibleCount) {

    var chartDom = document.getElementById('eligible');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (eligibleCount === 0 && ineligibleCount === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (eligibleCount === "00" && ineligibleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = eligibleCount + ineligibleCount;
        const eligiblePercent = ((eligibleCount / total) * 100).toFixed(2);
        const ineligiblePercent = ((ineligibleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                // formatter: '{b}: {c}% ',
                formatter: '{c}% ',
                // position: ['20%', '50%']
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: eligiblePercent, name: 'Eligible' },
                        { value: ineligiblePercent, name: 'Ineligible' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);
}

function updateRescreeningChart(rescreeningCount, newRegistrationCount) {
    var chartDom = document.getElementById('neworold');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (rescreeningCount === 0 && newRegistrationCount === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (rescreeningCount === "00" && newRegistrationCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = rescreeningCount + newRegistrationCount;
        const rescreeningPercent = ((rescreeningCount / total) * 100).toFixed(2);
        const newRegisterationPercent = ((newRegistrationCount / total) * 100).toFixed(2);


        option = {
            tooltip: {
                trigger: 'item',
                // formatter: '{b}: {c}% ',
                formatter: '{c}% ',
                // position: ['10%', '50%']
            },
            legend: {
                left: 'center',
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: newRegisterationPercent, name: 'New Registration' },
                        { value: rescreeningPercent, name: 'Re - Survey' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);
}

function updateScreeningChart(screeningCompleted, notScreened) {
    var chartDom = document.getElementById('doscreening');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (screeningCompleted === 0 && notScreened === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (screeningCompleted === "00" && notScreened === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = screeningCompleted + notScreened;
        const screeningComepletedPercent = ((screeningCompleted / total) * 100).toFixed(2);
        const notScreenedPercent = ((notScreened / total) * 100).toFixed(2);


        option = {
            tooltip: {
                trigger: 'item',
                // formatter: '{b}: {c}% ',
                formatter: '{c}% ',
                // position: ['10%', '50%']
            },
            legend: {
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: screeningComepletedPercent, name: 'Screening Completed' },
                        { value: notScreenedPercent, name: 'Not screened ' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);
}

function pendingFollowUpChart(countYes, countNotNow, countAbsent) {
    var chartDom = document.getElementById('doc_rec');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (countYes === 0 && countNotNow === 0 && countAbsent === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (countYes === "00" && countNotNow === "00" && countAbsent === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }

    else {
        const total = countYes + countNotNow + countAbsent;
        const yesPercent = ((countYes / total) * 100).toFixed(2);
        const notNowPercent = ((countNotNow / total) * 100).toFixed(2);
        const absentPercent = ((countAbsent / total) * 100).toFixed(2);


        option = {
            tooltip: {
                trigger: 'item',
                // formatter: '{b}: {c}% ',
                formatter: '{c}% ',
            },
            legend: {
                left: 'center'
            },

            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: yesPercent, name: 'Yes' },
                        { value: notNowPercent, name: 'Not Now' },
                        // { value: neverPercent, name: 'Never' },
                        { value: absentPercent, name: 'Absent' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);

}


function TccConsChart(consumption_1_Counts, consumption_2_Counts, consumption_3_Counts, consumption_4_Counts, consumption_5_Counts, miscellaneousCounts) {
    var chartDom = document.getElementById('tcc_Fm');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    // Check if all follow-up counts are zero
    if (consumption_1_Counts === 0 && consumption_2_Counts === 0 && consumption_3_Counts === 0 && consumption_4_Counts === 0 &&
        consumption_5_Counts === 0 && miscellaneousCounts === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (consumption_1_Counts === "00" && consumption_2_Counts === "00" && consumption_3_Counts === "00" && consumption_4_Counts === "00" &&
        consumption_5_Counts === "00" && miscellaneousCounts === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    } 
    else {
        const total = consumption_1_Counts + consumption_2_Counts + consumption_3_Counts + consumption_4_Counts + consumption_5_Counts + miscellaneousCounts;
        const type_1 = ((consumption_1_Counts / total) * 100).toFixed(2);
        const type_2 = ((consumption_2_Counts / total) * 100).toFixed(2);
        const type_3 = ((consumption_3_Counts / total) * 100).toFixed(2);
        const type_4 = ((consumption_4_Counts / total) * 100).toFixed(2);
        const type_5 = ((consumption_5_Counts / total) * 100).toFixed(2);
        const type_6 = ((miscellaneousCounts / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
                // position: ['25%', '45%'],
            },
            legend: {
                top: '0',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['35%', '68%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: type_1, name: 'Smoked tobacco' },
                        { value: type_2, name: 'Smokeless tobacco' },
                        { value: type_3, name: 'Betel quid with tobacco' },
                        { value: type_6, name: 'Mixed Habbits' },
                        { value: type_4, name: 'Betel quid without tobacco' },
                        { value: type_5, name: 'Other' }]
                }
            ]
        };
    }

    option && myChart.setOption(option);
}


// doctor survey summary

function remoteSrcGenderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('remote_screening');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
                // position:['20%','50%']
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);

}

function InpersonSrcGenderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('inperson_screening');
    var myChart = echarts.init(chartDom);
    myChart.clear();

    var option;

    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
                // position:['20%','50%']
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);

}

function drRecommendationChart(hospitalVisit, noIntervention, localProcedure) {     

    var chartDom = document.getElementById('doc_recommendation');
    var myChart = echarts.init(chartDom);
    myChart.clear();

    var option;
    if (hospitalVisit === 0 && noIntervention === 0 && localProcedure === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (hospitalVisit === "00" && noIntervention === "00" && localProcedure === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = hospitalVisit + noIntervention + localProcedure;
        const hosVisitPercent = ((hospitalVisit / total) * 100).toFixed(2);
        const noInterventionPercent = ((noIntervention / total) * 100).toFixed(2);
        const localProcedurePercent = ((localProcedure / total) * 100).toFixed(2);


        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
                // position:['5%','50%']
            },
            legend: {
                top: '0%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '60%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: noInterventionPercent, name: 'No Intervention' },
                        { value: localProcedurePercent, name: 'Local Procedure' },
                        { value: hosVisitPercent, name: 'Hospital Visit' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);
}

function TccConsDoc(consumption_1_Counts, consumption_2_Counts, consumption_3_Counts, consumption_4_Counts, consumption_5_Counts, miscellaneousCounts) {
    var chartDom = document.getElementById('tcc_Doc');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    // Check if all follow-up counts are zero
    if (consumption_1_Counts === 0 && consumption_2_Counts === 0 && consumption_3_Counts === 0 && consumption_4_Counts === 0 &&
        consumption_5_Counts === 0 && miscellaneousCounts === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    } 
    else if (consumption_1_Counts === "00" && consumption_2_Counts === "00"  && consumption_3_Counts ===  "00" && consumption_4_Counts ===  "00" &&
        consumption_5_Counts ===  "00" && miscellaneousCounts ===  "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    } 
    else {
        const total = consumption_1_Counts + consumption_2_Counts + consumption_3_Counts + consumption_4_Counts + consumption_5_Counts + miscellaneousCounts;
        const type_1 = ((consumption_1_Counts / total) * 100).toFixed(2);
        const type_2 = ((consumption_2_Counts / total) * 100).toFixed(2);
        const type_3 = ((consumption_3_Counts / total) * 100).toFixed(2);
        const type_4 = ((consumption_4_Counts / total) * 100).toFixed(2);
        const type_5 = ((consumption_5_Counts / total) * 100).toFixed(2);
        const type_6 = ((miscellaneousCounts / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
                // position: ['25%', '45%'],
            },
            legend: {
                top: '0',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '55%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: type_1, name: 'Smoked tobacco' },
                        { value: type_2, name: 'Smokeless tobacco' },
                        { value: type_3, name: 'Betel quid with tobacco' },
                        { value: type_6, name: 'Mixed Habbits' },
                        { value: type_4, name: 'Betel quid without tobacco' },
                        { value: type_5, name: 'Other' }
                    ]
                }
            ]
        };
    }

    option && myChart.setOption(option);
}

function drFollowUpChart(proceduralCount, clinicalCount) {
    var chartDom = document.getElementById('doc_pending_followup');
    var myChart = echarts.init(chartDom);
    myChart.clear();

    var option;

    if (proceduralCount === 0 && clinicalCount === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (proceduralCount === "00" && clinicalCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = proceduralCount + clinicalCount;
        const proceduralPercent = ((proceduralCount / total) * 100).toFixed(2);
        const clinicalPercent = ((clinicalCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '18%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '50',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: proceduralPercent, name: 'Procedural' },
                        { value: clinicalPercent, name: 'Clinical Report' },


                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);
}

function tccgenderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('tccGender');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    // Check if data is available
    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
                // position: ['20%', '50%']
            },
            legend: {
                top: '10%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '40',
                    radius: ['35%', '68%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' }
                    ]
                }
            ]
        };
    }

    option && myChart.setOption(option);
}

function tccConsumptionChart(consumption_1_Counts, consumption_2_Counts, consumption_3_Counts, consumption_4_Counts, consumption_5_Counts, miscellaneousCounts) {
    var chartDom = document.getElementById('pending_follow');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    // Check if all follow-up counts are zero
    if (consumption_1_Counts === 0 && consumption_2_Counts === 0 && consumption_3_Counts === 0 && consumption_4_Counts === 0 &&
        consumption_5_Counts === 0 && miscellaneousCounts === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (consumption_1_Counts === "00" && consumption_2_Counts === "00" && consumption_3_Counts === "00" && consumption_4_Counts === "00" && consumption_5_Counts === "00" && miscellaneousCounts === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = consumption_1_Counts + consumption_2_Counts + consumption_3_Counts + consumption_4_Counts + consumption_5_Counts + miscellaneousCounts;
        const type_1 = ((consumption_1_Counts / total) * 100).toFixed(2);
        const type_2 = ((consumption_2_Counts / total) * 100).toFixed(2);
        const type_3 = ((consumption_3_Counts / total) * 100).toFixed(2);
        const type_4 = ((consumption_4_Counts / total) * 100).toFixed(2);
        const type_5 = ((consumption_5_Counts / total) * 100).toFixed(2);
        const type_6 = ((miscellaneousCounts / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
                // position: ['25%', '45%'],
            },
            legend: {
                top: '0',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '40',
                    radius: ['35%', '68%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: type_1, name: 'Smoked tobacco' },
                        { value: type_2, name: 'Smokeless tobacco' },
                        { value: type_3, name: 'Betel quid with tobacco' },
                        { value: type_6, name: 'Mixed Habbits' },
                        { value: type_4, name: 'Betel quid without tobacco' },
                        { value: type_5, name: 'Other' }]
                }
            ]
        };
    }

    option && myChart.setOption(option);
}


function tccSmokeChart(Low, Low_to_mod, Mod, High) {
    var chartDom = document.getElementById('main1');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (Low === 0 && Low_to_mod === 0 && Mod === 0 && High === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (Low === "00" && Low_to_mod === "00" && Mod === "00" && High === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = Low + Low_to_mod + Mod + High;
        const type_1 = ((Low / total) * 100).toFixed(2);
        const type_2 = ((Low_to_mod / total) * 100).toFixed(2);
        const type_3 = ((Mod / total) * 100).toFixed(2);
        const type_4 = ((High / total) * 100).toFixed(2);
       
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '40',
                    radius: ['35%', '68%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: type_1, name: 'Low' },
                        { value: type_2, name: 'Low to moderate' },
                        { value: type_3, name: 'Moderate' },
                        { value: type_4, name: 'High' }
                    ]
                }
            ]
        };
    }
    option && myChart.setOption(option);
}

function tccSmokeLessChart(Low, Low_to_mod, Mod, High) {
    var chartDom = document.getElementById('main2');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (Low === 0 && Low_to_mod === 0 && Mod === 0 && High === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (Low === "00" && Low_to_mod === "00" && Mod === "00" && High === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = Low + Low_to_mod + Mod + High;
        const type_1 = ((Low / total) * 100).toFixed(2);
        const type_2 = ((Low_to_mod / total) * 100).toFixed(2);
        const type_3 = ((Mod / total) * 100).toFixed(2);
        const type_4 = ((High / total) * 100).toFixed(2);
       
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '40',
                    radius: ['35%', '68%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: type_1, name: 'Low' },
                        { value: type_2, name: 'Low to moderate' },
                        { value: type_3, name: 'Moderate' },
                        { value: type_4, name: 'High' }
                    ]
                }
            ]
        };
    }
    option && myChart.setOption(option);
}

function tccFW01GenderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('follow_1');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    console.log("Farray male count:", maleCount);
    console.log("Farray female count:", femaleCount)
    // Check if both maleCount and femaleCount are zero
    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' }
                    ]
                }
            ]
        };
    }

    option && myChart.setOption(option);
}

function tccFW02GenderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('follow_2');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    // Check if both maleCount and femaleCount are zero
    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' }
                    ]
                }
            ]
        };
    }

    option && myChart.setOption(option);
}

function tccFW03GenderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('follow_3');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    // Check if data is available
    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' }
                    ]
                }
            ]
        };
    }

    option && myChart.setOption(option);
}

function tccFW04GenderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('follow_4');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    // Check if data is available
    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' }
                    ]
                }
            ]
        };
    }

    option && myChart.setOption(option);
}

function tccFW05GenderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('follow_5');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' },

                    ]

                }
            ]
        }
    };

    option && myChart.setOption(option);

}

function tccFW06GenderChart(maleCount, femaleCount) {
    var chartDom = document.getElementById('follow_6');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);

}

function tccFW07GenderChart(maleCount, femaleCount) {

    var chartDom = document.getElementById('follow_7');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (maleCount === 0 && femaleCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (maleCount === "00" && femaleCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    }
    else {
        const total = maleCount + femaleCount;
        const malePercent = ((maleCount / total) * 100).toFixed(2);
        const femalePercent = ((femaleCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: malePercent, name: 'Male' },
                        { value: femalePercent, name: 'Female' },

                    ]
                }
            ]
        }
    };
    option && myChart.setOption(option);
}

function phaseComparisionChart(phase1TCCCount, phase2TCCCount, phase1FormCount, phase2FormCount, surveyPhase1, surveyPhase2) {
    var chartDom = document.getElementById('chart');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;



    if (phase1TCCCount === 0 && phase2TCCCount === 0 && phase1FormCount === 0 && phase2FormCount === 0 && surveyPhase1 === 0 && surveyPhase2 === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (phase1TCCCount === "00" && phase2TCCCount === "00" && phase1FormCount === "00" && phase2FormCount === "00" && surveyPhase1 === "00" && surveyPhase2 === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }

    else {

        var option = {
            title: {
            },
            legend: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['Habit (Tobacco)', 'Screening', 'Survey']
            },
            series: [
                {
                    name: 'Phase-1',
                    type: 'bar',
                    data: [phase1TCCCount, phase1FormCount, surveyPhase1]
                },
                {
                    name: 'Phase-2',
                    type: 'bar',
                    data: [phase2TCCCount, phase2FormCount, surveyPhase2]
                }
            ]
        };
    }
    option && myChart.setOption(option);

}

function oralScreeningGraph(normalCount, abnormalCount) {

    var chartDom = document.getElementById('oralScreening');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (normalCount === 0 && abnormalCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (normalCount === "00" && abnormalCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = normalCount + abnormalCount;
        const norPercent = ((normalCount / total) * 100).toFixed(2);
        const abnorPercent = ((abnormalCount / total) * 100).toFixed(2);


        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: norPercent, name: 'Normal' },
                        { value: abnorPercent, name: 'Abnormal' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);

}

function brScreeningGraph(normalCount, abnormalCount) {

    var chartDom = document.getElementById('breastScreening');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (normalCount === 0 && abnormalCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (normalCount === "00" && abnormalCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = normalCount + abnormalCount;
        const norPercent = ((normalCount / total) * 100).toFixed(2);
        const abnorPercent = ((abnormalCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: norPercent, name: 'Normal' },
                        { value: abnorPercent, name: 'Abnormal' },
                    ]
                }
            ]
        }
    };
    option && myChart.setOption(option);
}

function cScreeningGraph(normalCount, abnormalCount) {

    var chartDom = document.getElementById('CervicalScreening');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (normalCount === 0 && abnormalCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (normalCount === "00" && abnormalCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = normalCount + abnormalCount;
        const norPercent = ((normalCount / total) * 100).toFixed(2);
        const abnorPercent = ((abnormalCount / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: norPercent, name: 'Normal' },
                        { value: abnorPercent, name: 'Abnormal' },

                    ]
                }
            ]
        }
    };

    option && myChart.setOption(option);

}

function overallP1Screening(phase1OralCount, phase1BrCount, phase1CrCount) {
    var chartDom = document.getElementById('OverallScreening');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (phase1OralCount === 0 && phase1BrCount === 0 && phase1CrCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    if (phase1OralCount === "00" && phase1BrCount === "00" && phase1CrCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {

        var option = {
            title: {
            },
            legend: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['Cervical Screening', 'Breast Screening', 'Oral Screening']
            },
            series: [
                {
                    name: 'Phase-1',
                    type: 'bar',
                    data: [phase1CrCount, phase1BrCount, phase1OralCount]
                }
            ]
        };
    }
    option && myChart.setOption(option);

}

function overallP2Screening(phase2OralCount, phase2BrCount, phase2CrCount) {
    var chartDom = document.getElementById('OverallScreening');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (phase2OralCount === 0 && phase2BrCount === 0 && phase2CrCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (phase2OralCount === "00" && phase2BrCount === "00" && phase2CrCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {

        var option = {
            title: {
            },
            legend: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['Cervical Screening', 'Breast Screening', 'Oral Screening']
            },
            series: [
                {
                    name: 'Phase-2',
                    type: 'bar',
                    data: [phase2CrCount, phase2BrCount, phase2OralCount]
                }
            ]
        };
    }
    option && myChart.setOption(option);

}

function overallScreening(phase1OralCount, phase2OralCount, phase1BrCount, phase2BrCount, phase1CrCount, phase2CrCount) {
    var chartDom = document.getElementById('OverallScreening');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (phase1OralCount === 0 && phase2OralCount === 0 && phase1BrCount === 0 && phase2BrCount === 0 && phase1CrCount === 0 && phase2CrCount === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (phase1OralCount === "00" && phase2OralCount === "00" && phase1BrCount === "00" && phase2BrCount === "00" && phase1CrCount === "00" && phase2CrCount === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {

        var option = {
            title: {
            },
            legend: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['Cervical Screening', 'Breast Screening', 'Oral Screening']
            },
            series: [
                {
                    name: 'Phase-1',
                    type: 'bar',
                    data: [phase1CrCount, phase1BrCount, phase1OralCount]
                },
                {
                    name: 'Phase-2',
                    type: 'bar',
                    data: [phase2CrCount, phase2BrCount, phase2OralCount]
                }
            ]
        };
    }
    option && myChart.setOption(option);

}

function tccBA01Chart(available, nonavailable) {

    var chartDom = document.getElementById('chart_BA_1');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (available === 0 && nonavailable === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (available === "00" && nonavailable === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = available + nonavailable;
        const availablePercent = ((available / total) * 100).toFixed(2);
        const nonavailablePercent = ((nonavailable / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: availablePercent, name: 'available' },
                        { value: nonavailablePercent, name: 'Non-available' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBA02Chart(available, nonavailable) {

    var chartDom = document.getElementById('chart_BA_2');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (available === 0 && nonavailable === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (available === "00" && nonavailable === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = available + nonavailable;
        const availablePercent = ((available / total) * 100).toFixed(2);
        const nonavailablePercent = ((nonavailable / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: availablePercent, name: 'available' },
                        { value: nonavailablePercent, name: 'Non-available' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBA03Chart(available, nonavailable) {

    var chartDom = document.getElementById('chart_BA_3');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (available === 0 && nonavailable === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (available === "00" && nonavailable === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = available + nonavailable;
        const availablePercent = ((available / total) * 100).toFixed(2);
        const nonavailablePercent = ((nonavailable / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: availablePercent, name: 'available' },
                        { value: nonavailablePercent, name: 'Non-available' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBA04Chart(available, nonavailable) {

    var chartDom = document.getElementById('chart_BA_4');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (available === 0 && nonavailable === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (available === "00" && nonavailable === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = available + nonavailable;
        const availablePercent = ((available / total) * 100).toFixed(2);
        const nonavailablePercent = ((nonavailable / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: availablePercent, name: 'available' },
                        { value: nonavailablePercent, name: 'Non-available' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBA05Chart(available, nonavailable) {

    var chartDom = document.getElementById('chart_BA_5');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (available === 0 && nonavailable === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (available === "00" && nonavailable === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = available + nonavailable;
        const availablePercent = ((available / total) * 100).toFixed(2);
        const nonavailablePercent = ((nonavailable / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: availablePercent, name: 'available' },
                        { value: nonavailablePercent, name: 'Non-available' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBA06Chart(available, nonavailable) {

    var chartDom = document.getElementById('chart_BA_6');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (available === 0 && nonavailable === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (available === "00" && nonavailable === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = available + nonavailable;
        const availablePercent = ((available / total) * 100).toFixed(2);
        const nonavailablePercent = ((nonavailable / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: availablePercent, name: 'available' },
                        { value: nonavailablePercent, name: 'Non-available' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBA07Chart(available, nonavailable) {

    var chartDom = document.getElementById('chart_BA_7');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (available === 0 && nonavailable === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (available === "00" && nonavailable === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = available + nonavailable;
        const availablePercent = ((available / total) * 100).toFixed(2);
        const nonavailablePercent = ((nonavailable / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: availablePercent, name: 'available' },
                        { value: nonavailablePercent, name: 'Non-available' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBW01Chart(agree, nonagree) {

    var chartDom = document.getElementById('chart_BW_1');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (agree === 0 && nonagree === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (agree === "00" && nonagree === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = agree + nonagree;
        const agreePercent = ((agree / total) * 100).toFixed(2);
        const nonagreePercent = ((nonagree / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: agreePercent, name: 'Agreed' },
                        { value: nonagreePercent, name: 'Not Agreed' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBW02Chart(agree, nonagree) {

    var chartDom = document.getElementById('chart_BW_2');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (agree === 0 && nonagree === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (agree === "00" && nonagree === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = agree + nonagree;
        const agreePercent = ((agree / total) * 100).toFixed(2);
        const nonagreePercent = ((nonagree / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: agreePercent, name: 'Agreed' },
                        { value: nonagreePercent, name: 'Not Agreed' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBW03Chart(agree, nonagree) {

    var chartDom = document.getElementById('chart_BW_3');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (agree === 0 && nonagree === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (agree === "00" && nonagree === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = agree + nonagree;
        const agreePercent = ((agree / total) * 100).toFixed(2);
        const nonagreePercent = ((nonagree / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: agreePercent, name: 'Agreed' },
                        { value: nonagreePercent, name: 'Not Agreed' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBW04Chart(agree, nonagree) {

    var chartDom = document.getElementById('chart_BW_4');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (agree === 0 && nonagree === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (agree === "00" && nonagree === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = agree + nonagree;
        const agreePercent = ((agree / total) * 100).toFixed(2);
        const nonagreePercent = ((nonagree / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: agreePercent, name: 'Agreed' },
                        { value: nonagreePercent, name: 'Not Agreed' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBW05Chart(agree, nonagree) {
    var chartDom = document.getElementById('chart_BW_5');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (agree === 0 && nonagree === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (agree === "00" && nonagree === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = agree + nonagree;
        const agreePercent = ((agree / total) * 100).toFixed(2);
        const nonagreePercent = ((nonagree / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: agreePercent, name: 'Agreed' },
                        { value: nonagreePercent, name: 'Not Agreed' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBW06Chart(agree, nonagree) {

    var chartDom = document.getElementById('chart_BW_6');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (agree === 0 && nonagree === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (agree === "00" && nonagree === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        const total = agree + nonagree;
        const agreePercent = ((agree / total) * 100).toFixed(2);
        const nonagreePercent = ((nonagree / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: agreePercent, name: 'Agreed' },
                        { value: nonagreePercent, name: 'Not Agreed' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccBW07Chart(agree, nonagree) {

    var chartDom = document.getElementById('chart_BW_7');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (agree === 0 && nonagree === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (agree === "00" && nonagree === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {        
        const total = agree + nonagree;
        const agreePercent = ((agree / total) * 100).toFixed(2);
        const nonagreePercent = ((nonagree / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: agreePercent, name: 'Agreed' },
                        { value: nonagreePercent, name: 'Not Agreed' },

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccPendingFollowUpChart(fu_1_phase1_Count, fu_1_phase2_Count, fu_2_phase1_Count, fu_2_phase2_Count, fu_3_phase1_Count, fu_3_phase2_Count, fu_4_phase1_Count, fu_4_phase2_Count, fu_5_phase1_Count, fu_5_phase2_Count, fu_6_phase1_Count, fu_6_phase2_Count, fu_7_phase1_Count, fu_7_phase2_Count) {
    var chartDom = document.getElementById('pendingFollowupData');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (fu_1_phase1_Count === 0 && fu_1_phase2_Count === 0 && fu_2_phase1_Count === 0 && fu_2_phase2_Count === 0 && fu_3_phase1_Count === 0 && fu_3_phase2_Count === 0 && fu_4_phase1_Count === 0 && fu_4_phase2_Count === 0 && fu_5_phase1_Count === 0 && fu_5_phase2_Count === 0 && fu_6_phase1_Count === 0 && fu_6_phase2_Count === 0 && fu_7_phase1_Count === 0 && fu_7_phase2_Count === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    if (fu_1_phase1_Count === "00" && fu_1_phase2_Count === "00" && fu_2_phase1_Count === "00" && fu_2_phase2_Count === "00" && fu_3_phase1_Count === "00" && fu_3_phase2_Count === "00" && fu_4_phase1_Count === "00" && fu_4_phase2_Count === "00" && fu_5_phase1_Count === "00" && fu_5_phase2_Count === "00" && fu_6_phase1_Count === "00" && fu_6_phase2_Count === "00" && fu_7_phase1_Count === "00" && fu_7_phase2_Count === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        option = {
            legend: {},
            tooltip: {},
            dataset: {
                dimensions: ['product', 'Phase-1', 'Phase-2', '2017'],
                source: [
                    { product: 'FollowUp - 1', 'Phase-1': fu_1_phase1_Count, 'Phase-2': fu_1_phase2_Count },
                    { product: 'FollowUp - 2', 'Phase-1': fu_2_phase1_Count, 'Phase-2': fu_2_phase2_Count },
                    { product: 'FollowUp - 3', 'Phase-1': fu_3_phase1_Count, 'Phase-2': fu_3_phase2_Count },
                    { product: 'FollowUp - 4', 'Phase-1': fu_4_phase1_Count, 'Phase-2': fu_4_phase2_Count },
                    { product: 'FollowUp - 5', 'Phase-1': fu_5_phase1_Count, 'Phase-2': fu_5_phase2_Count },
                    { product: 'FollowUp - 6', 'Phase-1': fu_6_phase1_Count, 'Phase-2': fu_6_phase2_Count },
                    { product: 'FollowUp - 7', 'Phase-1': fu_7_phase1_Count, 'Phase-2': fu_7_phase2_Count }
                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},

            series: [{ type: 'bar' }, { type: 'bar' }]
        };
    }

    option && myChart.setOption(option);
}

function tccPendingFollowUpP1Chart(fu_1_phase1_Count, fu_2_phase1_Count, fu_3_phase1_Count, fu_4_phase1_Count, fu_5_phase1_Count, fu_6_phase1_Count, fu_7_phase1_Count) {
    var chartDom = document.getElementById('pendingFollowupData');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (fu_1_phase1_Count === 0 && fu_2_phase1_Count === 0 && fu_3_phase1_Count === 0 && fu_4_phase1_Count === 0 && fu_5_phase1_Count === 0 && fu_6_phase1_Count === 0 && fu_7_phase1_Count === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else if (fu_1_phase1_Count === "00" && fu_2_phase1_Count === "00" && fu_3_phase1_Count === "00" && fu_4_phase1_Count === "00" && fu_5_phase1_Count === "00" && fu_6_phase1_Count === "00" && fu_7_phase1_Count === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    }
    else {
        option = {
            legend: {},
            tooltip: {},
            dataset: {
                dimensions: ['product', 'Phase-1'],
                source: [
                    { product: 'FollowUp - 1', 'Phase-1': fu_1_phase1_Count },
                    { product: 'FollowUp - 2', 'Phase-1': fu_2_phase1_Count },
                    { product: 'FollowUp - 3', 'Phase-1': fu_3_phase1_Count },
                    { product: 'FollowUp - 4', 'Phase-1': fu_4_phase1_Count },
                    { product: 'FollowUp - 5', 'Phase-1': fu_5_phase1_Count },
                    { product: 'FollowUp - 6', 'Phase-1': fu_6_phase1_Count },
                    { product: 'FollowUp - 7', 'Phase-1': fu_7_phase1_Count }
                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},

            series: [{ type: 'bar' }]
        };
    }

    option && myChart.setOption(option);
}

function tccPendingFollowUpP2Chart(fu_1_phase2_Count, fu_2_phase2_Count, fu_3_phase2_Count, fu_4_phase2_Count, fu_5_phase2_Count, fu_6_phase2_Count, fu_7_phase2_Count) {
    var chartDom = document.getElementById('pendingFollowupData');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    if (fu_1_phase2_Count === 0 && fu_2_phase2_Count === 0 && fu_3_phase2_Count === 0 && fu_4_phase2_Count === 0 && fu_5_phase2_Count === 0 && fu_6_phase2_Count === 0 && fu_7_phase2_Count === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (fu_1_phase2_Count === "00" && fu_2_phase2_Count === "00" && fu_3_phase2_Count === "00" && fu_4_phase2_Count === "00" && fu_5_phase2_Count === "00" && fu_6_phase2_Count === "00" && fu_7_phase2_Count === "00") {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else {
        option = {
            legend: {},
            tooltip: {},
            dataset: {
                dimensions: ['product', 'Phase-2'],
                source: [
                    { product: 'FollowUp - 1', 'Phase-2': fu_1_phase2_Count },
                    { product: 'FollowUp - 2', 'Phase-2': fu_2_phase2_Count },
                    { product: 'FollowUp - 3', 'Phase-2': fu_3_phase2_Count },
                    { product: 'FollowUp - 4', 'Phase-2': fu_4_phase2_Count },
                    { product: 'FollowUp - 5', 'Phase-2': fu_5_phase2_Count },
                    { product: 'FollowUp - 6', 'Phase-2': fu_6_phase2_Count },
                    { product: 'FollowUp - 7', 'Phase-2': fu_7_phase2_Count }
                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},

            series: [{ type: 'bar' }]
        };
    }

    option && myChart.setOption(option);
}

function tccRS01Chart(noChange, reduced, stopped, relapse, na) {

    var chartDom = document.getElementById('chart_RS_1');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (noChange === 0 && reduced === 0 && stopped === 0 && relapse === 0 && na === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (noChange === "00" && reduced === "00" && stopped === "00" && relapse === "00" && na === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else {
        const total = noChange + reduced + stopped + relapse + na;
        const noChangePercent = ((noChange / total) * 100).toFixed(2);
        const reducedPercent = ((reduced / total) * 100).toFixed(2);
        const stoppedPercent = ((stopped / total) * 100).toFixed(2);
        const relapsePercent = ((relapse / total) * 100).toFixed(2);
        const naPercent = ((na / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '-2%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: noChangePercent, name: 'No Change' },
                        { value: reducedPercent, name: 'Reduced Use' },
                        { value: stoppedPercent, name: 'Stopped Use' },
                        { value: relapsePercent, name: 'Relapse' },
                        { value: naPercent, name: 'NA' }

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccRS02Chart(noChange, reduced, stopped, relapse, na) {

    var chartDom = document.getElementById('chart_RS_2');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (noChange === 0 && reduced === 0 && stopped === 0 && relapse === 0 && na === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (noChange === "00" && reduced === "00" && stopped === "00" && relapse === "00" && na === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else {
        const total = noChange + reduced + stopped + relapse + na;
        const noChangePercent = ((noChange / total) * 100).toFixed(2);
        const reducedPercent = ((reduced / total) * 100).toFixed(2);
        const stoppedPercent = ((stopped / total) * 100).toFixed(2);
        const relapsePercent = ((relapse / total) * 100).toFixed(2);
        const naPercent = ((na / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '-2%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: noChangePercent, name: 'No Change' },
                        { value: reducedPercent, name: 'Reduced Use' },
                        { value: stoppedPercent, name: 'Stopped Use' },
                        { value: relapsePercent, name: 'Relapse' },
                        { value: naPercent, name: 'NA' }

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccRS03Chart(noChange, reduced, stopped, relapse, na) {

    var chartDom = document.getElementById('chart_RS_3');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (noChange === 0 && reduced === 0 && stopped === 0 && relapse === 0 && na === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (noChange === "00" && reduced === "00" && stopped === "00" && relapse === "00" && na === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else {
        const total = noChange + reduced + stopped + relapse + na;
        const noChangePercent = ((noChange / total) * 100).toFixed(2);
        const reducedPercent = ((reduced / total) * 100).toFixed(2);
        const stoppedPercent = ((stopped / total) * 100).toFixed(2);
        const relapsePercent = ((relapse / total) * 100).toFixed(2);
        const naPercent = ((na / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '-2%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: noChangePercent, name: 'No Change' },
                        { value: reducedPercent, name: 'Reduced Use' },
                        { value: stoppedPercent, name: 'Stopped Use' },
                        { value: relapsePercent, name: 'Relapse' },
                        { value: naPercent, name: 'NA' }

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccRS04Chart(noChange, reduced, stopped, relapse, na) {

    var chartDom = document.getElementById('chart_RS_4');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (noChange === 0 && reduced === 0 && stopped === 0 && relapse === 0 && na === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (noChange === "00" && reduced === "00" && stopped === "00" && relapse === "00" && na === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else {
        const total = noChange + reduced + stopped + relapse + na;
        const noChangePercent = ((noChange / total) * 100).toFixed(2);
        const reducedPercent = ((reduced / total) * 100).toFixed(2);
        const stoppedPercent = ((stopped / total) * 100).toFixed(2);
        const relapsePercent = ((relapse / total) * 100).toFixed(2);
        const naPercent = ((na / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '-2%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: noChangePercent, name: 'No Change' },
                        { value: reducedPercent, name: 'Reduced Use' },
                        { value: stoppedPercent, name: 'Stopped Use' },
                        { value: relapsePercent, name: 'Relapse' },
                        { value: naPercent, name: 'NA' }

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccRS05Chart(noChange, reduced, stopped, relapse, na) {

    var chartDom = document.getElementById('chart_RS_5');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (noChange === 0 && reduced === 0 && stopped === 0 && relapse === 0 && na === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (noChange === "00" && reduced === "00" && stopped === "00" && relapse === "00" && na === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else {
        const total = noChange + reduced + stopped + relapse + na;
        const noChangePercent = ((noChange / total) * 100).toFixed(2);
        const reducedPercent = ((reduced / total) * 100).toFixed(2);
        const stoppedPercent = ((stopped / total) * 100).toFixed(2);
        const relapsePercent = ((relapse / total) * 100).toFixed(2);
        const naPercent = ((na / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '-2%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: noChangePercent, name: 'No Change' },
                        { value: reducedPercent, name: 'Reduced Use' },
                        { value: stoppedPercent, name: 'Stopped Use' },
                        { value: relapsePercent, name: 'Relapse' },
                        { value: naPercent, name: 'NA' }

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccRS06Chart(noChange, reduced, stopped, relapse, na) {

    var chartDom = document.getElementById('chart_RS_6');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (noChange === 0 && reduced === 0 && stopped === 0 && relapse === 0 && na === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (noChange === "00" && reduced === "00" && stopped === "00" && relapse === "00" && na === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else {
        const total = noChange + reduced + stopped + relapse + na;
        const noChangePercent = ((noChange / total) * 100).toFixed(2);
        const reducedPercent = ((reduced / total) * 100).toFixed(2);
        const stoppedPercent = ((stopped / total) * 100).toFixed(2);
        const relapsePercent = ((relapse / total) * 100).toFixed(2);
        const naPercent = ((na / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '-2%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: noChangePercent, name: 'No Change' },
                        { value: reducedPercent, name: 'Reduced Use' },
                        { value: stoppedPercent, name: 'Stopped Use' },
                        { value: relapsePercent, name: 'Relapse' },
                        { value: naPercent, name: 'NA' }

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}

function tccRS07Chart(noChange, reduced, stopped, relapse, na) {

    var chartDom = document.getElementById('chart_RS_7');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;
    if (noChange === 0 && reduced === 0 && stopped === 0 && relapse === 0 && na === 0) {
        option = {
            title: {
                text: 'No data available',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else if (noChange === "00" && reduced === "00" && stopped === "00" && relapse === "00" && na === "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 15,
                    color: '#999'
                }
            }
        };
    } 
    else {
        const total = noChange + reduced + stopped + relapse + na;
        const noChangePercent = ((noChange / total) * 100).toFixed(2);
        const reducedPercent = ((reduced / total) * 100).toFixed(2);
        const stoppedPercent = ((stopped / total) * 100).toFixed(2);
        const relapsePercent = ((relapse / total) * 100).toFixed(2);
        const naPercent = ((na / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% '
            },
            legend: {
                top: '-2%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: noChangePercent, name: 'No Change' },
                        { value: reducedPercent, name: 'Reduced Use' },
                        { value: stoppedPercent, name: 'Stopped Use' },
                        { value: relapsePercent, name: 'Relapse' },
                        { value: naPercent, name: 'NA' }

                    ]
                }
            ]
        }
    }

    option && myChart.setOption(option);

}


// var chartDom = document.getElementById('abnormalScreening');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   tooltip: {
//     trigger: 'item'
//   },
//   legend: {
//     top: '-2%',
//     left: 'center'
//   },
//   series: [
//     {
//       type: 'pie',
//       radius: ['30%', '60%'],
//       avoidLabelOverlap: false,
//       itemStyle: {
//         borderRadius: 10,
//         borderColor: '#fff',
//         borderWidth: 2
//       },
//       label: {
//         show: false,
//         position: 'center'
//       },
//       emphasis: {
//         label: {
//           show: true,
//           fontSize: 15,
//         }
//       },
//       labelLine: {
//         show: false
//       },
//       data: [
//         { value: 1048, name: 'Search Engine' },
//         { value: 735, name: 'Direct' },
//         { value: 580, name: 'Email' },
//         { value: 484, name: 'Union Ads' },
//         { value: 300, name: 'Video Ads' }
//       ]
//     }
//   ]
// };

// option && myChart.setOption(option);


function AbnormalChart(consumption_1_Counts, consumption_2_Counts, consumption_3_Counts, consumption_4_Counts, consumption_5_Counts, miscellaneousCounts) {
    var chartDom = document.getElementById('abnormalScreening');
    var myChart = echarts.init(chartDom);
    myChart.clear();
    var option;

    // Check if all follow-up counts are zero
    if (consumption_1_Counts === 0 && consumption_2_Counts === 0 && consumption_3_Counts === 0 && consumption_4_Counts === 0 &&
        consumption_5_Counts === 0 && miscellaneousCounts === 0) {
        option = {
            title: {
                text: 'No Data Available',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    } 
    else if (consumption_1_Counts === "00" && consumption_2_Counts === "00"  && consumption_3_Counts ===  "00" && consumption_4_Counts ===  "00" &&
        consumption_5_Counts ===  "00" && miscellaneousCounts ===  "00") {
        option = {
            title: {
                text: '',
                left: 'center',
                top: 'middle',
                textStyle: {
                    fontSize: 15,
                    color: '#888'
                }
            }
        };
    } 
    else {
        const total = consumption_1_Counts + consumption_2_Counts + consumption_3_Counts + consumption_4_Counts + consumption_5_Counts + miscellaneousCounts;
        const type_1 = ((consumption_1_Counts / total) * 100).toFixed(2);
        const type_2 = ((consumption_2_Counts / total) * 100).toFixed(2);
        const type_3 = ((consumption_3_Counts / total) * 100).toFixed(2);
        const type_4 = ((consumption_4_Counts / total) * 100).toFixed(2);
        const type_5 = ((consumption_5_Counts / total) * 100).toFixed(2);
        const type_6 = ((miscellaneousCounts / total) * 100).toFixed(2);

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}% ',
                // position: ['25%', '45%'],
            },
            legend: {
                top: '0',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    top: '20',
                    radius: ['30%', '55%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: type_1, name: 'Smoked tobacco' },
                        { value: type_2, name: 'Smokeless tobacco' },
                        { value: type_3, name: 'Betel quid with tobacco' },
                        { value: type_6, name: 'Mixed Habbits' },
                        { value: type_4, name: 'Betel quid without tobacco' },
                        { value: type_5, name: 'Other' }]
                }
            ]
        };
    }

    option && myChart.setOption(option);
}

// var chartDom = document.getElementById('tcc_Fm');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   tooltip: {
//     trigger: 'item'
//   },
//   legend: {
//     top: '5%',
//     left: 'center'
//   },
//   series: [
//     {
//       name: 'Access From',
//       type: 'pie',
//       radius: ['40%', '70%'],
//       avoidLabelOverlap: false,
//       itemStyle: {
//         borderRadius: 10,
//         borderColor: '#fff',
//         borderWidth: 2
//       },
//       label: {
//         show: false,
//         position: 'center'
//       },
//       emphasis: {
//         label: {
//           show: true,
//           fontSize: 40,
//           fontWeight: 'bold'
//         }
//       },
//       labelLine: {
//         show: false
//       },
//       data: [
//         { value: 1048, name: 'Search Engine' },
//         { value: 735, name: 'Direct' },
//         { value: 580, name: 'Email' },
//         { value: 484, name: 'Union Ads' },
//         { value: 300, name: 'Video Ads' }
//       ]
//     }
//   ]
// };

// option && myChart.setOption(option);



