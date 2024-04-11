    class Game {

    constructor() {
      this.turnLeft = 10;
      this.characters = [new Fighter('Grace'), new Paladin('Ulder'), new Monk('Moana'), new Berzerker('Draven'), new Assassin('Carl')];
      this.gameLog = document.getElementById('game-log');
    }

    addNewCharacter(characterData) {
      // Logique pour ajouter un nouveau personnage à la liste
      this.characters.push(characterData);
    } 
  
    startGame() {
      return new Promise((resolve, reject) => {
        console.log("La partie commence !");
        while (this.turnLeft > 0 && this.characters.some(char => char.status === 'playing')) {
          this.startTurn();
        }
        this.endGame();
        resolve();
      });
    }
  
    startTurn() {
      console.log(`C'est le tour ${11 - this.turnLeft}`);
      this.characters = this.characters.sort(() => Math.random() - 0.5); // Mélange aléatoire des personnages
      this.characters.forEach(character => {
        if (character.status === 'playing') {
          console.log(`C'est le moment pour ${character.name} de jouer.`);
          this.askQuestion(character);
        }
      });
      this.skipTurn();
    }

    askQuestion(character) {
      return new Promise((resolve) => {
        const form = document.createElement('form');
        const question = document.createElement('p');
        question.textContent = 'Que voulez-vous faire ? (1. Attaquer, 2. Se défendre, 3. Utiliser un objet, 4. Quitter)';
        form.appendChild(question);
        // ... (créez des éléments de formulaire pour les options ici)
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          // ... (logique pour gérer la réponse de l'utilisateur)
          resolve();
        });
        this.gameLog.appendChild(form);
      });
    }
  
    skipTurn() {
      this.turnLeft--;
      console.log(`Il reste ${this.turnLeft} tours.`);
      if (this.turnLeft === 0) {
        this.characters.filter(char => char.status === 'playing').forEach(char => char.status = 'winner');
      }
    }
  
    endGame() {
      const winners = this.characters.filter(char => char.status === 'winner');
      if (winners.length) {
        console.log("Les gagnants sont :");
        winners.forEach(winner => console.log(winner.name));
      } else {
        console.log("Il n'y a pas de gagnants.");
      }
    }
}

// Initialisation du jeu
console.log('Initialisation du jeu...');
const game = new Game();
console.log('Jeu initialisé.');

// Ajout de personnages
console.log('Création des personnages...');
game.addNewCharacter(new Fighter('Alex', 100, 10, 50));
game.addNewCharacter(new Paladin('Sam', 150, 15, 30));
console.log('Personnages créés.');

// Affichage de la liste des personnages
console.log('Liste des personnages :');
game.characters.forEach(character => {
    console.log(`${character.name} - HP: ${character.hp}, DMG: ${character.dmg}, MANA: ${character.mana}`);
});

// Démarrage du jeu
console.log('Démarrage du jeu...');
game.startGame();
