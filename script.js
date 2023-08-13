// Write your code here
const items = document.querySelectorAll('.item')

const options = {
  threshold: 0.5
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, options)

items.forEach(item => {
  observer.observe(item);
})

const sortSelect = document.getElementById('sortSelect');
const sortableList = document.getElementById('sortable-list');

// Sort the list based on user selection
sortSelect.addEventListener('change', () => {
    const sortOrder = sortSelect.value;
    sortList(sortOrder);
});

function sortList(order) {
    const items = Array.from(sortableList.children);
    const sortedItems = items.sort((a, b) => {
        const aValue = a.textContent.trim();
        const bValue = b.textContent.trim();

        if (order === 'asc') {
            return aValue.localeCompare(bValue);
        } else if (order === 'desc') {
            return bValue.localeCompare(aValue);
        }
    });

    sortableList.innerHTML = '';
    sortedItems.forEach(item => sortableList.appendChild(item));
}

// Initialize with default ascending sort
sortList('asc');

