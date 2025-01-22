export default class TileMap {
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.drill1 = this.#image('drill1.png');
    }

    map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    draw(canvas, ctx) {
        this.#setCanvasSize(canvas);
        this.#clearCanvas(canvas, ctx);
        this.#drawMap(ctx);
        this.#drawGrid(ctx);
    }

    #setCanvasSize(canvas) {
        canvas.height = this.map.length * this.tileSize;
        canvas.width = this.map[0].length * this.tileSize;
    }

    #clearCanvas(canvas, ctx) {
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, canvas.height, canvas.width);
    }

    #image(filename) {
        const img = new Image();
        img.src = `Data/AnimatedSprite1Test/${filename}`;
        return img;
    }
    #drawGrid(ctx) {
        for (let row = 0; row < this.map.length; row++) {
            for (let column = 0; column < this.map[row].length; column++) {
                ctx.strokeRect(
                    row * this.tileSize,
                    column * this.tileSize,
                    this.tileSize,
                    this.tileSize
                )
            }
        }
    }
    #drawMap(ctx) {
        for (let row = 0; row < this.map.length; row++) {
            for (let column = 0; column < this.map[row].length; column++) {
                const tile = this.map[row][column];
                let image = null;
                switch (tile) {
                    case 2: image = this.drill1; break;
                }
                if (image != null) {
                    ctx.drawImage(image, column * this.tileSize, row * this.tileSize, this.tileSize, this.tileSize);
                }
            }
        }
    }
}