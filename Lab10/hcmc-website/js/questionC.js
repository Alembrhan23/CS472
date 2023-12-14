// I am wrapping this code to be executed after the DOM has been loaded
//means the palcement of this script in the html does't really matter
//
document.addEventListener("DOMContentLoaded", function () {
  // Adding an event listener to the checkbox
  document
    .getElementById("chkShowOutPatients")
    .addEventListener("change", function () {
      // Get the checkbox status
      let showOutPatients = this.checked;

      // Filter and display based on the checkbox status
      filterPatients(showOutPatients);
    });

  // Helper Function to filter and display patients based on criteria
  function filterPatients(showOutPatients) {
    // Get all rows in the table
    let rows = document.querySelectorAll("#tbodyPatientsList tr");

    // Loop through each row
    rows.forEach(function (row) {
      let outpatientCell = row.cells[6];

      // Determine if the patient is an Out-Patient
      let isOutPatient = outpatientCell.textContent.toLowerCase() === "yes";
      row.style.display = showOutPatients ? (isOutPatient ? "" : "none") : "";
    });
  }
});
