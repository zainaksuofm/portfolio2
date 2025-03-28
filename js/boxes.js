document.addEventListener("DOMContentLoaded", function () {
    // Get buttons and content boxes
    const buttons = document.querySelectorAll(".topBar .options button");
    const contentBoxes = document.querySelectorAll(".boxContainer > div:not(.leftBox)");

    // Function to show the selected box and hide others
    function showBox(selectedClass) {
        contentBoxes.forEach(box => {
            box.style.display = box.classList.contains(selectedClass) ? "block" : "none";
        });

        // Update active button state
        updateActiveButton(selectedClass);
    }

    // Function to update active button state
    function updateActiveButton(activeClass) {
        buttons.forEach(button => {
            const buttonTarget = button.textContent.toLowerCase() + "Box"; // Match button text to class
            button.classList.toggle("active", buttonTarget === activeClass);
        });
    }

    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedClass = this.textContent.toLowerCase() + "Box"; // Match button text to class
            showBox(selectedClass);
        });
    });

    // Initially show only the welcome box and set active button
    showBox("welcomeBox");
});
