// Function to prompt for user's name and display it
function askName() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById('nameDisplay').innerText = "Hello, " + name + "!";
    } else {
        document.getElementById('nameDisplay').innerText = "No name entered.";
    }
}

// Function to enlarge image when clicked
function enlargeImage() {
    const img = document.getElementById('profileImage');
    if (img.classList.contains('enlarged')) {
        img.classList.remove('enlarged');
    } else {
        img.classList.add('enlarged');
    }
}

// Mouseover and mouseout events for navigation links
function hoverIn(element) {
    element.style.color = "#007BFF";
}

function hoverOut(element) {
    element.style.color = "#333";
}

// Toggle Dropdown Menu
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

