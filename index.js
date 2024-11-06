function test1() {
  let seats1 = document.querySelector(".blood-box");
  let seat1Array = []; 
  for (var i = 0; i < 54; i++) {
      let booked = "";
      if (i >= 0 && i <= 39) { 
          booked = "booked";
      } else {
          booked =  "";
      }
      
      let seat1ID = 'S' + (i + 1); 
      let grid1Id = i + 1;
      seats1.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="' + seat1ID + '" />' +
        '<label for="' + seat1ID + '" class="seat ' + booked + '"> BR_'+ grid1Id +'</label>'
      );
      seat1Array.push(seat1ID);

      let seatCheckbox = document.getElementById(seat1ID);
      seatCheckbox.addEventListener('click', function () {
        openModal();
      });
  }
  console.log(seat1Array); 
}

function test2() {
  let seats2 = document.querySelector(".specimen-box");
  let seat2Array = [];
  for (var j = 0; j < 54; j++) {
      let booked = "";
      if (j >= 0 && j <= 39) { 
          booked = "booked";
      } else {
          booked = "";
      }
      
      let seat2ID = 'P' + (j + 1);
      let grid2Id = j + 1;
      seats2.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="' + seat2ID + '" />' +
        '<label for="' + seat2ID + '" class="seat ' + booked + '"> SR_'+ grid2Id +'</label>'
      );
      seat2Array.push(seat2ID);

      let seatCheckbox = document.getElementById(seat2ID);
      seatCheckbox.addEventListener('click', function () {
        openModal();
      });
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


