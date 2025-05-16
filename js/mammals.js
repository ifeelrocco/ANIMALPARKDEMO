document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const mammalCards = document.querySelectorAll('.mammal-card');
    const searchInput = document.getElementById('mammalSearch');

    // --- Filter Button Logic --- 
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            filterMammals(filterValue);
        });
    });

    // --- Search Input Logic --- 
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        // Optional: Reset filters when searching, or combine search and filter?
        // For now, search overrides filter:
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active'); 
        
        searchMammals(searchTerm);
    });

    // --- Filter Function --- 
    function filterMammals(category) {
         searchInput.value = ''; // Clear search when filter is clicked
         mammalCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hide');
                card.style.display = 'block'; // Make sure it's visible
                 // Optional: Re-trigger AOS if needed, though 'once: true' might handle it.
                 // AOS.refreshHard(); 
            } else {
                card.classList.add('hide');
                card.style.display = 'none'; // Hide card completely
            }
        });
    }
    
     // --- Search Function --- 
    function searchMammals(term) {
        mammalCards.forEach(card => {
            const mammalName = card.getAttribute('data-name').toLowerCase();
            if (mammalName.includes(term)) {
                card.classList.remove('hide');
                card.style.display = 'block';
            } else {
                card.classList.add('hide');
                card.style.display = 'none';
            }
        });
    }

});
