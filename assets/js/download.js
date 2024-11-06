// function generateExcelData() {
//     var panchayatRef = fb.database().ref("panchayats");
//     var villageRef = fb.database().ref("villages");
  
//     Promise.all([panchayatRef.once("value"), villageRef.once("value")]).then(([panchayatSnap, villageSnap]) => {
//       var excelData = [];
//       var villages = {};
//       villageSnap.forEach((villageData) => {
//         let villageObj = JSON.parse(JSON.stringify(villageData.val(), null, 2));
//         if (!villages[villageObj.pchid]) {
//           villages[villageObj.pchid] = [];
//         }
//         villages[villageObj.pchid].push(villageObj);
//       });
  
  
  
//       panchayatSnap.forEach((data) => {
//         let panchayatData = JSON.stringify(data.val(), null, 2);
//         let panchayatObj = JSON.parse(panchayatData);
//         let panchID = panchayatObj.pchid;
//         // console.log("panchayat: ", panchID)
  
//         var panchayatVillages = villages[panchID];
//         if (panchayatVillages) {
//           panchayatVillages.forEach((village) => {
//             var excelRow = {
//               S_No: excelData.length + 1,
//               Panchayat: panchayatObj.pchname,
//               Village: village.name,
//               fu_1: 0,
//               fu_2: 0,
//               fu_3: 0,
//               fu_4: 0,
//               fu_5: 0,
//               fu_6: 0,
//               fu_7: 0
//             };
//             excelData.push(excelRow);
//           });
//         }
//       });
  
//       let csvContent = "S.No,Panchayat,Village,Follow_1,Follow_2,Follow_3,Follow_4,Follow_5,Follow_6,Follow_7\n"
  
//       for (let i = 0; i <excelData.length; i++){
//         // console.log("Data of villages", excelData[i].Village);
//         let row = excelData[i].S_No + "," + excelData[i].Panchayat + "," + excelData[i].Village + "," + excelData[i].fu_1 + "," + excelData[i].fu_2 + "," + excelData[i].fu_3 + "," + excelData[i].fu_4 + "," + excelData[i].fu_5 + "," + excelData[i].fu_6 + "," + excelData[i].fu_7 + "\n"
//         csvContent += row; 
//       }
  
//       console.log("csvContent",csvContent);
  
//       var data = new Blob([csvContent],{type :"text/xlsx"});
//       const currentDate = new Date().getTime();
//       saveFile(data, `${currentDate}.xlsx`);
  
//     });
//   }
  
//   function saveFile(blob, filename){
//     if(window.navigator.msSaveOrOpenBlob){
//       window.navigator.msSaveOrOpenBlob(blob,filename);
//     }
//     else{
//       const url = window.URL.createObjectURL(blob);
//       var a = document.createElement('a');
//       document.body.appendChild(a);
//       a.href = url;
//       a.download = filename;
//       a.click();
//       exportPendingTCCFOLLOW();
//       setTimeout(()=>{
//         window.URL.revokeObjectURL(url);
//         document.body.removeChild(a);
//       }, 0)
//     }
//   }