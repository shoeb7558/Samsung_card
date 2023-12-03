function hoverCard(card) {
    gsap.to("#label1", {
        y: -50,
        opacity: 0,
        duration: 0.5,
    });

    gsap.to("#button1", {
        y: -90,
        opacity: 1,
        duration: 0.5,
    });
}

function unhoverCard(card) {
    gsap.to("#label1", {
        y: 1,
        opacity: 1,
    });

    gsap.to("#button1", {
        y: 50,
        opacity: 0,
        duration: 0.5, // Add a duration for the opacity change
    });
}
