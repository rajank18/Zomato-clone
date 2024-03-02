document.getElementById('btn').addEventListener('click', function() {
    
    window.location.href = 'https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US';

    console.log('Button clicked!');
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if the counter is already stored in local storage
    let counter = localStorage.getItem('clickCounter') || 0;

    // Display the initial count
    console.log('Initial count:', counter);

    // Add a click event listener to the button
    document.getElementById('myButton').addEventListener('click', function() {
        // Increment the counter
        counter++;
        // Display the updated count
        console.log('Button clicked! Count:', counter);

        // Store the updated counter in local storage
        localStorage.setItem('clickCounter', counter);
    });
});


