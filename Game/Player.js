import { GameObject } from "./GameObject.js";
import { UP, DOWN, RIGHT, LEFT } from "./Input.js";
import { TILESIZE } from "./Main.js";

export class Player extends GameObject {
    constructor({ game, sprite, position, scale }) {
        super({ game, sprite, position, scale });
        this.speed = 2;
    }
    update() {
        let nextX = this.destinationPosition.x;
        let nextY = this.destinationPosition.y;

        const distance = this.moveTorward(this.destinationPosition, this.speed);
        const arrived = distance <= this.speed;

        if (arrived) {
            if (this.game.input.lastKey === UP) { nextY -= TILESIZE; }
            if (this.game.input.lastKey === DOWN) { nextY += TILESIZE; }
            if (this.game.input.lastKey === LEFT) { nextX -= TILESIZE; }
            if (this.game.input.lastKey === RIGHT) { nextX += TILESIZE; }

            const col = nextX / TILESIZE;
            const row = nextY / TILESIZE;

            if (this.game.world.getTile(this.game.world.level1.CollisionLayer, row, col) !== 1) {
                this.destinationPosition.x = nextX;
                this.destinationPosition.y = nextY;
            }
        }
    }
}