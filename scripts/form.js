document.getElementById('submit-review').addEventListener('click', function() {
    const productName = document.getElementById('product-name').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const installationDate = document.getElementById('installation-date').value;
    const review = document.getElementById('review').value;
    const name = document.getElementById('name').value;

    if (!rating) {
        alert('Please select a rating.');
        return;
    }

    const selectedFeatures = Array.from(document.querySelectorAll('.checkbox-group input:checked')).map(checkbox => checkbox.value);
    
    const reviewData = {
        productName,
        rating: rating.value,
        installationDate,
        selectedFeatures,
        review,
        name
    };

    console.log('Review Submitted:', reviewData);
    alert('Thank you for your review!');
    // Optionally reset the form or handle the review submission further here
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