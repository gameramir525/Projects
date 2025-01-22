export const UP = "UP";
export const DOWN = "DOWN";
export const LEFT = "LEFT";
export const RIGHT = "RIGHT";

export class Input {
    constructor() {
        this.keys = [];

        window.addEventListener('keydown', e => {
            if (e.code === 'KeyW') {
                this.keyPressed(UP);
            } else if (e.code === 'KeyS') {
                this.keyPressed(DOWN);
            } else if (e.code === 'KeyA') {
                this.keyPressed(LEFT);
            } else if (e.code === 'KeyD') {
                this.keyPressed(RIGHT);
            }
        });

        window.addEventListener('keyup', e => {
            if (e.code === 'KeyW') {
                this.keyReleased(UP);
            } else if (e.code === 'KeyS') {
                this.keyReleased(DOWN);
            } else if (e.code === 'KeyA') {
                this.keyReleased(LEFT);
            } else if (e.code === 'KeyD') {
                this.keyReleased(RIGHT);
            }
        })

    }

    keyPressed(key) {
        if (this.keys.indexOf(key) === -1) {
            this.keys.unshift(key);
        }
    }

    keyReleased(key) {
        const index = this.keys.indexOf(key);
        if (index === -1) return;
        this.keys.splice(index, 1);
    }

    get lastKey() {
        return this.keys[0];
    }
}