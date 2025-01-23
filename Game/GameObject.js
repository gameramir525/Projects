import { TILESIZE } from "./Main.js";

export class GameObject {
    constructor({ game, sprite, position, scale }) {
        this.game = game;
        this.sprite = sprite ?? { x: 0, y: 0, width: TILESIZE, heirht: TILESIZE, image: "" };
        this.position = position ?? { x: 0, y: 0 };
        this.scale = scale ?? 1;

        this.destinationPosition = { x: this.position.x, y: this.position.y };
        this.distanceToTravel = { x: 0, y: 0 };
    }

    moveTorward(destinationPosition, speed) {
        this.distanceToTravel.x = destinationPosition.x - this.position.x;
        this.distanceToTravel.y = destinationPosition.y - this.position.y;

        let distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y);

        if (distance <= speed) {
            this.position.x = destinationPosition.x;
            this.position.y = destinationPosition.y;
        } else {
            const stepX = this.distanceToTravel.x / distance;
            const stepY = this.distanceToTravel.y / distance;

            this.position.x += stepX * speed;
            this.position.y += stepY * speed;

            this.distanceToTravel.x = destinationPosition.x - this.position.x;
            this.distanceToTravel.y = destinationPosition.y - this.position.y;

            distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y);
        }
        return distance;
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(
            this.position.x,
            this.position.y,
            TILESIZE,
            TILESIZE
        )
    }
}