document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const birdCards = document.querySelectorAll('.bird-card');
    const searchInput = document.getElementById('birdSearch');

    // --- Filter Button Logic --- 
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            filterBirds(filterValue);
        });
    });

    // --- Search Input Logic --- 
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        // Reset filters when searching
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active'); 
        
        searchBirds(searchTerm);
    });

    // --- Filter Function --- 
    function filterBirds(category) {
         searchInput.value = ''; // Clear search when filter is clicked
         birdCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hide');
                card.style.display = 'block'; // Make sure it's visible
                 // AOS.refreshHard(); 
            } else {
                card.classList.add('hide');
                card.style.display = 'none'; // Hide card completely
            }
        });
    }
    
     // --- Search Function --- 
    function searchBirds(term) {
        birdCards.forEach(card => {
            const birdName = card.getAttribute('data-name').toLowerCase();
            if (birdName.includes(term)) {
                card.classList.remove('hide');
                card.style.display = 'block';
            } else {
                card.classList.add('hide');
                card.style.display = 'none';
            }
        });
    }

    // Initial AOS refresh if needed after cards load
    // AOS.refresh(); 
});
