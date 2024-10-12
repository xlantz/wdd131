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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Kyiv, Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/kyiv-ukraine-temple/kyiv-ukraine-temple-28530.jpg"
      },
      {
        templeName: "Calgary Alberta",
        location: "Calgary, Alberta",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-13169.jpg"
      },
      {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10-12",
        area: 116642,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-43513.jpg"
      }
    
  ];

 // Display temples
 function displayTemples(templesToDisplay) {
    // Clear existing temple cards
    templeGrid.innerHTML = '';

    // Loop through the filtered temples and create cards
    templesToDisplay.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;

        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;

        const templeDedication = document.createElement('p');
        templeDedication.textContent = `Dedicated: ${temple.dedicated}`;

        const templeArea = document.createElement('p');
        templeArea.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName} - ${temple.location}`;
        templeImage.loading = 'lazy'; // Native lazy loading

        // Append elements to temple card
        templeCard.appendChild(templeImage);
        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedication);
        templeCard.appendChild(templeArea);

        // Append temple card to the grid
        templeGrid.appendChild(templeCard);
    });
}


// Initially display all temples
displayTemples(temples);

// Event listeners for navigation items
document.querySelector('ul.navigation').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault(); // Prevent default anchor behavior

        const filter = e.target.textContent;

        let filteredTemples;
        switch (filter) {
            case 'Old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'New':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'Large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'Small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case 'Home':
            default:
                filteredTemples = temples; // Show all temples
                break;
        }

        // Display the filtered temples
        displayTemples(filteredTemples);
    }
});