document.addEventListener('DOMContentLoaded', function() {
    // Same as previous code

    // Mock data for featured destinations (replace with actual data from backend)
    const destinationsData = [
        {
            name: "Destination 1",
            image: "destination1.jpg",
            description: "Explore the beauty of Destination 1 with its stunning landscapes and natural wonders."
        },
        {
            name: "Destination 2",
            image: "destination2.jpg",
            description: "Experience the rich culture and history of Destination 2. Discover ancient landmarks and traditions."
        },
        // Add more destinations here
    ];

    // Function to display destination details when clicked
    function showDestinationDetails(destination) {
        alert(`Destination: ${destination.name}\nDescription: ${destination.description}`);
    }

    // Get the destination cards and add event listeners to each card
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            showDestinationDetails(destinationsData[index]);
        });
    });
});
