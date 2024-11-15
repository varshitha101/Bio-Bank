let BBcaseDataArray = {}; 
let boxCount = 1; 
let currentBloodBoxIndex = 1;
// let totalBloodBoxes = 1;

function test1() {
  populateBloodBox("box-1",100);
}

let totalBloodBoxes = 1; 
let seatCounter = 0;

function populateBloodBox(boxName, n) {
  let seats1 = document.querySelector(`#${boxName}`);
  document.getElementById("box_id").innerHTML = `BR Blood ${boxName}`;
  let k = 0;
  const components = ["Serum", "Plasma", "Buffy coat"];

  BBcaseDataArray[boxName] = [];

  for (let i = 0; i < n; i++) {
    let booked = "";
    let componentId = "";
    let seat1ID = 'S' + (++seatCounter); 
    let grid1Id = seatCounter; 

    if (k === 3) {
      k = 0;
    }

    if (i >= 0 && i <= 49) {
      booked = "booked";
      componentId = components[k];
      k++;
    } else {
      booked = "unselected";
      componentId = "";
    }

    BBcaseDataArray[boxName].push({
      seatID: seat1ID,
      gridID: grid1Id,
      booked: booked,
      component: componentId || ""
    });
  }

  BBcaseDataArray[boxName].forEach((seat) => {
    let labelID = 'label_' + seat.seatID;
    let labelContent = seat.booked === "booked" ? 'BR_' + seat.gridID + " <br>" + seat.component : '';

    seats1.insertAdjacentHTML(
      "beforeend",
      '<input type="checkbox" name="tickets" id="' + seat.seatID + '" />' +
      '<label id="' + labelID + '" for="' + seat.seatID + '" class="seat ' + seat.booked + '">' +
      labelContent + '</label>'
    );

    document.getElementById(labelID).style.fontSize = '10px';
    document.getElementById(labelID).style.color = 'rgb(255, 255, 255)';
    document.getElementById(labelID).style.textAlign = 'center';
    document.getElementById('samplePage').addEventListener('click', function () {
      openModal();
    });

    let seatCheckbox = document.getElementById(seat.seatID);
    seatCheckbox.addEventListener('click', function () {
      openModal();
    });
  });

  console.log(BBcaseDataArray);
}

function addBloodBox() {
  totalBloodBoxes++;
  let newBoxName = "box-" + totalBloodBoxes;

  const newBox = `
    <div class="blood-box" id="${newBoxName}" style="display: none;">
      <div class="status">
        <div class="item">Empty</div>
        <div class="item">Occupied</div>
        <div class="item">Outsource</div>
      </div>
    </div>
  `;

  document.getElementById("blood-box-container").insertAdjacentHTML('beforeend', newBox);

  let seatLimit = 100; // Set the limit of seats for each new box
  populateBloodBox(newBoxName, seatLimit);

  
      // $('#CreationModalCenter').modal('show');

  
  alert(`Blood Box ${totalBloodBoxes} added`);
}


let specimenDataArray = {}; 
let specimenBoxCount = 1;
let currentSpecimenBoxIndex = 1;

function test2() {
  populateSpecimenBox("specimen-box-1", 100);
}

let totalSpecimenBoxes = 1;
let specimenSeatCounter = 0;


function populateSpecimenBox(boxName, n) {
  let seats1 = document.querySelector(`#${boxName}`);
  document.getElementById("sbox_id").innerHTML = `SB ${boxName}`;
  let k = 0;
  const components = ["FN-1", "FN-2", "FN-3", "FT-1", "FT-2", "FT-3"];

  specimenDataArray[boxName] = [];

  for (let i = 0; i < n; i++) {
    let booked = "";
    let componentId = "";
    let seat1ID = 'P' + (++specimenSeatCounter); 
    let grid1Id = specimenSeatCounter; 

    if (k === 3) {
      k = 0;
    }

    if (i >= 0 && i <= 49) {
      booked = "booked";
      componentId = components[k];
      k++;
    } else {
      booked = "unselected";
      componentId = "";
    }

    specimenDataArray[boxName].push({
      seatID: seat1ID,
      gridID: grid1Id,
      booked: booked,
      component: componentId || ""
    });
  }

  specimenDataArray[boxName].forEach((seat) => {
    let labelID = 'label_' + seat.seatID;
    let labelContent = seat.booked === "booked" ? 'BR_' + seat.gridID + " <br>" + seat.component : '';

    seats1.insertAdjacentHTML(
      "beforeend",
      '<input type="checkbox" name="tickets" id="' + seat.seatID + '" />' +
      '<label id="' + labelID + '" for="' + seat.seatID + '" class="seat ' + seat.booked + '">' +
      labelContent + '</label>'
    );

    document.getElementById(labelID).style.fontSize = '10px';
    document.getElementById(labelID).style.color = 'rgb(255, 255, 255)';
    document.getElementById(labelID).style.textAlign = 'center';

    let seatCheckbox = document.getElementById(seat.seatID);
    seatCheckbox.addEventListener('click', function () {
      openModal();
    });
  });

  console.log(specimenDataArray);
}

function addSpecimenBox() {
  totalSpecimenBoxes++;
  let newBoxName = "specimen-box-" + totalSpecimenBoxes;

  const newBox = `
    <div class="specimen-box" id="${newBoxName}" style="display: none;">
      <div class="status">
        <div class="item">Empty</div>
        <div class="item">Occupied</div>
        <div class="item">Outsource</div>
      </div>
    </div>
  `;

  document.getElementById("specimen-box-container").insertAdjacentHTML('beforeend', newBox);

  const newBoxElement = document.getElementById(newBoxName);
  newBoxElement.style.display = 'block';

  let seatLimit = 100; 
  populateSpecimenBox(newBoxName, seatLimit);

  alert(`Specimen Box ${totalSpecimenBoxes} added`);
}




// function test2() {
//   let seats2 = document.querySelector(".specimen-box");
//   for (var j = 0; j < 54; j++) {
//     if (j < 59) {
//       let randint = Math.floor(Math.random() * 2);
//       let booked = randint === 1 ? "booked" : "";
//       seats2.insertAdjacentHTML(
//         "beforeend",
//         '<input type="checkbox" name="tickets" id="p' +
//         (j + 2) +
//         '" /><label for="p' +
//         (j + 2) +
//         '" class="seat ' +
//         booked +
//         '"></label>'
//       );

//       let seatCheckbox = document.getElementById('p' + (j + 2));
//       seatCheckbox.addEventListener('click', function () {
//         openModal();
//       });
//     }
//   }
// }




function openModal(seatInfo) {
  $('#exampleModalCenter').modal('show');
}

  // let currentBloodBoxIndex = 1;
  // let totalBloodBoxes = 1;

  // function addBloodBox() {
  //   totalBloodBoxes++;
  //   const newBox = `
  //     <div class="blood-box" id="box-${totalBloodBoxes}" style="display: none;">
  //       <div class="status">
  //         <div class="item">Available</div>
  //         <div class="item">Occupied</div>
  //         <div class="item">Testing</div>
  //       </div>
  //       <input type="checkbox" name="tickets" id="s${totalBloodBoxes}" />
  //       <label for="s${totalBloodBoxes}" class="seat booked"></label>
  //     </div>
  //   `;
  //   document.getElementById("blood-box-container").insertAdjacentHTML('beforeend', newBox);
  //   alert(`Blood Box ${totalBloodBoxes} added`);
  // }

function prev1Box() {
  if (currentBloodBoxIndex > 1) {
    document.getElementById(`box-${currentBloodBoxIndex}`).style.display = "none";
    currentBloodBoxIndex--;
    document.getElementById(`box-${currentBloodBoxIndex}`).style.display = "block";
  }
}

function next1Box() {
  if (currentBloodBoxIndex < totalBloodBoxes) {
    document.getElementById(`box-${currentBloodBoxIndex}`).style.display = "none";
    currentBloodBoxIndex++;
    document.getElementById(`box-${currentBloodBoxIndex}`).style.display = "block";
  }
}

// function prev2Box() {
//   if (currentSpecimenBoxIndex > 1) {
//     document.getElementById(`box-${currentSpecimenBoxIndex}`).style.display = "none";
//     currentSpecimenBoxIndex--;
//     document.getElementById(`box-${currentSpecimenBoxIndex}`).style.display = "block";
//   }
// }

// function next2Box() {
//   if (currentSpecimenBoxIndex < totalSpecimenBoxes) {
//     document.getElementById(`box-${currentSpecimenBoxIndex}`).style.display = "none";
//     currentSpecimenBoxIndex++;
//     document.getElementById(`box-${currentSpecimenBoxIndex}`).style.display = "block";
//   }
// }
