document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const insectCards = document.querySelectorAll('.insect-card'); // Updated selector
    const searchInput = document.getElementById('insectSearch'); // Updated ID

    // --- Filter Button Logic --- 
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            filterInsects(filterValue); // Updated function call
            checkResults(); // Check results after filtering
        });
    });

    // --- Search Input Logic --- 
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        // Reset filters when searching
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const allButton = document.querySelector('.filter-btn[data-filter="all"]');
        if (allButton) {
            allButton.classList.add('active'); 
        }
        
        searchInsects(searchTerm); // Updated function call
        checkResults(); // Check results after searching
    });

    // --- Filter Function --- 
    function filterInsects(category) { // Updated function name
         searchInput.value = ''; // Clear search when filter is clicked
         insectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const insectName = card.getAttribute('data-name');
            // Check if the card matches the category OR if the category is 'pollinator' and the insect is Bee/Butterfly
            const isPollinatorMatch = (category === 'pollinator' && (insectName === 'Bee' || insectName === 'Butterfly'));

            if (category === 'all' || cardCategory === category || isPollinatorMatch) {
                card.classList.remove('hide');
                card.style.display = 'block'; // Make sure it's visible
            } else {
                card.classList.add('hide');
                card.style.display = 'none'; // Hide card completely
            }
        });
    }
    
     // --- Search Function --- 
    function searchInsects(term) { // Updated function name
        insectCards.forEach(card => { // Updated variable
            const insectName = card.getAttribute('data-name').toLowerCase(); // Updated variable
            if (insectName.includes(term)) {
                card.classList.remove('hide');
                card.style.display = 'block';
            } else {
                card.classList.add('hide');
                card.style.display = 'none';
            }
        });
    }

    // --- Check Results Function (Optional: shows message if no cards visible) --- 
    function checkResults() {
        // Check if the message element exists before trying to use it
        const noResultsMessage = document.getElementById('no-results-message'); 
        if (!noResultsMessage) return; // Exit if the element isn't found

        let hasVisibleCards = false;
        insectCards.forEach(card => {
            // Check computed style instead of inline style for visibility
            const style = window.getComputedStyle(card);
            if (style.display !== 'none') {
                hasVisibleCards = true;
            }
        });

        if (hasVisibleCards) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
            noResultsMessage.textContent = 'No insects found matching your criteria.';
        }
    }

    // Initial check when the page loads (optional)
    // checkResults(); 

});
