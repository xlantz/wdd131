function updateHeroImage() {
    const hero = document.getElementById('hero');
    if (window.innerWidth <= 768) {
        hero.style.backgroundImage = "url('images/iceland_cliff_puffins.jpg')";
    } else {
        hero.style.backgroundImage = "url('images/iceland_church.jpg')";
    }
}

// Update on initial load
updateHeroImage();

// Update on window resize
window.addEventListener('resize', updateHeroImage);

function calculateWindChill(temperature, windSpeed, unit = 'C') {
    // Check conditions for wind chill calculation
    if ((unit === 'C' && temperature <= 10 && windSpeed > 4.8) || 
        (unit === 'F' && temperature <= 50 && windSpeed > 3)) {
        
        // Wind chill calculation
        return unit === 'C' 
            ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2) 
            : (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
    }
    return "N/A"; // Not applicable if conditions are not met
}

// Set temperature and wind speed
const temperature = 100; // Temperature in °F
const windSpeed = 150; // Wind speed in mph

// Calculate wind chill
const windChill = calculateWindChill(temperature, windSpeed, 'F');

// Display the temperature in the designated span
document.getElementById('temperature').textContent = temperature;
// Display the wind speed in the designated span
document.getElementById('windSpeed').textContent = windSpeed;

// Display the wind chill in the designated span
document.getElementById('windChill').textContent = windChill;


// FOOTER
const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

const footer = document.querySelector('footer');
const firstParagraph = footer.querySelector('p:nth-of-type(1)');
const secondParagraph = footer.querySelector('p:nth-of-type(2)');

// Update the content of the paragraphs
firstParagraph.textContent = `© ${currentYear} | Alexander M. Lanterman | Iceland`;
secondParagraph.textContent = `Last modified: ${lastModifiedDate}`;
