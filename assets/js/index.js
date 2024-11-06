/**
 * @author Tantragyaan
 * @param firebaseConfig
 */
let firebaseConfig = {
  // apiKey: "AIzaSyD9zJiGQZnotj50EdNVfRFHG73kXtZUwHs",
  // authDomain: "shankara-cancer-screening.firebaseapp.com",
  // databaseURL: "https://shankara-cancer-screening-default-rtdb.firebaseio.com",
  // projectId: "shankara-cancer-screening",
  // storageBucket: "shankara-cancer-screening.appspot.com",
  // messagingSenderId: "1060039489072",
  // appId: "1:1060039489072:web:656c1638465a19c3f89ff5",
  // measurementId: "G-KWC8MT2VYQ"
  // apiKey: "AIzaSyDMiYPWOzoOwJB3mIxy-92iYvmPviT_iao",
  // authDomain: "testing-shankaracare-web.firebaseapp.com",
  // databaseURL: "https://testing-shankaracare-web-default-rtdb.firebaseio.com",
  // projectId: "testing-shankaracare-web",
  // storageBucket: "testing-shankaracare-web.appspot.com",
  // messagingSenderId: "684280929303",

  // staging
  // appId: "1:684280929303:web:0a6c2b4be861eb83aa1052",
  // measurementId: "G-5R8TF7ZCH4",
  // apiKey: "AIzaSyAa7rCSqGnLb8T89YtQsCOx7LcspzH_4Y8",
  // authDomain: "sarvarakshana-staging.firebaseapp.com",
  // databaseURL: "https://sarvarakshana-staging-default-rtdb.firebaseio.com",
  // projectId: "sarvarakshana-staging",
  // storageBucket: "sarvarakshana-staging.appspot.com",
  // messagingSenderId: "203498484262",
  // appId: "1:203498484262:web:3b00873564b12d250a2ce7",
  // measurementId: "G-GDEMDDZRX3"

  // deployment
  apiKey: "AIzaSyAFXlXxezJPDcw8qcjm45rqbu9Drl-3YDk",
  authDomain: "sarvarakshana-deployment.firebaseapp.com",
  databaseURL: "https://sarvarakshana-deployment-default-rtdb.firebaseio.com",
  projectId: "sarvarakshana-deployment",
  storageBucket: "sarvarakshana-deployment.appspot.com",
  messagingSenderId: "675533937929",
  appId: "1:675533937929:web:35698bb27dc57cb87e87d8",
  measurementId: "G-E9G48X6P80"

  // "apiKey": "AIzaSyAFXlXxezJPDcw8qcjm45rqbu9Drl-3YDk",
  // "authDomain": "sarvarakshana-deployment.firebaseapp.com",
  // "databaseURL": "https://sarvarakshana-deployment-default-rtdb.firebaseio.com",
  // "projectId": "sarvarakshana-deployment",
  // "storageBucket": "sarvarakshana-deployment.appspot.com",
  // "messagingSenderId": "675533937929",
  // "appId": "1:675533937929:web:35698bb27dc57cb87e87d8",
  // "measurementId": "G-E9G48X6P80"

  // devolopment
  // apiKey: "AIzaSyDxwWanrz_T-FQICF89Vl6HGKS7TBixrek",
  // authDomain: "sarvarakshana-development.firebaseapp.com",
  // databaseURL: "https://sarvarakshana-development-default-rtdb.firebaseio.com",
  // projectId: "sarvarakshana-development",
  // storageBucket: "sarvarakshana-development.appspot.com",
  // messagingSenderId: "345813046788",
  // appId: "1:345813046788:web:a43b5531f81f21c8e90751",
  // measurementId: "G-D9PJ9QT6C7"
};

/**
 * @function init_echarts
 * @returns initializes charts
 */
function init_echarts() {

  if (typeof (echarts) === 'undefined') { return; }
  // console.log('init_echarts');
  var theme = {
    color: [
      '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
      '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
    ],

    title: {
      itemGap: 8,
      textStyle: {
        fontWeight: 'normal',
        color: '#408829'
      }
    },

    dataRange: {
      color: ['#1f610a', '#97b58d']
    },

    toolbox: {
      color: ['#408829', '#408829', '#408829', '#408829']
    },

    tooltip: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#408829',
          type: 'dashed'
        },
        crossStyle: {
          color: '#408829'
        },
        shadowStyle: {
          color: 'rgba(200,200,200,0.3)'
        }
      }
    },

    dataZoom: {
      dataBackgroundColor: '#eee',
      fillerColor: 'rgba(64,136,41,0.2)',
      handleColor: '#408829'
    },
    grid: {
      borderWidth: 0
    },

    categoryAxis: {
      axisLine: {
        lineStyle: {
          color: '#408829'
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#eee']
        }
      }
    },

    valueAxis: {
      axisLine: {
        lineStyle: {
          color: '#408829'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#eee']
        }
      }
    },
    timeline: {
      lineStyle: {
        color: '#408829'
      },
      controlStyle: {
        normal: { color: '#408829' },
        emphasis: { color: '#408829' }
      }
    },

    k: {
      itemStyle: {
        normal: {
          color: '#68a54a',
          color0: '#a9cba2',
          lineStyle: {
            width: 1,
            color: '#408829',
            color0: '#86b379'
          }
        }
      }
    },
    map: {
      itemStyle: {
        normal: {
          areaStyle: {
            color: '#ddd'
          },
          label: {
            textStyle: {
              color: '#c12e34'
            }
          }
        },
        emphasis: {
          areaStyle: {
            color: '#99d2dd'
          },
          label: {
            textStyle: {
              color: '#c12e34'
            }
          }
        }
      }
    },
    force: {
      itemStyle: {
        normal: {
          linkStyle: {
            strokeColor: '#408829'
          }
        }
      }
    },
    chord: {
      padding: 4,
      itemStyle: {
        normal: {
          lineStyle: {
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)'
          },
          chordStyle: {
            lineStyle: {
              width: 1,
              color: 'rgba(128, 128, 128, 0.5)'
            }
          }
        },
        emphasis: {
          lineStyle: {
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)'
          },
          chordStyle: {
            lineStyle: {
              width: 1,
              color: 'rgba(128, 128, 128, 0.5)'
            }
          }
        }
      }
    },
    gauge: {
      startAngle: 225,
      endAngle: -45,
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
          width: 8
        }
      },
      axisTick: {
        splitNumber: 10,
        length: 12,
        lineStyle: {
          color: 'auto'
        }
      },
      axisLabel: {
        textStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        length: 18,
        lineStyle: {
          color: 'auto'
        }
      },
      pointer: {
        length: '90%',
        color: 'auto'
      },
      title: {
        textStyle: {
          color: '#333'
        }
      },
      detail: {
        textStyle: {
          color: 'auto'
        }
      }
    },
    textStyle: {
      fontFamily: 'Arial, Verdana, sans-serif'
    }
  };
}

var fb = firebase.initializeApp(firebaseConfig);
/**
 * @function initialize
 * Initialises the firebase instance and 
 * fetches the field worker ids and names from 
 * node ashaworkers 
 */
initialize();
function initialize() {

  var tp;
  var icp;
  var cp;

  // var fwids = fb.database().ref("field_worker");
  // fwids.once("value").then(snap => {
  //   if (snap.val() != null) {
  //     var fwname = [];
  //     var fwid = [];

  //     // Add 'All' option manually
  //     fwid.push("All");
  //     fwname.push("All");

  //     snap.forEach((data) => {
  //       let awid = JSON.stringify(data.val(), null, 2);
  //       let awid1 = JSON.parse(awid);

  //       // If the name is 'kaivara', set it to 'All' (though it's handled above)
  //       if (awid1.name == "kaivara") {
  //         awid1.name = "All";
  //         awid1.fw_id = "All";
  //       }

  //       fwid.push(awid1.fw_id);
  //       fwname.push(awid1.name);
  //     });

  //     var list = document.getElementById("fieldworker");

  //     // Clear existing options before populating new ones
  //     list.options.length = 0;

  //     // Populate the select element with options
  //     for (var x in fwname) {
  //       list.options[list.options.length] = new Option(fwname[x], fwid[x]);
  //     }
  //   }
  // });

  // var form1ids = fb.database().ref('Form_1');
  // form1ids.once("value").then(snap => {
  //   if (snap.val() != null) {
  //     let uuidTimestampArray = [];

  //     snap.forEach((data) => {
  //       let uuid = data.key;  // UUID is the key here
  //       let timestamps = data.val();

  //       // Iterate through each timestamp key
  //       for (let timestamp in timestamps) {
  //         if (timestamps.hasOwnProperty(timestamp)) {
  //           // Store the UUID and timestamp correctly
  //           uuidTimestampArray.push({ uuid: uuid, timestamp: timestamp });
  //         }
  //       }
  //     });

  //     // Print the array of UUIDs and timestamps
  //     console.log("Form-1 UUIDs and Timestamp",uuidTimestampArray);
  //   }
  // });

  // var patientsData = fb.database().ref('patients');

  // function fetchAndMatchPatientData(selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  //   var patientsData = fb.database().ref('patients');

  //   patientsData.once("value").then(snapshot => {
  //     if (snapshot.val() != null) {
  //       let phase1UUIDs = [];
  //       let phase2UUIDs = [];

  //       snapshot.forEach(patientSnap => {
  //         let patient = patientSnap.val();
  //         let patientUUID = patientSnap.key;

  //         // Filter based on selected fields
  //         if ((selectedFieldworker === 'All' || patient.fieldworker === selectedFieldworker) &&
  //             (selectedPanchayat === 'All' || patient.panchayat === selectedPanchayat) &&
  //             (selectedVillage === 'All' || patient.village === selectedVillage)) {

  //           // Find matching entries in uuidTimestampArray for this patient
  //           let matchedEntries = uuidTimestampArray.filter(entry => entry.uuid === patientUUID);

  //           if (selectedPhase === 'All') {
  //             // For "All" phase, get the latest timestamp
  //             let latestEntry = matchedEntries.reduce((latest, current) => {
  //               return new Date(current.timestamp) > new Date(latest.timestamp) ? current : latest;
  //             }, matchedEntries[0]);

  //             if (latestEntry) {
  //               if (new Date(latestEntry.timestamp).getFullYear() < 2024) {
  //                 phase1UUIDs.push(latestEntry.uuid);
  //               } else {
  //                 phase2UUIDs.push(latestEntry.uuid);
  //               }
  //             }
  //           } else {
  //             // Separate based on specific phase
  //             matchedEntries.forEach(entry => {
  //               if (new Date(entry.timestamp).getFullYear() < 2024) {
  //                 phase1UUIDs.push(entry.uuid);
  //               } else {
  //                 phase2UUIDs.push(entry.uuid);
  //               }
  //             });
  //           }
  //         }
  //       });

  //       // Log the results based on the selected phase
  //       if (selectedPhase === '1') {
  //         console.log('Phase 1 UUIDs:', phase1UUIDs);
  //       } else if (selectedPhase === '2') {
  //         console.log('Phase 2 UUIDs:', phase2UUIDs);
  //       } else {
  //         console.log('Phase 1 UUIDs:', phase1UUIDs);
  //         console.log('Phase 2 UUIDs:', phase2UUIDs);
  //       }
  //     } else {
  //       console.log('No patient data available.');
  //     }
  //   }).catch(error => {
  //     console.error('Error fetching patient data:', error);
  //   });
  // }

  var fwids = fb.database().ref("field_worker");
  fwids.once("value").then(snap => {
    if (snap.val() != null) {
      var fwname = [];
      var fwid = [];

      // Add 'All' option manually

      fwid.push("Select");
      fwname.push("Select");
      fwid.push("All");
      fwname.push("All");

      snap.forEach((data) => {
        let awid = JSON.stringify(data.val(), null, 2);
        let awid1 = JSON.parse(awid);

        // If the name is 'kaivara', set it to 'All' (though it's handled above)
        if (awid1.name == "kaivara") {
          awid1.name = "All";
          awid1.fw_id = "All";
        }

        if (!awid1.name.startsWith("FW_")) {
          fwid.push(awid1.fw_id);
          fwname.push(awid1.name);
        }
        // fwid.push(awid1.fw_id);
        // fwname.push(awid1.name);
      });

      var list = document.getElementById("fieldworker");

      // Clear existing options before populating new ones
      list.options.length = 0;

      // Populate the select element with options
      for (var x in fwname) {
        list.options[list.options.length] = new Option(fwname[x], fwid[x]);
      }
      console.log("Field Worker IDs:", fwid);
    }
  });

  var panchayatRef = fb.database().ref("panchayats");
  panchayatRef.once("value").then(snap => {
    if (snap.val() != null) {
      var panchayatNames = [];
      var panchayatIds = [];

      panchayatIds.push("Select");
      panchayatNames.push("Select");
      panchayatIds.push("All");
      panchayatNames.push("All");

      snap.forEach((data) => {
        let panchayatData = JSON.stringify(data.val(), null, 2);
        let panchayatObj = JSON.parse(panchayatData);

        // Check for specific name and modify if necessary
        if (panchayatObj.pchname == "All") {
          panchayatObj.pchname = "All";
          panchayatObj.pchid = "All";
        }

        panchayatIds.push(panchayatObj.pchid);
        panchayatNames.push(panchayatObj.pchname);
      });
      var list = []
      var list = document.getElementById("panchayat");

      list.options.length = 0;

      for (var x in panchayatNames) {
        list.options[list.options.length] = new Option(panchayatNames[x], panchayatIds[x]);
      }
      list.addEventListener('change', function () {
        var selectedPanchayatId = this.value;
        fetchVillages(selectedPanchayatId);
      });

    }
  });
  function fetchVillages(panchayatId) {
    var villageRef = fb.database().ref("villages");
    villageRef.once("value").then(snap => {
      if (snap.val() != null) {
        var villageNames = [];
        var villageIds = [];
        // if (panchayatId === "All") {
        //   villageIds.push("All");
        //   villageNames.push("All");
        // }
        villageIds.push("All");
        villageNames.push("All");
        snap.forEach((data) => {
          let villageData = JSON.stringify(data.val(), null, 2);
          let villageObj = JSON.parse(villageData);

          if (villageObj.pchid === panchayatId) {
            if (villageObj.name === "All") {
              villageObj.name = "All";
              villageObj.vid = "All";
            }

            villageIds.push(villageObj.vid);
            villageNames.push(villageObj.name);
          }
        });

        var villageList = document.getElementById("village");
        villageList.options.length = 0; // Clear existing options

        for (var x in villageNames) {
          villageList.options.length = x;
          villageList.options[villageList.options.length] = new Option(villageNames[x], villageIds[x]);
        }
      }
    });
  }
}

var object = [];
var form1obj = [];
var form2obj = [];
var form3obj = [];
var locationobj = [];
var scrhis = [];
/**
* @function fetchdata
* @param {string} fwid fieldworkerid
* @param {string} panchyatid panchayatid
* @param {string} vid villageid
* @param {date} date screening date
* @returns filtered array based on selection criteria
* @returns data from nodes Form_1, Form_2, Form_3,Location, Screening history 
*/
async function fetchdata(fwid, panchyatid, vid, date) {
  object = [];
  form1obj = [];
  form2obj = [];
  form3obj = [];
  locationobj = [];
  scrhis = [];
  console.log("before fetchdata", new Date().getTime())
  document.getElementById("loading").style.display = 'block';
  document.getElementById("daterange").disabled = true;
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = true;

  //console.log("in index",fwid,panchyatid,vid,date);
  var parray = [];
  console.log("before retrieve form1 obj", new Date().getTime())
  var form1 = fb.database().ref("Form_1")
  await form1.once("value").then(snap => {
    if (snap.val() != null) {
      console.log("after retrieve form1 obj", new Date().getTime())
      console.log("before save form1 obj", new Date().getTime())
      form1obj.push(snap.val());
      console.log("after save form1 obj", new Date().getTime(),)
    }
  })

  //console.log("after retrieve form1 obj",new Date().getTime())
  console.log("before retrieve form2 obj", new Date().getTime())
  var form2 = fb.database().ref("Form_2")
  await form2.once("value").then(snap => {
    if (snap.val() != null) {
      console.log("after retrieve form2 obj", new Date().getTime())
      console.log("before form2 push obj", new Date().getTime())
      form2obj.push(snap.val());
      console.log("after form2 push obj", new Date().getTime())
    }
  })
  // console.log("after retrieve form2 obj",new Date().getTime())
  console.log("before retrieve form3 obj", new Date().getTime())
  var form3 = fb.database().ref("Form_3")
  await form3.once("value").then(snap => {
    if (snap.val() != null) {
      console.log("after retrieve form3 obj", new Date().getTime())
      console.log("before save form3 obj", new Date().getTime())
      form3obj.push(snap.val());
      console.log("after save form3 obj", new Date().getTime())
    }
  })
  //console.log("after retrieve form3 obj",new Date().getTime())
  console.log("before retrieve location obj", new Date().getTime())
  var location = fb.database().ref("Location")
  await location.once("value").then(snap => {
    if (snap.val() != null) {
      console.log("after retrieve location obj", new Date().getTime())
      console.log("before save location obj", new Date().getTime())
      locationobj.push(snap.val());
      console.log("after save location obj", new Date().getTime())
    }
  })

  console.log("before retrieve scrhis obj", new Date().getTime())
  var screening_history = fb.database().ref("screening_history")
  await screening_history.once("value").then(snap => {
    if (snap.val() != null) {
      console.log("after retrieve scrhis obj", new Date().getTime())
      console.log("before scrhis push obj", new Date().getTime())
      scrhis.push(snap.val());
      console.log("after scrhis push obj", new Date().getTime())
    }
  })
  // console.log("after scr his",new Date().getTime())
  console.log("before retrieve patients", new Date().getTime())
  var patients = fb.database().ref("patients")
  await patients.once("value").then(snap => {
    if (snap.val() != null) {
      console.log("after retrieve patients", new Date().getTime())
      console.log("before save patients", new Date().getTime())
      object.push(snap.val());
      console.log("after save patients", new Date().getTime())
      //console.log("after retrieve patients",object)
      console.log("before filtering patients", new Date().getTime())
      snap.forEach((data) => {
        var newstartDate;
        var newenddate;
        var scrDate;
        let pid = JSON.stringify(data.val(), null, 2);
        let pid1 = JSON.parse(pid);
        var screeningdate = pid1.last_screening;
        var gender = pid1.gender;
        var age = pid1.age;
        var puuid = pid1.uid;
        //  console.log("puid",puuid);
        if (screeningdate == "") {
          scrDate = "undefined";
        }
        else {
          var scrdate = screeningdate.split("/");
          var splitsrcdate = new Date(scrdate[2], parseInt(scrdate[1], 10) - 1, scrdate[0]);
          scrDate = splitsrcdate.getTime() / 1000;
          scrDate = scrDate + 18000;
        }

        if (date == "Day") {
          newenddate = Math.round(new Date().getTime() / 1000);
          newstartDate = (newenddate - 86400);
          //("cd ",newstartDate,newenddate);
        }
        else if (date == "Week") {
          newenddate = Math.round(new Date().getTime() / 1000);
          newstartDate = (newenddate - 604800);
          //  console.log("cd ",newstartDate,newenddate);
        }
        else if ((date == "Custom") || (date == "All")) {
          var startdate = document.getElementById("start");
          startdate = startdate.value;
          var enddate = document.getElementById("stop");
          enddate = enddate.value;
          //   console.log("start date ",startdate, enddate);

          startdate = startdate.split("-");
          var startdate1 = startdate + " " + "00:00:00";
          //  console.log("start date before  conversion",startdate1);
          newstartDate = new Date(startdate1);
          newstartDate = Math.round(newstartDate.getTime() / 1000);
          //  console.log("start date after conversion",newstartDate);
          enddate = enddate.split("-");
          var enddate1 = enddate + " " + "23:59:00";
          //  console.log("end date before conversion",enddate1);
          newenddate = new Date(enddate1);
          newenddate = Math.round(newenddate.getTime() / 1000);
          //  console.log("end date after conversion",newenddate);
        }
        if (scrDate == "undefined") {
          //console.log("No screening date");
        }
        else {
          // console.log("shankara",pid1.panchayat_name);
          if (((pid1.field_worker_id == fwid) || (fwid == "All") || (fwid == "")) && ((pid1.panchayat_name == panchyatid) || ((pid1.panchayat_name != "shankara") && (panchyatid == "All")))
            && ((pid1.village_name == vid) || ((vid == "All") && (pid1.village_name != "shankara"))) && ((scrDate >= newstartDate) && (scrDate <= newenddate))) {
            //  console.log("key",data.key);
            parray.push(data.key);
          }
          else {
            //console.log("No data matched");
          }

        }
      })
      console.log("after filtering patients", new Date().getTime(), parray.length)
      // console.log("after loop patients", new Date().getTime())
      if (parray.length > 0) {
        findtotalpopulation(parray);
      }
      else {
        tp = document.getElementById("tp");
        icp = document.getElementById("icp");
        cp = document.getElementById("cp");
        tp.textContent = 0;
        icp.textContent = 0;
        cp.textContent = 0;

        cormobidityReview("", "", "", "", "", "");
        habitsSummary("", "", "", "", "", "");
        genderStatistics("", "");
        agegroupgraph("", "", "", "", "", "");
        initMap(0, 0);
        reviewPercentage("");
        recommendPercentage("", "", "", "", "");
        inpersonpercentage("");
        inpersonrecommendPercentage("", "", "", "");
        plotphotocapture("", "", "");
        plotphotocapturein("", "", "");
        plotscreeninghistory(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

        document.getElementById("loading").style.display = 'none';
      }
    }
  })
  console.log("after fetchdata", new Date().getTime())
}

/**
 * Function to fetch the male and female percentage
 * from the filtered array 
 * @param {Array} parray filtered list of ids
 * @returns male and female array
 */
async function findmalefemale(parray) {
  console.log("before retrieve gender", new Date().getTime())
  var marray = 0;
  var farrray = 0;
  var pid;
  var parsedJson = JSON.stringify(object[0]);
  var obj = JSON.parse(parsedJson)
  const map = new Map(Object.entries(obj));

  //  console.log("length of patients",parray.length);
  for (var i = 0; i < parray.length; i++) {
    //console.log("object",object[0])
    var key;
    var v;
    // if(map.has(parray[i])){
    for (const [key, value] of map) {
      if (key == parray[i]) {
        // Using the default iterator (could be `map.entries()` instead)
        v = value;
        // console.log("compare ids",v.gender);
        switch (v.gender) {
          case "Male":
            {
              marray = marray + 1;
              break;
            }
          case "Female":
            {
              farrray = farrray + 1;
              break;
            }
        }
      }
      //}
    }
  }


  //console.log("marray length",marray,farrray);
  marray = Math.round((marray / parray.length) * 100);
  farrray = Math.round((farrray / parray.length) * 100);
  //  console.log("after retrieve gender",new Date().getTime())
  genderStatistics(marray, farrray);
}


/**
 * Function to fetch the total population
 * screened by the fieldworker
 * @param {Array} parray filtered list of ids
 * @returns total population,comorbidities and habits
 */
console.log("before findtotalpopulation", new Date().getTime())
async function findtotalpopulation(parray) {
  // console.log("in find population", new Date().getTime())
  var patientsurveyed = 0;
  var totalpopulation = 0;
  var diabetesper = 0;
  var hypertension = 0;
  var cancerper = 0;
  var alcoholper = 0;
  var tobaccoyesper = 0;
  var tobaccoy = 0;
  var tobacconotnowper = 0;
  var tobacconn = 0;
  var notobacco = 0;
  var tobaccon = 0;
  var alcoholnotnowper = 0;
  var noalcohol = 0;
  var nobp = 0;
  var nodb = 0;
  var nocancer = 0;
  var form1array = [];

  //newly added

  var notobaccoid = [];
  var tobaccoid = [];
  var tobaccoabsentid = [];


  var parsedJson = JSON.stringify(form1obj[0]);
  var obj = JSON.parse(parsedJson)
  //console.log("obj",obj);

  const map = new Map(Object.entries(obj));
  var keysarr = "";
  keysarr = Array.from(map.keys());
  //console.log("uids",keysarr);
  var valuesarr = "";
  valuesarr = Array.from(map.values());

  // console.log("in find population before loop", new Date().getTime())
  console.log("before comorbidities and habits form push", new Date().getTime(), parray.length)
  for (var i = 0; i < parray.length; i++) {
    var parsedJson1;
    var obj1;
    //console.log("length",parray[i]);
    if (map.has(parray[i])) {
      //  let length = recursiveBS(keysarr, parray[i], 0, keysarr.length - 1); 
      let length = binarySearch(keysarr, parray[i])
      {
        console.log("in habit ids", length, keysarr[length]);
        patientsurveyed = patientsurveyed + 1;
        let value = valuesarr[length];
        //let value = valuesarr[j];
        parsedJson1 = JSON.stringify(value);
        obj1 = JSON.parse(parsedJson1)
        const map1 = new Map(Object.entries(obj1));
        let lastKey = [...map1.keys()].pop();
        let lastValue = map1.get(lastKey);
        //console.log("lastValue",lastValue);
        if (lastValue.cancer_present == "Yes") {
          cancerper = cancerper + 1;
        }
        else if ((lastValue.cancer_present == "No") || (lastValue.cancer_present == "")) {
          nocancer = nocancer + 1;
        }
        if (lastValue.diabeties_present == "Yes") {
          diabetesper = diabetesper + 1;
        }
        else if ((lastValue.diabeties_present == "No") || (lastValue.diabeties_present == "")) {
          nodb = nodb + 1;
        }
        if (lastValue.hypertension_present == "Yes") {
          hypertension = hypertension + 1;
        }
        else if ((lastValue.hypertension_present == "No") || (lastValue.hypertension_present == "")) {
          nobp = nobp + 1;
        }
        if (lastValue.currently_use_tobacco_in_any_form == "Yes") {
          tobaccoy = tobaccoy + 1;
          tobaccoid.push(parray[i]);
        }
        else if (lastValue.currently_use_tobacco_in_any_form == "Not Now") {
          tobacconn = tobacconn + 1;
          tobaccoid.push(parray[i]);
        }
        else if ((lastValue.currently_use_tobacco_in_any_form == "Absent")) {
          tobaccon = tobaccon + 1;
          notobaccoid.push(parray[i]);
        }
        else if ((lastValue.currently_use_tobacco_in_any_form == "Never") || (lastValue.currently_use_tobacco_in_any_form == "")) {
          notobacco = notobacco + 1;
          notobaccoid.push(parray[i]);
        }
        if (lastValue.alcohol_consumption_status == "yes") {
          alcoholper = alcoholper + 1;
        }
        else if (lastValue.alcohol_consumption_status == "Not now") {
          alcoholnotnowper = alcoholnotnowper + 1;
        }
        else if ((lastValue.alcohol_consumption_status == "Absent") || (lastValue.alcohol_consumption_status == "Never") || (lastValue.alcohol_consumption_status == "")) {
          noalcohol = noalcohol + 1;
        }
        form1array.push(parray[i]);
      }
    }
  }


  //console.log("form1array length ", form1array.length)
  totalpopulation = patientsurveyed;
  tp = document.getElementById("tp");
  tp.textContent = totalpopulation;
  diabetesper = Math.round((diabetesper / patientsurveyed) * 100);
  cancerper = Math.round((cancerper / patientsurveyed) * 100);
  hypertension = Math.round((hypertension / patientsurveyed) * 100);
  nocancer = Math.round((nocancer / patientsurveyed) * 100);
  nodb = Math.round((nodb / patientsurveyed) * 100);
  nobp = Math.round((nobp / patientsurveyed) * 100);
  tobaccoyesper = Math.round((tobaccoy / patientsurveyed) * 100);
  tobacconotnowper = Math.round((tobacconn / patientsurveyed) * 100);
  notobacco = Math.round(((tobaccon + notobacco) / patientsurveyed) * 100);
  alcoholper = Math.round((alcoholper / patientsurveyed) * 100);
  alcoholnotnowper = Math.round((alcoholnotnowper / patientsurveyed) * 100);
  noalcohol = Math.round((noalcohol / patientsurveyed) * 100);
  //console.log("after commodity and habits process",new Date().getTime())
  findmalefemale(form1array);
  agegroupstatistics(form1array);
  findlocation(form1array);
  cormobidityReview(diabetesper, hypertension, cancerper, nocancer, nodb, nobp);
  habitsSummary(tobaccoyesper, tobacconotnowper, notobacco, alcoholper, alcoholnotnowper, noalcohol)
  //  console.log("after plotting habitsummary",new Date().getTime())
  reviewSummary(form1array);
  inpersonSummary(form1array);
  findtimestatistics(notobaccoid, tobaccoid);
  //newly added
  // console.log("tobacco individuals",tobaccoid.length);
  photocapture(tobaccoid);
  photocaptureinperson(tobaccoid);
}
console.log("after findtotalpopulation", new Date().getTime())

/**
 * Binary Search
 * from the filtered array 
 * @param {Array} arr filtered list of ids
 * @param {String} target id to search 
 * @returns position of the target element
 */
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let currentString = arr[mid];//.substring(0, 3);

    if (currentString === target) {
      console.log("currentstr", mid);
      return mid; // Found the target
    } else if (currentString < target) {
      console.log("lessthan", currentString, target, low, mid);
      low = mid + 1;
    } else {
      console.log(">", currentString, target, low, mid);
      high = mid - 1;
    }
  }

  return -1; // Target not found
}

/**
 * Function to find the percentage of photos reviewed 
 * of the tobacco individuals
 * @param {Array} tobacco list of ids who tobacco usage is yes or not now
 * @returns percentage of photos reviewed Remotely
 */
console.log("before photocapture", new Date().getTime())
async function photocapture(tobacco) {
  var totalphotos = 0;
  var tp = 0;
  var normalper = 0;
  var notclear = 0;
  var photoreview = [];

  var abnormal = 0;
  console.log("before photocapture", new Date().getTime())
  var parsedJson = JSON.stringify(form2obj[0]);
  var obj = JSON.parse(parsedJson)
  const map = new Map(Object.entries(obj));

  // console.log("tobacco length",tobacco.length);
  for (var i = 0; i < tobacco.length; i++) {
    if (map.has(tobacco[i])) {
      // console.log("photocapture dataset 1 ",tobacco[i] )

      let v = map.get(tobacco[i])
      // console.log("photos",v);
      photoreview = Object.entries(v);
      if (photoreview[0][1].photos_review == undefined) {
        continue;
      }
      //  console.log("photocapture dataset 1 ",v,tobacco[i] ,photoreview,photoreview[0][1].photos_review.length);
      if (photoreview[0][1].photos_review.length > 1) {
        totalphotos = totalphotos + photoreview[0][1].photos_review.length;
      }
      //}
      for (var j = 0; j < photoreview[0][1].photos_review.length; j++) {
        if (photoreview[0][1].photos_review[j].includes("123")) {
          console.log("123");
          //normalper = normalper + 1;
        }
        else if (photoreview[0][1].photos_review[j].includes("Normal")) {
          normalper = normalper + 1;
        }
        else if (photoreview[0][1].photos_review[j].includes("Not clear/visible") || photoreview[0][1].photos_review[j].includes("Wrong site")) {
          notclear = notclear + 1;
        }
        else {
          abnormal = abnormal + 1;
        }
      }

    }
    else {
      console.log("No data");
    }


    tp = totalphotos;
  }

  // console.log("after photocapture",new Date().getTime())
  var tabnormal = 0;
  var tntclear = 0;
  var tnormal = 0;
  tabnormal = Math.round((abnormal / tp) * 100);
  tntclear = Math.round((notclear / tp) * 100);
  tnormal = Math.round((normalper / tp) * 100);
  //console.log("photocapture ",tp,tabnormal,tnormal,tntclear);
  cp = document.getElementById("cp");
  cp.textContent = tp;
  plotphotocapture(tabnormal, tnormal, tntclear);
}
//console.log("after photocapture",new Date().getTime())
/**
 * Function to find the percentage of photos reviewed 
 * of the tobacco individuals
 * @param {Array} tobacco list of ids who tobacco usage is yes or not now
 * @returns percentage of photos reviewed Inperson
 */
console.log("before photocaptureinperson", new Date().getTime())
async function photocaptureinperson(tobacco) {
  var totalphotos = 0;
  var tp = 0;
  var normalper = 0;
  var notclear = 0;
  var photoreview = [];

  var abnormal = 0;
  //  console.log("before photocaptureinperson",new Date().getTime())
  var parsedJson = JSON.stringify(form3obj[0]);
  var obj = JSON.parse(parsedJson)
  const map = new Map(Object.entries(obj));

  for (var i = 0; i < tobacco.length; i++) {
    if (map.has(tobacco[i])) {
      //console.log("photocapture form3 1 ",tobacco[i] )

      let v = map.get(tobacco[i]);
      photoreview = Object.entries(v);
      // console.log("photocapture dataset 1 ",photoreview,tobacco[i],photoreview[0][1].photos_review.length);

      if (photoreview[0][1].photos_review.length > 1) {
        totalphotos = totalphotos + photoreview[0][1].photos_review.length;
      }
      for (var j = 0; j < photoreview[0][1].photos_review.length; j++) {

        //  console.log("photoreview dataset",photoreview[0][1].photos_review,photoreview.length);
        if (photoreview[0][1].photos_review[j].includes("123")) {
          console.log("123");
          //normalper = normalper + 1;
        }
        else if (photoreview[0][1].photos_review[j].includes("Normal")) {
          normalper = normalper + 1;
        }
        else if (photoreview[0][1].photos_review[j].includes("Not clear/visible") || photoreview[0][1].photos_review[j].includes("Wrong site")) {
          notclear = notclear + 1;
        }
        else {
          abnormal = abnormal + 1;
        }
      }

    }

    tp = totalphotos;
  }
  //console.log("after photocaptureinperson",new Date().getTime())
  var tabnormal = 0;
  var tntclear = 0;
  var tnormal = 0;
  tabnormal = Math.round((abnormal / tp) * 100);
  tntclear = Math.round((notclear / tp) * 100);
  tnormal = Math.round((normalper / tp) * 100);
  //console.log("photocapture ",tp,tabnormal,tnormal,tntclear);
  icp = document.getElementById("icp");
  icp.textContent = tp;
  plotphotocapturein(tabnormal, tnormal, tntclear);
}
//console.log("after photocaptureinperson",new Date().getTime())
/**
 * Function to find the timetaken by the fieldworker
 * for capturing the data for individuals not present,
 * Tobacco individuals, Inviduals who doesnt use tobacco
 * @param {Array} notobacco list of ids who dont use tobacco.
 * @param {Array} tobaccoyes list of ids who use tobacco
 * @returns minimum time, maximum time,average time and standard deviation
 */
console.log("before findtimestatistics", new Date().getTime())
async function findtimestatistics(notobacco, tobaccoyes) {
  console.log("before timestatistics", new Date().getTime())
  var timetakennotobacco = [];
  var patientabsent = [];
  var patientwthnotobacco = [];
  var patientwthtobacco = [];
  var tttobaccoabsent = [];
  var tttobacco = [];
  // console.log("no tobacco",notobacco.length)
  var parsedJson = JSON.stringify(object[0]);
  var obj = JSON.parse(parsedJson)
  const map = new Map(Object.entries(obj));


  for (var i = 0; i < notobacco.length; i++) {
    if (map.has(notobacco[i])) {
      let v = map.get(notobacco[i])
      // console.log(" no toba v",v);
      // const map1 = new Map(Object.entries(v));
      // let lastKey =  [...map1.keys()].pop();
      //  let lastValue = map1.get(lastKey)
      if (v.status == "absent") {
        patientabsent.push(notobacco[i])
      }
      else if (v.status == "In person") {
        patientwthnotobacco.push(notobacco[i])
      }
    }

  }
  //}
  var parsedJson = JSON.stringify(object[0]);
  var obj = JSON.parse(parsedJson)
  const tmap = new Map(Object.entries(obj));
  // console.log("tobacco yes",tobaccoyes.length)
  for (var i = 0; i < tobaccoyes.length; i++) {

    var key;
    //var v;
    if (tmap.has(tobaccoyes[i])) {
      //for (const [key, v] of map) { 
      // Using the default iterator (could be `map.entries()` instead)
      let v = tmap.get(tobaccoyes[i]);
      //console.log("tobac v",v);
      // const map1 = new Map(Object.entries(v));
      //  let lastKey =  [...map1.keys()].pop();
      //   let lastValue = map1.get(lastKey)
      if (v.status == "absent") {
        patientabsent.push(tobaccoyes[i])
      }
      else if (v.status == "In person") {
        patientwthtobacco.push(tobaccoyes[i])
      }
    }


  }
  //}
  // })
  var parsedJson = JSON.stringify(scrhis[0]);
  var obj = JSON.parse(parsedJson)
  const amap = new Map(Object.entries(obj));
  // console.log("patient absent",patientabsent.length); 
  for (var i = 0; i < patientabsent.length; i++) {


    //  console.log("patient absent",patientabsent[i])
    if (amap.has(patientabsent[i])) {
      v = amap.get(patientabsent[i])

      // for(const[key,value] of map)
      // {
      // if(key == patientabsent[i])
      // {
      const map1 = new Map(Object.entries(v));
      let lastKey = [...map1.keys()].pop();
      let lastValue = map1.get(lastKey);
      // console.log("value",lastValue);
      tttobaccoabsent.push((lastValue.end_time / 60) - (lastValue.start_time / 60));
      //console.log("tobabs",tttobaccoabsent)
    }
  }
  //  console.log("map scr his",map);

  // var form1 = fb.database().ref("screening_history").child(patientabsent[i]).limitToLast(1)
  //   await form1.once("value").then(snap =>{ 
  //     if(snap.val()!=null){
  //     snap.forEach((data)=>{

  //       let pdata = JSON.stringify(data, null, 2);
  //       let dataset = JSON.parse(pdata);
  // console.log("dataset",dataset.end_time, dataset.start_time);

  //})
  //}
  //})
  //}

  var mintimeta = 0;
  var maxtimeta = 0;
  //console.log("tobacco absent array",tttobaccoabsent);
  if (tttobaccoabsent.length > 0) {
    mintimeta = Math.min.apply(Math, tttobaccoabsent).toFixed(2);
    maxtimeta = Math.max.apply(Math, tttobaccoabsent).toFixed(2);
  }
  else {
    mintimeta = 0;
    maxtimeta = 0;
  }


  var timetaken = 0;
  var avgtimeta = 0;
  var sdta = 0;
  var sd = 0;
  for (var j = 0; j < tttobaccoabsent.length; j++) {

    timetaken = timetaken + tttobaccoabsent[j];


  }

  if (timetaken > 0) {
    avgtimeta = (timetaken / tttobaccoabsent.length).toFixed(2);
  }
  else {
    avgtimeta = 0
  }

  sdta = getStandardDeviation(tttobaccoabsent).toFixed(2);//(sdta/tttobaccoabsent.length).toFixed(2);
  var parsedJson = JSON.stringify(scrhis[0]);
  var obj = JSON.parse(parsedJson)
  const smap = new Map(Object.entries(obj));
  //Patient with no tobacco
  for (var i = 0; i < patientwthnotobacco.length; i++) {


    if (smap.has(patientwthnotobacco[i])) {

      let value = smap.get(patientwthnotobacco[i])
      const map1 = new Map(Object.entries(value));

      // console.log("map1",map1);
      let lastKey = [...map1.keys()].pop();
      let lastValue = map1.get(lastKey);
      //console.log("id tob",patientwthnotobacco[i]);
      // console.log("las",lastValue);
      //console.log("endtime",lastValue.end_time/60 , lastValue.start_time/60);
      timetakennotobacco.push((lastValue.end_time / 60) - (lastValue.start_time / 60));
      // console.log("tono babs",timetakennotobacco)
      // }
    }


  }

  // }
  var mintiment;
  var maxtiment;
  if (timetakennotobacco.length > 0) {
    mintiment = Math.min.apply(Math, timetakennotobacco).toFixed(2);
    maxtiment = Math.max.apply(Math, timetakennotobacco).toFixed(2);
  }
  else {
    mintiment = 0;
    maxtiment = 0;
  }
  var sd = 0;
  var sdnt = 0;
  var timetakennt = 0;
  for (var j = 0; j < timetakennotobacco.length; j++) {
    timetakennt = timetakennt + timetakennotobacco[j];
  }
  var avgtiment = Math.round(timetakennt / timetakennotobacco.length);
  sdnt = getStandardDeviation(timetakennotobacco).toFixed(2);
  // for(var j=0;j<timetakennotobacco.length;j++)
  //  {
  //     sd = ((timetakennotobacco[j] - avgtiment) * (timetakennotobacco[j] - avgtiment))
  //     sdnt = sdnt + sd; 
  //  }
  //  console.log("sdta",sdnt);
  //  sdnt = (sdnt/timetakennotobacco.length).toFixed(2);
  //console.log("sdta",sdnt);

  var parsedJson = JSON.stringify(scrhis[0]);
  var obj = JSON.parse(parsedJson)
  const tomap = new Map(Object.entries(obj));
  //    //Patient with tobacco
  for (var i = 0; i < patientwthtobacco.length; i++) {


    //console.log("patient absent",patientwthtobacco[i])
    if (tomap.has(patientwthtobacco[i])) {
      let value = tomap.get(patientwthtobacco[i])
      // for(const[key,value] of map)
      // {
      //     if(key == patientwthtobacco[i])
      //     {
      const map1 = new Map(Object.entries(value));
      let lastKey = [...map1.keys()].pop();
      let lastValue = map1.get(lastKey);
      // console.log("id",patientwthtobacco[i]);
      //  console.log("value",lastValue);
      //   console.log((lastValue.end_time/60) - (lastValue.start_time/60))
      // console.log("patientwthtobacco endtime",lastValue.end_time/60 , lastValue.start_time/60);
      tttobacco.push((lastValue.end_time / 60) - (lastValue.start_time / 60));
      // console.log("toba",tttobacco)
      //}
    }
    //  tttobacco.push(((dataset.end_time)/60) - ((dataset.start_time)/60));

    //  })
  }
  //})

  //}

  var mintimety = 0;
  var maxtimety = 0;

  if (tttobacco.length > 0) {
    mintimety = Math.min.apply(Math, tttobacco).toFixed(2);
    maxtimety = Math.max.apply(Math, tttobacco).toFixed(2);
  }
  else {
    mintimety = 0;
    maxtimety = 0;
  }

  var sd = 0;
  var sdty = 0;//Math.round((mintimety+maxtimety)/2);
  var timetakenty = 0;
  for (var j = 0; j < tttobacco.length; j++) {
    timetakenty = timetakenty + tttobacco[j];
  }
  var avgtimety = (timetakenty / tttobacco.length).toFixed(2);

  sdty = getStandardDeviation(tttobacco).toFixed(2);


  plotscreeninghistory(mintiment, maxtiment, avgtiment, mintimeta, maxtimeta, avgtimeta, mintimety, maxtimety, avgtimety, sdnt, sdta, sdty);

}


/**
 * Function to calculate standard deviation
 * @param {Array} numbersArr timestamp array to find the Standard deviation 
 * @returns Standard deviation
 */
console.log("after findtimestatistics", new Date().getTime())
function getStandardDeviation(numbersArr) {
  // CALCULATE AVERAGE
  var total = 0;
  for (var key in numbersArr)
    total += numbersArr[key];
  var meanVal = total / numbersArr.length;
  // CALCULATE AVERAGE

  // CALCULATE STANDARD DEVIATION
  var SDprep = 0;
  for (var key in numbersArr)
    SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal), 2);
  var SDresult = Math.sqrt(SDprep / (numbersArr.length - 1));
  // CALCULATE STANDARD DEVIATION

  return SDresult;
}
console.log("before plotscreeninghistory", new Date().getTime())
//screening history

/**
 * Function to plot time statistics
 * @param {number} minnt minimum time taken for nontobacco individuals
 * @param {number} maxnt maximum time taken for nontobacco individuals
 * @param {number} avgnt average time taken for nontobacco individuals
 * @param {number} sdnt standard deviation for nontobacco individuals
 * @param {number} minta minimum time taken for individuals absent
 * @param {number} maxta maximum time taken for individuals absent 
 * @param {number} avgta average time taken for individuals absent 
 * @param {number} sdta standard deviation for individuals absent
 * @param {number} minty minimum time taken for tobacco individuals
 * @param {number} maxty maximum time taken for tobacco individuals
 * @param {number} avgty average time taken for tobacco individuals
 * @param {number} sdty standard deviation for tobacco individuals
 * @returns Standard deviation
 */
function plotscreeninghistory(minnt, maxnt, avgnt, minta, maxta, avgta, minty, maxty, avgty, sdnt, sdta, sdty) {

  //console.log(minnt,maxnt,avgnt,minta,maxta,avgta,minty,maxty,avgty);
  var chartDom = document.getElementById('screeninghistory');
  var myChart = echarts.init(chartDom);

  var app = {};

  app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
      const labelOption = {
        rotate: app.config.rotate,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        position: app.config.position,
        distance: app.config.distance
      };
      myChart.setOption({
        series: [
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          }
        ]
      });
    }
  };

  const labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    color: 'black',
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {}
    }
  };
  var option;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Min', 'Max', 'Avg', 'Standard Deviation']
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    xAxis: [
      {
        name: 'Individual',
        nameLocation: 'end',
        type: 'category',
        axisTick: { show: false },
        data: ['Individual Absent', 'Individual Present with Tobacco', 'Individual Present without Tobacco']
      }
    ],
    yAxis: [
      {
        name: 'Minutes',
        nameLocation: 'end',
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Min',
        type: 'bar',
        barGap: 0,
        fontFamily: 'Times New Roman',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [minta, minty, minnt]
      },
      {
        name: 'Max',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [maxta, maxty, maxnt]
      },
      {
        name: 'Avg',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [avgta, avgty, avgnt]
      },
      {
        name: 'Standard Deviation',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [sdta, sdty, sdnt]
      }
    ]
  };


  //console.log("chart",option);
  option && myChart.setOption(option);
}
console.log("after plotscreeninghistory", new Date().getTime())
//console.log("before reviewSummary",new Date().getTime())
/**
 * Function to get the percentage of remotely reviewed ids
 * @param {Array} parray array of filtered ids
 * @returns percentage
 */
async function reviewSummary(parray) {
  var patientreviewed = 0;
  var totalpatients = parray.length;
  var nointervention = 0;
  var reviewedpercentage = 0;
  var biopsyperc = 0;
  var laserper = 0;
  var tcc = 0;
  var followup = 0;
  var fuid = [];
  var shrcc = 0;
  console.log("before review summary", new Date().getTime())
  var parsedJson = JSON.stringify(form2obj[0]);
  var obj = JSON.parse(parsedJson)
  const map1 = new Map(Object.entries(obj));
  for (var i = 0; i < parray.length; i++) {

    //console.log("review map",map1);
    var parsedJson1;
    var obj1;
    //  for(const[key,value] in map1)
    //  {
    if (map1.has(parray[i])) {
      value = map1.get(parray[i]);
      // console.log("review map",value);
      parsedJson1 = JSON.stringify(value);
      obj1 = JSON.parse(parsedJson1)
      const map2 = new Map(Object.entries(obj1));
      //console.log("review map1",map2);

      let lastKey = [...map2.keys()].pop();
      // Using the default iterator (could be `map.entries()` instead)
      let lastValue = map2.get(lastKey)
      //console.log("review last key",lastKey,lastValue);

      patientreviewed = patientreviewed + 1;
      //console.log("biopsy",dataset.biopsy ,dataset.laser,dataset.referal_of_sschrc,dataset.tobacco_cessation);
      if (lastValue.biopsy == "true") {
        //console.log("biopsy",biopsyperc);
        biopsyperc = biopsyperc + 1;
      }
      if (lastValue.laser == "true") {
        // console.log("laser",laserper);
        laserper = laserper + 1;
      }
      if (lastValue.referal_of_sschrc == "true") {
        // console.log("shrcc",shrcc);
        shrcc = shrcc + 1;
      }
      if (lastValue.tobacco_cessation == "true") {
        // console.log("tcc",tcc);
        tcc = tcc + 1;
        // console.log("after tcc",tcc);
      }
      if (lastValue.requires_intervention == "No") {
        //console.log("nointervention",nointervention);
        nointervention = nointervention + 1;
      }
      var parsedJson = JSON.stringify(lastValue.follow_up_update);
      var obj = JSON.parse(parsedJson)
      const map = new Map(Object.entries(obj));
      //  console.log("followup",parsedJson,obj);
      var timestamp = Object.keys(lastValue.follow_up_update)[0];
      // Check if a timestamp exists before accessing the follow_up_updated value
      var followUpUpdatedValue = lastValue.follow_up_update[timestamp]
        ? lastValue.follow_up_update[timestamp].follow_up_updated
        : null;
      if (followUpUpdatedValue == "Yes") {

        fuid.push(parray[i]);
        followup = followup + 1;

      }

    }
  }



  // console.log("after review summary loop",new Date().getTime())

  //console.log("biopsyperc",biopsyperc,tcc,laserper,shrcc,nointervention,patientreviewed);
  biopsyperc = Math.round((biopsyperc / patientreviewed) * 100);
  tcc = Math.round((tcc / patientreviewed) * 100);
  laserper = Math.round((laserper / patientreviewed) * 100);
  shrcc = Math.round((shrcc / patientreviewed) * 100);
  nointervention = Math.round((nointervention / patientreviewed) * 100);
  followup = Math.round((followup / patientreviewed) * 100);
  //  console.log("fuppercentage",followup);
  reviewedpercentage = Math.round((patientreviewed / totalpatients) * 100);
  var rp = document.getElementById("rp");
  console.log("after reviewSummary", new Date().getTime())
  recommendPercentage(biopsyperc, tcc, laserper, shrcc, nointervention);
  reviewPercentage(reviewedpercentage);
  // rp.textContent = reviewedpercentage
  // inpersonSummary1(fuid);

}


console.log("before inpersonSummary1", new Date().getTime())

async function inpersonSummary1(parray) {
  var patientreviewed = 0;
  var totalpatients = parray.length;
  var followupeffective = 0;

  for (var i = 0; i < parray.length; i++) {
    //  console.log("follo uid",parray[i]);
    var form3 = fb.database().ref("Form_3").child(parray[i]).limitToLast(1)
    await form3.once("value").then(snap => {
      if (snap.val() != null) {
        followupeffective = followupeffective + 1;

      }

    })
  }
  //console.log("nextscr",nextscreening,"hos",hospital,"nointer",nointervention,"localproc",localprocedure);
  followupeffective = Math.round((followupeffective / parray.length) * 100);
  console.log("after inpersonSummary1", new Date().getTime())
  //isp.textContent = reviewedpercentage 
  //console.log("followupeffective",followupeffective);


}

/**
 * Function to get the percentage of inperson reviewed ids
 * @param {Array} parray array of filtered ids
 * @returns percentage
 */
//console.log("before inpersonSummary",new Date().getTime())
async function inpersonSummary(parray) {
  var patientreviewed = 0;
  var totalpatients = parray.length;
  var reviewedpercentage = 0;
  var nextscreening = 0;
  var localprocedure = 0;
  var nointervention = 0;
  var hospital = 0;
  console.log("before inperson summary", new Date().getTime())
  var parsedJson = JSON.stringify(form3obj[0]);
  var obj = JSON.parse(parsedJson)
  const map1 = new Map(Object.entries(obj));
  var keysarr = "";
  keysarr = Array.from(map1.keys());
  //console.log("uids",keysarr);
  var valuesarr = "";
  valuesarr = Array.from(map1.values());

  for (var i = 0; i < parray.length; i++) {

    if (map1.has(parray[i])) {
      // var form3 = fb.database().ref("Form_3").child(parray[i]).limitToLast(1)
      // await form3.once("value").then(snap =>{ 
      //  if(snap.val()!=null){
      //console.log("review map",map1);
      var parsedJson1;
      var obj1;
      let length = binarySearch(keysarr, parray[i])
      {
        //  for(const[key,value] of map1)
        //  {

        //      if(key==parray[i])
        //     // if(map1.has(parray[i]))
        //     {  
        patientreviewed = patientreviewed + 1;
        //value = map1.get(parray[i]);
        let value = valuesarr[length];
        parsedJson1 = JSON.stringify(value);
        obj1 = JSON.parse(parsedJson1)
        const map2 = new Map(Object.entries(obj1));

        let lastKey = [...map2.keys()].pop();
        // Using the default iterator (could be `map.entries()` instead)
        let lastValue = map2.get(lastKey)
        //  console.log("review last key",lastKey,lastValue);
        // console.log("screeningdate",dataset.recommendation);
        if (lastValue.next_screening_Date != "") {
          nextscreening = nextscreening + 1;
        }
        if (lastValue.recommendation == "Recommendation to hospital") {
          //    console.log("recommendation to hospital",hospital);
          hospital = hospital + 1;
          //   console.log("after to hospital",hospital);
        }
        if ((lastValue.recommendation == "No intervention") || (lastValue.recommendation == "")) {
          // console.log("before rec",nointervention);
          nointervention = nointervention + 1;
          // console.log("after rec",nointervention);
        }
        if (lastValue.recommendation == "Referred to local procedure") {
          // console.log("before rec referred to local procedure",localprocedure);
          localprocedure = localprocedure + 1;
          // console.log("before rec referred to local procedure",localprocedure);
        }
        //})
      }

    }
  }

  //console.log("nextscr",nextscreening,"hos",hospital,"nointer",nointervention,"localproc",localprocedure);
  nextscreening = Math.round((nextscreening / patientreviewed) * 100);
  hospital = Math.round((hospital / patientreviewed) * 100);
  nointervention = Math.round((nointervention / patientreviewed) * 100);
  localprocedure = Math.round((localprocedure / patientreviewed) * 100);
  console.log("after inpersonSummary", new Date().getTime())
  inpersonrecommendPercentage(nextscreening, hospital, nointervention, localprocedure);
  reviewedpercentage = Math.round((patientreviewed / totalpatients) * 100);
  var isp = document.getElementById("isp");
  inpersonpercentage(reviewedpercentage);

  //isp.textContent = reviewedpercentage 
  // console.log("reviewedpercentage",reviewedpercentage,patientreviewed);


}



/**
 * Function to get the statistics of individuals based on age
 * @param {Array} parray array of filtered ids
 * @returns percentage for ages below 30, above 30, above 40, above 50, above 60, above 70 years
 */
async function agegroupstatistics(parray) {
  console.log("before agegroupstatistics", new Date().getTime())
  var below30per = 0;
  var above30per = 0;
  var above40per = 0;
  var above50per = 0;
  var above60per = 0;
  var above70per = 0;

  //console.log("before retrieve age",new Date().getTime())
  var parsedJson = JSON.stringify(object[0]);
  var obj = JSON.parse(parsedJson)
  const map = new Map(Object.entries(obj));
  var keysarr = "";
  keysarr = Array.from(map.keys());
  //console.log("uids",keysarr);
  var valuesarr = "";
  valuesarr = Array.from(map.values());
  for (var i = 0; i < parray.length; i++) {

    var key;
    var v;
    //  for(const[key,value] of map)
    //  {
    //   if(key == parray[i])
    //   {
    if (map.has(parray[i])) {

      let length = binarySearch(keysarr, parray[i])
      {
        let value = valuesarr[length];
        // Using the default iterator (could be `map.entries()` instead)
        // v = map.get(parray[i]);
        v = value;
        //console.log("object",v.uid);
        //  if(v.uid == parray[i])
        //  {
        if (v.age <= 30) {
          below30per = below30per + 1;
        }
        else if ((v.age > 30) && (v.age < 40)) {
          above30per = above30per + 1;
        }
        else if ((v.age >= 40) && (v.age < 50)) {
          above40per = above40per + 1;
        }
        else if ((v.age >= 50) && (v.age < 60)) {
          above50per = above50per + 1;
        }
        else if ((v.age >= 60) && (v.age < 70)) {
          above60per = above60per + 1;
        }
        else if (v.age >= 70) {
          above70per = above70per + 1;
        }
      }
    }
    //}
  }

  below30per = Math.round((below30per / parray.length) * 100);
  above30per = Math.round((above30per / parray.length) * 100);
  above40per = Math.round((above40per / parray.length) * 100);
  above50per = Math.round((above50per / parray.length) * 100);
  above60per = Math.round((above60per / parray.length) * 100);
  above70per = Math.round((above70per / parray.length) * 100);
  console.log("after retrieve age", new Date().getTime())
  agegroupgraph(below30per, above30per, above40per, above50per, above60per, above70per);
  // console.log(below30per,above30per,above50per,above60per,above70per);

}
console.log("after agegroupstatistics", new Date().getTime())


/**
 * Function to get the location of individuals 
 * @param {Array} parray array of filtered ids
 * @returns location
 */
console.log("before location", new Date().getTime())
async function findlocation(parray) {
  var locations = [];
  var i = 0;
  var timestamp = [];
  //  console.log("length",parray.length)
  // console.log("before retrieve location",new Date().getTime())
  var parsedJson = JSON.stringify(locationobj[0]);
  var obj = JSON.parse(parsedJson)
  const map1 = new Map(Object.entries(obj));

  while (i < parray.length) {
    //   var form2Ref = fb.database().ref("Location").child(parray[i]).limitToLast(1);
    //  // console.log("uid" , parray[i]);

    var lastKey;

    var match = 0;
    let lastkey;
    let lastValue;
    let value1;
    //  if(map1.has(parray[i])) {
    //console.log("in for location",map1);
    for (const [key, value] of map1) {
      // console.log("in for location",key,value);
      if (key == parray[i]) {

        // console.log("before for",value1);
        const map2 = new Map(Object.entries(value));
        lastkey = [...map2.keys()].pop();
        lastValue = map2.get(lastkey);
        // console.log("before for",lastkey ,lastValue);
        var j = 0;
        for (j = 0; j < locations.length; j++) {
          //console.log("in for",JSON.stringify(locations[j]),JSON.stringify(lastValue),JSON.stringify(locations[j]) === JSON.stringify(lastValue))
          if (JSON.stringify(locations[j]) === JSON.stringify(lastValue)) {
            match = 1;
            break;
          }
        }

      }
    }
    //}
    if (match == 1) {
      //console.log("in if",j,timestamp[j],lastkey);
      timestamp[j] = timestamp[j] + "," + lastkey;

    }
    else {

      //console.log("in else loc",lastkey,lastValue);
      locations.push(lastValue);
      timestamp.push(lastkey);
      // console.log("in else loc",locations,timestamp);
    }



    //  })
    i++;


    // Increment i only after the data is fetched


  }
  console.log("after retrieve location", new Date().getTime())
  //console.log("locations",locations,timestamp);
  // initMap(locations, timestamp)
  //
}
console.log("after location", new Date().getTime())




// let isLoggedIn = false;



/**
 * Function to display the location on the google map
 * @param {Array} locations array of locations at which the patient was screened
 * @param {Array} timestamp array of timestamp at which the patient was screened
 * @returns googlemap
 */
let map;
async function initMap(locations = []) { // Default to an empty array if undefined
  // console.log("Locations received by initMap:", locations);

  // Import the necessary Google Maps libraries
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const position = { lat: 12.972442, lng: 77.580643 }; // Default position

  // Initialize the map
  const map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    // mapId: "fd3d1fcbcd711e02",
    mapId: "372bfbbf3b6b6f6a",

  });

  // if (!locations.length) {
  //     console.error("No valid locations provided.");
  //     document.getElementById("map").hidden = true;
  //     document.getElementById("nodata").innerText = "No Alerts Received";
  //     document.getElementById("nodata").hidden = false;
  //     return;
  // }

  let marker;

  locations.forEach(location => {
    // console.log("locations",location);
    if (location) {
      const latlocation = parseFloat(location.latitude);
      const lnglocation = parseFloat(location.longitude);
      const lastTimestamp = location.lastTimestamp.toString();
      const patients_id = location.patient_ID.toString();

      const dateObject = new Date(parseInt(lastTimestamp) * 1000);

      const formattedDateTime = dateObject.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });


      if (!isNaN(latlocation) && !isNaN(lnglocation)) {
        marker = new AdvancedMarkerElement({
          map: map,
          position: { lat: latlocation, lng: lnglocation },
          title: `${patients_id},\n${formattedDateTime} `
        });



        map.setZoom(10);
        map.panTo(marker.position);
      } else {
        console.warn("Invalid latitude or longitude:", location);
      }
    }
  });

  // if (!marker) {
  //   // Handle the case where no valid markers are created
  //   document.getElementById("loading").style.display = 'none';
  //   document.getElementById("nodata").hidden = false;
  // } else {
  //   document.getElementById("loading").style.display = 'none';
  //   document.getElementById("screening").style.visibility = 'visible';
  // }
}







var patientsRef = fb.database().ref("patients1");
var form1Ref = fb.database().ref("Form_1");
var form2Ref = fb.database().ref("Form_2");
var form3Ref = fb.database().ref("Form_3");
var mapRef = fb.database().ref("additional_info");
var followUpRef = fb.database().ref("fw_followup_pending");
var drFollowUpRef = fb.database().ref("dr_followup_pending");
var tccRef = fb.database().ref("tcc_form");
var tccPenFollowUpRef = fb.database().ref("tcc_followup_pending");



function exportPatientsData() {
  patientsRef.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "patients_data.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function exportForm_1_Data() {
  form1Ref.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "form_1_data.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
function exportForm_2_Data() {
  form2Ref.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "form_2_data.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function exportForm_3_Data() {
  form3Ref.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "form_3_data.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function exportAdditionalData() {
  mapRef.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "additional_info.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}


function exportFollowUpData() {

  followUpRef.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "followup_pending.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function exportDrFollowUpData() {

  drFollowUpRef.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "dr_followup_pending.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function exportTCCData() {

  tccRef.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "TCC_data.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function exportTCCPenFollowUpData() {
  tccPenFollowUpRef.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "TCC_Pending_Followup_data.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function exportTCCFOLLOW() {

  tccFollow.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "dr_followup_pending.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}


const matchingUUIDs = [];

function animateCounter(elementId, finalValue, duration) {
  let currentValue = 0;
  const increment = finalValue / (duration / 10);
  const counter = setInterval(() => {
    currentValue += increment;
    if (currentValue >= finalValue) {
      currentValue = finalValue;
      clearInterval(counter);
    }
    document.getElementById(elementId).innerHTML = Math.floor(currentValue);
  }, 10);
}


let counter_check = [];
let array = [];
let tccArray = [];
let allArray = [];

let ScreeningStatus = false;
let RegistrationsAndRescreenings = false;
let MaleAndFemale = false;
let Status = false;
let Eligibility = false;
let HabitSummary = false;
// let tccSurvey = false;

let FilteredData = false;
let remoteSrc = false;
let PresonScr = false;
let DoctorRec = false;
let oralScr = false;
let brScr = false;
let cervi = false;
let aggregateScr = false;

let TCCGen = false;
let TobaccoCons = false;
let tccsrc = false;
let TccFoll = false;
let Tccbatc = false;
let Tccbwsth = false;
let TccResult = false;
let pendingTcc = false;
let abnormalC = false;



async function fetchAndMatchPatientData(selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let upids;
  let fetchPromises = [];
  let p1 = [];
  let p2 = [];
  let pall = [];
  let cd = clearData();
  if (cd) {
    upids = fb.database().ref().child('U_pchyat');
    upids.once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const panchayatId = childSnapshot.key;

        if (panchayatId.length === 2 && panchayatId !== 99) {
          childSnapshot.forEach(function (villageSnapshot) {
            villageSnapshot.forEach(function (uuidSnapshot) {
              const villageId = villageSnapshot.key;
              const puuid = uuidSnapshot.key;

              const form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId).child(puuid);
              const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(puuid);

              const promise = form1.once("value")
                .then(function (snap) {
                  let form1Data = snap.val();
                  if (form1Data) {
                    let maxPhase1Timestamp = null;
                    let maxPhase2Timestamp = null;
                    let maxTimestamp = null;

                    let findp1 = false, findp2 = false, findall = false;

                    // Fetch patient data
                    return pref.once("value").then(function (snap) {
                      let patientData = snap.val();
                      if (patientData) {
                        const fwid = patientData.fw_id; // Fetch fw_id

                        Object.keys(form1Data).forEach(timestamp => {
                          let year = new Date(Number(timestamp) * 1000).getFullYear();

                          if (year === 2022) {
                            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                              maxPhase1Timestamp = timestamp;
                              findp1 = true;
                            }
                          }
                          if (year === 2024) {
                            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                              maxPhase2Timestamp = timestamp;
                              findp2 = true;
                            }
                          }
                          if (year === 2022 || year === 2024) {
                            if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
                              maxTimestamp = timestamp;
                              findall = true;
                            }
                          }
                        });

                        if (findp1) {
                          p1.push({
                            "uuid": puuid,
                            "village": villageId,
                            "fw_id": fwid // Add fw_id to p1
                          });
                        }
                        if (findp2) {
                          p2.push({
                            "uuid": puuid,
                            "village": villageId,
                            "fw_id": fwid // Add fw_id to p2
                          });
                        }

                        pall = p1.concat(p2);
                      }
                    });
                  }
                })
                .catch((error) => {
                  console.error("Error fetching data for UUID:", puuid, error);
                });

              fetchPromises.push(promise); // Add each promise to the array
            });
          });
        }
      });

      // Wait for all promises to complete before logging the results
      Promise.all(fetchPromises)
        .then(() => {
          console.log("p1 - :", p1);
          console.log("p2 - :", p2);
          console.log("pall - :", pall);

          var data = [];
          if (selectedPhase === "1") {
            data = p1;
          }
          if (selectedPhase === "2") {
            data = p2;
          }
          if (selectedPhase === "All") {
            data = pall;
          }

          ScreeningStatus = false;
          RegistrationsAndRescreenings = false;
          MaleAndFemale = false;
          Status = false;
          Eligibility = false;
          HabitSummary = false;

          surveySection(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
          ScreeningSection(selectedPhase, selectedFieldworker, selectedPanchayat, selectedVillage);
          tccSection(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
          // phaseSegregation(data, selectedFieldworker, selectedPanchayat, selectedVillage);
          processPatientData(p1, p2, data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase)
          timer_fun();
          const section = document.getElementById('surveyPhases');

          // Show the section if selectedPhase is 'All', otherwise hide it
          if (selectedPhase === 'All') {
            section.style.display = 'block';
          } else if (selectedPhase != 'All') {
            section.style.display = 'none';
          }


          const surveyChart = document.getElementById("survey_chart");
          if (selectedPhase === "All" || selectedPhase === "1") {
            surveyChart.style.display = "none";
          } else {
            surveyChart.style.display = "block";
          }

        })
        .catch((error) => {
          console.error("Error in processing data:", error);
        });
    });
  }

}

async function fetchPATIENTData(selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let upids;


  let fetchPromises = [];
  let p1 = [];
  let p2 = [];
  let pall = [];
  let cd = clearData_Fm();

  if (cd) {
    upids = fb.database().ref().child('U_pchyat');
    upids.once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const panchayatId = childSnapshot.key;

        if (panchayatId.length === 2 && panchayatId !== 99) {
          childSnapshot.forEach(function (villageSnapshot) {
            villageSnapshot.forEach(function (uuidSnapshot) {
              const villageId = villageSnapshot.key;
              const puuid = uuidSnapshot.key;

              const form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId).child(puuid);
              const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(puuid);

              const promise = form1.once("value")
                .then(function (snap) {
                  let form1Data = snap.val();
                  if (form1Data) {
                    let maxPhase1Timestamp = null;
                    let maxPhase2Timestamp = null;
                    let maxTimestamp = null;

                    let findp1 = false, findp2 = false, findall = false;

                    // Fetch patient data
                    return pref.once("value").then(function (snap) {
                      let patientData = snap.val();
                      if (patientData) {
                        const fwid = patientData.fw_id; // Fetch fw_id

                        Object.keys(form1Data).forEach(timestamp => {
                          let year = new Date(Number(timestamp) * 1000).getFullYear();

                          if (year === 2022) {
                            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                              maxPhase1Timestamp = timestamp;
                              findp1 = true;
                            }
                          }
                          if (year === 2024) {
                            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                              maxPhase2Timestamp = timestamp;
                              findp2 = true;
                            }
                          }
                          if (year === 2022 || year === 2024) {
                            if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
                              maxTimestamp = timestamp;
                              findall = true;
                            }
                          }
                        });

                        if (findp1) {
                          p1.push({
                            "uuid": puuid,
                            "village": villageId,
                            "fw_id": fwid // Add fw_id to p1
                          });
                        }
                        if (findp2) {
                          p2.push({
                            "uuid": puuid,
                            "village": villageId,
                            "fw_id": fwid // Add fw_id to p2
                          });
                        }

                        pall = p1.concat(p2);
                      }
                    });
                  }
                })
                .catch((error) => {
                  console.error("Error fetching data for UUID:", puuid, error);
                });

              fetchPromises.push(promise); // Add each promise to the array
            });
          });
        }
      });

      // Wait for all promises to complete before logging the results
      Promise.all(fetchPromises)
        .then(() => {
          console.log("p1 - :", p1);
          console.log("p2 - :", p2);
          console.log("pall - :", pall);

          var data = [];
          if (selectedPhase === "1") {
            data = p1;
          }
          if (selectedPhase === "2") {
            data = p2;
          }
          if (selectedPhase === "All") {
            data = pall;
          }

          ScreeningStatus = false;
          RegistrationsAndRescreenings = false;
          MaleAndFemale = false;
          Status = false;
          Eligibility = false;
          HabitSummary = false;

          surveySection(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);

          timer_fun1();



          const surveyChart = document.getElementById("survey_chart");
          if (selectedPhase === "All" || selectedPhase === "1") {
            surveyChart.style.display = "none";
          } else {
            surveyChart.style.display = "block";
          }

        })
        .catch((error) => {
          console.error("Error in processing data:", error);
        });
    });
  }
}

async function fetchDoctorScreening(selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let upids;


  let fetchPromises = [];
  let p1 = [];
  let p2 = [];
  let pall = [];
  let cd = clearData_Doc();

  if (cd) {
    upids = fb.database().ref().child('U_pchyat');
    upids.once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const panchayatId = childSnapshot.key;

        if (panchayatId.length === 2 && panchayatId !== 99) {
          childSnapshot.forEach(function (villageSnapshot) {
            villageSnapshot.forEach(function (uuidSnapshot) {
              const villageId = villageSnapshot.key;
              const puuid = uuidSnapshot.key;

              const form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId).child(puuid);
              const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(puuid);

              const promise = form1.once("value")
                .then(function (snap) {
                  let form1Data = snap.val();
                  if (form1Data) {
                    let maxPhase1Timestamp = null;
                    let maxPhase2Timestamp = null;
                    let maxTimestamp = null;

                    let findp1 = false, findp2 = false, findall = false;

                    // Fetch patient data
                    return pref.once("value").then(function (snap) {
                      let patientData = snap.val();
                      if (patientData) {
                        const fwid = patientData.fw_id; // Fetch fw_id

                        Object.keys(form1Data).forEach(timestamp => {
                          let year = new Date(Number(timestamp) * 1000).getFullYear();

                          if (year === 2022) {
                            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                              maxPhase1Timestamp = timestamp;
                              findp1 = true;
                            }
                          }
                          if (year === 2024) {
                            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                              maxPhase2Timestamp = timestamp;
                              findp2 = true;
                            }
                          }
                          if (year === 2022 || year === 2024) {
                            if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
                              maxTimestamp = timestamp;
                              findall = true;
                            }
                          }
                        });

                        if (findp1) {
                          p1.push({
                            "uuid": puuid,
                            "village": villageId,
                            "fw_id": fwid // Add fw_id to p1
                          });
                        }
                        if (findp2) {
                          p2.push({
                            "uuid": puuid,
                            "village": villageId,
                            "fw_id": fwid // Add fw_id to p2
                          });
                        }

                        pall = p1.concat(p2);
                      }
                    });
                  }
                })
                .catch((error) => {
                  console.error("Error fetching data for UUID:", puuid, error);
                });

              fetchPromises.push(promise); // Add each promise to the array
            });
          });
        }
      });

      // Wait for all promises to complete before logging the results
      Promise.all(fetchPromises)
        .then(() => {
          console.log("p1 - :", p1);
          console.log("p2 - :", p2);
          console.log("pall - :", pall);

          var data = [];
          if (selectedPhase === "1") {
            data = p1;
          }
          if (selectedPhase === "2") {
            data = p2;
          }
          if (selectedPhase === "All") {
            data = pall;
          }

          ScreeningStatus = false;
          RegistrationsAndRescreenings = false;
          MaleAndFemale = false;
          Status = false;
          Eligibility = false;
          HabitSummary = false;

          surveySection(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
          ScreeningSection(selectedPhase, selectedFieldworker, selectedPanchayat, selectedVillage);

          timer_fun2();


          const surveyChart = document.getElementById("survey_chart");
          if (selectedPhase === "All" || selectedPhase === "1") {
            surveyChart.style.display = "none";
          } else {
            surveyChart.style.display = "block";
          }

        })
        .catch((error) => {
          console.error("Error in processing data:", error);
        });
    });
  }

}

async function fetchTccScreening(selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let upids;
  let fetchPromises = [];
  let p1 = [];
  let p2 = [];
  let pall = [];
  let cd = clearData_Tcc();

  if (cd) {
    upids = fb.database().ref().child('U_pchyat');
    upids.once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const panchayatId = childSnapshot.key;

        if (panchayatId.length === 2 && panchayatId !== 99) {
          childSnapshot.forEach(function (villageSnapshot) {
            villageSnapshot.forEach(function (uuidSnapshot) {
              const villageId = villageSnapshot.key;
              const puuid = uuidSnapshot.key;

              const form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId).child(puuid);
              const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(puuid);

              const promise = form1.once("value")
                .then(function (snap) {
                  let form1Data = snap.val();
                  if (form1Data) {
                    let maxPhase1Timestamp = null;
                    let maxPhase2Timestamp = null;
                    let maxTimestamp = null;

                    let findp1 = false, findp2 = false, findall = false;

                    // Fetch patient data
                    return pref.once("value").then(function (snap) {
                      let patientData = snap.val();
                      if (patientData) {
                        const fwid = patientData.fw_id; // Fetch fw_id

                        Object.keys(form1Data).forEach(timestamp => {
                          let year = new Date(Number(timestamp) * 1000).getFullYear();

                          if (year === 2022) {
                            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                              maxPhase1Timestamp = timestamp;
                              findp1 = true;
                            }
                          }
                          if (year === 2024) {
                            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                              maxPhase2Timestamp = timestamp;
                              findp2 = true;
                            }
                          }
                          if (year === 2022 || year === 2024) {
                            if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
                              maxTimestamp = timestamp;
                              findall = true;
                            }
                          }
                        });

                        if (findp1) {
                          p1.push({
                            "uuid": puuid,
                            "village": villageId,
                            "fw_id": fwid // Add fw_id to p1
                          });
                        }
                        if (findp2) {
                          p2.push({
                            "uuid": puuid,
                            "village": villageId,
                            "fw_id": fwid // Add fw_id to p2
                          });
                        }

                        pall = p1.concat(p2);
                      }
                    });
                  }
                })
                .catch((error) => {
                  console.error("Error fetching data for UUID:", puuid, error);
                });

              fetchPromises.push(promise); // Add each promise to the array
            });
          });
        }
      });

      // Wait for all promises to complete before logging the results
      Promise.all(fetchPromises)
        .then(() => {
          console.log("p1 - :", p1);
          console.log("p2 - :", p2);
          console.log("pall - :", pall);

          var data = [];
          if (selectedPhase === "1") {
            data = p1;
          }
          if (selectedPhase === "2") {
            data = p2;
          }
          if (selectedPhase === "All") {
            data = pall;
          }

          ScreeningStatus = false;
          RegistrationsAndRescreenings = false;
          MaleAndFemale = false;
          Status = false;
          Eligibility = false;
          HabitSummary = false;


          tccSection(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);

          timer_fun3();



        })
        .catch((error) => {
          console.error("Error in processing data:", error);
        });
    });
  }


}


async function surveySection(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {


  countMaleAndFemale(data, selectedFieldworker, selectedPanchayat, selectedVillage);
  countStatus(data, selectedFieldworker, selectedPanchayat, selectedVillage);
  CountEligibility(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
  // countScreeningStatus(data, selectedFieldworker, selectedPanchayat, selectedVillage);
  screeningfetchdata(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
  // ScreeningSection(data, selectedFieldworker, selectedPanchayat, selectedVillage);
  countRegistrationsAndRescreenings(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
  countHabitSummary(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
  fetchAdditionalMapInfo(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
  countTCC_Survey(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
}

async function screeningfetchdata(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  let upids;
  let fetchPromises = [];
  let p1 = [];
  let p2 = [];
  let pall = [];

  //  if (selectedPanchayat === "All" || selectedVillage === "All") {
  upids = fb.database().ref().child('U_pchyat');
  upids.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      const panchayatId = childSnapshot.key;

      if (panchayatId.length === 2 && panchayatId != 99) {
        childSnapshot.forEach(function (villageSnapshot) {
          villageSnapshot.forEach(function (uuidSnapshot) {
            const villageId = villageSnapshot.key;
            const puuid = uuidSnapshot.key;

            const form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId).child(puuid);
            const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(puuid);

            const promise = form3.once("value").then(function (snap) {
              let form3Data = snap.val();
              if (form3Data) {
                let maxPhase1Timestamp = null;
                let maxPhase2Timestamp = null;
                let maxTimestamp = null;

                let findp1 = false, findp2 = false, findall = false;

                return pref.once("value").then(function (snap) {
                  let patientData = snap.val();
                  if (patientData) {
                    const fwid = patientData.fw_id; // Fetch fw_id

                    Object.keys(form3Data).forEach(timestamp => {
                      let year = new Date(Number(timestamp) * 1000).getFullYear();

                      if (year === 2022) {
                        if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                          maxPhase1Timestamp = timestamp;
                          findp1 = true;
                        }
                      }
                      if (year === 2024) {
                        if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                          maxPhase2Timestamp = timestamp;
                          findp2 = true;
                        }
                      }
                      if (year === 2022 || year === 2024) {
                        if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
                          maxTimestamp = timestamp;
                          findall = true;
                        }
                      }
                    });

                    if (findp1) {
                      p1.push({
                        "uuid": puuid,
                        "village": villageId,
                        "fw_id": fwid // Add fw_id to p1
                      });
                    }
                    if (findp2) {
                      p2.push({
                        "uuid": puuid,
                        "village": villageId,
                        "fw_id": fwid // Add fw_id to p2
                      });
                    }

                    pall = p1.concat(p2);
                  }
                });
              }
            }).catch((error) => {
              console.error("Error fetching patient data for UUID:", puuid, error);
            });
            fetchPromises.push(promise); // Add each promise to the array
          });
        });
      }
    });

    // Wait for all promises to complete before logging the results
    Promise.all(fetchPromises)
      .then(() => {
        // console.log("p1 - :", p1);
        // console.log("p2 - :", p2);
        // console.log("pall - :", pall);

        var data_loc = [];
        if (selectedPhase === "1") {
          data_loc = p1;
        }
        if (selectedPhase === "2") {
          data_loc = p2;
        }
        if (selectedPhase === "All") {
          data_loc = pall;
        }
        var p1String = JSON.stringify(p1);

        var p2String = JSON.stringify(p2);
        localStorage.setItem("screeningPhase1Array", p1String);
        localStorage.setItem("screeningPhase2Array", p2String);
        countScreeningStatus(data, data_loc, selectedFieldworker, selectedPanchayat, selectedVillage);
      })
      .catch((error) => {
        console.error("Error in processing data:", error);
      });
  });

}

async function ScreeningSection(selectedPhase, selectedFieldworker, selectedPanchayat, selectedVillage) {

  let upids;
  let fetchPromises = [];
  let p1 = [];
  let p2 = [];
  let pall = [];

  //  if (selectedPanchayat === "All" || selectedVillage === "All") {
  upids = fb.database().ref().child('U_pchyat');
  upids.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      const panchayatId = childSnapshot.key;

      if (panchayatId.length === 2 && panchayatId !== 99) {
        childSnapshot.forEach(function (villageSnapshot) {
          villageSnapshot.forEach(function (uuidSnapshot) {
            const villageId = villageSnapshot.key;
            const puuid = uuidSnapshot.key;

            const form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId).child(puuid);
            const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(puuid);

            const promise = form3.once("value").then(function (snap) {
              let form3Data = snap.val();
              if (form3Data) {
                let maxPhase1Timestamp = null;
                let maxPhase2Timestamp = null;
                let maxTimestamp = null;

                let findp1 = false, findp2 = false, findall = false;

                return pref.once("value").then(function (snap) {
                  let patientData = snap.val();
                  if (patientData) {
                    const fwid = patientData.fw_id; // Fetch fw_id

                    Object.keys(form3Data).forEach(timestamp => {
                      let year = new Date(Number(timestamp) * 1000).getFullYear();

                      if (year === 2022) {
                        if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                          maxPhase1Timestamp = timestamp;
                          findp1 = true;
                        }
                      }
                      if (year === 2024) {
                        if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                          maxPhase2Timestamp = timestamp;
                          findp2 = true;
                        }
                      }
                      if (year === 2022 || year === 2024) {
                        if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
                          maxTimestamp = timestamp;
                          findall = true;
                        }
                      }
                    });

                    if (findp1) {
                      p1.push({
                        "uuid": puuid,
                        "village": villageId,
                        "fw_id": fwid // Add fw_id to p1
                      });
                    }
                    if (findp2) {
                      p2.push({
                        "uuid": puuid,
                        "village": villageId,
                        "fw_id": fwid // Add fw_id to p2
                      });
                    }

                    pall = p1.concat(p2);
                  }
                });
              }
            }).catch((error) => {
              console.error("Error fetching patient data for UUID:", puuid, error);
            });

            fetchPromises.push(promise); // Add each promise to the array
          });
        });
      }
    });

    // Wait for all promises to complete before logging the results
    Promise.all(fetchPromises)
      .then(() => {
        // console.log("p1 - :", p1);
        // console.log("p2 - :", p2);
        // console.log("pall - :", pall);

        var data = [];
        if (selectedPhase === "1") {
          data = p1;
        }
        if (selectedPhase === "2") {
          data = p2;
        }
        if (selectedPhase === "All") {
          data = pall;
        }

        remoteScreening(selectedPhase, selectedFieldworker, selectedPanchayat, selectedVillage)
        // remoteScreening(phaseUUIDs, selectedPanchayat, selectedVillage);
        inPresonDocScreening(data, selectedFieldworker, selectedPanchayat, selectedVillage);

        DoctorRecommendations(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
        // DoctorRecommendations(phase1UUIDs, phase2UUIDs, selectedPhase, selectedPanchayat, selectedVillage);

        ScrTobaccoConsumption(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);

        oralScreeningData(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
        // oralScreeningData(phase1UUIDs, phase2UUIDs, selectedPhase, selectedPanchayat, selectedVillage);
        brScreeningData(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
        // brScreeningData(phase1UUIDs, phase2UUIDs, selectedPhase, selectedPanchayat, selectedVillage);
        cervicalScreeningData(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
        // cervicalScreeningData(phase1UUIDs, phase2UUIDs, selectedPhase, selectedPanchayat, selectedVillage);
        aggregateScreeningData(p1, p2, selectedPhase, selectedFieldworker, selectedPanchayat, selectedVillage);
      })
      .catch((error) => {
        console.error("Error in processing data:", error);
      });
  });
}

async function tccSection(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let fetchPromises = [];
  let p1 = [];
  let p2 = [];
  let pall = [];



  upids = fb.database().ref().child('U_pchyat');
  upids.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      const panchayatId = childSnapshot.key;

      if (panchayatId.length === 2 && panchayatId !== 99) {
        childSnapshot.forEach(function (villageSnapshot) {
          villageSnapshot.forEach(function (uuidSnapshot) {
            const villageId = villageSnapshot.key;
            const puuid = uuidSnapshot.key;

            const tccRef = fb.database().ref().child("tcc_form").child(puuid);
            const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(puuid);

            const promise = tccRef.once("value").then(function (snap) {
              let tccformData = snap.val();
              if (tccformData) {
                let maxPhase1Timestamp = null;
                let maxPhase2Timestamp = null;
                let maxTimestamp = null;

                let findp1 = false, findp2 = false, findall = false;

                return pref.once("value").then(function (snap) {
                  let patientData = snap.val();
                  if (patientData) {
                    const fwid = patientData.fw_id; // Fetch fw_id

                    Object.keys(tccformData).forEach(timestamp => {
                      let year = new Date(Number(timestamp) * 1000).getFullYear();

                      if (year === 2022) {
                        if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                          maxPhase1Timestamp = timestamp;
                          findp1 = true;
                        }
                      }
                      if (year === 2024) {
                        if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                          maxPhase2Timestamp = timestamp;
                          findp2 = true;
                        }
                      }
                      if (year === 2022 || year === 2024) {
                        if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
                          maxTimestamp = timestamp;
                          findall = true;
                        }
                      }
                    });

                    if (findp1) {
                      p1.push({
                        "uuid": puuid,
                        "village": villageId,
                        "fw_id": fwid // Add fw_id to p1
                      });
                    }
                    if (findp2) {
                      p2.push({
                        "uuid": puuid,
                        "village": villageId,
                        "fw_id": fwid // Add fw_id to p2
                      });
                    }

                    pall = p1.concat(p2);
                  }
                });

              }
            }).catch((error) => {
              console.error("Error fetching patient data for UUID:", puuid, error);
            });

            fetchPromises.push(promise); // Add each promise to the array
          });
        });
      }
    });

    // Wait for all promises to complete before logging the results
    Promise.all(fetchPromises)
      .then(() => {
        console.log("p1 - :", p1);
        console.log("p2 - :", p2);
        console.log("pall - :", pall);

        var data = [];
        if (selectedPhase === "1") {
          data = p1;

        }
        if (selectedPhase === "2") {
          data = p2;
        }
        if (selectedPhase === "All") {
          data = pall;

        }

        console.log("pall - :", data);
        countTCCGenders(data, selectedFieldworker, selectedPanchayat, selectedVillage);
        // countTobaccoConsumptions(data, selectedFieldworker, selectedPanchayat, selectedVillage);
        countTobaccoConsumptions(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
        // TccFollowup(data, selectedFieldworker, selectedPanchayat, selectedVillage);
        TccFollowup(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
        // TccbatcFollowup(data, selectedFieldworker, selectedPanchayat, selectedVillage);
        TccbatcFollowup(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase)
        //pendingTccFOLLOW(p1, p2, p3);
        pendingTccFOLLOW(p1, p2, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase)

        tccSmokeCount(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
        tccSmokeLessCount(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase);
      })
      .catch((error) => {
        console.error("Error in processing data:", error);
      });
  });
}


//Survey

async function countMaleAndFemale(data, selectedFieldworker, selectedPanchayat, selectedVillage) {
  let maleCount = 0;
  let femaleCount = 0;
  let fetchPromises = [];


  data.forEach((item) => {
    var villageId = item.village;
    var panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;
    // console.log("UUid ", uuid + " Village ", villageId + " Panchayat ", panchayatId + "fwid", fwid );
    var pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);
    const promise = pref.child(uuid).once("value")
      .then(function (snap) {
        let patientData = snap.val();
        if (patientData) {

          let gender = patientData.gndr;

          const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
          // console.log(result);

          if (result) {
            if (gender === "Male" || gender === "M" || gender === "m") {
              maleCount++;
            } else if (gender === "Female" || gender === "F" || gender === "f") {
              femaleCount++;
            }
          }

          // console.log("maleCount gender status in survey", maleCount);
          // console.log("femaleCount gender status in survey", femaleCount);

          let surveyCount = maleCount + femaleCount;
          document.getElementById("ts").innerHTML = surveyCount;

          const timestamp = Date.now();
          counter_check.push(timestamp);

        }
        else {
          // console.log("Null UUID:", item.uuids);
        }

      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuids, error);
      });
    fetchPromises.push(promise); // Add each promise to the array

  }
  )
  Promise.all(fetchPromises)
    .then(() => {
      MaleAndFemale = true;
      array.push({
        "surveygender": {
          "male": maleCount,
          "female": femaleCount
        }
      });

      localStorage.setItem('surveymaleCount', maleCount);
      localStorage.setItem('surveyfemaleCount', femaleCount);


    })
    .catch((error) => {
      console.error("Error in processing data:", error);
    });
}

async function countStatus(data, selectedFieldworker, selectedPanchayat, selectedVillage) {
  let Absent = 0;
  let Present = 0;
  let fetchPromises = [];


  data.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;

    var pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);


    const promise = pref.child(uuid).once("value")
      .then(function (snap) {
        let patientData = snap.val();
        if (patientData) {
          const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
          // console.log(result);
          let status = patientData.sts;
          if (result) {

            if (status.toLowerCase() === "absent" || status.toLowerCase() === "absnt") {
              Absent++;
              // console.log("uuids in the Status absnt",uuid);

            } else if (status.toLowerCase() === "in person" || status.toLowerCase() === "ip") {
              Present++;
              // console.log("uuids in the Status ip",uuid);

            }
          }
          const timestamp = Date.now();
          //console.log(`Current Timestamp: ${timestamp}`);
          counter_check.push(timestamp);

        }
        // console.log("Absent count:", Absent);
        // console.log("In Person count:", Present);
      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuids, error);
      });
    fetchPromises.push(promise);
  });
  Promise.all(fetchPromises)
    .then(() => {
      Status = true;
      array.push({
        "surveyCount": {
          "absent": Absent,
          "present": Present
        }
      });

      console.log("Absent count:", Absent);
      console.log("In Person count:", Present);

      localStorage.setItem('surveyabsent', Absent);
      localStorage.setItem('surveypresent', Present);

    })
    .catch((error) => {
      console.error("Error in processing data:", error);
    });
}

// async function CountEligibility(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
//   let eligibleCount = 0;
//   let ineligibleCount = 0;
//   let fetchPromises = [];

//   data.forEach((item) => {
//     const villageId = item.village;
//     const panchayatId = villageId.substring(0, 2);
//     const uuid = item.uuid;
//     const fwid = item.fw_id;

//     const form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId);
//     const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);

//     // Fetch data from form1 path
//     const form1Promise = form1.child(uuid).once("value")
//       .then(function (snap) {
//         let form1Data = snap.val();
//         if (!form1Data) return; // Return if no data found

//         let maxPhase1Timestamp = null;
//         let maxPhase2Timestamp = null;
//         let maxTimestamp = null;
//         let timestamp;

//         let p1 = false, p2 = false, pall = false;

//         Object.keys(form1Data).forEach(timestamp => {
//           let year = new Date(Number(timestamp) * 1000).getFullYear();

//           if (year === 2022) {
//             p1 = true;
//             if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
//               maxPhase1Timestamp = timestamp;
//             }
//           }
//           if (year === 2024) {
//             p2 = true;
//             if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
//               maxPhase2Timestamp = timestamp;
//             }
//           }
//           if (year === 2022 || year === 2024) {
//             pall = true;
//             if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
//               maxTimestamp = timestamp;
//             }
//           }
//         });


//         const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);



//         if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
//           if (p1 && selectedPhase === "1") {
//             timestamp = maxPhase1Timestamp;
//           } else if (p2 && selectedPhase === "2") {
//             timestamp = maxPhase2Timestamp;
//           }
//           else if (pall && selectedPhase === "All") {
//             timestamp = maxTimestamp;
//           }
//           let latestData = form1Data[timestamp];
//           let usage = latestData?.tif;
//           //console.log("Latest Form Data:", latestData);

//           if (usage) {
//             usage = usage.toLowerCase();
//             if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
//               eligibleCount++;
//             } else if (usage === "never" || usage === "absent" || usage === "absnt" || usage === "nvr") {
//               ineligibleCount++;
//             }
//           }
//         }

//       })
//       .catch((error) => {
//         console.error("Error fetching data for UUID:", uuid, error);
//       });

//     fetchPromises.push(form1Promise); // Add form1Promise to the fetchPromises array
//   });

//   // Execute Promise.all once all fetch operations are added to the fetchPromises array
//   Promise.all(fetchPromises)
//     .then(() => {
//       console.log("Eligibility count:", eligibleCount);
//       console.log("Ineligibility count:", ineligibleCount);

//       const timestamp = Date.now();
//       counter_check.push(timestamp);
//       Eligibility = true;
//       array.push({
//         "eligibilityCount": {
//           "eligible": eligibleCount,
//           "ineligible": ineligibleCount
//         }
//       });

//       localStorage.setItem('eligiblecount', eligibleCount);
//       localStorage.setItem('ineligiblecount', ineligibleCount);

//     })
//     .catch((error) => {
//       console.error("Error in completing fetch operations:", error);
//     });


// }

async function CountEligibility(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  let eligibleCount = 0;
  let ineligibleCount = 0;
  let fetchPromises = [];
  const uniqueData = removeDuplicateUUIDs(data);

  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    const uuid = item.uuid;
    const fwid = item.fw_id;

    const form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId);

    // Fetch data from form1 path
    const form1Promise = form1.child(uuid).once("value")
      .then(function (snap) {
        let form1Data = snap.val();
        if (!form1Data) return; // Return if no data found

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let timestamp;

        let p1 = false, p2 = false, pall = false;

        Object.keys(form1Data).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();

          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;
            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;
            }
          }
        });

        var patientsRef = fb.database().ref().child("patients1").child(panchayatId).child(villageId);
        return patientsRef.child(uuid).once("value")
          .then(patientSnap => {
            const patientData = patientSnap.val();
            var age = patientData.age;
            var gender = patientData.gndr.toLowerCase();
            const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

            if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
              if (selectedPhase === "1") {
                let latestData = form1Data[maxPhase1Timestamp];
                let usage = latestData?.tif;
                if (usage) {
                  usage = usage.toLowerCase();
                  if (gender === "m" || gender === "male") {
                    if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                      eligibleCount++;
                    } else if (usage === "never" || usage === "absent" || usage === "absnt" || usage === "nvr") {
                      ineligibleCount++;
                    }
                  }
                  if (gender === "f" || gender === "female") {
                    if (age > 25) {
                      eligibleCount++;
                    }
                    else if (age <= 25) {
                      if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                        eligibleCount++;
                      } else if (usage === "never" || usage === "absent" || usage === "absnt" || usage === "nvr") {
                        ineligibleCount++;
                      }
                    }
                  }
                }
              }
              if (selectedPhase === "2") {
                let latestData = form1Data[maxPhase2Timestamp];
                let usage = latestData?.tif;
                if (usage) {
                  usage = usage.toLowerCase();
                  if (gender === "m" || gender === "male") {
                    if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                      eligibleCount++;
                    } else if (usage === "never" || usage === "absent" || usage === "absnt" || usage === "nvr") {
                      ineligibleCount++;
                    }
                  }
                  if (gender === "f" || gender === "female") {
                    if (age > 25) {
                      eligibleCount++;
                    }
                    else if (age <= 25) {
                      if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                        eligibleCount++;
                      } else if (usage === "never" || usage === "absent" || usage === "absnt" || usage === "nvr") {
                        ineligibleCount++;
                      }
                    }
                  }
                }
              }
              if (selectedPhase === "All") {
                if (maxPhase1Timestamp) {
                  let latestData = form1Data[maxPhase1Timestamp];
                  let usage = latestData?.tif;
                  if (usage) {
                    usage = usage.toLowerCase();
                    if (gender === "m" || gender === "male") {
                      if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                        eligibleCount++;
                      } else if (usage === "never" || usage === "absent" || usage === "absnt" || usage === "nvr") {
                        ineligibleCount++;
                      }
                    }
                    if (gender === "f" || gender === "female") {
                      if (age > 25) {
                        eligibleCount++;
                      }
                      else if (age <= 25) {
                        if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                          eligibleCount++;
                        } else if (usage === "never" || usage === "absent" || usage === "absnt" || usage === "nvr") {
                          ineligibleCount++;
                        }
                      }
                    }
                  }
                }
                if (maxPhase2Timestamp) {
                  let latestData = form1Data[maxPhase2Timestamp];
                  let usage = latestData?.tif;
                  if (usage) {
                    usage = usage.toLowerCase();
                    if (gender === "m" || gender === "male") {
                      if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                        eligibleCount++;
                      } else if (usage === "never" || usage === "absent" || usage === "absnt" || usage === "nvr") {
                        ineligibleCount++;
                      }
                    }
                    if (gender === "f" || gender === "female") {
                      if (age > 25) {
                        eligibleCount++;
                      }
                      else if (age <= 25) {
                        if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                          eligibleCount++;
                        } else if (usage === "never" || usage === "absent" || usage === "absnt" || usage === "nvr") {
                          ineligibleCount++;
                        }
                      }
                    }
                  }
                }
              }
            }
          })
          .catch(error => {
            console.error(`Error fetching patient data for UUID: ${uuid}`, error);
          });
      })
      .catch((error) => {
        console.error("Error fetching data for UUID:", uuid, error);
      });

    fetchPromises.push(form1Promise); // Add form1Promise to the fetchPromises array
  });

  // Execute Promise.all once all fetch operations are added to the fetchPromises array
  Promise.all(fetchPromises)
    .then(() => {
      console.log("Eligibility count:", eligibleCount);
      console.log("Ineligibility count:", ineligibleCount);

      const timestamp = Date.now();
      counter_check.push(timestamp);
      Eligibility = true;
      array.push({
        "eligibilityCount": {
          "eligible": eligibleCount,
          "ineligible": ineligibleCount
        }
      });

      localStorage.setItem('eligiblecount', eligibleCount);
      localStorage.setItem('ineligiblecount', ineligibleCount);

    })
    .catch((error) => {
      console.error("Error in completing fetch operations:", error);
    });


}

async function fetchAdditionalMapInfo(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  var mapInfo = fb.database().ref().child("additional_info");
  const locations = [];
  // Make sure `removeDuplicateUUIDs` is working correctly before using it
  const uniqueData = removeDuplicateUUIDs(data);

  let fetchPromises = uniqueData.map(item => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;
    var pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);

    return mapInfo.child(uuid).once("value")
      .then(snapshot => {
        const uuidData = snapshot.val();
        if (uuidData) {
          let maxPhase1Timestamp = null;
          let maxPhase2Timestamp = null;

          Object.keys(uuidData).forEach(timestamp => {
            let year = new Date(Number(timestamp) * 1000).getFullYear();
            if (year === 2022) {
              if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                maxPhase1Timestamp = timestamp;
              }
            }
            if (year === 2024) {
              if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                maxPhase2Timestamp = timestamp;
              }
            }
          });

          let phaseTimestamp = null;
          if (selectedPhase === "1" && maxPhase1Timestamp) {
            phaseTimestamp = maxPhase1Timestamp;
          } else if (selectedPhase === "2" && maxPhase2Timestamp) {
            phaseTimestamp = maxPhase2Timestamp;
          } else if (selectedPhase === "All") {
            phaseTimestamp = maxPhase1Timestamp || maxPhase2Timestamp;
          }

          if (phaseTimestamp) {
            const locationUrl = uuidData[phaseTimestamp]?.location;

            if (locationUrl) {
              try {
                const urlParams = new URLSearchParams(new URL(locationUrl).search);
                const [latitude, longitude] = urlParams.get('saddr').split(',');

                if (latitude && longitude) {
                  return pref.child(uuid).once("value").then(patientSnapshot => {
                    const patientData = patientSnapshot.val();
                    const patient_ID = patientData ? patientData.pid : null;
                    const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

                    if (patient_ID && result) {
                      locations.push({ latitude, longitude, lastTimestamp: phaseTimestamp, patient_ID });
                    } else {
                      console.warn(`No patient_ID found for UUID ${uuid}`);
                    }
                  });
                } else {
                  console.warn(`Invalid latitude or longitude for UUID ${uuid} at timestamp ${phaseTimestamp}`);
                }
              } catch (error) {
                console.error(`Error parsing location URL for UUID ${uuid}:`, error);
              }
            } else {
              console.warn(`No valid location URL found for UUID ${uuid} at timestamp ${phaseTimestamp}`);
            }
          }
        } else {
          console.warn(`No data found for UUID ${uuid}`);
        }
      }).catch(error => {
        console.error("Error fetching additional info for UUID:", uuid, error);
      });
  });

  Promise.all(fetchPromises)
    .then(() => {
      initMap(locations);
      console.log("locations", locations);
    })
    .catch(error => {
      console.error("Error processing additional info data:", error);
    });
}


// async function countHabitSummary(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
//   let countYes = 0;
//   let countNotNow = 0;
//   let countAbsent = 0;
//   let fetchPromises = [];

//   console.log("Load Data", data);
//   // console.log("All Array:", allArray);
//   data.forEach((item) => {
//     const villageId = item.village;
//     const panchayatId = villageId.substring(0, 2);
//     var uuid = item.uuid;
//     // console.log("Panchayat", panchayatId)

//     var form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId);
//     var pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);

//     const form1Promise = form1.child(uuid).once("value")
//       .then(function (snap) {
//         let form1Data = snap.val();
//         if (form1Data) {
//           // console.log("Eligible data", form1Data);
//           let maxPhase1Timestamp = null;
//           let maxPhase2Timestamp = null;
//           let maxTimestamp = null;

//           let p1 = false, p2 = false, pall = false;

//           Object.keys(form1Data).forEach(timestamp => {
//             let year = new Date(Number(timestamp) * 1000).getFullYear();

//             // console.log("year : ", year + "  UUID  : ", uuid);
//             if (year === 2022) {
//               p1 = true;
//               if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
//                 maxPhase1Timestamp = timestamp;

//               }
//             }
//             if (year === 2024) {
//               p2 = true;
//               if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
//                 maxPhase2Timestamp = timestamp;

//               }
//             }
//             if (year === 2022 || year === 2024) {
//               pall = true;
//               if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
//                 maxTimestamp = timestamp;
//               }
//             }
//             // console.log("year : ", year + "  UUID  after: ", uuid, " 1: ", maxPhase1Timestamp, "2: ", maxPhase2Timestamp, " all : ", maxTimestamp);

//           });



//           // Fetch data from pref path after fetching from form1
//           return pref.child(uuid).once("value")
//             .then(function (snap) {
//               let pinfo = snap.val();
//               let fwid = pinfo.fw_id;

//               /* console.log("FieldWorker", fwid);
//                console.log("selectedFieldworker", selectedFieldworker);
//                console.log("selectedVillage", selectedVillage);
//                console.log("panchayatId", panchayatId);
//                console.log("villageId", villageId);
//                */
//               const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
//               /* console.log("Matching Condition Result:", result);
//                console.log("condition 1 :", (result && maxPhase1Timestamp && p1));
//                console.log("condition 2:",  (result && maxPhase2Timestamp && p2));
//                console.log("condition 3 :", (result && maxTimestamp && pall));*/



//               if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {

//                 if (p1 && selectedPhase === "1") {
//                   timestamp = maxPhase1Timestamp;
//                 } else if (p2 && selectedPhase === "2") {
//                   timestamp = maxPhase2Timestamp;
//                 }
//                 else if (pall && selectedPhase === "All") {
//                   timestamp = maxTimestamp;
//                 }

//                 // console.log("  UUID  : ", uuid, " p1 : ", p1, " p2 : " + p2, " timestamp : " + timestamp);


//                 let latestData = form1Data[timestamp];
//                 let usage = latestData?.tif;

//                 if (usage) {
//                   usage = usage.toLowerCase();
//                   if (usage === "yes" || usage === "y") {
//                     countYes++;
//                     // console.log("Patient Data in habit YES ", uuid);
//                   } else if (usage === "absent" || usage === "never" || usage === "nvr" || usage === "absnt") {
//                     countAbsent++;
//                     // console.log("Patient Data in habit NVR ", uuid);
//                   } else if (usage === "not now" || usage === "nn" || usage === "NN") {
//                     countNotNow++;
//                     // console.log("Patient Data in habit NN ", uuid);
//                   }
//                 }

//               }
//               // console.log("Habit(yes) count:", countYes);
//               // console.log("Habit(Not Now) count:", countNotNow);
//               // console.log("Habit(Absent) count:", countAbsent);
//             });
//         }

//       })
//       .catch((error) => {
//         console.error("Error fetching patient data for UUID:", item.uuid, error);
//       });
//     fetchPromises.push(form1Promise); // Add form1Promise to the fetchPromises array

//   })



//   Promise.all(fetchPromises)
//     .then(() => {
//       console.log("Habit(yes) count:", countYes);
//       console.log("Habit(Not Now) count:", countNotNow);
//       console.log("Habit(Absent) count:", countAbsent);
//       // pendingFollowUpChart(countYes, countNotNow, countAbsent);


//       const timestamp = Date.now();
//       //console.log(`Current Timestamp: ${timestamp}`);
//       counter_check.push(timestamp);
//       HabitSummary = true;
//       array.push({
//         "habit": {
//           "Yes": countYes,
//           "NotNow": countNotNow,
//           "Absent": countAbsent,
//         }
//       });

//       localStorage.setItem('habityes', countYes);
//       localStorage.setItem('habitnotnow', countNotNow);
//       localStorage.setItem('habitabsent', countAbsent);


//     })
//     .catch(error => {
//       console.error("Error processing data:", error);
//     });

// }

/**

 * Removes duplicate UUIDs from the given data array.

 *

 * @param {Array<Object>} data - The input array of objects with UUIDs.

 * @returns {Array<Object>} A new array with unique UUIDs.

 */

function removeDuplicateUUIDs(data) {

  // Create a Set to store unique UUIDs

  const uniqueUUIDs = new Set();


  // Filter the data array to include only objects with unique UUIDs

  const uniqueData = data.filter((item) => {

    if (!uniqueUUIDs.has(item.uuid)) {

      uniqueUUIDs.add(item.uuid);

      return true;

    }

    return false;

  });


  return uniqueData;

}

async function countHabitSummary(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  let countYes = 0;
  let countNotNow = 0;
  let countAbsent = 0;
  let fetchPromises = [];

  console.log("Load Data", data);
  const uniqueData = removeDuplicateUUIDs(data);

  // console.log("All Array:", allArray);
  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;

    // console.log("Panchayat", panchayatId)

    var form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId);

    const form1Promise = form1.child(uuid).once("value")
      .then(function (snap) {
        let form1Data = snap.val();
        if (form1Data) {
          // console.log("Eligible data", form1Data);
          let maxPhase1Timestamp = null;
          let maxPhase2Timestamp = null;
          let maxTimestamp = null;
          let orderedTimestamps = [];

          let p1 = false, p2 = false, pall = false;

          Object.keys(form1Data).forEach(timestamp => {
            let year = new Date(Number(timestamp) * 1000).getFullYear();

            if (year === 2022) {
              p1 = true;
              if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                maxPhase1Timestamp = timestamp;

              }
            }
            if (year === 2024) {
              p2 = true;
              if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                maxPhase2Timestamp = timestamp;

              }
            }
          });

          const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

          if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {

            if (selectedPhase === "1") {

              let latestData = form1Data[maxPhase1Timestamp];
              let usage = latestData?.tif;

              if (usage) {
                usage = usage.toLowerCase();
                if (usage === "yes" || usage === "y") {
                  countYes++;
                  // console.log("Patient Data in habit YES ", uuid);
                } else if (usage === "absent" || usage === "never" || usage === "nvr" || usage === "absnt") {
                  countAbsent++;
                  // console.log("Patient Data in habit NVR ", uuid);
                } else if (usage === "not now" || usage === "nn" || usage === "NN") {
                  countNotNow++;
                  // console.log("Patient Data in habit NN ", uuid);
                }
              }
            }
            if (selectedPhase === "2") {
              let latestData = form1Data[maxPhase2Timestamp];
              let usage = latestData?.tif;

              if (usage) {
                usage = usage.toLowerCase();
                if (usage === "yes" || usage === "y") {
                  countYes++;
                  // console.log("Patient Data in habit YES ", uuid);
                } else if (usage === "absent" || usage === "never" || usage === "nvr" || usage === "absnt") {
                  countAbsent++;
                  // console.log("Patient Data in habit NVR ", uuid);
                } else if (usage === "not now" || usage === "nn" || usage === "NN") {
                  countNotNow++;
                  // console.log("Patient Data in habit NN ", uuid);
                }
              }
            }
            if (selectedPhase === "All") {
              if (maxPhase1Timestamp) {
                let latestData = form1Data[maxPhase1Timestamp];
                let usage = latestData?.tif;
                if (usage) {
                  usage = usage.toLowerCase();
                  if (usage === "yes" || usage === "y") {
                    countYes++;
                    // console.log("Patient Data in habit YES ", uuid);
                  } else if (usage === "absent" || usage === "never" || usage === "nvr" || usage === "absnt") {
                    countAbsent++;
                    // console.log("Patient Data in habit NVR ", uuid);
                  } else if (usage === "not now" || usage === "nn" || usage === "NN") {
                    countNotNow++;
                    // console.log("Patient Data in habit NN ", uuid);
                  }
                }
              }
              if (maxPhase2Timestamp) {
                let latestData = form1Data[maxPhase2Timestamp];
                let usage = latestData?.tif;

                if (usage) {
                  usage = usage.toLowerCase();
                  if (usage === "yes" || usage === "y") {
                    countYes++;
                    // console.log("Patient Data in habit YES ", uuid);
                  } else if (usage === "absent" || usage === "never" || usage === "nvr" || usage === "absnt") {
                    countAbsent++;
                    // console.log("Patient Data in habit NVR ", uuid);
                  } else if (usage === "not now" || usage === "nn" || usage === "NN") {
                    countNotNow++;
                    // console.log("Patient Data in habit NN ", uuid);
                  }
                }
              }
            }



            /* if (pall && selectedPhase === "All" )  {
               orderedTimestamps.forEach(ts => {
                 
                   if(check_timestamp===123 ){
                     check_timestamp =  ts;
                     check_uuid = uuid;
 
                     let latestData = form1Data[check_timestamp];
                     let usage = latestData?.tif;
 
                     if (usage) {
                       usage = usage.toLowerCase();
                       if (usage === "yes" || usage === "y") {
                         countYes++;
                         // console.log("Patient Data in habit YES ", uuid);
                       } else if (usage === "absent" || usage === "never" || usage === "nvr" || usage === "absnt") {
                         countAbsent++;
                         // console.log("Patient Data in habit NVR ", uuid);
                       } else if (usage === "not now" || usage === "nn" || usage === "NN") {
                         countNotNow++;
                         // console.log("Patient Data in habit NN ", uuid);
                       }
 
                       console.log("ts 1:", ts , " uuid ",uuid);
                     }
 
                   }else if (check_timestamp!==ts && check_timestamp!==123 &&  check_uuid !== uuid){
                     check_timestamp = ts;
                     check_uuid = uuid;
 
                     let latestData = form1Data[check_timestamp];
                     let usage = latestData?.tif;
 
                     if (usage) {
                       usage = usage.toLowerCase();
                       if (usage === "yes" || usage === "y") {
                         countYes++;
                         // console.log("Patient Data in habit YES ", uuid);
                       } else if (usage === "absent" || usage === "never" || usage === "nvr" || usage === "absnt") {
                         countAbsent++;
                         // console.log("Patient Data in habit NVR ", uuid);
                       } else if (usage === "not now" || usage === "nn" || usage === "NN") {
                         countNotNow++;
                         // console.log("Patient Data in habit NN ", uuid);
                       }
                     }
                     console.log("ts :2", ts , " uuid ",uuid);
                   }
                 
               });
             }*/


            // console.log("  UUID  : ", uuid, " p1 : ", p1, " p2 : " + p2, " timestamp : " + timestamp);




          }

          // Fetch data from pref path after fetching from form1

        }

      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuid, error);
      });
    fetchPromises.push(form1Promise); // Add form1Promise to the fetchPromises array

  })



  Promise.all(fetchPromises)
    .then(() => {
      console.log("Habit(yes) count:", countYes);
      console.log("Habit(Not Now) count:", countNotNow);
      console.log("Habit(Absent) count:", countAbsent);
      // pendingFollowUpChart(countYes, countNotNow, countAbsent);


      const timestamp = Date.now();
      //console.log(`Current Timestamp: ${timestamp}`);
      counter_check.push(timestamp);
      HabitSummary = true;
      array.push({
        "habit": {
          "Yes": countYes,
          "NotNow": countNotNow,
          "Absent": countAbsent,
        }
      });

      localStorage.setItem('habityes', countYes);
      localStorage.setItem('habitnotnow', countNotNow);
      localStorage.setItem('habitabsent', countAbsent);


    })
    .catch(error => {
      console.error("Error processing data:", error);
    });

}

async function countRegistrationsAndRescreenings(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  let resurveyCount = 0;
  let newRegistrationCount = 0;
  let fetchPromises = [];

  let Rarray = [];
  // console.log("All Array:", data);
  const uniqueData = removeDuplicateUUIDs(data);

  // console.log("All Array:", allArray);
  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;

    var form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId);
    var patientsRef = fb.database().ref().child("patients1").child(panchayatId).child(villageId);

    const form1Promise = form1.child(uuid).once("value")
      .then(function (snap) {
        let form1Data = snap.val();
        if (form1Data) {
          let maxPhase1Timestamp = null;
          let maxPhase2Timestamp = null;
          let maxTimestamp = null;
          let p1 = false, p2 = false, pall = false;

          Object.keys(form1Data).forEach(timestamp => {
            let year = new Date(Number(timestamp) * 1000).getFullYear();

            if (year === 2022) {
              p1 = true;
              if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                maxPhase1Timestamp = timestamp;

              }
            }
            if (year === 2024) {
              p2 = true;
              if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                maxPhase2Timestamp = timestamp;

              }
            }

          });



          // Fetch data from pref path after fetching from form1
          return patientsRef.child(uuid).once("value")
            .then(function (snap) {
              let pinfo = snap.val();
              const patientId = pinfo.pid;

              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
                if (selectedPhase === "1") {
                  timestamp = maxPhase1Timestamp;
                  let lastTimestampYear = new Date(Number(timestamp) * 1000).getFullYear();

                  if (lastTimestampYear === 2022) {
                    resurveyCount++;
                    // console.log("Patient Data in Resurvey", pinfo.uid);
                  } else if (lastTimestampYear === 2024) {

                    const phaseMatch = patientId.match(/\/(\d)\//);


                    if (phaseMatch && result) {
                      const phase = phaseMatch[1];
                      // console.log("phase 2 conparision - ",(phase2 === "2"));
                      if (phase === "1") {
                        resurveyCount++;
                        // console.log("Patient Data in Resurvey", pinfo.uid);
                      } else if (phase === "2") {
                        newRegistrationCount++;
                        // console.log("Patient Data in Resurvey", pinfo.uid);
                      }

                    } else {
                      console.error("Invalid patient ID format:", patientId);
                    }

                  }

                } else if (selectedPhase === "2") {
                  timestamp = maxPhase2Timestamp;
                  let lastTimestampYear = new Date(Number(timestamp) * 1000).getFullYear();

                  if (lastTimestampYear === 2022) {
                    resurveyCount++;
                    // console.log("Patient Data in Resurvey", pinfo.uid);
                  } else if (lastTimestampYear === 2024) {

                    const phaseMatch = patientId.match(/\/(\d)\//);


                    if (phaseMatch && result) {
                      const phase = phaseMatch[1];
                      // console.log("phase 2 conparision - ",(phase2 === "2"));
                      if (phase === "1") {
                        resurveyCount++;
                        // console.log("Patient Data in Resurvey", pinfo.uid);
                      } else if (phase === "2") {
                        newRegistrationCount++;
                        // console.log("Patient Data in Resurvey", pinfo.uid);
                      }

                    } else {
                      console.error("Invalid patient ID format:", patientId);
                    }

                  }

                }
                else if (selectedPhase === "All") {
                  if (maxPhase1Timestamp) {
                    let lastTimestampYear = new Date(Number(maxPhase1Timestamp) * 1000).getFullYear();

                    if (lastTimestampYear === 2022) {
                      resurveyCount++;
                      // console.log("Patient Data in Resurvey", pinfo.uid);
                    } else if (lastTimestampYear === 2024) {

                      const phaseMatch = patientId.match(/\/(\d)\//);


                      if (phaseMatch && result) {
                        const phase = phaseMatch[1];
                        // console.log("phase 2 conparision - ",(phase2 === "2"));
                        if (phase === "1") {
                          resurveyCount++;
                          // console.log("Patient Data in Resurvey", pinfo.uid);
                        } else if (phase === "2") {
                          newRegistrationCount++;
                          // console.log("Patient Data in Resurvey", pinfo.uid);
                        }

                      } else {
                        console.error("Invalid patient ID format:", patientId);
                      }

                    }
                  }
                  if (maxPhase2Timestamp) {
                    let lastTimestampYear = new Date(Number(maxPhase2Timestamp) * 1000).getFullYear();

                    if (lastTimestampYear === 2022) {
                      resurveyCount++;
                      // console.log("Patient Data in Resurvey", pinfo.uid);
                    } else if (lastTimestampYear === 2024) {

                      const phaseMatch = patientId.match(/\/(\d)\//);


                      if (phaseMatch && result) {
                        const phase = phaseMatch[1];
                        // console.log("phase 2 conparision - ",(phase2 === "2"));
                        if (phase === "1") {
                          resurveyCount++;
                          // console.log("Patient Data in Resurvey", pinfo.uid);
                        } else if (phase === "2") {
                          newRegistrationCount++;
                          // console.log("Patient Data in Resurvey", pinfo.uid);
                        }

                      } else {
                        console.error("Invalid patient ID format:", patientId);
                      }

                    }
                  }
                }


              }
              // console.log("Resurveys:", resurveyCount);
              // console.log("New Registrations:", newRegistrationCount);
            });
        }

      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuid, error);
      });
    fetchPromises.push(form1Promise); // Add form1Promise to the fetchPromises array
  })

  Promise.all(fetchPromises)
    .then(() => {
      console.log("Resurveys:", resurveyCount);
      console.log("New Registrations:", newRegistrationCount);
      let countRS = resurveyCount + newRegistrationCount;
      // document.getElementById("RC").innerText = countRS;
      const timestamp = Date.now();
      //console.log(`Current Timestamp: ${timestamp}`);
      //updateRescreeningChart(resurveyCount, newRegistrationCount);
      counter_check.push(timestamp);
      RegistrationsAndRescreenings = true;

      array.push({
        "registrationCount": {
          "Resurvey": resurveyCount,
          "Registration": newRegistrationCount
        }
      });

      localStorage.setItem('Resurveycount', resurveyCount);
      localStorage.setItem('Registrationcount', newRegistrationCount);
    })
    .catch(error => {
      console.error("Error processing data:", error);
    });

}

async function countScreeningStatus(data, data_loc, selectedFieldworker, selectedPanchayat, selectedVillage) {
  let maleCount = 0;
  let femaleCount = 0;
  let screeningCompleted = 0;
  let fetchPromises = [];
  let notScreened = 0;
  let surveyCount = 0;
  let fwcnt = 1;
  console.log("countScreeningStatus -- ", data);

  const uniqueData = removeDuplicateUUIDs(data);

  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    const uuid = item.uuid;
    // const fwid = item.fw_id;
    // console.log("fwid in Screening",fwid);

    const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);
    pref.child(uuid).once("value").then((patientSnap) => {
      const patientData = patientSnap.val();
      // console.log("patientData", patientData)

      if (patientData) {
        const fwid = patientData.fw_id;
        const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

        // console.log("result", result)

        if (result) {
          surveyCount = fwcnt++;
          //   const gender = patientData.gndr;
          //   if (gender === "Male" || gender === "M" || gender === "m") {
          //     maleCount++;
          //   } else if (gender === "Female" || gender === "F" || gender === "f") {
          //     femaleCount++;
          //   }
        }
        // surveyCount = maleCount + femaleCount;
        // console.log("surveyCount", surveyCount)
      }
    })
  })
  data_loc.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    const uuid = item.uuid;
    const fwid = item.fw_id;

    // console.log("Fwid in the Screening", fwid);

    const form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);
    const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);

    const form3Promise = form3.child(uuid).once("value")
      .then(function (snap) {
        let form3Data = snap.val();
        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;

        let findp1 = false, findp2 = false, findall = false;

        Object.keys(form3Data).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();

          if (year === 2022) {
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;
              findp1 = true;
            }
          }
          if (year === 2024) {
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;
              findp2 = true;
            }
          }
          if (year === 2022 || year === 2024) {
            if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
              maxTimestamp = timestamp;
              findall = true;
            }
          }
        });

        f3Exist = false;
        if (form3Data) {
          f3Exist = true;
        }
        if (f3Exist && (findp1 || findp2 || findall)) {
          return pref.child(uuid).once("value")
            .then(function (snap) {
              let pinfo = snap.val();
              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

              if (result) {
                const gender = pinfo.gndr?.toLowerCase();
                if (gender === 'male' || gender === 'm') {
                  maleCount++;
                  //console.log("uuid of inpersonScreening", uuid)

                } else if (gender === 'female' || gender === 'f') {
                  femaleCount++;
                  // console.log("uuid of inpersonScreening", uuid)

                }
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching data for UUID:", uuid, error);
      });

    fetchPromises.push(form3Promise);
  });
  Promise.all(fetchPromises)
    .then(() => {
      screeningCompleted = maleCount + femaleCount;
      notScreened = surveyCount - screeningCompleted;

      const timestamp = Date.now();
      counter_check.push(timestamp);
      ScreeningStatus = true;
      array.push({
        "screeningCount": {
          "Screening Count": screeningCompleted,
          "Not Screened": notScreened
        }
      });

      localStorage.setItem('screeningCount', screeningCompleted);
      localStorage.setItem('notscreeningcount', notScreened);

      console.log(`Current Timestamp: ${timestamp}`);
      console.log("Screening Completed:", screeningCompleted);
      console.log("Not Screened:", notScreened);
      console.log("surveyCount", surveyCount)
    })
    .catch(error => {
      console.error("Error processing data:", error);
    });

}

async function countTCC_Survey(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let consumption_1_Counts = 0;
  let consumption_2_Counts = 0;
  let consumption_3_Counts = 0;
  let consumption_4_Counts = 0;
  let consumption_5_Counts = 0;
  let miscellaneousCounts = 0;
  let fetchPromises = [];

  const uniqueData = removeDuplicateUUIDs(data);

  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;

    var form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId);

    const form1Promise = form1.child(uuid).once("value")
      .then(function (snap) {
        let form1Data = snap.val();

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let p1 = false, p2 = false, pall = false;

        Object.keys(form1Data).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();
          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;

            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;

            }
          }
        });
        const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
        if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
          if (selectedPhase === "1") {
            timestamp = maxPhase1Timestamp;
            if (form1Data) {
              const lastRecord = form1Data[timestamp];
              let latestData = form1Data[timestamp];
              let usage = latestData?.tif;
              if (usage) {
                usage = usage.toLowerCase();
                if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                  const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                  const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                  const consumptionTypes = [
                    ttc1 || stbc,
                    ttc2 || stghpms,
                    ttc3 || bqt,
                    ttc4 || bqwot,
                    ttc5 || othr
                  ].filter(type => type);

                  if (consumptionTypes.length > 1) {
                    miscellaneousCounts++;
                  } else {
                    if (ttc1 || stbc) {
                      consumption_1_Counts++;
                    }
                    if (ttc2 || stghpms) {
                      consumption_2_Counts++;
                    }
                    if (ttc3 || bqt) {
                      consumption_3_Counts++;
                    }
                    if (ttc4 || bqwot) {
                      consumption_4_Counts++;
                    }
                    if (ttc5 || othr) {
                      consumption_5_Counts++;
                    }
                  }
                }
              }
            }
          }
          else if (selectedPhase === "2") {
            timestamp = maxPhase2Timestamp;
            if (form1Data) {
              const lastRecord = form1Data[timestamp];

              let latestData = form1Data[timestamp];
              let usage = latestData?.tif;
              if (usage) {
                usage = usage.toLowerCase();
                if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                  const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                  const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                  const consumptionTypes = [
                    ttc1 || stbc,
                    ttc2 || stghpms,
                    ttc3 || bqt,
                    ttc4 || bqwot,
                    ttc5 || othr
                  ].filter(type => type);

                  if (consumptionTypes.length > 1) {
                    miscellaneousCounts++;
                  } else {
                    if (ttc1 || stbc) {
                      consumption_1_Counts++;
                    }
                    if (ttc2 || stghpms) {
                      consumption_2_Counts++;
                    }
                    if (ttc3 || bqt) {
                      consumption_3_Counts++;
                    }
                    if (ttc4 || bqwot) {
                      consumption_4_Counts++;
                    }
                    if (ttc5 || othr) {
                      consumption_5_Counts++;
                    }
                  }
                }
              }
            }
          }
          else if (selectedPhase === "All") {

            if (maxPhase1Timestamp) {
              if (form1Data) {
                const lastRecord = form1Data[maxPhase1Timestamp];

                let latestData = form1Data[maxPhase1Timestamp];
                let usage = latestData?.tif;
                if (usage) {
                  usage = usage.toLowerCase();
                  if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                    const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                    const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                    const consumptionTypes = [
                      ttc1 || stbc,
                      ttc2 || stghpms,
                      ttc3 || bqt,
                      ttc4 || bqwot,
                      ttc5 || othr
                    ].filter(type => type);

                    if (consumptionTypes.length > 1) {
                      miscellaneousCounts++;
                    } else {
                      if (ttc1 || stbc) {
                        consumption_1_Counts++;
                      }
                      if (ttc2 || stghpms) {
                        consumption_2_Counts++;
                      }
                      if (ttc3 || bqt) {
                        consumption_3_Counts++;
                      }
                      if (ttc4 || bqwot) {
                        consumption_4_Counts++;
                      }
                      if (ttc5 || othr) {
                        consumption_5_Counts++;
                      }
                    }
                  }
                }
              }
            }
            if (maxPhase2Timestamp) {
              if (form1Data) {
                const lastRecord = form1Data[maxPhase2Timestamp];

                let latestData = form1Data[maxPhase2Timestamp];
                let usage = latestData?.tif;
                if (usage) {
                  usage = usage.toLowerCase();
                  if (usage === "yes" || usage === "not now" || usage === "y" || usage === "nn") {
                    const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                    const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                    const consumptionTypes = [
                      ttc1 || stbc,
                      ttc2 || stghpms,
                      ttc3 || bqt,
                      ttc4 || bqwot,
                      ttc5 || othr
                    ].filter(type => type);

                    if (consumptionTypes.length > 1) {
                      miscellaneousCounts++;
                    } else {
                      if (ttc1 || stbc) {
                        consumption_1_Counts++;
                      }
                      if (ttc2 || stghpms) {
                        consumption_2_Counts++;
                      }
                      if (ttc3 || bqt) {
                        consumption_3_Counts++;
                      }
                      if (ttc4 || bqwot) {
                        consumption_4_Counts++;
                      }
                      if (ttc5 || othr) {
                        consumption_5_Counts++;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuid, error);
      });
    fetchPromises.push(form1Promise);
  });

  Promise.all(fetchPromises)
    .then(() => {
      console.log("Tobacco consumption_1_Counts", consumption_1_Counts);
      console.log("Tobacco consumption_2_Counts", consumption_2_Counts);
      console.log("Tobacco consumption_3_Counts", consumption_3_Counts);
      console.log("Tobacco consumption_4_Counts", consumption_4_Counts);
      console.log("Tobacco consumption_5_Counts", consumption_5_Counts);
      console.log("Tobacco consumption_6_Counts", miscellaneousCounts);

      TccConsChart(consumption_1_Counts, consumption_2_Counts, consumption_3_Counts, consumption_4_Counts, consumption_5_Counts, miscellaneousCounts);
      // tccSurvey = true
    })
    .catch(error => {
      console.error("Error processing data:", error);
    });
}


//Doctor Screening

async function remoteScreening(selectedPhase, selectedFieldworker, selectedPanchayat, selectedVillage) {
  const form2Ref = fb.database().ref().child("Form_2");

  const form2Promises = [];
  const patientPromises = [];

  let maleCount = 0;
  let femaleCount = 0;


  let upids;
  let fetchPromises = [];
  let p1 = [];
  let p2 = [];
  let pall = [];

  //  if (selectedPanchayat === "All" || selectedVillage === "All") {
  upids = fb.database().ref().child('U_pchyat');
  upids.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      const panchayatId = childSnapshot.key;

      if (panchayatId.length === 2) {
        childSnapshot.forEach(function (villageSnapshot) {
          villageSnapshot.forEach(function (uuidSnapshot) {
            const villageId = villageSnapshot.key;
            const puuid = uuidSnapshot.key;

            const form3 = fb.database().ref().child("Form_2").child(puuid);

            const promise = form3.once("value").then(function (snap) {
              let form3Data = snap.val();
              if (form3Data) {
                let maxPhase1Timestamp = null;
                let maxPhase2Timestamp = null;
                let maxTimestamp = null;

                let findp1 = false, findp2 = false, findall = false;

                Object.keys(form3Data).forEach(timestamp => {
                  let year = new Date(Number(timestamp) * 1000).getFullYear();

                  if (year === 2022) {
                    if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                      maxPhase1Timestamp = timestamp;
                      findp1 = true;
                    }
                  }
                  if (year === 2024) {
                    if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                      maxPhase2Timestamp = timestamp;
                      findp2 = true;
                    }
                  }
                  if (year === 2022 || year === 2024) {
                    if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
                      maxTimestamp = timestamp;
                      findall = true;
                    }
                  }
                });

                if (findp1) {
                  p1.push({
                    "uuid": puuid,
                    "village": villageId
                  });
                }
                if (findp2) {
                  p2.push({
                    "uuid": puuid,
                    "village": villageId
                  });
                }

                // if (findall) {
                pall = p1.concat(p2);
                // pall.push(p2);
                // }

              }
            }).catch((error) => {
              console.error("Error fetching patient data for UUID:", puuid, error);
            });

            fetchPromises.push(promise); // Add each promise to the array
          });
        });
      }
    });

    // Wait for all promises to complete before logging the results
    Promise.all(fetchPromises)
      .then(() => {
        // console.log("p1 - :", p1);
        // console.log("p2 - :", p2);
        // console.log("pall - :", pall);

        var data = [];
        if (selectedPhase === "1") {
          data = p1;
        }
        if (selectedPhase === "2") {
          data = p2;
        }
        if (selectedPhase === "All") {
          data = pall;
        }

        data.forEach(item => {
          const villageId = item.village;
          const panchayatId = villageId.substring(0, 2);
          const uuid = item.uuid;

          const patientsRef = fb.database().ref().child("patients1").child(panchayatId).child(villageId);

          form2Promises.push(
            form2Ref.child(uuid).once("value")
              .then(snapshot => {
                if (snapshot.exists()) {

                  patientPromises.push(
                    patientsRef.child(uuid).once("value")
                      .then(patientSnapshot => {
                        const patientData = patientSnapshot.val();
                        const fwid = patientData.fw_id;

                        const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

                        if (patientData && result) {
                          if (patientData.gndr.toLowerCase() === 'male' || patientData.gndr.toLowerCase() === 'm') {
                            maleCount++;
                          } else if (patientData.gndr.toLowerCase() === 'female' || patientData.gndr.toLowerCase() === 'f') {
                            femaleCount++;
                          }
                        }
                      })
                      .catch(error => {
                        // console.error(`Error fetching patient data for UUID: ${uuid}`, error);
                      })
                  );
                }
              })
              .catch(error => {
                console.error(`Error fetching Form_2 data for UUID: ${uuid}`, error);
              })
          );
        });

        Promise.all(form2Promises);
        Promise.all(patientPromises);
        // Log or use the counts as needed
        // console.log("Number of remote screenings: ", form2Promises.length);
        // console.log("Number of males: ", maleCount);
        // console.log("Number of females: ", femaleCount);
        let remoteGenderCount = maleCount + femaleCount;
        document.getElementById("rs").innerText = remoteGenderCount;
        // document.getElementById("RM").innerText = remoteGenderCount;
        remoteSrcGenderChart(maleCount, femaleCount);
        remoteSrc = true;

      })
      .catch((error) => {
        console.error("Error in processing data:", error);
      });
  });
}

async function inPresonDocScreening(data, selectedFieldworker, selectedPanchayat, selectedVillage) {
  let maleCount = 0;
  let femaleCount = 0;
  let fetchPromises = [];
  let f3Exist = false;
  data.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    const uuid = item.uuid;
    let fwid = item.fw_id;

    const form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);
    const pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);

    const form3Promise = form3.child(uuid).once("value")
      .then(function (snap) {
        let form3Data = snap.val();
        f3Exist = false;
        if (form3Data) {
          f3Exist = true;
        }
        if (f3Exist) {
          return pref.child(uuid).once("value")
            .then(function (snap) {
              let pinfo = snap.val();
              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

              if (result) {
                const gender = pinfo.gndr?.toLowerCase();
                if (gender === 'male' || gender === 'm') {
                  maleCount++;
                  // console.log("uuid of inpersonScreening", uuid)

                } else if (gender === 'female' || gender === 'f') {
                  femaleCount++;
                  // console.log("uuid of inpersonScreening", uuid)

                }
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching data for UUID:", uuid, error);
      });

    fetchPromises.push(form3Promise);
  });

  Promise.all(fetchPromises)
    .then(() => {
      console.log("maleCount:", maleCount);
      console.log("femaleCount:", femaleCount);
      const totalGenderCount = maleCount + femaleCount;
      document.getElementById("ps").innerText = totalGenderCount;
      InpersonSrcGenderChart(maleCount, femaleCount);
      PresonScr = true;
    })
    .catch((error) => {
      console.error("Error in completing fetch operations:", error);
    });
}

async function DoctorRecommendations(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let hospitalVisit = 0;
  let noIntervention = 0;
  let localProcedure = 0;
  let fetchPromises = [];


  // if (selectedPanchayat === "All" || selectedVillage === "All") {

  const uniqueData = removeDuplicateUUIDs(data);

  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;
    // console.log("Panchayat", panchayatId)

    var form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);

    const form3Promise = form3.child(uuid).once("value")
      .then(function (snap) {
        let form3Data = snap.val();

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let p1 = false, p2 = false, pall = false;

        Object.keys(form3Data).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();
          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;

            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;

            }
          }

        });
        const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
        if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
          if (selectedPhase === "1") {
            if (maxPhase1Timestamp) {
              const recommendation = form3Data[maxPhase1Timestamp]["recdn"]?.toLowerCase();
              if (recommendation === "recommendation to hospital" || recommendation === "rth") {
                hospitalVisit++;
              } else if (["no intervention", "next screening date", "nointrvn", "nsd"].includes(recommendation)) {
                noIntervention++;
              } else if (form3Data[maxPhase1Timestamp]["recmd"]) {
                const recmd = form3Data[maxPhase1Timestamp]["recmd"];
                if (recmd["cpscy"] || recmd["lsr"] || recmd["mghpy"] || recmd["ulsnd"]) {
                  localProcedure++;
                }
              }
            }
          }
          else if (selectedPhase === "2") {
            if (maxPhase2Timestamp) {
              const recommendation = form3Data[maxPhase2Timestamp]["recdn"]?.toLowerCase();
              if (recommendation === "recommendation to hospital" || recommendation === "rth") {
                hospitalVisit++;
              } else if (["no intervention", "next screening date", "nointrvn", "nsd"].includes(recommendation)) {
                noIntervention++;
              } else if (form3Data[maxPhase2Timestamp]["recmd"]) {
                const recmd = form3Data[maxPhase2Timestamp]["recmd"];
                if (recmd["cpscy"] || recmd["lsr"] || recmd["mghpy"] || recmd["ulsnd"]) {
                  localProcedure++;
                }
              }
            }
          }
          else if (selectedPhase === "All") {
            if (maxPhase1Timestamp) {
              const recommendation = form3Data[maxPhase1Timestamp]["recdn"]?.toLowerCase();
              if (recommendation === "recommendation to hospital" || recommendation === "rth") {
                hospitalVisit++;
              } else if (["no intervention", "next screening date", "nointrvn", "nsd"].includes(recommendation)) {
                noIntervention++;
              } else if (form3Data[maxPhase1Timestamp]["recmd"]) {
                const recmd = form3Data[maxPhase1Timestamp]["recmd"];
                if (recmd["cpscy"] || recmd["lsr"] || recmd["mghpy"] || recmd["ulsnd"]) {
                  localProcedure++;
                }
              }
            }
            if (maxPhase2Timestamp) {
              const recommendation = form3Data[maxPhase2Timestamp]["recdn"]?.toLowerCase();
              if (recommendation === "recommendation to hospital" || recommendation === "rth") {
                hospitalVisit++;
              } else if (["no intervention", "next screening date", "nointrvn", "nsd"].includes(recommendation)) {
                noIntervention++;
              } else if (form3Data[maxPhase2Timestamp]["recmd"]) {
                const recmd = form3Data[maxPhase2Timestamp]["recmd"];
                if (recmd["cpscy"] || recmd["lsr"] || recmd["mghpy"] || recmd["ulsnd"]) {
                  localProcedure++;
                }
              }
            }
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuid, error);
      });
    fetchPromises.push(form3Promise);
  });


  Promise.all(fetchPromises)
    .then(() => {
      console.log("Hospital:", hospitalVisit);
      console.log("No Intervention:", noIntervention);
      console.log("Local Procedure:", localProcedure);

      drRecommendationChart(hospitalVisit, noIntervention, localProcedure);
      DoctorRec = true;
    })
    .catch(error => {
      console.error("Error processing data:", error);
    });
}

async function ScrTobaccoConsumption(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let consumption_1_Counts = 0;
  let consumption_2_Counts = 0;
  let consumption_3_Counts = 0;
  let consumption_4_Counts = 0;
  let consumption_5_Counts = 0;
  let miscellaneousCounts = 0;
  let fetchPromises = [];

  const uniqueData = removeDuplicateUUIDs(data);

  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;

    var form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);
    var form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId);

    const form3Promise = form3.child(uuid).once("value")
      .then(function (snap) {
        let form3Data = snap.val();

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let p1 = false, p2 = false, pall = false;

        Object.keys(form3Data).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();
          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;

            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;

            }
          }

        });
        const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
        if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
          if (selectedPhase === "1") {
            if (maxPhase1Timestamp) {
              if (timestamp && form3Data[timestamp]["scr_dne_for"]["oc"] === true) {
                // Proceed to Form_1 if nad is false
                return form1.child(uuid).once("value")
                  .then(snapshot => {
                    const form1Data = snapshot.val();
                    if (form1Data) {

                      let Phase1Timestamp = null;
                      let Phase2Timestamp = null;
                      let p1 = false, p2 = false, pall = false;

                      Object.keys(form1Data).forEach(timestamp => {
                        let year = new Date(Number(timestamp) * 1000).getFullYear();
                        if (year === 2022) {
                          p1 = true;
                          if (!Phase1Timestamp || Number(timestamp) > Number(Phase1Timestamp)) {
                            Phase1Timestamp = timestamp;

                          }
                        }
                        if (year === 2024) {
                          p2 = true;
                          if (!Phase2Timestamp || Number(timestamp) > Number(Phase2Timestamp)) {
                            Phase2Timestamp = timestamp;

                          }
                        }

                      });
                      if (Phase1Timestamp) {
                        const lastRecord = form1Data[Phase1Timestamp];

                        const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                        const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                        const consumptionTypes = [
                          ttc1 || stbc,
                          ttc2 || stghpms,
                          ttc3 || bqt,
                          ttc4 || bqwot,
                          ttc5 || othr
                        ].filter(type => type);

                        if (consumptionTypes.length > 1) {
                          miscellaneousCounts++;
                        } else {
                          if (ttc1 || stbc) {
                            consumption_1_Counts++;
                          }
                          if (ttc2 || stghpms) {
                            consumption_2_Counts++;
                          }
                          if (ttc3 || bqt) {
                            consumption_3_Counts++;
                          }
                          if (ttc4 || bqwot) {
                            consumption_4_Counts++;
                          }
                          if (ttc5 || othr) {
                            consumption_5_Counts++;
                          }
                        }
                      }
                    }
                  });
              }
            }
          }
          else if (selectedPhase === "2") {
            if (maxPhase2Timestamp) {
              if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["scr_dne_for"]["oc"] === true) {
                // Proceed to Form_1 if nad is false
                return form1.child(uuid).once("value")
                  .then(snapshot => {
                    const form1Data = snapshot.val();
                    if (form1Data) {
                      let Phase1Timestamp = null;
                      let Phase2Timestamp = null;
                      let p1 = false, p2 = false, pall = false;
                      Object.keys(form1Data).forEach(timestamp => {
                        let year = new Date(Number(timestamp) * 1000).getFullYear();
                        if (year === 2022) {
                          p1 = true;
                          if (!Phase1Timestamp || Number(timestamp) > Number(Phase1Timestamp)) {
                            Phase1Timestamp = timestamp;

                          }
                        }
                        if (year === 2024) {
                          p2 = true;
                          if (!Phase2Timestamp || Number(timestamp) > Number(Phase2Timestamp)) {
                            Phase2Timestamp = timestamp;

                          }
                        }

                      });

                      if (Phase2Timestamp) {
                        const lastRecord = form1Data[Phase2Timestamp];


                        const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                        const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                        const consumptionTypes = [
                          ttc1 || stbc,
                          ttc2 || stghpms,
                          ttc3 || bqt,
                          ttc4 || bqwot,
                          ttc5 || othr
                        ].filter(type => type);

                        if (consumptionTypes.length > 1) {
                          miscellaneousCounts++;
                        } else {
                          if (ttc1 || stbc) {
                            consumption_1_Counts++;
                          }
                          if (ttc2 || stghpms) {
                            consumption_2_Counts++;
                          }
                          if (ttc3 || bqt) {
                            consumption_3_Counts++;
                          }
                          if (ttc4 || bqwot) {
                            consumption_4_Counts++;
                          }
                          if (ttc5 || othr) {
                            consumption_5_Counts++;
                          }
                        }
                      }
                    }


                  });
              }
            }

          }
          else if (selectedPhase === "All") {
            if (maxPhase1Timestamp) {
              if (timestamp && form3Data[timestamp]["scr_dne_for"]["oc"] === true) {
                // Proceed to Form_1 if nad is false
                return form1.child(uuid).once("value")
                  .then(snapshot => {
                    const form1Data = snapshot.val();
                    if (form1Data) {

                      let Phase1Timestamp = null;
                      let Phase2Timestamp = null;
                      let p1 = false, p2 = false, pall = false;

                      Object.keys(form1Data).forEach(timestamp => {
                        let year = new Date(Number(timestamp) * 1000).getFullYear();
                        if (year === 2022) {
                          p1 = true;
                          if (!Phase1Timestamp || Number(timestamp) > Number(Phase1Timestamp)) {
                            Phase1Timestamp = timestamp;

                          }
                        }
                        if (year === 2024) {
                          p2 = true;
                          if (!Phase2Timestamp || Number(timestamp) > Number(Phase2Timestamp)) {
                            Phase2Timestamp = timestamp;

                          }
                        }

                      });
                      if (Phase1Timestamp) {
                        const lastRecord = form1Data[Phase1Timestamp];

                        const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                        const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                        const consumptionTypes = [
                          ttc1 || stbc,
                          ttc2 || stghpms,
                          ttc3 || bqt,
                          ttc4 || bqwot,
                          ttc5 || othr
                        ].filter(type => type);

                        if (consumptionTypes.length > 1) {
                          miscellaneousCounts++;
                        } else {
                          if (ttc1 || stbc) {
                            consumption_1_Counts++;
                          }
                          if (ttc2 || stghpms) {
                            consumption_2_Counts++;
                          }
                          if (ttc3 || bqt) {
                            consumption_3_Counts++;
                          }
                          if (ttc4 || bqwot) {
                            consumption_4_Counts++;
                          }
                          if (ttc5 || othr) {
                            consumption_5_Counts++;
                          }
                        }
                      }
                    }
                  });
              }
            }
            if (maxPhase2Timestamp) {
              if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["scr_dne_for"]["oc"] === true) {
                // Proceed to Form_1 if nad is false
                return form1.child(uuid).once("value")
                  .then(snapshot => {
                    const form1Data = snapshot.val();
                    if (form1Data) {
                      let Phase1Timestamp = null;
                      let Phase2Timestamp = null;
                      let p1 = false, p2 = false, pall = false;
                      Object.keys(form1Data).forEach(timestamp => {
                        let year = new Date(Number(timestamp) * 1000).getFullYear();
                        if (year === 2022) {
                          p1 = true;
                          if (!Phase1Timestamp || Number(timestamp) > Number(Phase1Timestamp)) {
                            Phase1Timestamp = timestamp;

                          }
                        }
                        if (year === 2024) {
                          p2 = true;
                          if (!Phase2Timestamp || Number(timestamp) > Number(Phase2Timestamp)) {
                            Phase2Timestamp = timestamp;

                          }
                        }

                      });

                      if (Phase2Timestamp) {
                        const lastRecord = form1Data[Phase2Timestamp];


                        const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                        const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                        const consumptionTypes = [
                          ttc1 || stbc,
                          ttc2 || stghpms,
                          ttc3 || bqt,
                          ttc4 || bqwot,
                          ttc5 || othr
                        ].filter(type => type);

                        if (consumptionTypes.length > 1) {
                          miscellaneousCounts++;
                        } else {
                          if (ttc1 || stbc) {
                            consumption_1_Counts++;
                          }
                          if (ttc2 || stghpms) {
                            consumption_2_Counts++;
                          }
                          if (ttc3 || bqt) {
                            consumption_3_Counts++;
                          }
                          if (ttc4 || bqwot) {
                            consumption_4_Counts++;
                          }
                          if (ttc5 || othr) {
                            consumption_5_Counts++;
                          }
                        }
                      }
                    }
                  });
              }
            }
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuid, error);
      });
    fetchPromises.push(form3Promise);
  });

  Promise.all(fetchPromises)
    .then(() => {
      TccConsDoc(consumption_1_Counts, consumption_2_Counts, consumption_3_Counts, consumption_4_Counts, consumption_5_Counts, miscellaneousCounts);
      document.getElementById("TC").innerHTML = `${consumption_1_Counts + consumption_2_Counts + consumption_3_Counts + consumption_4_Counts + consumption_5_Counts + miscellaneousCounts}`;
    })
    .catch(error => {
      console.error("Error processing data:", error);
    });
}

async function oralScreeningData(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  let normalCount = 0;
  let abnormalCount = 0;
  let fetchPromises = [];

  const uniqueData = removeDuplicateUUIDs(data);

  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    let fwid = item.fw_id;

    // console.log("Panchayat", panchayatId)

    var form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);
    var pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);

    const form3Promise = form3.child(uuid).once("value")
      .then(function (snap) {
        let form3Data = snap.val();

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let p1 = false, p2 = false, pall = false;

        Object.keys(form3Data).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();
          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;

            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;

            }
          }
        });
        const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
        if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
          if (selectedPhase === "1") {
            if (maxPhase1Timestamp) {
              if (form3Data[maxPhase1Timestamp]["scr_dne_for"]["oc"] === true) {
                if (maxPhase1Timestamp && form3Data[maxPhase1Timestamp]["fndgs"]) {
                  const oralFindings = form3Data[maxPhase1Timestamp]["fndgs"];
                  const oral = oralFindings?.nad === true;

                  // Count normal and abnormal findings
                  if (oral) {
                    normalCount++;
                  } else {
                    abnormalCount++;
                    // console.log("UUid of Abnormal in oral Screening :",uuid);
                  }
                }
                // console.log("UUID:", item.uuids, "Max Timestamp:", maxTimestamp, "Normal:", oral);
              }
            }
          }
          else if (selectedPhase === "2") {
            if (maxPhase2Timestamp) {
              if (form3Data[maxPhase2Timestamp]["scr_dne_for"]["oc"] === true) {
                if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["fndgs"]) {
                  const oralFindings = form3Data[maxPhase2Timestamp]["fndgs"];
                  const oral = oralFindings?.nad === true;

                  // Count normal and abnormal findings
                  if (oral) {
                    normalCount++;
                  } else {
                    abnormalCount++;
                    // console.log("UUid of Abnormal in oral Screening :",uuid);
                  }
                }
                // console.log("UUID:", item.uuids, "Max Timestamp:", maxTimestamp, "Normal:", oral);
              }
            }
          }
          else if (selectedPhase === "All") {
            if (maxPhase1Timestamp) {
              if (form3Data[maxPhase1Timestamp]["scr_dne_for"]["oc"] === true) {
                if (maxPhase1Timestamp && form3Data[maxPhase1Timestamp]["fndgs"]) {
                  const oralFindings = form3Data[maxPhase1Timestamp]["fndgs"];
                  const oral = oralFindings?.nad === true;

                  // Count normal and abnormal findings
                  if (oral) {
                    normalCount++;
                  } else {
                    abnormalCount++;
                    // console.log("UUid of Abnormal in oral Screening :",uuid);
                  }
                }
                // console.log("UUID:", item.uuids, "Max Timestamp:", maxTimestamp, "Normal:", oral);
              }
            }
            if (maxPhase2Timestamp) {
              if (form3Data[maxPhase2Timestamp]["scr_dne_for"]["oc"] === true) {
                if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["fndgs"]) {
                  const oralFindings = form3Data[maxPhase2Timestamp]["fndgs"];
                  const oral = oralFindings?.nad === true;

                  // Count normal and abnormal findings
                  if (oral) {
                    normalCount++;
                  } else {
                    abnormalCount++;
                    // console.log("UUid of Abnormal in oral Screening :",uuid);
                  }
                }
                // console.log("UUID:", item.uuids, "Max Timestamp:", maxTimestamp, "Normal:", oral);
              }
            }
          }


        }


      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuid, error);
      });
    fetchPromises.push(form3Promise);
  });


  Promise.all(fetchPromises)
    .then(() => {
      const total = normalCount + abnormalCount;
      document.getElementById("orscount").innerText = total;
      oralScreeningGraph(normalCount, abnormalCount);
      countTTC_Val(data, selectedFieldworker, selectedPanchayat, selectedVillage, abnormalCount, selectedPhase);

      const norPercent = ((normalCount / total) * 100).toFixed(2);
      const abnorPercent = ((abnormalCount / total) * 100).toFixed(2);
      console.log("Normal Per:", norPercent);
      console.log("Abnormal Per:", abnorPercent);
      oralScr = true;

      return { normalCount, abnormalCount };
    })
    .catch(error => {
      console.error("Error processing data:", error);
    });
}

async function countTTC_Val(data, selectedFieldworker, selectedPanchayat, selectedVillage, abnormalCount, selectedPhase) {

  let consumption_1_Counts = 0;
  let consumption_2_Counts = 0;
  let consumption_3_Counts = 0;
  let consumption_4_Counts = 0;
  let consumption_5_Counts = 0;
  let miscellaneousCounts = 0;
  let fetchPromises = [];
  console.log("Abnormal Count in AbN Section:", abnormalCount);

  const uniqueData = removeDuplicateUUIDs(data);

  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;
    // console.log("Panchayat", panchayatId)

    var form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);
    var form1 = fb.database().ref().child("Form_1").child(panchayatId).child(villageId);

    const form3Promise = form3.child(uuid).once("value")
      .then(function (snap) {
        let form3Data = snap.val();

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let p1 = false, p2 = false, pall = false;

        Object.keys(form3Data).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();
          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;

            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;

            }
          }

        });
        const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
        if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
          if (selectedPhase === "1") {
            if (maxPhase1Timestamp) {
              if (maxPhase1Timestamp && form3Data[maxPhase1Timestamp]["fndgs"] && form3Data[maxPhase1Timestamp]["fndgs"].nad === false) {

                return form1.child(uuid).once("value")
                  .then(snapshot => {
                    const form1Data = snapshot.val();
                    if (form1Data) {

                      let Phase1Timestamp = null;
                      let Phase2Timestamp = null;

                      Object.keys(form1Data).forEach(timestamp => {
                        let year = new Date(Number(timestamp) * 1000).getFullYear();
                        if (year === 2022) {
                          p1 = true;
                          if (!Phase1Timestamp || Number(timestamp) > Number(Phase1Timestamp)) {
                            Phase1Timestamp = timestamp;
                          }
                        }
                        if (year === 2024) {
                          p2 = true;
                          if (!Phase2Timestamp || Number(timestamp) > Number(Phase2Timestamp)) {
                            Phase2Timestamp = timestamp;
                          }
                        }
                      });
                      console.log("Tcc_Val Phase1Timestamp:", Phase1Timestamp)

                      if (Phase1Timestamp) {
                        const lastRecord = form1Data[Phase1Timestamp];
                        const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                        const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                        const consumptionTypes = [
                          ttc1 || stbc,
                          ttc2 || stghpms,
                          ttc3 || bqt,
                          ttc4 || bqwot,
                          ttc5 || othr
                        ].filter(type => type);

                        if (consumptionTypes.length > 1) {
                          miscellaneousCounts++;
                        } else {
                          if (ttc1 || stbc) {
                            consumption_1_Counts++;
                          }
                          if (ttc2 || stghpms) {
                            consumption_2_Counts++;
                          }
                          if (ttc3 || bqt) {
                            consumption_3_Counts++;
                          }
                          if (ttc4 || bqwot) {
                            consumption_4_Counts++;
                          }
                          if (ttc5 || othr) {
                            consumption_5_Counts++;
                          }
                        }
                      }
                    }
                  });
              }
            }
          }
          else if (selectedPhase === "2") {
            if (maxPhase2Timestamp) {
              if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["fndgs"] && form3Data[maxPhase2Timestamp]["fndgs"].nad === false) {
                // Proceed to Form_1 if nad is false
                return form1.child(uuid).once("value")
                  .then(snapshot => {
                    const form1Data = snapshot.val();
                    if (form1Data) {

                      let Phase1Timestamp = null;
                      let Phase2Timestamp = null;

                      Object.keys(form1Data).forEach(timestamp => {
                        let year = new Date(Number(timestamp) * 1000).getFullYear();
                        if (year === 2022) {
                          p1 = true;
                          if (!Phase1Timestamp || Number(timestamp) > Number(Phase1Timestamp)) {
                            Phase1Timestamp = timestamp;

                          }
                        }
                        if (year === 2024) {
                          p2 = true;
                          if (!Phase2Timestamp || Number(timestamp) > Number(Phase2Timestamp)) {
                            Phase2Timestamp = timestamp;

                          }
                        }

                      });

                      if (Phase2Timestamp) {
                        const lastRecord = form1Data[Phase2Timestamp];

                        console.log("Tcc_Val Phase2Timestamp :", Phase2Timestamp)

                        const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                        const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                        const consumptionTypes = [
                          ttc1 || stbc,
                          ttc2 || stghpms,
                          ttc3 || bqt,
                          ttc4 || bqwot,
                          ttc5 || othr
                        ].filter(type => type);

                        if (consumptionTypes.length > 1) {
                          miscellaneousCounts++;
                        } else {
                          if (ttc1 || stbc) {
                            consumption_1_Counts++;
                          }
                          if (ttc2 || stghpms) {
                            consumption_2_Counts++;
                          }
                          if (ttc3 || bqt) {
                            consumption_3_Counts++;
                          }
                          if (ttc4 || bqwot) {
                            consumption_4_Counts++;
                          }
                          if (ttc5 || othr) {
                            consumption_5_Counts++;
                          }
                        }
                      }

                    }
                  });
              }
            }
          }
          else if (selectedPhase === "All") {
            if (maxPhase1Timestamp) {
              if (maxPhase1Timestamp && form3Data[maxPhase1Timestamp]["fndgs"] && form3Data[maxPhase1Timestamp]["fndgs"].nad === false) {

                return form1.child(uuid).once("value")
                  .then(snapshot => {
                    const form1Data = snapshot.val();
                    if (form1Data) {

                      let Phase1Timestamp = null;
                      let Phase2Timestamp = null;

                      Object.keys(form1Data).forEach(timestamp => {
                        let year = new Date(Number(timestamp) * 1000).getFullYear();
                        if (year === 2022) {
                          p1 = true;
                          if (!Phase1Timestamp || Number(timestamp) > Number(Phase1Timestamp)) {
                            Phase1Timestamp = timestamp;
                          }
                        }
                        if (year === 2024) {
                          p2 = true;
                          if (!Phase2Timestamp || Number(timestamp) > Number(Phase2Timestamp)) {
                            Phase2Timestamp = timestamp;
                          }
                        }
                      });
                      console.log("Tcc_Val Phase1Timestamp:", Phase1Timestamp)

                      if (Phase1Timestamp) {
                        const lastRecord = form1Data[Phase1Timestamp];
                        const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                        const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                        const consumptionTypes = [
                          ttc1 || stbc,
                          ttc2 || stghpms,
                          ttc3 || bqt,
                          ttc4 || bqwot,
                          ttc5 || othr
                        ].filter(type => type);

                        if (consumptionTypes.length > 1) {
                          miscellaneousCounts++;
                        } else {
                          if (ttc1 || stbc) {
                            consumption_1_Counts++;
                          }
                          if (ttc2 || stghpms) {
                            consumption_2_Counts++;
                          }
                          if (ttc3 || bqt) {
                            consumption_3_Counts++;
                          }
                          if (ttc4 || bqwot) {
                            consumption_4_Counts++;
                          }
                          if (ttc5 || othr) {
                            consumption_5_Counts++;
                          }
                        }
                      }
                    }
                  });
              }
            }
            if (maxPhase2Timestamp) {
              if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["fndgs"] && form3Data[maxPhase2Timestamp]["fndgs"].nad === false) {
                // Proceed to Form_1 if nad is false
                return form1.child(uuid).once("value")
                  .then(snapshot => {
                    const form1Data = snapshot.val();
                    if (form1Data) {

                      let Phase1Timestamp = null;
                      let Phase2Timestamp = null;

                      Object.keys(form1Data).forEach(timestamp => {
                        let year = new Date(Number(timestamp) * 1000).getFullYear();
                        if (year === 2022) {
                          p1 = true;
                          if (!Phase1Timestamp || Number(timestamp) > Number(Phase1Timestamp)) {
                            Phase1Timestamp = timestamp;

                          }
                        }
                        if (year === 2024) {
                          p2 = true;
                          if (!Phase2Timestamp || Number(timestamp) > Number(Phase2Timestamp)) {
                            Phase2Timestamp = timestamp;

                          }
                        }

                      });
                      // console.log("Tcc_Val Phase2Timestamp :", Phase2Timestamp, "UUID", uuid)

                      if (Phase2Timestamp) {
                        const lastRecord = form1Data[Phase2Timestamp];


                        const { ttc1, ttc2, ttc3, ttc4, ttc5 } = lastRecord.ttc;
                        const { bqt, bqwot, othr, stbc, stghpms } = lastRecord.ttc_val;

                        const consumptionTypes = [
                          ttc1 || stbc,
                          ttc2 || stghpms,
                          ttc3 || bqt,
                          ttc4 || bqwot,
                          ttc5 || othr
                        ].filter(type => type);

                        if (consumptionTypes.length > 1) {
                          miscellaneousCounts++;
                        } else {
                          if (ttc1 || stbc) {
                            consumption_1_Counts++;
                          }
                          if (ttc2 || stghpms) {
                            consumption_2_Counts++;
                          }
                          if (ttc3 || bqt) {
                            consumption_3_Counts++;
                          }
                          if (ttc4 || bqwot) {
                            consumption_4_Counts++;
                          }
                          if (ttc5 || othr) {
                            consumption_5_Counts++;
                          }
                        }
                      }

                    }
                  });
              }
            }
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuid, error);
      });
    fetchPromises.push(form3Promise);
  });

  Promise.all(fetchPromises)
    .then(() => {
      if (abnormalCount != 0) {
        AbnormalChart(consumption_1_Counts, consumption_2_Counts, consumption_3_Counts, consumption_4_Counts, consumption_5_Counts, miscellaneousCounts);
        document.getElementById("AChart").innerHTML = `${consumption_1_Counts + consumption_2_Counts + consumption_3_Counts + consumption_4_Counts + consumption_5_Counts + miscellaneousCounts}`;
      } else {
        AbnormalChart(0, 0, 0, 0, 0, 0);
        document.getElementById("AChart").innerHTML = `${0 + 0 + 0 + 0 + 0 + 0}`;
      }

      abnormalC = true;
    })
    .catch(error => {
      console.error("Error processing data:", error);
    });
}

async function brScreeningData(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  let normalCount = 0;
  let abnormalCount = 0;
  let fetchPromises = [];

  const uniqueData = removeDuplicateUUIDs(data);

  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;
    // console.log("Panchayat", panchayatId)

    var form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);

    const form3Promise = form3.child(uuid).once("value")
      .then(function (snap) {
        let form3Data = snap.val();

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let p1 = false, p2 = false, pall = false;

        Object.keys(form3Data).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();
          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;

            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;

            }
          }
          if (year === 2022 || year === 2024) {
            pall = true;
            if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
              maxTimestamp = timestamp;

            }
          }
        });
        const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
        if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
          if (selectedPhase === "1") {
            if (maxPhase1Timestamp) {
              if (form3Data[maxPhase1Timestamp]["scr_dne_for"]["bc"] === true) {
                if (maxPhase1Timestamp && form3Data[maxPhase1Timestamp]["brst_exm"]) {
                  const breastExamination = form3Data[maxPhase1Timestamp]["brst_exm"];
                  const leftBreastNormal = breastExamination.l_b?.nml;
                  const rightBreastNormal = breastExamination.r_b?.nml;

                  if (leftBreastNormal === true && rightBreastNormal === true) {
                    normalCount++;
                  } else {
                    abnormalCount++;
                  }
                }
              }
            }
          } else if (selectedPhase === "2") {
            if (maxPhase2Timestamp) {
              if (form3Data[maxPhase2Timestamp]["scr_dne_for"]["bc"] === true) {
                if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["brst_exm"]) {
                  const breastExamination = form3Data[maxPhase2Timestamp]["brst_exm"];
                  const leftBreastNormal = breastExamination.l_b?.nml;
                  const rightBreastNormal = breastExamination.r_b?.nml;

                  if (leftBreastNormal === true && rightBreastNormal === true) {
                    normalCount++;
                  } else {
                    abnormalCount++;
                  }
                }
              }
            }
          } else if (selectedPhase === "All") {
            if (maxPhase1Timestamp) {
              if (form3Data[maxPhase1Timestamp]["scr_dne_for"]["bc"] === true) {
                if (maxPhase1Timestamp && form3Data[maxPhase1Timestamp]["brst_exm"]) {
                  const breastExamination = form3Data[maxPhase1Timestamp]["brst_exm"];
                  const leftBreastNormal = breastExamination.l_b?.nml;
                  const rightBreastNormal = breastExamination.r_b?.nml;

                  if (leftBreastNormal === true && rightBreastNormal === true) {
                    normalCount++;
                  } else {
                    abnormalCount++;
                  }
                }
              }
            }
            if (maxPhase2Timestamp) {
              if (form3Data[maxPhase2Timestamp]["scr_dne_for"]["bc"] === true) {
                if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["brst_exm"]) {
                  const breastExamination = form3Data[maxPhase2Timestamp]["brst_exm"];
                  const leftBreastNormal = breastExamination.l_b?.nml;
                  const rightBreastNormal = breastExamination.r_b?.nml;

                  if (leftBreastNormal === true && rightBreastNormal === true) {
                    normalCount++;
                  } else {
                    abnormalCount++;
                  }
                }
              }
            }
          }

        }
      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuid, error);
      });
    fetchPromises.push(form3Promise);
  });
  Promise.all(fetchPromises)
    .then(() => {
      const total = normalCount + abnormalCount;
      // console.log("Br Normal: ", normalCount);
      // console.log("Br AbNormal: ", abnormalCount);
      document.getElementById("brscount").innerText = total;
      brScreeningGraph(normalCount, abnormalCount);
      brScr = true;
      return { normalCount, abnormalCount };
    })
    .catch(error => {
      console.error("Error processing data:", error);
    });
}

async function cervicalScreeningData(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let normalCount = 0;
  let abnormalCount = 0;
  let fetchPromises = [];

  const uniqueData = removeDuplicateUUIDs(data);

  uniqueData.forEach((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;

    var form3 = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);

    const form3Promise = form3.child(uuid).once("value")
      .then(function (snap) {
        let form3Data = snap.val();

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let p1 = false, p2 = false, pall = false;

        Object.keys(form3Data).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();
          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;

            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;

            }
          }
          if (year === 2022 || year === 2024) {
            pall = true;
            if (!maxTimestamp || Number(timestamp) > Number(maxTimestamp)) {
              maxTimestamp = timestamp;

            }
          }
        });
        const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
        if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {
          if (selectedPhase === "1") {
            if (maxPhase1Timestamp) {
              if (form3Data[maxPhase1Timestamp]["scr_dne_for"]["cc"] === true) {
                if (maxPhase1Timestamp && form3Data[maxPhase1Timestamp]["trtpap"] !== undefined) {
                  const ttp = form3Data[maxPhase1Timestamp]["trtpap"];
                  const cervical = ttp;
                  if (cervical === "Yes" || cervical === "Unwilling" || cervical === "y" || cervical === "unwg") {
                    abnormalCount++;
                  } else {
                    normalCount++;
                  }
                }
              }
            }
          } else if (selectedPhase === "2") {
            if (maxPhase2Timestamp) {
              if (form3Data[maxPhase2Timestamp]["scr_dne_for"]["cc"] === true) {
                if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["trtpap"] !== undefined) {
                  const ttp = form3Data[maxPhase2Timestamp]["trtpap"];
                  const cervical = ttp;
                  if (cervical === "Yes" || cervical === "Unwilling" || cervical === "y" || cervical === "unwg") {
                    abnormalCount++;
                  } else {
                    normalCount++;
                  }
                }
              }
            }
          } else if (selectedPhase === "All") {
            if (maxPhase1Timestamp) {
              if (form3Data[maxPhase1Timestamp]["scr_dne_for"]["cc"] === true) {
                if (maxPhase1Timestamp && form3Data[maxPhase1Timestamp]["trtpap"] !== undefined) {
                  const ttp = form3Data[maxPhase1Timestamp]["trtpap"];
                  const cervical = ttp;
                  if (cervical === "Yes" || cervical === "Unwilling" || cervical === "y" || cervical === "unwg") {
                    abnormalCount++;
                  } else {
                    normalCount++;
                  }
                }
              }
            }
            if (maxPhase2Timestamp) {
              if (form3Data[maxPhase2Timestamp]["scr_dne_for"]["cc"] === true) {
                if (maxPhase2Timestamp && form3Data[maxPhase2Timestamp]["trtpap"] !== undefined) {
                  const ttp = form3Data[maxPhase2Timestamp]["trtpap"];
                  const cervical = ttp;
                  if (cervical === "Yes" || cervical === "Unwilling" || cervical === "y" || cervical === "unwg") {
                    abnormalCount++;
                  } else {
                    normalCount++;
                  }
                }
              }
            }
          }


        }
      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuid, error);
      });
    fetchPromises.push(form3Promise);
  });
  Promise.all(fetchPromises)
    .then(() => {
      const total = normalCount + abnormalCount;
      document.getElementById("crscount").innerText = total;
      cervi = true;
      cScreeningGraph(normalCount, abnormalCount);
      return { normalCount, abnormalCount };
    })
    .catch(error => {
      console.error("Error processing data:", error);
    });
}

async function aggregateScreeningData(p1, p2, selectedPhase, selectedFieldworker, selectedPanchayat, selectedVillage) {
  const getOralScreeningData = async (phaseArray, phaseType) => {
    let normalCount = 0;
    let abnormalCount = 0;

    const fetchPromises = phaseArray.map(item => {
      const villageId = item.village;
      const panchayatId = villageId.substring(0, 2);
      var uuid = item.uuid;
      var fwid = item.fw_id;

      var form3Ref = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);


      return form3Ref.child(uuid).once("value")
        .then(async (snap) => {
          const uuidData = snap.val();
          if (uuidData) {
            let maxPhase1Timestamp = null;
            let maxPhase2Timestamp = null;

            // Find the max timestamp for each phase
            Object.keys(uuidData).forEach(timestamp => {
              let year = new Date(Number(timestamp) * 1000).getFullYear();
              if (year === 2022 && phaseType === 'p1') {
                if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                  maxPhase1Timestamp = timestamp;
                }
              }
              if (year === 2024 && phaseType === 'p2') {
                if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                  maxPhase2Timestamp = timestamp;
                }
              }
            });

            const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
            // Check if UUID is in the phase array and process data
            if (result) {
              if (phaseType === 'p1' && maxPhase1Timestamp && uuidData[maxPhase1Timestamp]["fndgs"]) {
                const oralFindingsPhase1 = uuidData[maxPhase1Timestamp]["fndgs"];
                const oralPhase1 = oralFindingsPhase1?.nad === true;
                if (oralPhase1) {
                  normalCount++;
                  // console.log("phase1normalCount", normalCount);

                } else {
                  abnormalCount++;
                  // console.log("phase1abnormalCount", abnormalCount);

                }
              } else if (phaseType === 'p2' && maxPhase2Timestamp && uuidData[maxPhase2Timestamp]["fndgs"]) {
                if (uuidData[maxPhase2Timestamp]["scr_dne_for"]["oc"] === true) {
                  const oralFindingsPhase2 = uuidData[maxPhase2Timestamp]["fndgs"];
                  const oralPhase2 = oralFindingsPhase2?.nad === true;
                  if (oralPhase2) {
                    normalCount++;
                    // console.log("phase2normalCount", normalCount);
                  } else {
                    abnormalCount++;
                    // console.log("phase2abnormalCount", abnormalCount);
                  }
                }
              }
            }
          }
        }).catch(error => {
          console.error("Error fetching form_3 data for UUID:", uuid, error);
          return { uuids: uuid, data: null };
        });
    });

    await Promise.all(fetchPromises);
    return { normalCount, abnormalCount };
  };

  const getBreastScreeningData = async (phaseArray, phaseType) => {
    let normalCount = 0;
    let abnormalCount = 0;

    const fetchPromises = phaseArray.map(item => {
      const villageId = item.village;
      const panchayatId = villageId.substring(0, 2);
      var uuid = item.uuid;
      var fwid = item.fw_id;
      var form3Ref = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);


      return form3Ref.child(uuid).once("value")
        .then(async (snap) => {
          const uuidData = snap.val();
          if (uuidData) {
            let maxPhase1Timestamp = null;
            let maxPhase2Timestamp = null;

            // Find the max timestamp for each phase
            Object.keys(uuidData).forEach(timestamp => {
              let year = new Date(Number(timestamp) * 1000).getFullYear();
              if (year === 2022 && phaseType === 'p1') {
                if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                  maxPhase1Timestamp = timestamp;
                }
              }
              if (year === 2024 && phaseType === 'p2') {
                if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                  maxPhase2Timestamp = timestamp;
                }
              }
            });

            const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
            // Check if UUID is in the phase array and process data
            if (result) {
              if (phaseType === 'p1' && maxPhase1Timestamp && uuidData[maxPhase1Timestamp]["brst_exm"]) {
                const breastExaminationPhase1 = uuidData[maxPhase1Timestamp]["brst_exm"];
                const leftBreastNormalPhase1 = breastExaminationPhase1.l_b?.nml;
                const rightBreastNormalPhase1 = breastExaminationPhase1.r_b?.nml;

                if (leftBreastNormalPhase1 === true && rightBreastNormalPhase1 === true) {
                  normalCount++;
                } else if (leftBreastNormalPhase1 === false && rightBreastNormalPhase1 === false) {
                  abnormalCount++;
                }

              } else if (phaseType === 'p2' && maxPhase2Timestamp && uuidData[maxPhase2Timestamp]["brst_exm"]) {
                if (uuidData[maxPhase2Timestamp]["scr_dne_for"]["bc"] === true) {
                  const breastExaminationPhase2 = uuidData[maxPhase2Timestamp]["brst_exm"];
                  const leftBreastNormalPhase2 = breastExaminationPhase2.l_b?.nml;
                  const rightBreastNormalPhase2 = breastExaminationPhase2.r_b?.nml;

                  if (leftBreastNormalPhase2 === true && rightBreastNormalPhase2 === true) {
                    normalCount++;
                  } else {
                    abnormalCount++;
                  }
                }
              }
            }
          }
        }).catch(error => {
          console.error("Error fetching form_3 data for UUID:", uuid, error);
          return { uuids: uuid, data: null };
        });
    });

    await Promise.all(fetchPromises);
    return { normalCount, abnormalCount };
  };

  const getCervicalScreeningData = async (phaseArray, phaseType) => {
    let normalCount = 0;
    let abnormalCount = 0;

    const fetchPromises = phaseArray.map(item => {
      const villageId = item.village;
      const panchayatId = villageId.substring(0, 2);
      var uuid = item.uuid;
      var fwid = item.fw_id;

      var form3Ref = fb.database().ref().child("Form_3").child(panchayatId).child(villageId);


      return form3Ref.child(uuid).once("value")
        .then(async (snap) => {
          const uuidData = snap.val();
          if (uuidData) {
            let maxPhase1Timestamp = null;
            let maxPhase2Timestamp = null;

            // Find the max timestamp for each phase
            Object.keys(uuidData).forEach(timestamp => {
              let year = new Date(Number(timestamp) * 1000).getFullYear();
              if (year === 2022 && phaseType === 'p1') {
                if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                  maxPhase1Timestamp = timestamp;
                }
              }
              if (year === 2024 && phaseType === 'p2') {
                if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                  maxPhase2Timestamp = timestamp;
                }
              }
            });

            const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
            // Check if UUID is in the phase array and process data
            if (result) {
              if (phaseType === 'p1' && maxPhase1Timestamp && uuidData[maxPhase1Timestamp]["trtpap"]) {
                const ttp = uuidData[maxPhase1Timestamp]["trtpap"];
                const cervicalPhase1 = ttp;
                if (cervicalPhase1 === "Yes" || cervicalPhase1 === "Unwilling" || cervicalPhase1 === "y" || cervicalPhase1 === "unwg") {
                  abnormalCount++;
                } else {
                  normalCount++;
                }

              } else if (phaseType === 'p2' && maxPhase2Timestamp && uuidData[maxPhase2Timestamp]["brst_exm"]) {
                if (uuidData[maxPhase2Timestamp]["scr_dne_for"]["cc"] === true) {
                  if (maxPhase2Timestamp && uuidData[maxPhase2Timestamp]?.["trtpap"] !== undefined) {
                    const ttp = uuidData[maxPhase2Timestamp]["trtpap"];
                    const cervicalPhase2 = ttp;
                    if (cervicalPhase2 === "Yes" || cervicalPhase2 === "Unwilling" || cervicalPhase2 === "y" || cervicalPhase2 === "unwg") {
                      abnormalCount++;
                    } else {
                      normalCount++;
                    }
                  }
                }
              }
            }
          }
        }).catch(error => {
          console.error("Error fetching form_3 data for UUID:", uuid, error);
          return { uuids: uuid, data: null };
        });
    });

    await Promise.all(fetchPromises);
    return { normalCount, abnormalCount };
  };

  // Process p1 data (Phase 1)
  const OSp1Data = await getOralScreeningData(p1, 'p1');
  const OSphase1NormalCount = OSp1Data.normalCount;
  const OSphase1AbnormalCount = OSp1Data.abnormalCount;

  // Process p2 data (Phase 2)
  const OSp2Data = await getOralScreeningData(p2, 'p2');
  const OSphase2NormalCount = OSp2Data.normalCount;
  const OSphase2AbnormalCount = OSp2Data.abnormalCount;
  // console.log("phase1NormalCount", OSphase1NormalCount);
  // console.log("phase1AbnormalCount", OSphase1AbnormalCount);
  // console.log("phase2NormalCount", OSphase2NormalCount);
  // console.log("phase2AbnormalCount", OSphase2AbnormalCount);


  const BSp1Data = await getBreastScreeningData(p1, 'p1');
  const BSphase1NormalCount = BSp1Data.normalCount;
  const BSphase1AbnormalCount = BSp1Data.abnormalCount;

  // Process p2 data (Phase 2)
  const BSp2Data = await getBreastScreeningData(p2, 'p2');
  const BSphase2NormalCount = BSp2Data.normalCount;
  const BSphase2AbnormalCount = BSp2Data.abnormalCount;

  const CSp1Data = await getCervicalScreeningData(p1, 'p1');
  const CSphase1NormalCount = CSp1Data.normalCount;
  const CSphase1AbnormalCount = CSp1Data.abnormalCount;

  // Process p2 data (Phase 2)
  const CSp2Data = await getCervicalScreeningData(p2, 'p2');
  const CSphase2NormalCount = CSp2Data.normalCount;
  const CSphase2AbnormalCount = CSp2Data.abnormalCount;

  phase1OralCount = OSphase1NormalCount + OSphase1AbnormalCount;
  phase1BrCount = BSphase1NormalCount + BSphase1AbnormalCount;
  phase1CrCount = CSphase1NormalCount + CSphase1AbnormalCount;
  phase2OralCount = OSphase2NormalCount + OSphase2AbnormalCount;
  phase2BrCount = BSphase2NormalCount + BSphase2AbnormalCount;
  phase2CrCount = CSphase2NormalCount + CSphase2AbnormalCount;

  if (selectedPhase === '1') {
    overallP1Screening(phase1OralCount, phase1BrCount, phase1CrCount);
  } else if (selectedPhase === '2') {
    overallP2Screening(phase2OralCount, phase2BrCount, phase2CrCount);
  } else if (selectedPhase === 'All') {
    overallScreening(phase1OralCount, phase2OralCount, phase1BrCount, phase2BrCount, phase1CrCount, phase2CrCount);
  }
  aggregateScr = true;
}


//TCC Screening


async function countTCCGenders(data, selectedFieldworker, selectedPanchayat, selectedVillage) {

  let maleCount = 0;
  let femaleCount = 0;
  let fetchPromises = [];


  data.forEach((item) => {
    var villageId = item.village;
    var panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;
    // console.log("UUid ", uuid + " Village ", villageId + " Panchayat ", panchayatId);
    var pref = fb.database().ref().child("patients1").child(panchayatId).child(villageId);
    const promise = pref.child(uuid).once("value")
      .then(function (snap) {
        let patientData = snap.val();
        if (patientData) {
          let gender = patientData.gndr;
          const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
          // console.log(result);
          if (result) {
            if (gender === "Male" || gender === "M" || gender === "m") {
              maleCount++;
            } else if (gender === "Female" || gender === "F" || gender === "f") {
              femaleCount++;
            }
            // console.log("Gender Info: ", uuid);
          }

          // console.log("maleCount gender status in survey", maleCount);
          // console.log("femaleCount gender status in survey", femaleCount);

          let surveyCount = maleCount + femaleCount;
          // document.getElementById("ts").innerHTML = surveyCount;

          const timestamp = Date.now();
          counter_check.push(timestamp);

        }
        else {
          // console.log("Null UUID:", item.uuids);
        }

      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", item.uuids, error);
      });
    fetchPromises.push(promise); // Add each promise to the array

  })

  Promise.all(fetchPromises)
    .then(() => {

      let TCCGenderCount = maleCount + femaleCount;
      console.log("Male in TCC:", maleCount);
      console.log("Female in TCC:", femaleCount);
      tccArray.push({
        "gender": {
          "Male": maleCount,
          "Female": femaleCount
        }
      });
      document.getElementById("total_TCC").innerHTML = TCCGenderCount;
      tccgenderChart(maleCount, femaleCount);

      TCCGen = true;
    })
    .catch((error) => {
      console.error("Error in processing data:", error);
    });

}

async function countTobaccoConsumptions(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {


  let consumption_1_Counts = 0;
  let consumption_2_Counts = 0;
  let consumption_3_Counts = 0;
  let consumption_4_Counts = 0;
  let consumption_5_Counts = 0;
  let miscellaneousCounts = 0;



  const fetchPromises = data.map((item) => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    const uuid = item.uuid;
    const fwid = item.fw_id;

    // Fetch data from tccRef
    return tccRef.child(uuid).once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userRecords = snapshot.val();
          // const lastRecordKey = Object.keys(userRecords).pop();
          // const lastRecord = userRecords[lastRecordKey];


          let maxPhase1Timestamp = null;
          let maxPhase2Timestamp = null;
          let maxTimestamp = null;
          let p1 = false, p2 = false, pall = false;

          Object.keys(userRecords).forEach(timestamp => {
            let year = new Date(Number(timestamp) * 1000).getFullYear();
            if (year === 2022) {
              p1 = true;
              if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                maxPhase1Timestamp = timestamp;

              }
            }
            if (year === 2024) {
              p2 = true;
              if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                maxPhase2Timestamp = timestamp;

              }
            }
          });
          // Fetch data from pref after tccRef is done
          const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

          if (selectedPhase === "1") {
            if (maxPhase1Timestamp) {
              if (result) {
                var lastRecord = userRecords[maxPhase1Timestamp];

                // Extract tobacco consumption types
                const {
                  types_of_tobacco_consumption1,
                  types_of_tobacco_consumption2,
                  types_of_tobacco_consumption3,
                  types_of_tobacco_consumption4,
                  types_of_tobacco_consumption5
                } = lastRecord.type_tc;

                // Count the types of tobacco consumption
                const consumptionTypes = [
                  types_of_tobacco_consumption1,
                  types_of_tobacco_consumption2,
                  types_of_tobacco_consumption3,
                  types_of_tobacco_consumption4,
                  types_of_tobacco_consumption5
                ].filter(type => type); // Filter out falsy values

                if (consumptionTypes.length > 1) {
                  miscellaneousCounts++;
                } else {
                  if (types_of_tobacco_consumption1) consumption_1_Counts++;
                  if (types_of_tobacco_consumption2) consumption_2_Counts++;
                  if (types_of_tobacco_consumption3) consumption_3_Counts++;
                  if (types_of_tobacco_consumption4) consumption_4_Counts++;
                  if (types_of_tobacco_consumption5) consumption_5_Counts++;
                }
              }
            }
          }
          if (selectedPhase === "2") {
            if (maxPhase2Timestamp) {
              if (result) {
                // Extract tobacco consumption types
                var lastRecord = userRecords[maxPhase2Timestamp];

                const {
                  types_of_tobacco_consumption1,
                  types_of_tobacco_consumption2,
                  types_of_tobacco_consumption3,
                  types_of_tobacco_consumption4,
                  types_of_tobacco_consumption5
                } = lastRecord.type_tc;

                // Count the types of tobacco consumption
                const consumptionTypes = [
                  types_of_tobacco_consumption1,
                  types_of_tobacco_consumption2,
                  types_of_tobacco_consumption3,
                  types_of_tobacco_consumption4,
                  types_of_tobacco_consumption5
                ].filter(type => type); // Filter out falsy values

                if (consumptionTypes.length > 1) {
                  miscellaneousCounts++;
                } else {
                  if (types_of_tobacco_consumption1) consumption_1_Counts++;
                  if (types_of_tobacco_consumption2) consumption_2_Counts++;
                  if (types_of_tobacco_consumption3) consumption_3_Counts++;
                  if (types_of_tobacco_consumption4) consumption_4_Counts++;
                  if (types_of_tobacco_consumption5) consumption_5_Counts++;
                }
              }
            }
          }
          if (selectedPhase === "All") {
            if (result) {
              if (maxPhase1Timestamp) {
                if (result) {
                  var lastRecord = userRecords[maxPhase1Timestamp];

                  // Extract tobacco consumption types
                  const {
                    types_of_tobacco_consumption1,
                    types_of_tobacco_consumption2,
                    types_of_tobacco_consumption3,
                    types_of_tobacco_consumption4,
                    types_of_tobacco_consumption5
                  } = lastRecord.type_tc;

                  // Count the types of tobacco consumption
                  const consumptionTypes = [
                    types_of_tobacco_consumption1,
                    types_of_tobacco_consumption2,
                    types_of_tobacco_consumption3,
                    types_of_tobacco_consumption4,
                    types_of_tobacco_consumption5
                  ].filter(type => type); // Filter out falsy values

                  if (consumptionTypes.length > 1) {
                    miscellaneousCounts++;
                  } else {
                    if (types_of_tobacco_consumption1) consumption_1_Counts++;
                    if (types_of_tobacco_consumption2) consumption_2_Counts++;
                    if (types_of_tobacco_consumption3) consumption_3_Counts++;
                    if (types_of_tobacco_consumption4) consumption_4_Counts++;
                    if (types_of_tobacco_consumption5) consumption_5_Counts++;
                  }
                }
              }
              if (maxPhase2Timestamp) {
                if (result) {
                  // Extract tobacco consumption types
                  var lastRecord = userRecords[maxPhase2Timestamp];

                  const {
                    types_of_tobacco_consumption1,
                    types_of_tobacco_consumption2,
                    types_of_tobacco_consumption3,
                    types_of_tobacco_consumption4,
                    types_of_tobacco_consumption5
                  } = lastRecord.type_tc;

                  // Count the types of tobacco consumption
                  const consumptionTypes = [
                    types_of_tobacco_consumption1,
                    types_of_tobacco_consumption2,
                    types_of_tobacco_consumption3,
                    types_of_tobacco_consumption4,
                    types_of_tobacco_consumption5
                  ].filter(type => type); // Filter out falsy values

                  if (consumptionTypes.length > 1) {
                    miscellaneousCounts++;
                  } else {
                    if (types_of_tobacco_consumption1) consumption_1_Counts++;
                    if (types_of_tobacco_consumption2) consumption_2_Counts++;
                    if (types_of_tobacco_consumption3) consumption_3_Counts++;
                    if (types_of_tobacco_consumption4) consumption_4_Counts++;
                    if (types_of_tobacco_consumption5) consumption_5_Counts++;
                  }
                }
              }
            }
          }

          // if (result) {
          //   // Extract tobacco consumption types
          //   const {
          //     types_of_tobacco_consumption1,
          //     types_of_tobacco_consumption2,
          //     types_of_tobacco_consumption3,
          //     types_of_tobacco_consumption4,
          //     types_of_tobacco_consumption5
          //   } = lastRecord.type_tc;

          //   // Count the types of tobacco consumption
          //   const consumptionTypes = [
          //     types_of_tobacco_consumption1,
          //     types_of_tobacco_consumption2,
          //     types_of_tobacco_consumption3,
          //     types_of_tobacco_consumption4,
          //     types_of_tobacco_consumption5
          //   ].filter(type => type); // Filter out falsy values

          //   if (consumptionTypes.length > 1) {
          //     miscellaneousCounts++;
          //   } else {
          //     if (types_of_tobacco_consumption1) consumption_1_Counts++;
          //     if (types_of_tobacco_consumption2) consumption_2_Counts++;
          //     if (types_of_tobacco_consumption3) consumption_3_Counts++;
          //     if (types_of_tobacco_consumption4) consumption_4_Counts++;
          //     if (types_of_tobacco_consumption5) consumption_5_Counts++;
          //   }
          // }
        }
      })
      .catch((error) => {
        console.error(`Error fetching TCC data for UUID: ${uuid}`, error);
      });
  });

  // Use Promise.all to wait for all fetches to complete
  Promise.all(fetchPromises)
    .then(() => {
      console.log("consumption_1_Counts", consumption_1_Counts);
      console.log("consumption_2_Counts", consumption_2_Counts);
      console.log("consumption_3_Counts", consumption_3_Counts);
      console.log("consumption_4_Counts", consumption_4_Counts);
      console.log("consumption_5_Counts", consumption_5_Counts);

      // Once all promises are resolved, update the chart
      TobaccoCons = true;
      tccConsumptionChart(
        consumption_1_Counts,
        consumption_2_Counts,
        consumption_3_Counts,
        consumption_4_Counts,
        consumption_5_Counts,
        miscellaneousCounts
      );
    })
    .catch((error) => {
      console.error("Error in processing data:", error);
    });



}

async function tccSmokeCount(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  let Low = 0;
  let Low_to_mod = 0;
  let Mod = 0;
  let High = 0;

  let fetchPromises = [];


  data.forEach((item) => {
    var villageId = item.village;
    var panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;
    // console.log("UUid ", uuid + " Village ", villageId + " Panchayat ", panchayatId);
    const tccRef = fb.database().ref().child("tcc_form");
    const promise = tccRef.child(uuid).once("value")
      .then(function (snap) {
        let tccData = snap.val();
        // const lastRecordKey = Object.keys(tccData).pop();
        // const lastRecord = tccData[lastRecordKey];
        // console.log("tccdata", lastRecord);

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let p1 = false, p2 = false, pall = false;

        Object.keys(tccData).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();
          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;

            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;

            }
          }
        });
        if (selectedPhase === "1") {
          if (tccData) {
            if (maxPhase1Timestamp) {
              const lastRecord = tccData[maxPhase1Timestamp];
              let hb = lastRecord.hb;

              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              // console.log(result);
              if (result) {
                if (hb === "hbda") {
                  Low++;
                }
                else if (hb === "hbdb") {
                  Low_to_mod++;
                }
                else if (hb === "hbdc") {
                  Mod++;
                }
                else if (hb === "hbdd") {
                  High++;
                }
                else {
                  console.log("uuid in smoke", uuid)
                }
              }
              const timestamp = Date.now();
              counter_check.push(timestamp);
            }
          }
        }
        if (selectedPhase === "2") {
          if (tccData) {
            if (maxPhase2Timestamp) {
              const lastRecord = tccData[maxPhase2Timestamp];
              let hb = lastRecord.hb;

              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              // console.log(result);
              if (result) {
                if (hb === "hbda") {
                  Low++;
                }
                else if (hb === "hbdb") {
                  Low_to_mod++;
                }
                else if (hb === "hbdc") {
                  Mod++;
                }
                else if (hb === "hbdd") {
                  High++;
                }
                else {
                  console.log("uuid in smoke", uuid)
                }
              }
              const timestamp = Date.now();
              counter_check.push(timestamp);
            }
          }
        }

        if (selectedPhase === "All") {
          if (tccData) {
            if (maxPhase1Timestamp) {
              const lastRecord = tccData[maxPhase1Timestamp];
              let hb = lastRecord.hb;

              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              // console.log(result);
              if (result) {
                if (hb === "hbda") {
                  Low++;
                }
                else if (hb === "hbdb") {
                  Low_to_mod++;
                }
                else if (hb === "hbdc") {
                  Mod++;
                }
                else if (hb === "hbdd") {
                  High++;
                }
                else {
                  console.log("uuid in smoke", uuid)
                }
              }
              const timestamp = Date.now();
              counter_check.push(timestamp);
            }
            if (maxPhase2Timestamp) {
              const lastRecord = tccData[maxPhase2Timestamp];
              let hb = lastRecord.hb;

              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              // console.log(result);
              if (result) {
                if (hb === "hbda") {
                  Low++;
                }
                else if (hb === "hbdb") {
                  Low_to_mod++;
                }
                else if (hb === "hbdc") {
                  Mod++;
                }
                else if (hb === "hbdd") {
                  High++;
                }
                else {
                  console.log("uuid in smoke", uuid)
                }
              }
              const timestamp = Date.now();
              counter_check.push(timestamp);
            }
          }
        }
        else {
          // console.log("Null UUID:", item.uuids);
        }
      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", uuid, error);
      });
    fetchPromises.push(promise);
  })

  Promise.all(fetchPromises)
    .then(() => {
      const total = Low + Low_to_mod + Mod + High;
      document.getElementById("TCC_S").innerHTML = total;
      // console.log("tcc smoker Low", Low);
      // console.log("tcc smoker Low_to_mod", Low_to_mod);
      // console.log("tcc smoker Mod", Mod);
      // console.log("tcc smoker High", High);
      tccSmokeChart(Low, Low_to_mod, Mod, High);

      TCCGen = true;
    })
    .catch((error) => {
      console.error("Error in processing data:", error);
    });

}

async function tccSmokeLessCount(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  let Low = 0;
  let Low_to_mod = 0;
  let Mod = 0;
  let High = 0;

  let fetchPromises = [];


  data.forEach((item) => {
    var villageId = item.village;
    var panchayatId = villageId.substring(0, 2);
    var uuid = item.uuid;
    var fwid = item.fw_id;
    // console.log("UUid ", uuid + " Village ", villageId + " Panchayat ", panchayatId);
    const tccRef = fb.database().ref().child("tcc_form");
    const promise = tccRef.child(uuid).once("value")
      .then(function (snap) {
        let tccData = snap.val();
        // const lastRecordKey = Object.keys(tccData).pop();
        // const lastRecord = tccData[lastRecordKey];
        // console.log("tccdata", lastRecord);

        let maxPhase1Timestamp = null;
        let maxPhase2Timestamp = null;
        let maxTimestamp = null;
        let p1 = false, p2 = false, pall = false;

        Object.keys(tccData).forEach(timestamp => {
          let year = new Date(Number(timestamp) * 1000).getFullYear();
          if (year === 2022) {
            p1 = true;
            if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
              maxPhase1Timestamp = timestamp;

            }
          }
          if (year === 2024) {
            p2 = true;
            if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
              maxPhase2Timestamp = timestamp;

            }
          }
        });
        if (selectedPhase === "1") {
          if (tccData) {
            if (maxPhase1Timestamp) {
              const lastRecord = tccData[maxPhase1Timestamp];
              let hd = lastRecord.hd;

              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              // console.log(result);
              if (result) {
                if (hd === "hbda") {
                  Low++;
                }
                else if (hd === "hbdb") {
                  Low_to_mod++;
                }
                else if (hd === "hbdc") {
                  Mod++;
                }
                else if (hd === "hbdd") {
                  High++;
                }
                else {
                  console.log("uuid in smoke", uuid)
                }
              }
              const timestamp = Date.now();
              counter_check.push(timestamp);
            }
          }
        }
        if (selectedPhase === "2") {
          if (tccData) {
            if (maxPhase2Timestamp) {
              const lastRecord = tccData[maxPhase2Timestamp];
              let hd = lastRecord.hd;

              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              // console.log(result);
              if (result) {
                if (hd === "hbda") {
                  Low++;
                }
                else if (hd === "hbdb") {
                  Low_to_mod++;
                }
                else if (hd === "hbdc") {
                  Mod++;
                }
                else if (hd === "hbdd") {
                  High++;
                }
                else {
                  console.log("uuid in smoke", uuid)
                }
              }
              const timestamp = Date.now();
              counter_check.push(timestamp);
            }
          }
        }

        if (selectedPhase === "All") {
          if (tccData) {
            if (maxPhase1Timestamp) {
              const lastRecord = tccData[maxPhase1Timestamp];
              let hd = lastRecord.hd;

              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              // console.log(result);
              if (result) {
                if (hd === "hbda") {
                  Low++;
                }
                else if (hd === "hbdb") {
                  Low_to_mod++;
                }
                else if (hd === "hbdc") {
                  Mod++;
                }
                else if (hd === "hbdd") {
                  High++;
                }
                else {
                  console.log("uuid in smoke", uuid)
                }
              }
              const timestamp = Date.now();
              counter_check.push(timestamp);
            }
            if (maxPhase2Timestamp) {
              const lastRecord = tccData[maxPhase2Timestamp];
              let hd = lastRecord.hd;

              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              // console.log(result);
              if (result) {
                if (hd === "hbda") {
                  Low++;
                }
                else if (hd === "hbdb") {
                  Low_to_mod++;
                }
                else if (hd === "hbdc") {
                  Mod++;
                }
                else if (hd === "hbdd") {
                  High++;
                }
                else {
                  console.log("uuid in smoke", uuid)
                }
              }
              const timestamp = Date.now();
              counter_check.push(timestamp);
            }
          }
        }
        else {
          // console.log("Null UUID:", item.uuids);
        }
      })
      .catch((error) => {
        console.error("Error fetching patient data for UUID:", uuid, error);
      });
    fetchPromises.push(promise);
  })

  Promise.all(fetchPromises)
    .then(() => {
      const total = Low + Low_to_mod + Mod + High;
      document.getElementById("TCC_SL").innerHTML = total;
      // console.log("tcc smoker Low", Low);
      // console.log("tcc smoker Low_to_mod", Low_to_mod);
      // console.log("tcc smoker Mod", Mod);
      // console.log("tcc smoker High", High);
      tccSmokeLessChart(Low, Low_to_mod, Mod, High);
    })
    .catch((error) => {
      console.error("Error in processing data:", error);
    });

}

async function TccFollowup(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  const tccFollows = fb.database().ref().child("tcc_form_followup");
  const followUpKeys = ['afu', 'bfu', 'cfu', 'dfu', 'efu', 'ffu', 'gfu'];
  const followUpData = {};
  followUpKeys.forEach(key => followUpData[key] = []);
  const fetchFollowUpPromises = data.map(item =>
    tccFollows.child(item.uuid).once("value")
      .then(snapshot => {
        const uuid = item.uuid;
        if (snapshot.exists()) {
          const data_val = snapshot.val();
          followUpKeys.forEach(key => {
            if (data_val[key]) {
              followUpData[key].push({ uuid, data: data_val[key] });
            }
          });
        }
      })
      .catch(error => {
        console.error(`Error fetching TCC data for UUID: ${uuid}`, error);
      })
  );
  // console.log("followUpData", followUpData)
  await Promise.all(fetchFollowUpPromises);

  followUpKeys.forEach((key, index) => {
    const followUpArray = followUpData[key];
    const phaseUUIDsFiltered = followUpArray.map(entry => {
      let maxPhase1Timestamp = null;
      let maxPhase2Timestamp = null;
      Object.keys(entry.data).forEach(timestamp => {
        const year = new Date(Number(timestamp) * 1000).getFullYear();
        if (year === 2022) {
          if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
            maxPhase1Timestamp = timestamp;
          }
        }
        if (year === 2024) {
          if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
            maxPhase2Timestamp = timestamp;
          }
        }
      });
      if (selectedPhase === '1' && maxPhase1Timestamp) return entry.uuid;
      if (selectedPhase === '2' && maxPhase2Timestamp) return entry.uuid;
      if (selectedPhase === 'All') return entry.uuid;
    }).filter(Boolean);

    let maleCount = 0;
    let femaleCount = 0;
    const fetchGenderPromises = data.map(item => {
      const villageId = item.village;
      const panchayatId = villageId.substring(0, 2);
      var uuid = item.uuid;
      var fwid = item.fw_id;
      var patientsRef = fb.database().ref().child("patients1").child(panchayatId).child(villageId);
      return patientsRef.child(uuid).once("value")
        .then(patientSnap => {
          const patientData = patientSnap.val();
          const uuidExistsInFollowUp = followUpArray.some(entry => entry.uuid === uuid);
          if (patientData && uuidExistsInFollowUp) {
            const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
            if (result) {
              const gender = patientData.gndr?.toLowerCase();
              if (gender === 'male' || gender === 'm' || gender === 'M') {
                maleCount++;
                // console.log("UUid in followup", uuid)

                // console.log("patient Data",patientData.pid);
              } else if (gender === 'female' || gender === 'f' || gender === 'F') {
                femaleCount++;
                // console.log("patient Data",patientData.pid);
                // console.log("UUid in followup", uuid)

              }
              // console.log("Gender Info: ", uuid);

            }
          }
        })
        .catch(error => {
          console.error(`Error fetching patient data for UUID: ${uuid}`, error);
        });
    });
    Promise.all(fetchGenderPromises)
      .then(() => {
        const totalCount = maleCount + femaleCount;
        document.getElementById(`F_${index + 1}`).innerText = totalCount;

        const chartFunction = `tccFW0${index + 1}GenderChart`;
        // console.log(`Calling chart function: ${chartFunction}`);
        window[chartFunction](maleCount, femaleCount);
        TccFoll = true;
        console.log("male count:", maleCount);
        console.log("female count:", femaleCount);

        tccArray.push({
          [`follow-${index + 1}`]: {
            "Male": maleCount,
            "Female": femaleCount
          }
        });
      })
      .catch(error => {
        console.error("Error processing data:", error);
      });

  });
}

async function TccbatcFollowup(data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  const tccFollows = fb.database().ref().child("tcc_form_followup");
  const followUpKeys = ['afu', 'bfu', 'cfu', 'dfu', 'efu', 'ffu', 'gfu'];
  const followUpData = {};
  let batcwuuid = {};
  let fetchPromises = [];



  followUpKeys.forEach(key => {
    followUpData[key] = [];
    batcwuuid[key] = [];
  });

  // Fetch the follow-up data for each UUID
  const fetchFollowUpPromises = data.map(item =>
    tccFollows.child(item.uuid).once("value")
      .then(snapshot => {
        const uuid = item.uuid;
        // console.log("UUid in the tcc Form", uuid)
        if (snapshot.exists()) {
          const data_val = snapshot.val();
          followUpKeys.forEach(key => {
            if (data_val[key]) {
              followUpData[key].push({ uuid, data: data_val[key] });
            }
          });
        }
      })
      .catch(error => {
        console.error(`Error fetching TCC data for UUID: ${item.uuid}`, error);
      })
  );

  await Promise.all(fetchFollowUpPromises);


  console.log("followUpData", followUpData)
  console.log("followUpData data ", data)

  followUpKeys.forEach((key, index) => { // Using 'key' here
    const followUpArray = followUpData[key];
    let available = 0;
    let nonavailable = 0;
    const uuidArray = [];

    const fetchTccPromises = data.map(item => {
      const villageId = item.village;
      const panchayatId = villageId.substring(0, 2);
      const uuid = item.uuid;
      const fwid = item.fw_id;


      const uuidExistsInFollowUp = followUpArray.some(entry => entry.uuid === uuid);
      // console.log(" compare check " + (patientData && uuidExistsInFollowUp));

      if (uuidExistsInFollowUp) {
        followUpArray.forEach(entry => {
          if (entry.uuid === uuid) {
            let maxPhase1Timestamp = null;
            let maxPhase2Timestamp = null;
            let maxTimestamp = null;
            let p1 = false, p2 = false, pall = false;

            Object.keys(entry.data).forEach(timestamp => {
              const year = new Date(Number(timestamp) * 1000).getFullYear();
              if (year === 2022) {
                p1 = true;
                if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
                  maxPhase1Timestamp = timestamp;
                }
              }
              if (year === 2024) {
                p2 = true;
                if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
                  maxPhase2Timestamp = timestamp;
                }
              }

            });

            const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
            if ((result && maxPhase1Timestamp && p1) || (result && maxPhase2Timestamp && p2) || (result && maxTimestamp && pall)) {

              var timestamps; //= maxPhase1Timestamp || maxPhase2Timestamp || maxTimestamp;
              if (selectedPhase === "1") {
                timestamps = maxPhase1Timestamp
                if (entry.data[timestamps]?.batc === "y" || entry.data[timestamps]?.catc === "y") {
                  available++;
                  uuidArray.push(uuid);
                  // console.log("UUid in the data of batc", uuid, " key ", key);

                  // console.log("available count -- " + available + " uuid : " + uuid);
                } else {
                  nonavailable++;
                  // console.log("UUid in the data of batc", uuid, " key ", key);

                }
              }
              if (selectedPhase === "2") {
                timestamps = maxPhase2Timestamp
                if (entry.data[timestamps]?.batc === "y" || entry.data[timestamps]?.catc === "y") {
                  available++;
                  uuidArray.push(uuid);
                  // console.log("UUid in the data of batc", uuid, " key ", key);

                  // console.log("available count -- " + available + " uuid : " + uuid);
                } else {
                  nonavailable++;
                  // console.log("UUid in the data of batc", uuid, " key ", key);

                }
              }
              if (selectedPhase === "All") {
                if (maxPhase1Timestamp) {
                  timestamps = maxPhase1Timestamp
                  // console.log("UUid in the data of timestamp ", timestamps, " uuid ", uuid, " Key ", key)
                  if (entry.data[timestamps]?.batc === "y" || entry.data[timestamps]?.catc === "y") {
                    available++;
                    uuidArray.push(uuid);
                    // console.log("UUid in the data of batc", uuid, " key ", key);

                    // console.log("available count -- " + available + " uuid : " + uuid);
                  } else {
                    nonavailable++;
                    // console.log("UUid in the data of batc", uuid, " key ", key);

                  }
                }
                if (maxPhase2Timestamp) {
                  timestamps = maxPhase2Timestamp
                  // console.log("UUid in the data of timestamp ", timestamps, " uuid ", uuid, " Key ", key)
                  if (entry.data[timestamps]?.batc === "y" || entry.data[timestamps]?.catc === "y") {
                    available++;
                    uuidArray.push(uuid);
                    // console.log("UUid in the data of batc", uuid, " key ", key);

                    // console.log("available count -- " + available + " uuid : " + uuid);
                  } else {
                    nonavailable++;
                    // console.log("UUid in the data of batc", uuid, " key ", key);

                  }
                }
              }

            }
          }
        });
      }

    });
    batcwuuid[key] = uuidArray;

    fetchPromises.push(Promise.all(fetchTccPromises).then(() => {
      // Store the counts in localStorage with keys specific to each follow-up
      localStorage.setItem(`${key}_available_count`, available);
      localStorage.setItem(`${key}_nonavailable_count`, nonavailable);

      // Retrieve the counts from localStorage and parse them as integers
      const avl = parseInt(localStorage.getItem(`${key}_available_count`), 10) || 0;
      const nonavl = parseInt(localStorage.getItem(`${key}_nonavailable_count`), 10) || 0;

      // console.log(`BATC ${key.toUpperCase()} - Available count: ${avl}, Non-Available count: ${nonavl}`);
      const totalCount = avl + nonavl;
      document.getElementById(`BA_${index + 1}`).innerText = totalCount;
      const chartFunction = `tccBA0${index + 1}Chart`;
      window[chartFunction](avl, nonavl);
      TccbwsthFollowup(batcwuuid, selectedPhase);
      Tccbatc = true
      tccArray.push({
        [`BA-${index + 1}`]: {
          "available": avl,
          "nonavailable": nonavl
        }
      });
    }));
  });


}

async function pendingTccFOLLOW(p1, p2, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
  const pendingFollowups = fb.database().ref().child("tcc_followup_pending");
  const followUpKeys = ['fu_1', 'fu_2', 'fu_3', 'fu_4', 'fu_5', 'fu_6', 'fu_7'];

  let fetchPromises = [];

  let followUpCounts = {
    fu_1: { phase1: 0, phase2: 0 },
    fu_2: { phase1: 0, phase2: 0 },
    fu_3: { phase1: 0, phase2: 0 },
    fu_4: { phase1: 0, phase2: 0 },
    fu_5: { phase1: 0, phase2: 0 },
    fu_6: { phase1: 0, phase2: 0 },
    fu_7: { phase1: 0, phase2: 0 },
  };

  pendingFollowups.once('value').then(snapshot => {
    const followUpData = snapshot.val();
    const currentDate = new Date().getTime();

    followUpKeys.forEach(fuKey => {
      const followUp = followUpData[fuKey];

      if (followUp) {
        const promise1 = p1.forEach(item => {
          const villageId = item.village;
          const panchayatId = villageId.substring(0, 2);
          const uuid = item.uuid;
          const fwid = item.fw_id;

          if (followUp[uuid] && followUp[uuid].due_dt) {
            const dueDate = new Date(followUp[uuid].due_dt.split("/").reverse().join("-")).getTime();

            if (dueDate < currentDate) {
              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              if (result) {
                followUpCounts[fuKey].phase1 += 1;
              }
            }
          }
        });
        fetchPromises.push(promise1);

        const promise2 = p2.forEach(item => {
          const villageId = item.village;
          const panchayatId = villageId.substring(0, 2);
          const uuid = item.uuid;
          const fwid = item.fw_id;

          if (followUp[uuid] && followUp[uuid].due_dt) {
            const dueDate = new Date(followUp[uuid].due_dt.split("/").reverse().join("-")).getTime();

            if (dueDate < currentDate) {
              const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
              if (result) {
                followUpCounts[fuKey].phase2 += 1;
              }
            }
          }
        });
        fetchPromises.push(promise2);
      }
    });

    // Wait for all promises to resolve before accessing the followUpCounts
    return Promise.all(fetchPromises);
  }).then(() => {
    const fu_1_phase1_Count = followUpCounts['fu_1'].phase1;
    const fu_1_phase2_Count = followUpCounts['fu_1'].phase2;
    const fu_2_phase1_Count = followUpCounts['fu_2'].phase1;
    const fu_2_phase2_Count = followUpCounts['fu_2'].phase2;
    const fu_3_phase1_Count = followUpCounts['fu_3'].phase1;
    const fu_3_phase2_Count = followUpCounts['fu_3'].phase2;
    console.log("Result in pending FollowUp:", fu_3_phase2_Count);

    const fu_4_phase1_Count = followUpCounts['fu_4'].phase1;
    const fu_4_phase2_Count = followUpCounts['fu_4'].phase2;
    const fu_5_phase1_Count = followUpCounts['fu_5'].phase1;
    const fu_5_phase2_Count = followUpCounts['fu_5'].phase2;
    const fu_6_phase1_Count = followUpCounts['fu_6'].phase1;
    const fu_6_phase2_Count = followUpCounts['fu_6'].phase2;
    const fu_7_phase1_Count = followUpCounts['fu_7'].phase1;
    const fu_7_phase2_Count = followUpCounts['fu_7'].phase2;

    if (selectedPhase === '1') {
      tccPendingFollowUpP1Chart(fu_1_phase1_Count, fu_2_phase1_Count, fu_3_phase1_Count, fu_4_phase1_Count, fu_5_phase1_Count, fu_6_phase1_Count, fu_7_phase1_Count);
    } else if (selectedPhase === '2') {
      tccPendingFollowUpP2Chart(fu_1_phase2_Count, fu_2_phase2_Count, fu_3_phase2_Count, fu_4_phase2_Count, fu_5_phase2_Count, fu_6_phase2_Count, fu_7_phase2_Count);
    } else if (selectedPhase === 'All') {
      tccPendingFollowUpChart(fu_1_phase1_Count, fu_1_phase2_Count, fu_2_phase1_Count, fu_2_phase2_Count, fu_3_phase1_Count, fu_3_phase2_Count, fu_4_phase1_Count, fu_4_phase2_Count, fu_5_phase1_Count, fu_5_phase2_Count, fu_6_phase1_Count, fu_6_phase2_Count, fu_7_phase1_Count, fu_7_phase2_Count);
    }

    pendingTcc = true;
  }).catch(error => {
    console.error('Error fetching follow-up data:', error);
  });
}


function isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId) {
  // Case 1: All specific values (no "All")
  if (selectedFieldworker === fwid &&
    selectedPanchayat === panchayatId &&
    selectedVillage === villageId) {
    return true;
  }

  // Case 2: Fieldworker is "All"
  if (selectedFieldworker === "All" &&
    selectedPanchayat === panchayatId &&
    selectedVillage === villageId) {
    return true;
  }

  // Case 3: Panchayat is "All"
  if (selectedFieldworker === fwid &&
    selectedPanchayat === "All" &&
    selectedVillage === villageId) {
    return true;
  }

  // Case 4: Village is "All"
  if (selectedFieldworker === fwid &&
    selectedPanchayat === panchayatId &&
    selectedVillage === "All") {
    return true;
  }

  // Case 5: Fieldworker and Panchayat are "All"
  if (selectedFieldworker === "All" &&
    selectedPanchayat === "All" &&
    selectedVillage === villageId) {
    return true;
  }

  // Case 6: Fieldworker and Village are "All"
  if (selectedFieldworker === "All" &&
    selectedPanchayat === panchayatId &&
    selectedVillage === "All") {
    return true;
  }

  // Case 7: Panchayat and Village are "All"
  if (selectedFieldworker === fwid &&
    selectedPanchayat === "All" &&
    selectedVillage === "All") {
    return true;
  }

  // Case 8: All are "All"
  if (selectedFieldworker === "All" &&
    selectedPanchayat === "All" &&
    selectedVillage === "All") {
    return true;
  }

  // If none of the conditions match, return false
  return false;
}


async function clearData() {

  document.getElementById("ts").innerText = 0;
  genderChart("00", "00");
  attendChart("00", "00");
  eligibilityChart("00", "00");
  updateRescreeningChart("00", "00");
  updateScreeningChart("00", "00");
  pendingFollowUpChart("00", "00", "00");
  TccConsChart("00", "00", "00", "00", "00", "00");

  InpersonSrcGenderChart("00", "00");
  document.getElementById("ps").innerText = 0;
  drRecommendationChart("00", "00", "00");
  document.getElementById("orscount").innerText = 0;
  TccConsDoc("00", "00", "00", "00", "00", "00");
  document.getElementById("TC").innerHTML = 0;

  oralScreeningGraph("00", "00");
  AbnormalChart("00", "00", "00", "00", "00", "00");
  document.getElementById("AChart").innerHTML = 0;
  document.getElementById("brscount").innerText = 0;
  brScreeningGraph("00", "00");
  document.getElementById("crscount").innerText = 0;
  cScreeningGraph("00", "00");

  overallP1Screening("00", "00", "00");
  overallP2Screening("00", "00", "00");
  overallScreening("00", "00", "00", "00", "00", "00");

  document.getElementById("total_TCC").innerHTML = 0;
  tccgenderChart("00", "00");
  tccConsumptionChart("00", "00", "00", "00", "00", "00");
  tccSmokeChart("00", "00", "00", "00");
  document.getElementById("TCC_S").innerHTML = 0;
  tccSmokeLessChart("00", "00", "00", "00");
  document.getElementById("TCC_SL").innerHTML = 0;

  document.getElementById("F_1").innerText = 0;
  document.getElementById("F_2").innerText = 0;
  document.getElementById("F_3").innerText = 0;
  document.getElementById("F_4").innerText = 0;
  document.getElementById("F_5").innerText = 0;
  document.getElementById("F_6").innerText = 0;
  document.getElementById("F_7").innerText = 0;

  tccFW01GenderChart("00", "00");
  tccFW02GenderChart("00", "00");
  tccFW03GenderChart("00", "00");
  tccFW04GenderChart("00", "00");
  tccFW05GenderChart("00", "00");
  tccFW06GenderChart("00", "00");
  tccFW07GenderChart("00", "00");

  document.getElementById("BA_1").innerText = 0;
  document.getElementById("BA_2").innerText = 0;
  document.getElementById("BA_3").innerText = 0;
  document.getElementById("BA_4").innerText = 0;
  document.getElementById("BA_5").innerText = 0;
  document.getElementById("BA_6").innerText = 0;
  document.getElementById("BA_7").innerText = 0;

  tccBA01Chart("00", "00");
  tccBA02Chart("00", "00");
  tccBA03Chart("00", "00");
  tccBA04Chart("00", "00");
  tccBA05Chart("00", "00");
  tccBA06Chart("00", "00");
  tccBA07Chart("00", "00");


  document.getElementById("BW_1").innerText = 0;
  document.getElementById("BW_2").innerText = 0;
  document.getElementById("BW_3").innerText = 0;
  document.getElementById("BW_4").innerText = 0;
  document.getElementById("BW_5").innerText = 0;
  document.getElementById("BW_6").innerText = 0;
  document.getElementById("BW_7").innerText = 0;

  tccBW01Chart("00", "00");
  tccBW02Chart("00", "00");
  tccBW03Chart("00", "00");
  tccBW04Chart("00", "00");
  tccBW05Chart("00", "00");
  tccBW06Chart("00", "00");
  tccBW07Chart("00", "00");

  document.getElementById("RS_1").innerText = 0;
  document.getElementById("RS_2").innerText = 0;
  document.getElementById("RS_3").innerText = 0;
  document.getElementById("RS_4").innerText = 0;
  document.getElementById("RS_5").innerText = 0;
  document.getElementById("RS_6").innerText = 0;
  document.getElementById("RS_7").innerText = 0;

  tccRS01Chart("00", "00", "00", "00", "00");
  tccRS02Chart("00", "00", "00", "00", "00");
  tccRS03Chart("00", "00", "00", "00", "00");
  tccRS04Chart("00", "00", "00", "00", "00");
  tccRS05Chart("00", "00", "00", "00", "00");
  tccRS06Chart("00", "00", "00", "00", "00");
  tccRS07Chart("00", "00", "00", "00", "00");

  tccPendingFollowUpP1Chart("00", "00", "00", "00", "00", "00", "00");
  tccPendingFollowUpP2Chart("00", "00", "00", "00", "00", "00", "00");
  tccPendingFollowUpChart("00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00");



  localStorage.setItem('surveymaleCount', "00");
  localStorage.setItem('surveyfemaleCount', "00");
  localStorage.setItem('surveyabsent', "00");
  localStorage.setItem('surveypresent', "00");
  localStorage.setItem('eligiblecount', "00");
  localStorage.setItem('ineligiblecount', "00");
  localStorage.setItem('habityes', "00");
  localStorage.setItem('habitnotnow', "00");
  localStorage.setItem('habitabsent', "00");
  localStorage.setItem('Resurveycount', "00");
  localStorage.setItem('Registrationcount', "00");
  localStorage.setItem('screeningCount', "00");
  localStorage.setItem('notscreeningcount', "00");

  phaseComparisionChart("00", "00", "00", "00", "00", "00");



  return true;

}

async function clearData_Fm() {

  document.getElementById("ts").innerText = 0;
  genderChart("00", "00");
  attendChart("00", "00");
  eligibilityChart("00", "00");
  updateRescreeningChart("00", "00");
  updateScreeningChart("00", "00");
  pendingFollowUpChart("00", "00", "00");

  TccConsChart("00", "00", "00", "00", "00", "00");


  localStorage.setItem('surveymaleCount', "00");
  localStorage.setItem('surveyfemaleCount', "00");
  localStorage.setItem('surveyabsent', "00");
  localStorage.setItem('surveypresent', "00");
  localStorage.setItem('eligiblecount', "00");
  localStorage.setItem('ineligiblecount', "00");
  localStorage.setItem('habityes', "00");
  localStorage.setItem('habitnotnow', "00");
  localStorage.setItem('habitabsent', "00");
  localStorage.setItem('Resurveycount', "00");
  localStorage.setItem('Registrationcount', "00");
  localStorage.setItem('screeningCount', "00");
  localStorage.setItem('notscreeningcount', "00");
  return true;

}

async function clearData_Doc() {

  document.getElementById("ts").innerText = 0;
  genderChart("00", "00");
  attendChart("00", "00");
  eligibilityChart("00", "00");
  updateRescreeningChart("00", "00");
  updateScreeningChart("00", "00");
  pendingFollowUpChart("00", "00", "00");
  TccConsChart("00", "00", "00", "00", "00", "00");
  

  InpersonSrcGenderChart("00", "00");
  document.getElementById("ps").innerText = 0;
  drRecommendationChart("00", "00", "00");
  document.getElementById("orscount").innerText = 0;
  TccConsDoc("00", "00", "00", "00", "00", "00");
  document.getElementById("TC").innerHTML = 0;

  oralScreeningGraph("00", "00");
  AbnormalChart("00", "00", "00", "00", "00", "00");
  document.getElementById("AChart").innerHTML = 0;
  document.getElementById("brscount").innerText = 0;
  brScreeningGraph("00", "00");
  document.getElementById("crscount").innerText = 0;
  cScreeningGraph("00", "00");

  overallP1Screening("00", "00", "00");
  overallP2Screening("00", "00", "00");
  overallScreening("00", "00", "00", "00", "00", "00");

  localStorage.setItem('surveymaleCount', "00");
  localStorage.setItem('surveyfemaleCount', "00");
  localStorage.setItem('surveyabsent', "00");
  localStorage.setItem('surveypresent', "00");
  localStorage.setItem('eligiblecount', "00");
  localStorage.setItem('ineligiblecount', "00");
  localStorage.setItem('habityes', "00");
  localStorage.setItem('habitnotnow', "00");
  localStorage.setItem('habitabsent', "00");
  localStorage.setItem('Resurveycount', "00");
  localStorage.setItem('Registrationcount', "00");
  localStorage.setItem('screeningCount', "00");
  localStorage.setItem('notscreeningcount', "00");
  return true;

}

async function clearData_Tcc() {



  document.getElementById("total_TCC").innerHTML = 0;
  tccgenderChart("00", "00");
  tccConsumptionChart("00", "00", "00", "00", "00", "00");
  tccSmokeChart("00", "00", "00", "00");
  document.getElementById("TCC_S").innerHTML = 0;
  tccSmokeLessChart("00", "00", "00", "00");
  document.getElementById("TCC_SL").innerHTML = 0;

  document.getElementById("F_1").innerText = 0;
  document.getElementById("F_2").innerText = 0;
  document.getElementById("F_3").innerText = 0;
  document.getElementById("F_4").innerText = 0;
  document.getElementById("F_5").innerText = 0;
  document.getElementById("F_6").innerText = 0;
  document.getElementById("F_7").innerText = 0;

  tccFW01GenderChart("00", "00");
  tccFW02GenderChart("00", "00");
  tccFW03GenderChart("00", "00");
  tccFW04GenderChart("00", "00");
  tccFW05GenderChart("00", "00");
  tccFW06GenderChart("00", "00");
  tccFW07GenderChart("00", "00");

  document.getElementById("BA_1").innerText = 0;
  document.getElementById("BA_2").innerText = 0;
  document.getElementById("BA_3").innerText = 0;
  document.getElementById("BA_4").innerText = 0;
  document.getElementById("BA_5").innerText = 0;
  document.getElementById("BA_6").innerText = 0;
  document.getElementById("BA_7").innerText = 0;

  tccBA01Chart("00", "00");
  tccBA02Chart("00", "00");
  tccBA03Chart("00", "00");
  tccBA04Chart("00", "00");
  tccBA05Chart("00", "00");
  tccBA06Chart("00", "00");
  tccBA07Chart("00", "00");


  document.getElementById("BW_1").innerText = 0;
  document.getElementById("BW_2").innerText = 0;
  document.getElementById("BW_3").innerText = 0;
  document.getElementById("BW_4").innerText = 0;
  document.getElementById("BW_5").innerText = 0;
  document.getElementById("BW_6").innerText = 0;
  document.getElementById("BW_7").innerText = 0;

  tccBW01Chart("00", "00");
  tccBW02Chart("00", "00");
  tccBW03Chart("00", "00");
  tccBW04Chart("00", "00");
  tccBW05Chart("00", "00");
  tccBW06Chart("00", "00");
  tccBW07Chart("00", "00");

  document.getElementById("RS_1").innerText = 0;
  document.getElementById("RS_2").innerText = 0;
  document.getElementById("RS_3").innerText = 0;
  document.getElementById("RS_4").innerText = 0;
  document.getElementById("RS_5").innerText = 0;
  document.getElementById("RS_6").innerText = 0;
  document.getElementById("RS_7").innerText = 0;

  tccRS01Chart("00", "00", "00", "00", "00");
  tccRS02Chart("00", "00", "00", "00", "00");
  tccRS03Chart("00", "00", "00", "00", "00");
  tccRS04Chart("00", "00", "00", "00", "00");
  tccRS05Chart("00", "00", "00", "00", "00");
  tccRS06Chart("00", "00", "00", "00", "00");
  tccRS07Chart("00", "00", "00", "00", "00");

  tccPendingFollowUpP1Chart("00", "00", "00", "00", "00", "00", "00");
  tccPendingFollowUpP2Chart("00", "00", "00", "00", "00", "00", "00");
  tccPendingFollowUpChart("00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00");

  return true;

}

function timer_fun() {
  counter_check = [];
  array = [];
  var checkSensorTriggerInterval = setInterval(() => {
    // Check if sensor_device is triggered
    // If not triggered, stop the loop by clearing the interval
    console.log("Timer is running", counter_check.length);

    //    let fun = (ScreeningStatus && RegistrationsAndRescreenings && MaleAndFemale && Status && Eligibility && HabitSummary && FilteredData && remoteSrc && PresonScr && DoctorRec && oralScr && brScr && cervi && aggregateScr && TCCGen && TobaccoCons && tccsrc && TccFoll && Tccbatc && Tccbwsth && pendingTcc && abnormalC);
    let fun = (ScreeningStatus && RegistrationsAndRescreenings && MaleAndFemale && Status && Eligibility && HabitSummary);

    console.log("fun: ", fun)
    // fun= (S1 && S2 && )
    // if (counter_check.length === 6 && fun) {
    if (fun) {
      clearInterval(checkSensorTriggerInterval);
      // console.log("counter check length is 6");
      // console.log("Timer stopped");

      populateData(array);


      // console.log("Sensor device not triggered. Stopping ECG data generation loop.");
      setTimeout(() => {
        document.getElementById("loading").style.display = 'none';
        const currentDate = new Date().getTime();
        console.log(" Time delay", currentDate)
      }, 4000);
    }
  }, 1000);

}

function timer_fun1() {
  counter_check = [];
  array = [];
  var checkSensorTriggerInterval = setInterval(() => {
    // Check if sensor_device is triggered
    // If not triggered, stop the loop by clearing the interval
    // console.log("Timer is running", counter_check.length);

    let fun = (ScreeningStatus && RegistrationsAndRescreenings && MaleAndFemale && Status && Eligibility && HabitSummary);
    console.log("fun: ", fun)
    // fun= (S1 && S2 && )
    if (fun) {
      clearInterval(checkSensorTriggerInterval);
      // console.log("counter check length is 6");
      // console.log("Timer stopped");
      populateData(array);
      // console.log("Sensor device not triggered. Stopping ECG data generation loop.");
      setTimeout(() => {
        document.getElementById("loading").style.display = 'none';
      }, 4000);
    }
  }, 1000);

}

function timer_fun2() {
  counter_check = [];
  array = [];
  var checkSensorTriggerInterval = setInterval(() => {
    // Check if sensor_device is triggered
    // If not triggered, stop the loop by clearing the interval
    // console.log("Timer is running", counter_check.length);

    let fun = (ScreeningStatus && RegistrationsAndRescreenings && MaleAndFemale && Status && Eligibility && HabitSummary && remoteSrc && PresonScr && DoctorRec && oralScr && brScr && cervi && aggregateScr && abnormalC);
    console.log("fun: ", fun)
    // fun= (S1 && S2 && )
    if (fun) {
      clearInterval(checkSensorTriggerInterval);
      // console.log("counter check length is 6");
      // console.log("Timer stopped");
      populateData(array);
      // console.log("Sensor device not triggered. Stopping ECG data generation loop.");
      setTimeout(() => {
        document.getElementById("loading").style.display = 'none';
      });
    }
  }, 1000);

}

function timer_fun3() {
  counter_check = [];
  array = [];
  var checkSensorTriggerInterval = setInterval(() => {
    // console.log("Timer is running", counter_check.length);

    let fun = (TCCGen && TobaccoCons && TccFoll && Tccbatc && Tccbwsth && TccResult && pendingTcc);
    console.log("fun: ", fun)
    // fun= (S1 && S2 && )
    if (fun) {
      clearInterval(checkSensorTriggerInterval);
      // console.log("counter check length is 6");
      // console.log("Timer stopped");
      // console.log("Sensor device not triggered. Stopping ECG data generation loop.");
      setTimeout(() => {
        document.getElementById("loading").style.display = 'none';
      }, 4000);
    }
  }, 1000);

}


function useFilteredData(phaseUUIDs, selectedPanchayat, selectedVillage) {
  var pref = fb.database().ref().child("patients1").child(selectedPanchayat).child(selectedVillage);
  let patid = [];

  let fetchPromises = phaseUUIDs.map(uuid => {
    return pref.child(uuid).once("value")
      .then(function (snap) {
        let patientData = snap.val();
        patid.push(patientData.pid);
      })
      .catch(function (error) {
        console.error("Error fetching patient data for UUID:", uuid, error);
      });
  });
  Promise.all(fetchPromises)
    .then(() => {
      // console.log("Using Filtered UUIDs:", phaseUUIDs);
      // console.log("count of Filtered UUIDs:", phaseUUIDs.length);
      console.log("P_I_D:", patid);
      let surveyCount = phaseUUIDs.length;
      // console.log("UUIds of filtered Data: ", phaseUUIDs);
      // console.log("count of Filtered UUIDs:", surveyCount);

      // document.getElementById("ts").innerHTML = surveyCount;
      FilteredData = true;

    })
    .catch(function (error) {
      console.error("Error processing data:", error);
    });
}


function populateData(array) {
  const dataKeys = ['habit', 'eligibilityCount', 'surveyCount', 'surveygender', 'registrationCount', 'screeningCount'];
  const dataKey = {};
  console.log("Populate Array", array);

  let h1 = 0, h2 = 0, h3 = 0, e1 = 0, e2 = 0, s1 = 0, s2 = 0, sg1 = 0, sg2 = 0, rc1 = 0, sc1 = 0;

  array.forEach((obj) => {
    for (const parentKey in obj) {
      for (const childKey in obj[parentKey]) {
        if (parentKey === "habit") {
          // h1 = obj[parentKey].Yes;
          // h2 = obj[parentKey].NotNow;
          // h3 = obj[parentKey].Absent;
        }
        if (parentKey === "eligibilityCount") {
          // e1 = obj[parentKey].eligible;
          // e2 = obj[parentKey].ineligible;
        }
        if (parentKey === "surveyCount") {
          // s1 = obj[parentKey].absent;
          //  s2 = obj[parentKey].present;
        }
        if (parentKey === "surveygender") {
          // sg1 = obj[parentKey].male;
          // sg2 = obj[parentKey].female;
        }
        if (parentKey === "registrationCount") {
          // rc1 = obj[parentKey].Registration;
          // rc2 = obj[parentKey].Resurvey;
        }
        if (parentKey === "screeningCount") {
          // sc1 = obj[parentKey]["Screening Count"];
          //  sc2 = obj[parentKey]["Not Screened"];
        }
      }
    }
  });



  sg1 = parseInt(localStorage.getItem('surveymaleCount')) || 0;
  sg2 = parseInt(localStorage.getItem('surveyfemaleCount')) || 0;
  s1 = parseInt(localStorage.getItem('surveyabsent')) || 0;
  s2 = parseInt(localStorage.getItem('surveypresent')) || 0;
  e1 = parseInt(localStorage.getItem('eligiblecount')) || 0;
  e2 = parseInt(localStorage.getItem('ineligiblecount')) || 0;
  h1 = parseInt(localStorage.getItem('habityes')) || 0;
  h2 = parseInt(localStorage.getItem('habitnotnow')) || 0;
  h3 = parseInt(localStorage.getItem('habitabsent')) || 0;
  rc1 = parseInt(localStorage.getItem('Resurveycount')) || 0;
  rc2 = parseInt(localStorage.getItem('Registrationcount')) || 0;
  sc1 = parseInt(localStorage.getItem('screeningCount')) || 0;
  sc2 = parseInt(localStorage.getItem('notscreeningcount')) || 0;




  genderChart(sg1, sg2);
  attendChart(s2, s1);
  eligibilityChart(e1, e2);
  updateRescreeningChart(rc1, rc2);
  updateScreeningChart(sc1, sc2);
  pendingFollowUpChart(h1, h2, h3);


  console.log("h1 : ", h1);
  console.log("h2 : ", h2);
  console.log("h3 : ", h3);
  console.log("e1 : ", e1);
  console.log("e2 : ", e2);
  console.log("s1 : ", s1);
  console.log("s2 : ", s2);
  console.log("sg1 : ", sg1);
  console.log("sg2 : ", sg2);
  console.log("rc1 : ", rc1);
  console.log("rc2 : ", rc2);
  console.log("sc1 : ", sc1);
  console.log("sc2 : ", sc2);

  // const loadingAnimation = document.getElementById("loading");
  // loadingAnimation.style.display = "block";



  //console.log("Habit Values:",h1);
  // console.log("Eligibility Values:", getValuesByKey(array, 'eligibilityCount'));
  // console.log("Survey Values:", getValuesByKey(array, 'surveyCount'));
  // console.log("Gender Values:", genderValues);
  // console.log("Registration Values:", getValuesByKey(array, 'registrationCount'));
  // console.log("Screening Values:", getValuesByKey(array, 'screeningCount'));
  //});

}



console.log("Tcc Array: ", tccArray)


var tccFollows = fb.database().ref().child("tcc_form_followup");

async function tccFollow() {
  var tccFollows = fb.database().ref().child("tcc_form_followup");
  tccFollows.once("value").then(snap => {
    let followUpArray = [];
    if (snap.val() != null) {
      snap.forEach(data => {
        let uuid = data.key;
        let followUpData = data.val();

        followUpArray.push({
          uuid: uuid,
          ...followUpData
        });
      });
      tccsrc = true;
      // console.log("Tcc Follow ups", followUpArray); 
    }
  });
}



function tccFormFollow() {
  var tccFormFollow = fb.database().ref().child("tcc_form_followup");

  tccFormFollow.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "tcc_form_followup.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}


let previ = "1";
let fArray = [];

let arrWSpeak = {};

async function TccbwsthFollowup(batcwuuid, selectedPhase) {
  const tccFollows = fb.database().ref().child("tcc_form_followup");
  const followUpKeys = ['afu', 'bfu', 'cfu', 'dfu', 'efu', 'ffu', 'gfu'];
  const followUpData = {};

  // console.log("batcwuuid", batcwuuid);
  followUpKeys.forEach(key => followUpData[key] = {});

  const fetchFollowUpPromises = Object.keys(batcwuuid).map(key => {
    const uuids = batcwuuid[key];
    // console.log("UUIDS of the Speaker", uuids)
    return Promise.all(uuids.map(uuid => {
      return tccFollows.child(uuid).once("value")
        .then(snapshot => {
          if (snapshot.exists()) {
            const data = snapshot.val();

            if (followUpKeys.includes(key)) {
              if (data[key]) {
                followUpData[key][uuid] = data[key];
                // console.log(" key = ", key + "uuid = ", uuid);
              }
            }
          }
        })
        .catch(error => {
          console.error(`Error fetching TCC data for UUID: ${uuid}`, error);
        });
    }));
  });

  // console.log("FollowUp data in bwsth:", followUpData);
  await Promise.all(fetchFollowUpPromises);

  const followUpArray = [];
  followUpKeys.forEach((key, index) => {
    const followUpEntries = followUpData[key];

    const phaseUUIDsFiltered = Object.keys(followUpEntries).map(uuid => {
      const entryData = followUpEntries[uuid];
      let maxPhase1Timestamp = null;
      let maxPhase2Timestamp = null;

      Object.keys(entryData).forEach(timestamp => {
        const year = new Date(Number(timestamp) * 1000).getFullYear();
        if (year === 2022) {
          if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
            maxPhase1Timestamp = timestamp;
          }
        }
        if (year === 2024) {
          if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
            maxPhase2Timestamp = timestamp;
          }
        }
      });

      if (selectedPhase === '1' && maxPhase1Timestamp) return uuid;
      if (selectedPhase === '2' && maxPhase2Timestamp) return uuid;
      if (selectedPhase === 'All') return uuid;
    }).filter(Boolean);

    let agree = 0;
    let nonagree = 0;

    let matchedUUIDs = phaseUUIDsFiltered;

    const uuidArray = [];

    matchedUUIDs.forEach(uuid => {
      const entryData = followUpEntries[uuid];
      const timestamps = Object.keys(entryData);
      const lastTimestamp = timestamps.reduce((latest, current) => {
        return Number(current) > Number(latest) ? current : latest;
      }, timestamps[0]);

      if (entryData[lastTimestamp].bwsth === "y" || entryData[lastTimestamp].dwsth === "y") {
        // console.log("Key:", key + "uuid:", uuid);
        agree++;
        uuidArray.push(uuid);
      } else {
        nonagree++;
      }
    });

    const totalCount = agree + nonagree;
    document.getElementById(`BW_${index + 1}`).innerText = totalCount;
    const chartFunction = `tccBW0${index + 1}Chart`;
    window[chartFunction](agree, nonagree);

    arrWSpeak[key] = uuidArray;

    tccArray.push({
      [`BWS-${index + 1}`]: {
        "Agreed": agree,
        "NotAgreed": nonagree
      }
    });
  });
  TccResultFollowup(arrWSpeak, selectedPhase);
  Tccbwsth = true;
  // console.log("arrWSpeak", arrWSpeak);

}

let i = 0;

async function TccResultFollowup(arrWSpeak, selectedPhase) {
  const tccFollows = fb.database().ref().child("tcc_form_followup");
  const followUpKeys = ['afu', 'bfu', 'cfu', 'dfu', 'efu', 'ffu', 'gfu'];
  const followUpData = {};


  // console.log("arrWSpeak", arrWSpeak);

  followUpKeys.forEach(key => followUpData[key] = {});

  const fetchFollowUpPromises = Object.keys(arrWSpeak).map(key => {
    const uuids = arrWSpeak[key];
    // console.log("UUIDS of the Speaker", uuids)
    return Promise.all(uuids.map(uuid => {
      return tccFollows.child(uuid).once("value")
        .then(snapshot => {
          if (snapshot.exists()) {
            const data = snapshot.val();

            if (followUpKeys.includes(key)) {
              if (data[key]) {
                followUpData[key][uuid] = data[key];
                // console.log(" key = ", key + "uuid = ", uuid);

              }
            }
          }
        })
        .catch(error => {
          console.error(`Error fetching TCC data for UUID: ${uuid}`, error);
        });

    }));
  });

  await Promise.all(fetchFollowUpPromises);

  // console.log("followUpData", followUpData);

  followUpKeys.forEach((key, index) => {
    const followUpEntries = followUpData[key];

    const phaseUUIDsFiltered = Object.keys(followUpEntries).map(uuid => {
      const entryData = followUpEntries[uuid];
      let maxPhase1Timestamp = null;
      let maxPhase2Timestamp = null;

      Object.keys(entryData).forEach(timestamp => {
        const year = new Date(Number(timestamp) * 1000).getFullYear();
        if (year === 2022) {
          if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
            maxPhase1Timestamp = timestamp;
          }
        }
        if (year === 2024) {
          if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
            maxPhase2Timestamp = timestamp;
          }
        }
      });

      if (selectedPhase === '1' && maxPhase1Timestamp) return uuid;
      if (selectedPhase === '2' && maxPhase2Timestamp) return uuid;
      if (selectedPhase === 'All') return uuid;
    }).filter(Boolean);

    let noChange = 0;
    let reduced = 0;
    let stopped = 0;
    let relapse = 0;
    let na = 0;

    phaseUUIDsFiltered.forEach(uuid => {
      const entryData = followUpEntries[uuid];
      const timestamps = Object.keys(entryData);
      const lastTimestamp = timestamps.reduce((latest, current) => {
        return Number(current) > Number(latest) ? current : latest;
      }, timestamps[0]);

      const lastEntryData = entryData[lastTimestamp];
      if (lastEntryData.amse === "bsts1" || lastEntryData.dsts === "bsts1" || lastEntryData.bsts === "bsts1") {
        noChange++;
      } else if (lastEntryData.amse === "bsts2" || lastEntryData.dsts === "bsts2" || lastEntryData.bsts === "bsts2") {
        reduced++;
      } else if (lastEntryData.amse === "bsts3" || lastEntryData.dsts === "bsts3" || lastEntryData.bsts === "bsts3") {
        stopped++;
      } else if (lastEntryData.amse === "bsts4" || lastEntryData.dsts === "bsts4" || lastEntryData.bsts === "bsts4") {
        relapse++;
      } else {
        na++;
      }
    });

    const totalCount = noChange + reduced + stopped + relapse + na;

    document.getElementById(`RS_${index + 1}`).innerText = totalCount;

    const chartFunction = `tccRS0${index + 1}Chart`;
    window[chartFunction](noChange, reduced, stopped, relapse, na);

    TccResult = true;
    tccArray.push({
      [`status-${index + 1}`]: {
        "noChange": noChange,
        "reduced": reduced,
        "stopped": stopped,
        "relapse": relapse,
        "na": na
      }
    });
  });
}

function exportPendingTCCFOLLOW() {
  var tccFollows = fb.database().ref().child("tcc_followup_pending");
  tccFollows.once("value", function (snapshot) {
    var data = snapshot.val();
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.download = "Pending_Followup.json";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function generateExcelData() {
  var panchayatRef = fb.database().ref("panchayats");
  var villageRef = fb.database().ref("villages");
  var tccPenFollowUpRef = fb.database().ref("tcc_followup_pending");
  var patientsData = fb.database().ref('patients');
  const followUpKeys = ['fu_1', 'fu_2', 'fu_3', 'fu_4', 'fu_5', 'fu_6', 'fu_7'];

  // Current timestamp
  let currentTimestamp = Date.now();

  Promise.all([panchayatRef.once("value"), villageRef.once("value"), tccPenFollowUpRef.once("value"), patientsData.once("value")]).then(([panchayatSnap, villageSnap, tccPenFollowUpSnap, patientsSnap]) => {
    var excelData = [];
    var villages = {};

    villageSnap.forEach((villageData) => {
      let villageObj = JSON.parse(JSON.stringify(villageData.val(), null, 2));
      if (!villages[villageObj.pchid]) {
        villages[villageObj.pchid] = [];
      }
      villages[villageObj.pchid].push(villageObj);
    });

    panchayatSnap.forEach((data) => {
      let panchayatData = JSON.stringify(data.val(), null, 2);
      let panchayatObj = JSON.parse(panchayatData);
      let panchID = panchayatObj.pchid;
      let panchayatVillages = villages[panchID];

      if (panchayatVillages) {
        panchayatVillages.forEach((village) => {
          let excelRow = {
            S_No: excelData.length + 1,
            Panchayat: panchayatObj.pchname,
            Village: village.name,
            fu_1: 0,
            fu_2: 0,
            fu_3: 0,
            fu_4: 0,
            fu_5: 0,
            fu_6: 0,
            fu_7: 0
          };

          excelData.push(excelRow);
        });
      }
    });

    let followUpPromises = followUpKeys.map((followUpKey, index) => {
      let followUpData = tccPenFollowUpSnap.child(followUpKey).val();

      if (followUpData) {
        return Promise.all(
          Object.keys(followUpData).map((uuid) => {
            return patientsData.child(uuid).once("value").then((patientSnap) => {
              let patientData = patientSnap.val();
              let dueDate = followUpData[uuid].due_dt;

              // Parse due date in DD/MM/YYYY format
              let followUpDueDate = new Date(dueDate.split("/").reverse().join("-"));
              let followUpTimestamp = followUpDueDate.getTime();

              // Compare current time with the due date
              if (currentTimestamp >= followUpTimestamp) {
                for (let i = 0; i < excelData.length; i++) {
                  if (patientData && patientData.village_name === excelData[i].Village) {
                    if (patientData.village_name === "Paapathimmenahalli") {
                      console.log('follow up key', index, +"Pending uuids", uuid);
                    }
                    console.log("Village", patientData.village_name)
                    excelData[i][followUpKey] += 1;
                  }
                }
              }
            });
          })
        );
      } else {
        return Promise.resolve();
      }
    });

    Promise.all(followUpPromises).then(() => {
      console.log("Excel Data: ", excelData);

      // Create a new workbook
      var wb = XLSX.utils.book_new();

      // Add header row (with bold styling)
      var ws_data = [
        ["S.No", "Panchayat", "Village", "Follow_1", "Follow_2", "Follow_3", "Follow_4", "Follow_5", "Follow_6", "Follow_7"]
      ];

      // Add the data rows
      for (let i = 0; i < excelData.length; i++) {
        ws_data.push([
          excelData[i].S_No,
          excelData[i].Panchayat,
          excelData[i].Village,
          excelData[i].fu_1,
          excelData[i].fu_2,
          excelData[i].fu_3,
          excelData[i].fu_4,
          excelData[i].fu_5,
          excelData[i].fu_6,
          excelData[i].fu_7
        ]);
      }

      // Create a worksheet from the data
      var ws = XLSX.utils.aoa_to_sheet(ws_data);

      // Make header row bold
      var range = XLSX.utils.decode_range(ws['!ref']);
      for (let C = range.s.c; C <= range.e.c; ++C) {
        var cellAddress = XLSX.utils.encode_cell({ c: C, r: 0 }); // first row
        if (!ws[cellAddress]) ws[cellAddress] = { v: "" }; // empty cell
        ws[cellAddress].s = { font: { bold: false } }; // apply bold style
      }

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, "Follow_Up_Data");

      // Generate Excel file and trigger download
      const currentDate = new Date().getTime();
      //     // saveFile(data, `${currentDate}.xlsx`);
      XLSX.writeFile(wb, `Follow_Up_Data_${currentDate}.xlsx`);
    });
  });
}

function saveFile(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  }
  else {
    const url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = filename;
    a.click();
    // exportPendingTCCFOLLOW();
    // setTimeout(()=>{
    //   window.URL.revokeObjectURL(url);
    //   document.body.removeChild(a);
    // }, 0)
  }
}



async function processPatientData(p1, p2, data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {

  let form3Data = {};
  let patientD = {};
  const uniqueData = removeDuplicateUUIDs(data);

  let form1Data = {};
  let scp1 = localStorage.getItem('screeningPhase1Array');
  let scp2 = localStorage.getItem('screeningPhase2Array');

  var p1String = JSON.parse(scp1);

  var p2String = JSON.parse(scp2);

  console.log("Screening Count in Comp", p1String)
  console.log("Screening Count in Comp", p2String)


  // Create promises for fetching form3Data and patientData
  let form3Promises = [];
  let patientPromises = [];
  let form1Promises = [];

  uniqueData.forEach(item => {
    const villageId = item.village;
    const panchayatId = villageId.substring(0, 2);
    const uuid = item.uuid;
    const fwid = item.fw_id;


    form3Promises.push(
      fb.database().ref().child("Form_3").child(panchayatId).child(villageId).child(uuid).once("value")
        .then(snap => {
          const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
          if (result) {

            if (snap.exists()) {
              form3Data[uuid] = snap.val();
            }
          }
        })
    );

    patientPromises.push(
      fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(uuid).once("value")
        .then(function (snap) {
          const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

          if (result) {
            patientD[uuid] = snap.val();
          }
        })
        .catch(error => {
          console.error("Error fetching patient data for village:", villageId, error);
        })
    );

    form1Promises.push(
      fb.database().ref().child("Form_1").child(panchayatId).child(villageId).child(uuid).once("value")
        .then(snap => {
          let formData = snap.val();
          const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);
          if (result) {
            if (formData) {
              form1Data[uuid] = formData;
            }
          }
        })
    );
  });

  // Wait for all Form_3 and patient data to be fetched
  await Promise.all([...form3Promises, ...patientPromises, ...form1Promises]);



  let phase1TCCCount = 0;
  let phase2TCCCount = 0;
  let phase1FormCount = 0;
  let phase2FormCount = 0;
  let phase1surveyCount = 0;
  let phase2surveyCount = 0;
  let ph1 = false;
  let ph2 = false;


  // const checkTobaccoUse = (uuid, phase) => {
  //   if (form1Data.hasOwnProperty(uuid) && patientD[uuid]) {
  //     const timestamps = Object.keys(form1Data[uuid]);
  //     const latestTimestamp = Math.max(...timestamps);
  //     let year = new Date(Number(latestTimestamp) * 1000).getFullYear();
  //     if (year === 2022) {
  //       ph1 = true;
  //     } else if (year === 2024) {
  //       ph2 = true;
  //     }

  //     const tobaccoUse = form1Data[uuid][latestTimestamp]?.tif;
  //     // console.log({ uuid: uuid, time: latestTimestamp });

  //     if (tobaccoUse && (tobaccoUse.toLowerCase() === "yes" || tobaccoUse.toLowerCase() === "y" || tobaccoUse.toLowerCase() === "not now" || tobaccoUse.toLowerCase() === "nn")) {
  //       if (phase === 1 && ph1) {
  //         phase1TCCCount++;
  //       } else if (phase === 2 && ph2) {
  //         phase2TCCCount++;
  //       }
  //     }
  //   }
  // };


  const checkTobaccoUse = (uuid, phase) => {
    if (form1Data.hasOwnProperty(uuid) && patientD[uuid]) {

      let maxPhase1Timestamp = null;
      let maxPhase2Timestamp = null;

      // Iterate through all timestamps in form1Data for the given uuid
      Object.keys(form1Data[uuid]).forEach(timestamp => {
        let year = new Date(Number(timestamp) * 1000).getFullYear();

        if (phase === 1 && year === 2022) {
          ph1 = true;
          if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
            maxPhase1Timestamp = timestamp;
          }


        }
        if (phase === 2 && year === 2024) {
          ph2 = true;
          if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
            maxPhase2Timestamp = timestamp;
          }

        }
      });
      if (maxPhase1Timestamp) {
        const tobaccoUse = form1Data[uuid][maxPhase1Timestamp]?.tif;
        if (tobaccoUse && (tobaccoUse.toLowerCase() === "yes" || tobaccoUse.toLowerCase() === "y" || tobaccoUse.toLowerCase() === "not now" || tobaccoUse.toLowerCase() === "nn")) {
          if (ph1) {
            phase1TCCCount++;
          }
        }
      }
      if (maxPhase2Timestamp) {
        const tobaccoUse = form1Data[uuid][maxPhase2Timestamp]?.tif;


        if (tobaccoUse && (tobaccoUse.toLowerCase() === "yes" || tobaccoUse.toLowerCase() === "y")) {
          if (ph2) {
            // console.log("uuids of yes in habit", uuid)
            phase2TCCCount++;
          }
        }
        if (tobaccoUse && (tobaccoUse.toLowerCase() === "not now" || tobaccoUse.toLowerCase() === "nn")) {
          if (ph2) {
            // console.log("uuids in NN habit", uuid)
            phase2TCCCount++;
          }
        }
      }


    }
  };




  const countUUIDs = (uuids, formData) => {

    let count = 0;
    uuids.forEach(item => {
      let uuid = item.uuid;
      if (formData.hasOwnProperty(uuid)) {
        count++;
      }
    });
    return count;
  };

  p1.forEach(item => checkTobaccoUse(item.uuid, 1));
  p2.forEach(item => checkTobaccoUse(item.uuid, 2));

  phase1FormCount = p1String.filter(item => form3Data && form3Data.hasOwnProperty(item.uuid)).length;
  phase2FormCount = p2String.filter(item => form3Data && form3Data.hasOwnProperty(item.uuid)).length;

  phase1surveyCount = countUUIDs(p1, form1Data);
  phase2surveyCount = countUUIDs(p2, form1Data);

  if (selectedPhase === '1') {
    phaseComparisionChart(phase1TCCCount, 0, phase1FormCount, 0, phase1surveyCount, 0);
  } else if (selectedPhase === '2') {
    phaseComparisionChart(0, phase2TCCCount, 0, phase2FormCount, 0, phase2surveyCount);
  } else if (selectedPhase === 'All') {
    phaseComparisionChart(phase1TCCCount, phase2TCCCount, phase1FormCount, phase2FormCount, phase1surveyCount, phase2surveyCount);
  }

}


// async function processPatientData(p1, p2, data, selectedFieldworker, selectedPanchayat, selectedVillage, selectedPhase) {
//   console.log("happy Dassera " + selectedPanchayat + " -- " + selectedVillage);

//   let form3Data = {};
//   // let patientData = {};
//   let patientD = {};

//   let form1Data = {};

//   // Create promises for fetching form3Data and patientData
//   let form3Promises = [];
//   let patientPromises = [];
//   let form1Promises = [];

//   data.forEach(item => {
//     const villageId = item.village;
//     const panchayatId = villageId.substring(0, 2);
//     const uuid = item.uuid;

//     form3Promises.push(
//       fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(uuid).once("value")
//         .then(function (snap) {
//           let pinfo = snap.val();
//           let fwid = pinfo?.fw_id;
//           const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

//           if (result) {
//             return fb.database().ref().child("Form_3").child(panchayatId).child(villageId).child(uuid).once("value")
//               .then(snap => {
//                 if (snap.exists()) {
//                   form3Data[uuid] = snap.val();
//                 }
//               });
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching Form_3 data for village:", villageId, error);
//         })
//     );

//     patientPromises.push(
//       fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(uuid).once("value")
//         .then(function (snap) {
//           let patientData = snap.val();
//           let fwid = patientData?.fw_id;
//           const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

//           if (result) {
//             patientD[uuid] = snap.val();
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching patient data for village:", villageId, error);
//         })
//     );

//     form1Promises.push(
//       fb.database().ref().child("patients1").child(panchayatId).child(villageId).child(uuid).once("value")
//         .then(function (snap) {
//           let pinfo = snap.val();
//           let fwid = pinfo?.fw_id;
//           const result = isMatchingCondition(selectedFieldworker, selectedPanchayat, selectedVillage, fwid, panchayatId, villageId);

//           if (result) {
//             return fb.database().ref().child("Form_1").child(panchayatId).child(villageId).child(uuid).once("value")
//               .then(snap => {
//                 let formData = snap.val();
//                 if (formData) {
//                   form1Data[uuid] = formData;
//                 }
//               });
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching form_1 data for UUID:", uuid, error);
//         })
//     );
//   });

//   // Wait for all Form_3 and patient data to be fetched
//   await Promise.all([...form3Promises, ...patientPromises, ...form1Promises]);



//   let phase1TCCCount = 0;
//   let phase2TCCCount = 0;
//   let phase1FormCount = 0;
//   let phase2FormCount = 0;
//   let phase1surveyCount = 0;
//   let phase2surveyCount = 0;
//   let ph1 = false;
//   let ph2 = false;


//   const checkTobaccoUse = (uuid, phase) => {
//     if (form1Data.hasOwnProperty(uuid) && patientD[uuid]) {

//       let maxPhase1Timestamp = null;
//       let maxPhase2Timestamp = null;

//       // Iterate through all timestamps in form1Data for the given uuid
//       Object.keys(form1Data[uuid]).forEach(timestamp => {
//         let year = new Date(Number(timestamp) * 1000).getFullYear();

//         if (phase === 1 && year === 2022) {
//           ph1 = true;
//           if (!maxPhase1Timestamp || Number(timestamp) > Number(maxPhase1Timestamp)) {
//             maxPhase1Timestamp = timestamp;
//           }
//           const tobaccoUse = form1Data[uuid][maxPhase1Timestamp]?.tif;

//           if (tobaccoUse && (tobaccoUse.toLowerCase() === "yes" || tobaccoUse.toLowerCase() === "y" || tobaccoUse.toLowerCase() === "not now" || tobaccoUse.toLowerCase() === "nn")) {
//             if (ph1) {
//               phase1TCCCount++;
//             }
//           }
//         }
//         if (phase === 2 && year === 2024) {
//           ph2 = true;
//           if (!maxPhase2Timestamp || Number(timestamp) > Number(maxPhase2Timestamp)) {
//             maxPhase2Timestamp = timestamp;
//           }
//           const tobaccoUse = form1Data[uuid][maxPhase2Timestamp]?.tif;

//           if (tobaccoUse && (tobaccoUse.toLowerCase() === "yes" || tobaccoUse.toLowerCase() === "y" || tobaccoUse.toLowerCase() === "not now" || tobaccoUse.toLowerCase() === "nn")) {
//             if (ph2) {
//               phase2TCCCount++;
//             }
//           }
//         }
//       });



//     }
//   };




//   const countUUIDs = (uuids, formData) => {

//     let count = 0;
//     uuids.forEach(item => {
//       let uuid = item.uuid;
//       if (formData.hasOwnProperty(uuid)) {
//         count++;
//       }
//     });
//     return count;
//   };

//   p1.forEach(item => checkTobaccoUse(item.uuid, 1));
//   p2.forEach(item => checkTobaccoUse(item.uuid, 2));

//   phase1FormCount = p1.filter(item => form3Data && form3Data.hasOwnProperty(item.uuid)).length;
//   phase2FormCount = p2.filter(item => form3Data && form3Data.hasOwnProperty(item.uuid)).length;

//   phase1surveyCount = countUUIDs(p1, form1Data);
//   phase2surveyCount = countUUIDs(p2, form1Data);


//   if (selectedPhase === '1') {
//     phaseComparisionChart(phase1TCCCount, 0, phase1FormCount, 0, phase1surveyCount, 0);
//   } else if (selectedPhase === '2') {
//     phaseComparisionChart(0, phase2TCCCount, 0, phase2FormCount, 0, phase2surveyCount);
//   } else if (selectedPhase === 'All') {
//     phaseComparisionChart(phase1TCCCount, phase2TCCCount, phase1FormCount, phase2FormCount, phase1surveyCount, phase2surveyCount);
//   }


// }



