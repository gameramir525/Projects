import { Input } from "./Input.js";
import { World } from "./World.js";
import { Player } from "./Player.js";
import { Interface } from "./Interface.js";

//http://127.0.0.1:5500/Game/index.html

export const TILESIZE = 32;
export const COLS = 20;
export const ROWS = 20;

export const gameWidth = TILESIZE * COLS;
export const gameHeight = TILESIZE * ROWS;

export var debug = { status: false };

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = gameWidth;
canvas.height = gameHeight;
ctx.imageSmoothingEnabled = false;

const canvas2 = document.getElementById("interface");
const ctx2 = canvas2.getContext("2d");
export const interfaceWidth = canvas2.width;
export const interfaceHeight = canvas2.height;

class Game {
    constructor() {
        this.world = new World();
        this.player = new Player({ game: this, position: { x: 0, y: 0 } });
        this.input = new Input();
        this.interface = new Interface();
        //this.camera = new Camera(this.world, gameWidth, gameHeight);
    }
    render(ctx, ctx2) {
        //this.world.drawMapCamera(ctx);
        this.world.drawMap(ctx);
        this.interface.drawInventory(ctx2);
        this.player.draw(ctx);
        this.player.update();
    }
}
export const game = new Game();

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    ctx2.clearRect(0, 0, interfaceWidth, interfaceHeight);
    game.render(ctx, ctx2);
}

requestAnimationFrame(animate);




const saveButton = document.getElementById('save');
const loadButton = document.getElementById('load');

saveButton.addEventListener('click', save);
loadButton.addEventListener('click', load);

function save() {
    localStorage.setItem('Position', JSON.stringify(game.player.position));
    localStorage.setItem('DPosition', JSON.stringify(game.player.destinationPosition));
    localStorage.setItem('CollisionLayer', JSON.stringify(game.world.level1.CollisionLayer));
}

function load() {
    game.player.position = JSON.parse(localStorage.getItem('Position'));
    game.player.destinationPosition = JSON.parse(localStorage.getItem('DPosition'));
    game.world.level1.CollisionLayer = JSON.parse(localStorage.getItem('CollisionLayer'));
    // window.addEventListener('keydown', e => {
    //     if (e.key.toLowerCase() === "f") {
    //         game.player.destinationPosition = JSON.parse(localStorage.getItem('Position'));
    //         game.world.level1.CollisionLayer = JSON.parse(localStorage.getItem('CollisionLayer'));
    //     }
    // })
}