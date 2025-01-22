
export class SaveManager {
    constructor() {
        this.saveButton = document.getElementById('save');
        this.loadButton = document.getElementById('load');
        saveButton.addEventListener('click', save);
        loadButton.addEventListener('click', load);
    }



    save() {
        localStorage.setItem('Position', JSON.stringify(game.player.position));
        localStorage.setItem('CollisionLayer', JSON.stringify(game.world.level1.CollisionLayer));
    }
    load() {
        game.player.position = JSON.parse(localStorage.getItem('Position'));
        game.world.level1.CollisionLayer = JSON.parse(localStorage.getItem('CollisionLayer'));
    }
}