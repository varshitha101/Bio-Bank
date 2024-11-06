// function tccgenderChart(maleCount, femaleCount) {
//     var chartDom = document.getElementById('tccGender');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

//     // Check if data is available
//     if (maleCount === 0 && femaleCount === 0) {
//         option = {
//             title: {
//                 text: 'No Data Available',
//                 left: 'center',
//                 top: 'middle',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#888'
//                 }
//             }
//         };
//     } else {
//         const total = maleCount + femaleCount;
//         const malePercent = ((maleCount / total) * 100).toFixed(2);
//         const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//         option = {
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{c}% ',
//                 // position: ['20%', '50%']
//             },
//             legend: {
//                 top: '5%',
//                 left: 'center'
//             },
//             series: [
//                 {
//                     name: '',
//                     type: 'pie',
//                     top: '20',
//                     radius: ['30%', '60%'],
//                     avoidLabelOverlap: false,
//                     itemStyle: {
//                         borderRadius: 10,
//                         borderColor: '#fff',
//                         borderWidth: 2
//                     },
//                     label: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 15,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: malePercent, name: 'Male' },
//                         { value: femalePercent, name: 'Female' }
//                     ]
//                 }
//             ]
//         };
//     }

//     option && myChart.setOption(option);
// }


// function tccConsumptionChart(consumption_1_Counts, consumption_2_Counts, consumption_3_Counts, consumption_4_Counts, consumption_5_Counts, miscellaneousCounts) {
//     var chartDom = document.getElementById('pending_follow');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

//     // Check if all follow-up counts are zero
//     if (consumption_1_Counts === 0 && consumption_2_Counts === 0 && consumption_3_Counts === 0 && consumption_4_Counts === 0 &&
//         consumption_5_Counts === 0 && miscellaneousCounts === 0) {
//         option = {
//             title: {
//                 text: 'No Data Available',
//                 left: 'center',
//                 top: 'middle',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#888'
//                 }
//             }
//         };
//     } else {
//         const total = consumption_1_Counts + consumption_2_Counts + consumption_3_Counts + consumption_4_Counts + consumption_5_Counts + miscellaneousCounts;
//         const type_1 = ((consumption_1_Counts / total) * 100).toFixed(2);
//         const type_2 = ((consumption_2_Counts / total) * 100).toFixed(2);
//         const type_3 = ((consumption_3_Counts / total) * 100).toFixed(2);
//         const type_4 = ((consumption_4_Counts / total) * 100).toFixed(2);
//         const type_5 = ((consumption_5_Counts / total) * 100).toFixed(2);
//         const type_6 = ((miscellaneousCounts / total) * 100).toFixed(2);

//         option = {
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{c}% ',
//                 // position: ['25%', '45%'],
//             },
//             legend: {
//                 top: '0',
//                 left: 'center'
//             },
//             series: [
//                 {
//                     name: '',
//                     type: 'pie',
//                     top: '20',
//                     radius: ['30%', '55%'],
//                     avoidLabelOverlap: false,
//                     itemStyle: {
//                         borderRadius: 10,
//                         borderColor: '#fff',
//                         borderWidth: 2
//                     },
//                     label: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 15,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: type_1, name: 'Smoked tobacco' },
//                         { value: type_2, name: 'Smokeless tobacco' },
//                         { value: type_3, name: 'Betel quid with tobacco' },
//                         { value: type_6, name: 'Mixed Habbits' },
//                         { value: type_4, name: 'Betel quid without tobacco' },
//                         { value: type_5, name: 'Other' }
//                     ]
//                 }
//             ]
//         };
//     }

//     option && myChart.setOption(option);
// }


// function tccFW01GenderChart(maleCount, femaleCount) {
//     var chartDom = document.getElementById('follow_1');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

//     // Check if both maleCount and femaleCount are zero
//     if (maleCount === 0 && femaleCount === 0) {
//         option = {
//             title: {
//                 text: 'No Data Available',
//                 left: 'center',
//                 top: 'middle',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#888'
//                 }
//             }
//         };
//     } else {
//         const total = maleCount + femaleCount;
//         const malePercent = ((maleCount / total) * 100).toFixed(2);
//         const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//         option = {
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{c}% '
//             },
//             legend: {
//                 top: '5%',
//                 left: 'center'
//             },
//             series: [
//                 {
//                     name: '',
//                     type: 'pie',
//                     top: '20',
//                     radius: ['40%', '70%'],
//                     avoidLabelOverlap: false,
//                     itemStyle: {
//                         borderRadius: 10,
//                         borderColor: '#fff',
//                         borderWidth: 2
//                     },
//                     label: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 15,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: malePercent, name: 'Male' },
//                         { value: femalePercent, name: 'Female' }
//                     ]
//                 }
//             ]
//         };
//     }

//     option && myChart.setOption(option);
// }


// function tccFW02GenderChart(maleCount, femaleCount) {
//     var chartDom = document.getElementById('follow_2');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

//     // Check if both maleCount and femaleCount are zero
//     if (maleCount === 0 && femaleCount === 0) {
//         option = {
//             title: {
//                 text: 'No Data Available',
//                 left: 'center',
//                 top: 'middle',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#888'
//                 }
//             }
//         };
//     } else {
//         const total = maleCount + femaleCount;
//         const malePercent = ((maleCount / total) * 100).toFixed(2);
//         const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//         option = {
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{c}% '
//             },
//             legend: {
//                 top: '5%',
//                 left: 'center'
//             },
//             series: [
//                 {
//                     name: '',
//                     type: 'pie',
//                     top: '20',
//                     radius: ['40%', '70%'],
//                     avoidLabelOverlap: false,
//                     itemStyle: {
//                         borderRadius: 10,
//                         borderColor: '#fff',
//                         borderWidth: 2
//                     },
//                     label: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 15,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: malePercent, name: 'Male' },
//                         { value: femalePercent, name: 'Female' }
//                     ]
//                 }
//             ]
//         };
//     }

//     option && myChart.setOption(option);
// }


// function tccFW03GenderChart(maleCount, femaleCount) {
//     var chartDom = document.getElementById('follow_3');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

//     // Check if data is available
//     if (maleCount === 0 && femaleCount === 0) {
//         option = {
//             title: {
//                 text: 'No data available',
//                 left: 'center',
//                 top: 'center',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#999'
//                 }
//             }
//         };
//     } else {
//         const total = maleCount + femaleCount;
//         const malePercent = ((maleCount / total) * 100).toFixed(2);
//         const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//         option = {
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{c}% '
//             },
//             legend: {
//                 top: '5%',
//                 left: 'center'
//             },
//             series: [
//                 {
//                     name: '',
//                     type: 'pie',
//                     top: '20',
//                     radius: ['40%', '70%'],
//                     avoidLabelOverlap: false,
//                     itemStyle: {
//                         borderRadius: 10,
//                         borderColor: '#fff',
//                         borderWidth: 2
//                     },
//                     label: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 15,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: malePercent, name: 'Male' },
//                         { value: femalePercent, name: 'Female' }
//                     ]
//                 }
//             ]
//         };
//     }

//     option && myChart.setOption(option);
// }


// function tccFW04GenderChart(maleCount, femaleCount) {
//     var chartDom = document.getElementById('follow_4');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

//     // Check if data is available
//     if (maleCount === 0 && femaleCount === 0) {
//         option = {
//             title: {
//                 text: 'No data available',
//                 left: 'center',
//                 top: 'center',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#999'
//                 }
//             }
//         };
//     } else {
//         const total = maleCount + femaleCount;
//         const malePercent = ((maleCount / total) * 100).toFixed(2);
//         const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//         option = {
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{c}% '
//             },
//             legend: {
//                 top: '5%',
//                 left: 'center'
//             },
//             series: [
//                 {
//                     name: '',
//                     type: 'pie',
//                     top: '20',
//                     radius: ['40%', '70%'],
//                     avoidLabelOverlap: false,
//                     itemStyle: {
//                         borderRadius: 10,
//                         borderColor: '#fff',
//                         borderWidth: 2
//                     },
//                     label: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 15,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: malePercent, name: 'Male' },
//                         { value: femalePercent, name: 'Female' }
//                     ]
//                 }
//             ]
//         };
//     }

//     option && myChart.setOption(option);
// }


// function tccFW05GenderChart(maleCount, femaleCount) {
//     var chartDom = document.getElementById('follow_5');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;
//     if (maleCount === 0 && femaleCount === 0) {
//         option = {
//             title: {
//                 text: 'No data available',
//                 left: 'center',
//                 top: 'center',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#999'
//                 }
//             }
//         };
//     } else {
//         const total = maleCount + femaleCount;
//         const malePercent = ((maleCount / total) * 100).toFixed(2);
//         const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//         option = {
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{c}% '
//             },
//             legend: {
//                 top: '5%',
//                 left: 'center'
//             },
//             series: [
//                 {
//                     name: '',
//                     type: 'pie',
//                     top: '20',
//                     radius: ['40%', '70%'],
//                     avoidLabelOverlap: false,
//                     itemStyle: {
//                         borderRadius: 10,
//                         borderColor: '#fff',
//                         borderWidth: 2
//                     },
//                     label: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 15,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: malePercent, name: 'Male' },
//                         { value: femalePercent, name: 'Female' },

//                     ]

//                 }
//             ]
//         }
//     };

//     option && myChart.setOption(option);

// }


// function tccFW06GenderChart(maleCount, femaleCount) {
//     var chartDom = document.getElementById('follow_6');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

//     if (maleCount === 0 && femaleCount === 0) {
//         option = {
//             title: {
//                 text: 'No data available',
//                 left: 'center',
//                 top: 'center',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#999'
//                 }
//             }
//         };
//     } else {
//         const total = maleCount + femaleCount;
//         const malePercent = ((maleCount / total) * 100).toFixed(2);
//         const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//         option = {
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{c}% '
//             },
//             legend: {
//                 top: '5%',
//                 left: 'center'
//             },
//             series: [
//                 {
//                     name: '',
//                     type: 'pie',
//                     top: '20',
//                     radius: ['40%', '70%'],
//                     avoidLabelOverlap: false,
//                     itemStyle: {
//                         borderRadius: 10,
//                         borderColor: '#fff',
//                         borderWidth: 2
//                     },
//                     label: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 15,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: malePercent, name: 'Male' },
//                         { value: femalePercent, name: 'Female' },

//                     ]
//                 }
//             ]
//         }
//     };

//     option && myChart.setOption(option);

// }


// function tccFW07GenderChart(maleCount, femaleCount) {

//     var chartDom = document.getElementById('follow_7');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

//     if (maleCount === 0 && femaleCount === 0) {
//         option = {
//             title: {
//                 text: 'No data available',
//                 left: 'center',
//                 top: 'center',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#999'
//                 }
//             }
//         };
//     } else {
//         const total = maleCount + femaleCount;
//         const malePercent = ((maleCount / total) * 100).toFixed(2);
//         const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//         option = {
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{c}% '
//             },
//             legend: {
//                 top: '5%',
//                 left: 'center'
//             },
//             series: [
//                 {
//                     name: '',
//                     type: 'pie',
//                     top: '20',
//                     radius: ['40%', '70%'],
//                     avoidLabelOverlap: false,
//                     itemStyle: {
//                         borderRadius: 10,
//                         borderColor: '#fff',
//                         borderWidth: 2
//                     },
//                     label: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         label: {
//                             show: true,
//                             fontSize: 15,
//                             fontWeight: 'bold'
//                         }
//                     },
//                     labelLine: {
//                         show: false
//                     },
//                     data: [
//                         { value: malePercent, name: 'Male' },
//                         { value: femalePercent, name: 'Female' },

//                     ]
//                 }
//             ]
//         }
//     };

//     option && myChart.setOption(option);

// }


// function phaseComparisionChart(phase1TCCCount, phase2TCCCount, phase1FormCount, phase2FormCount, surveyPhase1, surveyPhase2) {
//     var chartDom = document.getElementById('chart');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

//     if (phase1TCCCount === 0 && phase2TCCCount === 0 && phase1FormCount === 0 && phase2FormCount === 0 && surveyPhase1 === 0 && surveyPhase2 === 0) {
//         option = {
//             title: {
//                 text: 'No data available',
//                 left: 'center',
//                 top: 'center',
//                 textStyle: {
//                     fontSize: 15,
//                     color: '#999'
//                 }
//             }
//         };
//     } else {

//         var option = {
//             title: {
//             },
//             legend: {},
//             tooltip: {
//                 trigger: 'axis',
//                 axisPointer: {
//                     type: 'shadow'
//                 }
//             },
//             grid: {
//                 left: '3%',
//                 right: '4%',
//                 bottom: '3%',
//                 containLabel: true
//             },
//             xAxis: {
//                 type: 'value',
//                 boundaryGap: [0, 0.01]
//             },
//             yAxis: {
//                 type: 'category',
//                 data: ['Habit (Tobacco)', 'Screening Count', 'Survey Count']
//             },
//             series: [
//                 {
//                     name: 'Phase-1',
//                     type: 'bar',
//                     data: [ phase1TCCCount, phase1FormCount, surveyPhase1]
//                 },
//                 {
//                     name: 'Phase-2',
//                     type: 'bar',
//                     data: [phase2TCCCount, phase2FormCount, surveyPhase2]
//                 }
//             ]
//         };
//     }
//     option && myChart.setOption(option);

// }

