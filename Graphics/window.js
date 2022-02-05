class GameWindow {
    scale;
    shapes;
    canvas;
    ctx;

    constructor(scale = { width: 20, height: 10 }) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.scale = scale;

        this.#drawGrid(this);
        window.onresize = () => this.#drawGrid(this);
    }

    #drawGrid(self) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        self.canvas.width = windowWidth;
        self.canvas.height = windowHeight;
        
        const horizontalSpacing = windowWidth / self.scale.width;
        const verticalSpacing = windowHeight / self.scale.height;

        self.ctx.lineWidth = 3;
        for (let i = 0; i < self.scale.width; i++) {
            self.ctx.beginPath();

            const x = horizontalSpacing * i;
            self.ctx.moveTo(x, 0);
            self.ctx.lineTo(x, windowHeight);

            self.ctx.closePath();
            self.ctx.stroke();
        }

        for (let i = 0; i < self.scale.width; i++) {
            self.ctx.beginPath();

            const y = verticalSpacing * i;
            self.ctx.moveTo(0, y);
            self.ctx.lineTo(windowWidth, y);

            self.ctx.closePath();
            self.ctx.stroke();
        }
    }



    render() {
        
    }

    addShape(shape) {
        // Null check
        if (shape == null)
        {
            console.error("Invalid shape.");
            return;
        }
    }
}