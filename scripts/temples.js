document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function() {
        // Toggle the 'show' class to display/hide the menu
        navMenu.classList.toggle('show');

        // Toggle the button text between hamburger and 'X'
        if (hamburger.innerHTML === "☰") {
            hamburger.innerHTML = "✖"; // Change to 'X'
        } else {
            hamburger.innerHTML = "☰"; // Change back to hamburger icon
        }
    });
});

// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Select the footer paragraphs
const footer = document.querySelector('footer');
const firstParagraph = footer.querySelector('p:nth-of-type(1)');
const secondParagraph = footer.querySelector('p:nth-of-type(2)');

// Update the content of the paragraphs
firstParagraph.textContent = `© ${currentYear} | Alexander M. Lanterman | Virginia`;
secondParagraph.textContent = `Last modified: ${lastModifiedDate}`;

