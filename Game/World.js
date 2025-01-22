import { TILESIZE, ROWS, COLS, game } from "./Main.js";

export class World {
    constructor() {

        this.image = document.getElementById('Tiles');
        this.imageTile = 16;
        this.imageCol = this.image.width / this.imageTile;

        this.level1 = {
            CollisionLayer: [
                0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            Layer: [
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 22, 17, 17, 17, 17, 17, 17, 23, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 12, 19, 14, 14, 14, 14, 20, 10, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 12, 9, 21, 21, 21, 21, 7, 10, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 12, 9, 21, 21, 21, 21, 7, 10, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 12, 9, 21, 21, 21, 21, 7, 10, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 12, 9, 21, 21, 21, 21, 7, 10, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 12, 25, 2, 2, 2, 2, 26, 10, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 28, 5, 5, 5, 5, 5, 5, 29, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
            ],
        }
    }
    getTile(array, row, col) {
        return array[COLS * row + col];
    }
    setTile(array, row, col, newTile) {
        array[COLS * row + col] = newTile;
    }
    drawMap(ctx) {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const tile = this.getTile(this.level1.Layer, row, col);
                ctx.drawImage(
                    this.image,
                    (tile - 1) * this.imageTile % this.image.width,
                    Math.floor((tile - 1) / this.imageCol) * this.imageTile,
                    this.imageTile,
                    this.imageTile,
                    col * TILESIZE,
                    row * TILESIZE,
                    TILESIZE,
                    TILESIZE
                )
                if (this.getTile(this.level1.CollisionLayer, row, col) === 1) {
                    ctx.fillStyle = "brown";
                    ctx.fillRect(
                        col * TILESIZE,
                        row * TILESIZE,
                        TILESIZE,
                        TILESIZE
                    )
                }
                if (this.getTile(this.level1.CollisionLayer, row, col) === 2) {
                    ctx.fillStyle = "orange";
                    ctx.fillRect(
                        col * TILESIZE,
                        row * TILESIZE,
                        TILESIZE,
                        TILESIZE
                    )
                }
                ctx.strokeRect(
                    col * TILESIZE,
                    row * TILESIZE,
                    TILESIZE,
                    TILESIZE
                )
            }
        }
    }
    // drawMapCamera(ctx) {
    //     const startCol = Math.floor(game.camera.x / TILESIZE);
    //     const endCol = startCol + game.camera.width / TILESIZE;
    //     const startRow = Math.floor(game.camera.y / TILESIZE);
    //     const endRow = startRow + game.camera.height / TILESIZE;
    //     const offsetX = -game.camera.x + startCol * TILESIZE;
    //     const offsetY = -game.camera.y + startRow * TILESIZE;
    //     for (let row = startRow; row < endRow; row++) {
    //         for (let col = startCol; col < endCol; col++) {
    //             const tile = this.getTile(this.level1.Layer, row, col);
    //             const x = (col - startCol) * TILESIZE + offsetX;
    //             const y = (row - startRow) * TILESIZE + offsetY;
    //             ctx.drawImage(
    //                 this.image,
    //                 (tile - 1) * this.imageTile % this.image.width,
    //                 Math.floor((tile - 1) / this.imageCol) * this.imageTile,
    //                 this.imageTile,
    //                 this.imageTile,
    //                 Math.round(x),
    //                 Math.round(y),
    //                 TILESIZE,
    //                 TILESIZE
    //             )
    //             if (true) {
    //                 if (this.getTile(this.level1.CollisionLayer, row, col) === 1) {
    //                     ctx.fillStyle = "brown";
    //                     ctx.fillRect(
    //                         Math.round(x),
    //                         Math.round(y),
    //                         TILESIZE,
    //                         TILESIZE
    //                     )
    //                 }
    //                 if (this.getTile(this.level1.CollisionLayer, row, col) === 2) {
    //                     ctx.fillStyle = "orange";
    //                     ctx.fillRect(
    //                         Math.round(x),
    //                         Math.round(y),
    //                         TILESIZE,
    //                         TILESIZE
    //                     )
    //                 }
    //                 ctx.strokeRect(
    //                     Math.round(x),
    //                     Math.round(y),
    //                     TILESIZE,
    //                     TILESIZE
    //                 )
    //             }
    //         }
    //     }
    // }

}


