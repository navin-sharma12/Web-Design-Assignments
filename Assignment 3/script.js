//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function addNewRow() {
  var rows = document.getElementById("myTable").rows;
  var latestIndex;
  if (rows.length > 1) {
    latestIndex = parseInt(rows[rows.length - 2].firstElementChild.nextElementSibling.innerHTML.split(" ")[1]) + 1;
  }
  else {
    latestIndex = 1;
  }

  var tbodyRef = document.getElementsByTagName("tbody")[0];
  var tdNode = document.createElement("tr");
  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML = '<input id="checkbox" type="checkbox" onclick="onCheckboxClick(this)"/><br /><br /><img src="down.png" width="25px" onclick="onImageClick(this)">';
  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(latestIndex));
  var trAdvisorCell = document.createElement("td");
  trAdvisorCell.innerHTML = "Teacher " + (parseInt(latestIndex));
  var trAwardStatus = document.createElement("td");
  trAwardStatus.innerHTML = "Approved";
  var trSemester = document.createElement("td");
  trSemester.innerHTML = "Fall";
  var trType = document.createElement("td");
  trType.innerHTML = "TA";
  var trBudget = document.createElement("td");
  trBudget.innerHTML = "45678";
  var trPercentage = document.createElement("td");
  trPercentage.innerHTML = "100%";

  //appending inside tr
  tdNode.appendChild(trCheckBoxCell);
  tdNode.appendChild(trStudentCell);
  tdNode.appendChild(trAdvisorCell);
  tdNode.appendChild(trAwardStatus);
  tdNode.appendChild(trSemester);
  tdNode.appendChild(trType);
  tdNode.appendChild(trBudget);
  tdNode.appendChild(trPercentage);

  //appending inside tbody
  tbodyRef.appendChild(tdNode);

  tdNode = document.createElement("tr");
  tdNode.setAttribute('style', 'display:none');
  tdNode.setAttribute("class", "dropDownTextArea");
  var trAdvisorDetails = document.createElement("td");
  trAdvisorDetails.setAttribute("colspan", "8")
  trAdvisorDetails.innerHTML = 'Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />'

  tdNode.appendChild(trAdvisorDetails);

  tbodyRef.appendChild(tdNode);
}

var submitSelectedAwards = document.getElementById("button");
var delete_counter = 0

function onCheckboxClick(checkbox) {
  var rowSelect = checkbox.parentElement.parentElement; //tr

  if (checkbox.checked == true) {
    rowSelect.style.backgroundColor = "yellow";
    submitSelectedAwards.style.backgroundColor = "orange";
    submitSelectedAwards.style.borderColor = "orange";

    // deleting
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteTd");
    deleteButton.innerHTML =
      '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
    rowSelect.appendChild(deleteButton);

    //edit button
    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editTd");
    editButton.innerHTML =
      '<button id="edit" type="button" onclick="editRow(this)">Edit</button>';
    rowSelect.appendChild(editButton);

    //label
    delete_counter++;
    if(delete_counter == 1) {
      var tbodyRef = document.getElementsByTagName("thead")[0];
      var tdNode = document.getElementsByTagName("tr")[0];

      var thDelete = document.createElement("th");
      thDelete.innerHTML = '<label id="delete" display="block">DELETE</label>';
      var thEdit = document.createElement("th");
      thEdit.innerHTML = '<label id="edit" display="block">EDIT</label>';

      tdNode.appendChild(thDelete);
      tdNode.appendChild(thEdit);

      tbodyRef.appendChild(tdNode);
    }
    

  } else {
    rowSelect.style.backgroundColor = "#fff";
    rowSelect.deleteCell(8); //removes the delete button column
    rowSelect.deleteCell(8);
    
    delete_counter--
    if(delete_counter == 0) {
      submitSelectedAwards.style.backgroundColor = "grey";
      submitSelectedAwards.style.borderColor = "grey";
      tdNode = document.getElementsByTagName("th")[8];
      var deleteColumn = document.getElementById("delete");
      tdNode.remove(deleteColumn);

      tdNode = document.getElementsByTagName("th")[8];
      var editColumn = document.getElementById("edit");
      tdNode.remove(editColumn);
    }
  }
}

function deleteRow(rowObject) {
  var tr = rowObject.parentElement.parentElement; //tr reference

  document.getElementById("myTable").deleteRow(tr.rowIndex + 1);
  document.getElementById("myTable").deleteRow(tr.rowIndex);
  alert("Row deleted successfully!");
  delete_counter--;
  if(delete_counter == 0) {
    submitSelectedAwards.style.backgroundColor = "grey";
    submitSelectedAwards.style.borderColor = "grey";
    var tdNode = document.getElementsByTagName("th")[8];
    var deleteColumn = document.getElementById("delete");
    tdNode.remove(deleteColumn);

    tdNode = document.getElementsByTagName("th")[8];
    var editColumn = document.getElementById("edit");
    tdNode.remove(editColumn);
  }
}

function editRow(rowObject) {
  prompt("");
}

function onImageClick(rowObject) {
  var tr = rowObject.parentElement.parentElement;
  tr = tr.rowIndex+1
  var tdNode = document.getElementsByTagName("tr")[tr];
  if (tdNode.style.display === "none") {
    tdNode.style.display = "";
  } else {
    tdNode.style.display = "none";
  }
}