function test1() {
  let seats1 = document.querySelector(".blood-box");
  let seat1Array = [];
  let k=0;

  for (var i = 0; i < 54; i++) {
    let booked = "";

    if(k===3){
      k=0;
    }

    if (i >= 0 && i <= 2) {
      booked = "booked";

      let seat1ID = 'S' + (i + 1);
      let grid1Id = i + 1;

      const components = ["Serum", "Plasma", "Buffy coat"];
      const componetId = components[k];
      k++;

      // Assign a unique ID to each label
      let labelID = 'label_' + seat1ID;

      seats1.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="' + seat1ID + '" />' +
        '<label id="' + labelID + '" for="' + seat1ID + '" class="seat ' + booked + '"> BR_01' + " <br>" + componetId + '</label>'
      );

      // Set the font size for each seat's label
      document.getElementById(labelID).style.fontSize = '10px';
      document.getElementById(labelID).style.color = 'rgb(255, 255, 255)';
      document.getElementById(labelID).style.textAlign = 'center';


      seat1Array.push(seat1ID);

      let seatCheckbox = document.getElementById(seat1ID);
      seatCheckbox.addEventListener('click', function () {
        openModal();
      });
    }
    else if (i >= 3 && i <= 5) {
      booked = "booked";

      let seat1ID = 'S' + (i + 1);
      let grid1Id = i + 1;

      const components = ["Serum", "Plasma", "Buffy coat"];
      const componetId = components[k];
      k++;
      // Assign a unique ID to each label
      let labelID = 'label_' + seat1ID;

      seats1.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="' + seat1ID + '" />' +
        '<label id="' + labelID + '" for="' + seat1ID + '" class="seat ' + booked + '"> BR_02' + " <br>" + componetId + '</label>'
      );

      // Set the font size for each seat's label
      document.getElementById(labelID).style.fontSize = '10px';
      document.getElementById(labelID).style.color = 'rgb(255, 255, 255)';
      document.getElementById(labelID).style.textAlign = 'center';


      seat1Array.push(seat1ID);

      let seatCheckbox = document.getElementById(seat1ID);
      seatCheckbox.addEventListener('click', function () {
        openModal();
      });
    }
    else if (i >= 6 && i <= 8) {
      booked = "booked";

      let seat1ID = 'S' + (i + 1);
      let grid1Id = i + 1;

      const components = ["Serum", "Plasma", "Buffy coat"];
      const componetId = components[k];
      k++;
      // Assign a unique ID to each label
      let labelID = 'label_' + seat1ID;

      seats1.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="' + seat1ID + '" />' +
        '<label id="' + labelID + '" for="' + seat1ID + '" class="seat ' + booked + '"> BR_03' + " <br>" + componetId + '</label>'
      );

      // Set the font size for each seat's label
      document.getElementById(labelID).style.fontSize = '10px';
      document.getElementById(labelID).style.color = 'rgb(255, 255, 255)';
      document.getElementById(labelID).style.textAlign = 'center';


      seat1Array.push(seat1ID);

      let seatCheckbox = document.getElementById(seat1ID);
      seatCheckbox.addEventListener('click', function () {
        openModal();
      });
    }
    else if (i >= 9 && i <= 41) {
      booked = "booked";

      let seat1ID = 'S' + (i + 1);
      let grid1Id = i + 1;

      const components = ["Serum", "Plasma", "Buffy coat"];
      const componetId = components[k];
      k++;
      // Assign a unique ID to each label
      let labelID = 'label_' + seat1ID;

      seats1.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="' + seat1ID + '" />' +
        '<label id="' + labelID + '" for="' + seat1ID + '" class="seat ' + booked + '"> BR_' + grid1Id + " <br>" + componetId + '</label>'
      );

      // Set the font size for each seat's label
      document.getElementById(labelID).style.fontSize = '10px';
      document.getElementById(labelID).style.color = 'rgb(255, 255, 255)';
      document.getElementById(labelID).style.textAlign = 'center';


      seat1Array.push(seat1ID);

      let seatCheckbox = document.getElementById(seat1ID);
      seatCheckbox.addEventListener('click', function () {
        openModal();
      });
    }
    else {
      let seat1ID = 'S' + (i + 1);
      seats1.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="' + seat1ID + '" />' +
        '<label for="' + seat1ID + '" class="seat ' + booked + '"> ' + '</label>'

      );
      seat1Array.push(seat1ID);

      let seatCheckbox = document.getElementById(seat1ID);
      seatCheckbox.addEventListener('click', function () {
        openModal();
      });
    }
  }
  console.log(seat1Array);
}

function test2() {
  let seats2 = document.querySelector(".specimen-box");
  let seat2Array = [];
  for (var j = 0; j < 54; j++) {
    let booked = "";
    if (j >= 0 && j <= 41) {
      booked = "booked";
      let seat2ID = 'P' + (j + 1);
      let grid2Id = j + 1;

      const components = ["FT","FN"];
      const componetId = components[Math.floor(Math.random() * components.length)];
      
      let labelID = 'label_' + seat2ID;

      seats2.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="' + seat2ID + '" />' +
        '<label id="' + labelID + '"for="' + seat2ID + '" class="seat ' + booked + '"> BR_' + grid2Id + " <br>" + componetId +  '</label>'
      );

      document.getElementById(labelID).style.fontSize = '10px';
      document.getElementById(labelID).style.color = 'rgb(255, 255, 255)';
      document.getElementById(labelID).style.textAlign = 'center';

      seat2Array.push(seat2ID);

      let seatCheckbox = document.getElementById(seat2ID);
      seatCheckbox.addEventListener('click', function () {
        openModal();
      });
    } else {
      let seat2ID = 'p' + (j + 1);
      seats2.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="' + seat2ID + '" />' +
        '<label for="' + seat2ID + '" class="seat ' + booked + '"> ' + '</label>'

      );
      seat2Array.push(seat2ID);

      let seatCheckbox = document.getElementById(seat2ID);
      seatCheckbox.addEventListener('click', function () {
        openModal();
      });    }


  }
  console.log(seat2Array);
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

let currentBoxIndex = 1;
let totalBoxes = 1;

function addBloodBox() {
  totalBoxes++;
  const newBox = `
    <div class="blood-box" id="box-${totalBoxes}" style="display: none;">
      <div class="status">
        <div class="item">Available</div>
        <div class="item">Occupied</div>
        <div class="item">Testing</div>
      </div>
      <input type="checkbox" name="tickets" id="s${totalBoxes}" />
      <label for="s${totalBoxes}" class="seat booked"></label>
    </div>
  `;
  document.getElementById("blood-box-container").insertAdjacentHTML('beforeend', newBox);
  alert(`Blood Box ${totalBoxes} added`);
}

function prevBox() {
  if (currentBoxIndex > 1) {
    document.getElementById(`box-${currentBoxIndex}`).style.display = "none";
    currentBoxIndex--;
    document.getElementById(`box-${currentBoxIndex}`).style.display = "block";
  }
}

function nextBox() {
  if (currentBoxIndex < totalBoxes) {
    document.getElementById(`box-${currentBoxIndex}`).style.display = "none";
    currentBoxIndex++;
    document.getElementById(`box-${currentBoxIndex}`).style.display = "block";
  }
}


