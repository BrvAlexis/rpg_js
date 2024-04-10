import Game from './Game.js';

console.log('Initialisation du jeu...');
const game = new Game();
console.log('Jeu initialisé.');

// Simuler la création de personnages
game.addNewCharacter({ name: 'Alex', hp: 100, dmg: 10, mana: 50 });
game.addNewCharacter({ name: 'Sam', hp: 150, dmg: 15, mana: 30 });
console.log('Personnages créés.');

// Afficher la liste des personnages
console.log('Liste des personnages :');
game.characters.forEach(character => {
    console.log(`${character.name} - HP: ${character.hp}, DMG: ${character.dmg}, MANA: ${character.mana}`);
});

// Démarrer le jeu et afficher les statistiques
game.startGame();

game.watchStats();

