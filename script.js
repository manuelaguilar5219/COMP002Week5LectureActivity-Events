const button = document.getElementById('myButton');

let buttonClicked = false;

button.addEventListiner('click', function() {
    if (!buttonClicked) {
        alert('Button Clicked for the first time');
        buttonClicked = true;
    }
});

const link = document.getElementById('myLink');

link.addEventListiner('click', function(event) {
    event.preventDefault();
    alert('No Distractions! I’m coding!');
});