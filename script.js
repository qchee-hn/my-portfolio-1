const swipeContainer = document.getElementById('swipe');
const acceptButton = document.getElementById('accept');
const rejectButton = document.getElementById('reject');

let index = 0;  // Track the current card

const cards = swipeContainer.querySelectorAll('.card');

// Function to move the cards (left for reject, right for select)
const moveCard = (direction) => {
    if (index < cards.length) {
        const currentCard = cards[index];
        currentCard.style.transition = 'transform 0.3s ease';  // Add transition

        if (direction === 'accept') {
            currentCard.style.transform = 'translateX(100%)';  // Move right (accept)
        } else {
            currentCard.style.transform = 'translateX(-100%)';  // Move left (reject)
        }

        // After the transition ends, update the card index
        currentCard.addEventListener('transitionend', () => {
            currentCard.style.transform = '';  // Reset transform
            index++;  // Move to the next card
            if (index < cards.length) {
                cards[index].style.transform = '';  // Reset next card position
            }
        });
    }
};

// Handle the select button click
acceptButton.addEventListener('click', () => {
    moveCard('accept');  // Select the current card
});

// Handle the reject button click
rejectButton.addEventListener('click', () => {
    moveCard('reject');  // Reject the current card
});
