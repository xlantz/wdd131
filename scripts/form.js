document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 'product1', name: 'Scissors' },
        { id: 'product2', name: 'Lawn Mower' },
        { id: 'product3', name: 'Game System' }
    ];

    // Populate the product select element
    const productSelect = document.getElementById('product-name');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Initialize the review count from local storage
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    updateReviewCount();

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        const productName = productSelect.value; // Use the selected product id
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

        // Update the review count
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        updateReviewCount();
        
        // Optionally reset the form
        this.reset();
    });

    function updateReviewCount() {
        const reviewCountDisplay = document.createElement('p');
        reviewCountDisplay.textContent = `Total Reviews Submitted: ${reviewCount}`;
        document.querySelector('.form-container').appendChild(reviewCountDisplay);
    }

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
});
