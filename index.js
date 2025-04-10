// Main function to calculate the average and display the result
function calculer() {
    // Retrieve the values entered by the user
    let name = document.getElementById('Name').value; // Student's name
    let cc1 = Number((document.getElementById('cc1').value)); // Score for test 1
    let cc2 = Number((document.getElementById('cc2').value)); // Score for test 2
    let cc3 = Number((document.getElementById('cc3').value)); // Score for test 3
    let efm = Number((document.getElementById('efm').value)); // Score for the final exam

    // Calculate the weighted average
    let moyenne = ((cc1 + cc2 + cc3) / 3) * 0.33 + efm * 0.67; // 33% for tests, 67% for the final exam
    moyenne = moyenne.toFixed(2); // Round the average to 2 decimal places

    // Select the HTML element to display the result
    let resultat = document.getElementById('result');

    // Check if the student has passed or failed
    if (moyenne >= 10) {
        // Style and message for a passing result
        resultat.style.backgroundColor = "green"; // Green background
        resultat.style.color = "white"; // White text
        resultat.style.padding = "15px"; // Padding inside the result box
        resultat.style.borderRadius = "5px"; // Rounded corners
        resultat.innerHTML = name + " Congratulations! You have passed the module. " + moyenne; // Success message
    } else {
        // Style and message for a failing result
        resultat.style.background = "red"; // Red background
        resultat.style.color = "white"; // White text
        resultat.style.padding = "15px"; // Padding inside the result box
        resultat.style.borderRadius = "5px"; // Rounded corners
        resultat.innerHTML = name + " Sorry! You have not passed the module. " + moyenne; // Failure message
    }
}