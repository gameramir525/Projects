import { interfaceHeight, interfaceWidth } from "./Main.js";

export class Interface {
    constructor() {
        this.ROW = 10;
        this.COL = 10;
        this.tilesizeRow = interfaceHeight / this.ROW;
        this.tilesizeCol = interfaceWidth / this.COL;
    }
    drawInventory(ctx) {
        for (let row = 0; row < this.ROW; row++) {
            for (let col = 0; col < this.COL; col++) {
                ctx.strokeRect(
                    col * this.tilesizeCol,
                    row * this.tilesizeRow,
                    this.tilesizeCol,
                    this.tilesizeRow
                )
            }
        }
    }
    drawEquipped(ctx) {

    }
}