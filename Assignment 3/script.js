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
var count = 3

function addNewRow() {
  var tbodyRef = document.getElementsByTagName("tbody")[0];

  var tdNode = document.createElement("tr");
  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML = '<input id="checkbox" type="checkbox" onclick="onCheckboxClick(this)"/><br /><br /><img src="down.png" width="25px" onclick="onImageClick(this)">';
  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(count) + 1);
  var trAdvisorCell = document.createElement("td");
  trAdvisorCell.innerHTML = "Teacher " + (parseInt(count) + 1);
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
  var trAdvisorDetails = document.createElement("td");
  trAdvisorDetails.setAttribute("colspan", "8")
  trAdvisorDetails.innerHTML = 'Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />'

  tdNode.appendChild(trAdvisorDetails);

  tbodyRef.appendChild(tdNode);
  count++
}

var submitSelectedAwards = document.getElementById("button");

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

    // label
    var tbodyRef = document.getElementsByTagName("thead")[0];
    var tdNode = document.getElementsByTagName("tr")[0];

    var thDelete = document.createElement("th");
    thDelete.innerHTML = '<label id="delete" display="block">DELETE</label>';
    var thEdit = document.createElement("th");
    thEdit.innerHTML = '<label id="edit" display="block">EDIT</label>';

    tdNode.appendChild(thDelete);
    tdNode.appendChild(thEdit);

    tbodyRef.appendChild(tdNode);

  } else {
    rowSelect.style.backgroundColor = "#fff";
    rowSelect.deleteCell(8); //removes the delete button column
    rowSelect.deleteCell(8);
    submitSelectedAwards.style.backgroundColor = "grey";
    submitSelectedAwards.style.borderColor = "grey";

    var tbodyRef = document.getElementsByTagName("thead")[0];
    var tdNode = document.getElementsByTagName("th")[0];
    var deleteColumn = document.getElementById("delete");
    // deleteColumn.innerHTML = '<label id="delete" display="none"></label>';
    var editColumn = document.getElementById("edit");
    // editColumn.innerHTML = '<label id="edit" display="none"></label>'
    tdNode.removeChild(deleteColumn);
    tdNode.removeChild(editColumn);

    tbodyRef.removeChild(tdNode);
  }
}

function deleteRow(rowObject) {
  var tr = rowObject.parentElement.parentElement; //tr reference

  document.getElementById("myTable").deleteRow(tr.rowIndex + 1);
  document.getElementById("myTable").deleteRow(tr.rowIndex);
  alert("Row deleted successfully!");
  submitSelectedAwards.style.backgroundColor = "grey";
  submitSelectedAwards.style.borderColor = "grey";
  count--;
}

function editRow(rowObject) {

}

function onImageClick(rowObject) {
  // var table = document.getElementById("myTable");
  // var tag = table.getElementsByTagName("td")
  // tag.getName("dropDownTextArea").innerHTML = '<display= "none">'

  document.getElementsByClassName("dropDownTextArea").innerHTML = '<visibility="hidden">';

  // if(document.getElementsByClassName("dropDownTextArea").innerHTML = '<display= "none">' ){
  //   document.getElementsByClassName("dropDownTextArea").innerHTML = '<display= "">';
  // }else{
  //   document.getElementsByClassName("dropDownTextArea").innerHTML = '<display= "none">';
  // }
  // var tr = rowObject.parentElement.parentElement;
  // flag = 0;
  // if(flag == 0) {
  //   row = rowIndex+1
  //   document.getElementById("myTable").row[rowIndex+1].style.display = "none"
  //   flag = 1
  // } else {
  //   document.getElementById("myTable").onImageClick(tr.rowIndex+1)
  //   flag = 0
  // }
}