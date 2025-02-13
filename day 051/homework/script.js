function startAnimation() {
    const ball = document.getElementById('ball');
    let position = 0;
    const interval = 5;
    const distance = 300; // The distance the ball will move

    const animation = setInterval(() => {
        if (position >= distance) {
            clearInterval(animation);
        } else {
            position += interval;
            ball.style.transform = `translateX(${position}px)`;
        }
    }, 10); // Move every 10 milliseconds
}
