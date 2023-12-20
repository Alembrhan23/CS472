window.onload = display;

async function display() {
  let response = await fetch("http://localhost:3000/students");
  let json;
  if (response.ok) {
    json = await response.json();
    for (let e of json) {
      addRowToTable(e.id, e.name, e.program);
      addItemToUpdateDropdown(e.id);
      addItemToDeleteDropdown(e.id);
    }

    // //starting d================================
    // let deleteDropdown = document.getElementById("ddlStudent");

    // // Clear existing options
    // deleteDropdown.innerHTML = "";

    // // Add each student ID to the dropdown
    // json.forEach((student) => {
    //   let option = document.createElement("option");
    //   //   option.value = Select an id to delete;
    //   option.value = student.id;
    //   option.text = student.id;
    //   deleteDropdown.appendChild(option);
    // });

    // // Optional: Select the first option by default
    // // if (json.length > 0) {
    // //   dropdown.value = json[0].id;
    // // }
    // //ending d================================
    // //starting update drop down================================
    // let updateDropdown = document.getElementById("ddlStudentForUpdate");

    // // Clear existing options
    // updateDropdown.innerHTML = "";

    // // Add each student ID to the dropdown
    // json.forEach((student) => {
    //   let option = document.createElement("option");
    //   //   option.value = Select an id to delete;
    //   option.value = student.id;
    //   option.text = student.id;
    //   updateDropdown.appendChild(option);
    // });
    // //ending update drop down================================
  } else alert("Error" + response.status);
}

function addRowToTable(id, name, program) {
  let row = document.createElement("tr");
  row.setAttribute("id", id);
  for (let e of arguments) {
    let cell = document.createElement("td");
    cell.appendChild(document.createTextNode(e));
    row.appendChild(cell);
  }
  document.getElementById("tbodyStudentList").appendChild(row);
}

function addItemToUpdateDropdown(id) {
  const dropdown = document.getElementById("ddlStudentForUpdate");
  let item = document.createElement("option");
  item.setAttribute("value", id);
  item.setAttribute("id", "upd" + id);
  item.appendChild(document.createTextNode(id));
  dropdown.appendChild(item);
}

function addItemToDeleteDropdown(id) {
  const dropdown = document.getElementById("ddlStudent");
  let item = document.createElement("option");
  item.setAttribute("value", id);
  item.setAttribute("id", "del" + id);
  item.appendChild(document.createTextNode(id));
  dropdown.appendChild(item);
}
async function addStudent(id, name, program) {
  let obj = { id, name, program };
  let setting = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  };
  let response = await fetch("http://localhost:3000/students", setting);
  if (response.ok) {
    addRowToTable(id, name, program);
  } else alert("Error " + response.status);
}

document.getElementById("btnRegister").addEventListener("click", () => {
  let id = parseInt(document.getElementById("id").value);
  let name = document.getElementById("name").value;
  let program = document.getElementById("program").value;
  addStudent(id, name, program);
  document.getElementById("myform").reset();
});

// async function deleteStudentById(id) {
//   let response = await fetch(`http://localhost:3000/students/${id}`, {
//     method: "DELETE",
//   });
//   let json;
//   if (response.ok) {
//     json = await response.json();
//     updateTable(json);
//   }
// }

// document.getElementById("btnDelete").addEventListener("click", () => {
//   let id = document.getElementById("ddlStudent").value;
//   deleteStudentById(id);
// });
async function deleteStudent(id) {
  const response = await fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const json = await response.json();
    document.getElementById(json.id).remove();
    document.getElementById("del" + json.id).remove();
    document.getElementById("upd" + json.id).remove();
  } else alert(response.status + "" + response.statusText);
}

document.getElementById("btnDelete").addEventListener("click", (event) => {
  let id = document.getElementById("ddlStudent").value;
  deleteStudent(id);
  document.getElementById("myform").reset();
});
async function updateStudentById(id) {
  let response = await fetch(`http://localhost:3000/students/${id}`, {
    method: "PUT",
  });
  let json;
  if (response.ok) {
    json = await response.json();
    updateTable(json);
  }
}

document.getElementById("btnUpdate").addEventListener("click", (event) => {
  // Autofill the update fields
  const sid = parseInt(document.getElementById("idForUpdate").value);
  const sname = document.getElementById("nameForUpdate").value;
  const sprogram = document.getElementById("programForUpdate").value;
  updateStudentById(sid, sname, sprogram);
  document.getElementById("myform").reset();
});

async function updateStudent(id, name, program) {
  let obj = { id, name, program };
  let setting = {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`http://localhost:3000/students/${id}`, setting);
  if (response.ok) {
    const json = await response.json();
    let row = document.getElementById(parseInt(json.id));
    row.children[0].textContent = json.id;
    row.children[1].textContent = json.name;
    row.children[2].textContent = json.program;
  } else alert(response.status + "" + response.statusText);
}

document
  .getElementById("ddlStudentForUpdate")
  .addEventListener("change", (event) => {
    let id = event.currentTarget.value;
    let row = document.getElementById(id);
    document.getElementById("idForUpdate").value = row.children[0].textContent;
    document.getElementById("nameForUpdate").value =
      row.children[1].textContent;
    document.getElementById("programForUpdate").value =
      row.children[2].textContent;
  });

// /// helper functions

// function updateTable(data) {
//   // Clear existing rows
//   let tbody = document.getElementById("tbodyStudentList");
//   tbody.innerHTML = "";

//   // Add new rows
//   for (let e of data) {
//     addRowToTable(e.id, e.name, e.program);
//   }
//}
