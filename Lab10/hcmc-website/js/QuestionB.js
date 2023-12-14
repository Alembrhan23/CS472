// Checkbox event listener for filtering Elderly Patients
document
  .getElementById("chkElderlyPatients")
  .addEventListener("change", function () {
    const showOnlyElderly = this.checked;
    // alert("This is elderly!");// testing my checkbox
    // Iterate through rows and hide/show based on age
    const rows = tbody.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      const dateOfBirthCell = rows[i].getElementsByTagName("td")[4]; // dateofbirth cell

      if (dateOfBirthCell) {
        const age = calculateAge(dateOfBirthCell.textContent); // calculating the age using my helper method

        // Check if the patient is elderly based
        const isElderly = age >= 65;

        // Show or hide the row based on the checkbox state and age criterion
        rows[i].style.display = showOnlyElderly
          ? isElderly
            ? ""
            : "none"
          : "";
      }
    }
  });

// Function to calculate age based on date of birth
function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  return age;
}
