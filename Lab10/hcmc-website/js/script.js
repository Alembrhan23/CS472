// getting all the values
const form = document.querySelector("form");
const tbody = document.getElementById("tbodyPatientsList");

document
  .getElementById("btnRegisterPatient")
  .addEventListener("click", function onAddWebsite(event) {
    event.preventDefault();
    const pid = document.getElementById("patientIdNumber").value;
    const pfname = document.getElementById("firstName").value;
    const pminitial = document.getElementById("middleInitials").value;
    const plname = document.getElementById("lastName").value;
    const pdatebirth = document.getElementById("dateOfBirth").value;
    const pdepartment = document.getElementById("ddlDepartment").value;

    const outpatientYes = document.getElementById("radioIsOutPatientYes");
    const outpatientNo = document.getElementById("radioIsOutPatientNo");

    // getting the value of the checkbox
    let poutpatient;

    if (outpatientYes.checked) {
      poutpatient = outpatientYes.value;
    }
    if (outpatientNo.checked) {
      poutpatient = outpatientNo.value;
    }
    // const poutpatient = document.getElementById("ddlDepartment").value;
    // alert(
    //   pid + pfname + pminitial + plname + pdatebirth + pdepartment + poutpatient
    // );

    tbody.innerHTML += `
    <tr>
      <td>${pid}</td>
      <td>${pfname}</td>
      <td>${pminitial}</td>
      <td>${plname}</td>
      <td>${pdatebirth}</td>
      <td>${pdepartment}</td>
      <td>${poutpatient}</td>
    </tr>`;
  });

// form.addEventListener("submit", onAddWebsite);
// // Creating the row
// let row = document.createElement("tr");
// // creating the body data fields, patientId and connecting to the textfield
// let piddata = document.createElement("td");
// let idInput = document.getElementById("patientIdNumber").value;
// let idText = document.createTextNode("idInput");
// piddata.appendChild(idText);
// // connecting with the text fields.
// row.appendChild(piddata);
// // creating the body data fields, patientId and connecting to the textfield
// let pfnamedata = document.createElement("td");
// let fnameInput = document.getElementById("firstName").value;
// let fnameText = document.createTextNode("fnameInput");
// pfnamedata.appendChild(fnameText);
// // connecting with the text fields.
// row.appendChild(pfnamedata);
// // creating the body data fields, patientId and connecting to the textfield
// let pmInitialdata = document.createElement("td");
// let minitialInput = document.getElementById("middleInitials").value;
// let minitialText = document.createTextNode("minitialInput");
// pmInitialdata.appendChild(minitialText);
// // connecting with the text fields.
// row.appendChild(pmInitialdata);
// // creating the body data fields, patientId and connecting to the textfield
// let plnamedata = document.createElement("td");
// let pnameInput = document.getElementById("lastName").value;
// let plnameText = document.createTextNode("pnameInput");
// plnamedata.appendChild(plnameText);
// // connecting with the text fields.
// row.appendChild(plnamedata);
// // creating the body data fields, patientId and connecting to the textfield
// let pdatebirth = document.createElement("td");
// let pdatebirthInput = document.getElementById("dateOfBirth").value;
// let pdatebirthText = document.createTextNode("pdatebirthInput");
// pdatebirth.appendChild(pdatebirthText);
// // connecting with the text fields.
// row.appendChild(pdatebirth);
// // creating the body data fields, patientId and connecting to the textfield
// let pdepartmentdata = document.createElement("td");
// let pdepartmentInput = document.getElementById("ddlDepartment").value;
// let pdepartmentText = document.createTextNode("pdepartmentInput");
// pdepartmentdata.appendChild(pdepartmentText);
// // connecting with the text fields.
// row.appendChild(pdepartmentdata);
// // creating the body data fields, patientId and connecting to the textfield
// let poutpatient = document.createElement("td");
// let poutpatientInput = document.getElementById(
//   "radioIsOutPatientYes"
// ).value;
// let poutpatientText = document.createTextNode("poutpatientInput");
// poutpatient.appendChild(poutpatientText);
// // connecting with the text fields.
// document.getElementById("tbodyPatientsList").appendChild(row);
// // document.body.appendChild(row);
//   });
