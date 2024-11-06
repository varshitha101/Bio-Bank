// function remoteSrcGenderChart(maleCount, femaleCount) {
//     var chartDom = document.getElementById('remote_screening');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();
//     var option;

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
//     const total = maleCount + femaleCount;
//     const malePercent = ((maleCount / total) * 100).toFixed(2);
//     const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//     option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: '{c}% ',
//             // position:['20%','50%']
//         },
//         legend: {
//             top: '5%',
//             left: 'center'
//         },
//         series: [
//             {
//                 name: '',
//                 type: 'pie',
//                 top: '20',
//                 radius: ['40%', '70%'],
//                 avoidLabelOverlap: false,
//                 itemStyle: {
//                     borderRadius: 10,
//                     borderColor: '#fff',
//                     borderWidth: 2
//                 },
//                 label: {
//                     show: false,
//                     position: 'center'
//                 },
//                 emphasis: {
//                     label: {
//                         show: true,
//                         fontSize: 15,
//                         fontWeight: 'bold'
//                     }
//                 },
//                 labelLine: {
//                     show: false
//                 },
//                 data: [
//                     { value: malePercent, name: 'Male' },
//                     { value: femalePercent, name: 'Female' },

//                 ]
//             }
//         ]
//     }
//     };

//     option && myChart.setOption(option);

// }

// function InpersonSrcGenderChart(maleCount, femaleCount) {
//     var chartDom = document.getElementById('inperson_screening');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();

//     var option;

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
//     const total = maleCount + femaleCount;
//     const malePercent = ((maleCount / total) * 100).toFixed(2);
//     const femalePercent = ((femaleCount / total) * 100).toFixed(2);

//     option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: '{c}% ',
//             // position:['20%','50%']
//         },
//         legend: {
//             top: '5%',
//             left: 'center'
//         },
//         series: [
//             {
//                 name: '',
//                 type: 'pie',
//                 top: '20',
//                 radius: ['30%', '60%'],
//                 avoidLabelOverlap: false,
//                 itemStyle: {
//                     borderRadius: 10,
//                     borderColor: '#fff',
//                     borderWidth: 2
//                 },
//                 label: {
//                     show: false,
//                     position: 'center'
//                 },
//                 emphasis: {
//                     label: {
//                         show: true,
//                         fontSize: 15,
//                         fontWeight: 'bold'
//                     }
//                 },
//                 labelLine: {
//                     show: false
//                 },
//                 data: [
//                     { value: malePercent, name: 'Male' },
//                     { value: femalePercent, name: 'Female' },

//                 ]
//             }
//         ]
//     }
//     };

//     option && myChart.setOption(option);

// }

// function drRecommendationChart(hospitalVisit, noIntervention, localProcedure){

//     var chartDom = document.getElementById('doc_recommendation');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();

//     var option;
//     if (hospitalVisit === 0 && noIntervention  === 0 && localProcedure === 0) {
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
//     const total = hospitalVisit + noIntervention + localProcedure;
//     const hosVisitPercent = ((hospitalVisit / total) * 100).toFixed(2);
//     const noInterventionPercent = ((noIntervention / total) * 100).toFixed(2);
//     const localProcedurePercent = ((localProcedure / total) * 100).toFixed(2);

    
//     option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: '{c}% ',
//             // position:['5%','50%']
//         },
//         legend: {
//             left: 'center'
//         },
//         series: [
//             {
//                 name: '',
//                 type: 'pie',
//                 top: '20',
//                 radius: ['30%', '60%'],
//                 avoidLabelOverlap: false,
//                 itemStyle: {
//                     borderRadius: 10,
//                     borderColor: '#fff',
//                     borderWidth: 2
//                 },
//                 label: {
//                     show: false,
//                     position: 'center'
//                 },
//                 emphasis: {
//                     label: {
//                         show: true,
//                         fontSize: 15,
//                         fontWeight: 'bold'
//                     }
//                 },
//                 labelLine: {
//                     show: false
//                 },
//                 data: [
//                     { value: noInterventionPercent, name: 'No Intervention' },
//                     { value: localProcedurePercent, name: 'Local Procedure' },
//                     { value: hosVisitPercent, name: 'Hospital Visit' },
    
//                 ]
//             }
//         ]
//     }
//     };
    
//     option && myChart.setOption(option);
// }

// function drFollowUpChart(proceduralCount, clinicalCount) {
//     var chartDom = document.getElementById('doc_pending_followup');
//     var myChart = echarts.init(chartDom);
//     myChart.clear();

//     var option;

// if (proceduralCount === 0 && clinicalCount === 0) {
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
//     const total = proceduralCount + clinicalCount;
//     const proceduralPercent = ((proceduralCount / total) * 100).toFixed(2);
//     const clinicalPercent = ((clinicalCount / total) * 100).toFixed(2);

//     option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: '{c}% '
//         },
//         legend: {
//             top: '18%',
//             left: 'center'
//         },
//         series: [
//             {
//                 name: '',
//                 type: 'pie',
//                 top: '50',
//                 radius: ['40%', '70%'],
//                 avoidLabelOverlap: false,
//                 itemStyle: {
//                     borderRadius: 10,
//                     borderColor: '#fff',
//                     borderWidth: 2
//                 },
//                 label: {
//                     show: false,
//                     position: 'center'
//                 },
//                 emphasis: {
//                     label: {
//                         show: true,
//                         fontSize: 15,
//                         fontWeight: 'bold'
//                     }
//                 },
//                 labelLine: {
//                     show: false
//                 },
//                 data: [
//                     { value: proceduralPercent, name: 'Procedural' },
//                     { value: clinicalPercent, name: 'Clinical Report' },


//                 ]
//             }
//         ]
//     }
//     };

//     option && myChart.setOption(option);
// }

