/* Will target the two elements, and will add or remove 
the open class on click */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function typeText(text, elementId, speed) {
    const element = document.getElementById(elementId);
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Call the typing function when the page is loaded
window.onload = function () {
    // Text to be typed
    const typedText = "Harsh Gopalan";
    
    // Element ID where the typing effect will be applied
    const elementId = "typed-name";

    // Typing speed in milliseconds
    const typingSpeed = 100; // Adjust this value as needed

    // Start the typing animation
    typeText(typedText, elementId, typingSpeed);
};





