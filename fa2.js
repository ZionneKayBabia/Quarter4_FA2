function multiTable() {
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);

      if ( isNaN(num1) || isNaN(num2) ||num1 < 2 || num2 > 10) 
	{
        alert("Please enter numbers between 2 and 10");
        return;
	}
	
	let tableHTML = "<table>";

        for (let z = 1; z <= num1; z++) {
          tableHTML += "<tr>";

        for (let k = 1; k <= num2; k++) {
          tableHTML += "<td>" + (z * k) + "</td>";
        }
        tableHTML += "</tr>";
      }

      tableHTML += "</table>";
      document.getElementById("multiplicationTable").innerHTML = tableHTML;
}

      