function hoverCard(card) {
    const label = card.querySelector('label');
    label.innerHTML = '<button id="button1" onclick="handleButtonClick()">Click Me</button>';
}

function unhoverCard(card) {
    const label = card.querySelector('label');
    label.innerHTML = 'Galaxy Z Flip5 | 256GB | 8GB';
}

function handleButtonClick() {
    alert('Button Clicked!');
}
