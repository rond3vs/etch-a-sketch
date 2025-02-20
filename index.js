const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');
let isMouseDown = false; // Track mouse state


// Track mouse down/up events
document.addEventListener('mousedown', () => {
    isMouseDown = true;
});
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

// Prevent default drag behavior
document.addEventListener('dragstart', (e) => e.preventDefault());

// Function to create the grid
function createGrid(size) {
    // Clear existing grid before creating a new one
    container.innerHTML = '';

    // Calculate the size of each cell based on the grid size
    const cellSize = (500-2) / size;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // Set the width and height of each cell dynamically
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        // Change color on mousedown
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = 'black';
        });

        // Change color on mouseover if mouse is down
        cell.addEventListener('mouseover', () => {
            if (isMouseDown) {
                cell.style.backgroundColor = 'black';
            }
        });

            container.appendChild(cell);
        }
    }


// Reset button functionality
resetButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter the size of the grid (1-100):'));

    // Validate input
    if (!newSize || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    createGrid(newSize); // Create new grid with user-specified size
});

// Initialize default grid (16x16)
createGrid(16);
