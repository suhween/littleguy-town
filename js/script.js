class BouncingGuy {
    constructor(element) {
        this.element = element;
        this.width = element.offsetWidth;
        this.height = element.offsetHeight;

        this.x = Math.random() * (window.innerWidth - this.width);
        this.y = Math.random() * (window.innerHeight - this.height);

        const speed = 1 + Math.random() * 2;
        const angle = Math.random() * Math.PI * 2;
        this.dx = Math.cos(angle) * speed;
        this.dy = Math.sin(angle) * speed;

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }

    animate() {
        this.x += this.dx;
        this.y += this.dy;

        const maxX = window.innerWidth - this.width;
        const maxY = window.innerHeight - this.height;

        if (this.x <= 0 || this.x >= maxX) {
            this.dx = -this.dx;
            this.x = Math.max(0, Math.min(this.x, maxX));
        }

        if (this.y <= 0 || this.y >= maxY) {
            this.dy = -this.dy;
            this.y = Math.max(0, Math.min(this.y, maxY));
        }

        this.updatePosition();
    }
}

const guys = [
    new BouncingGuy(document.getElementById('guy1')),
    new BouncingGuy(document.getElementById('guy2')),
    new BouncingGuy(document.getElementById('guy3')),
    new BouncingGuy(document.getElementById('guy4')),
    new BouncingGuy(document.getElementById('guy5'))
];

function animate() {
    guys.forEach(guy => guy.animate());
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    guys.forEach(guy => {
        guy.width = guy.element.offsetWidth;
        guy.height = guy.element.offsetHeight;
    });
});
