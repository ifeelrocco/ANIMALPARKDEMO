document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('categorySearchInput');
    const categoryContainer = document.getElementById('categoryContainer');
    
    if (searchInput && categoryContainer) {
        const categoryCards = categoryContainer.getElementsByClassName('category-card');

        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase().trim();

            for (let card of categoryCards) {
                const titleElement = card.querySelector('h3');
                if (titleElement) {
                    const title = titleElement.textContent.toLowerCase();
                    // Show card if search term is empty or title includes the search term
                    if (searchTerm === '' || title.includes(searchTerm)) {
                        card.style.display = ''; // Reset to default display (or 'block', 'flex', etc. depending on CSS)
                    } else {
                        card.style.display = 'none'; // Hide the card
                    }
                }
            }
        });
    } else {
        if (!searchInput) console.error('Search input with ID "categorySearchInput" not found.');
        if (!categoryContainer) console.error('Category container with ID "categoryContainer" not found.');
    }
});
