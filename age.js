 function calculateAge() {
      const dobInput = document.getElementById('dob').value;
      if (!dobInput) {
        alert("Please select a valid date of birth.");
        return;
      }

      const dob = new Date(dobInput);
      const today = new Date();

      let years = today.getFullYear() - dob.getFullYear();
      let months = today.getMonth() - dob.getMonth();
      let days = today.getDate() - dob.getDate();

      if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      document.getElementById('result').innerHTML = `
        <p>Your Age:</p>
        <p><strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days.</p>
      `;
    }