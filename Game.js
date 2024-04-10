import Fighter from './Fighter.js';
import Paladin from './Paladin.js';
import Monk from './Monk.js';
import Berzerker from './Berzerker.js';
import Assassin from './Assassin.js';

export default class Game {
    constructor() {
      this.turnLeft = 10;
      this.characters = [new Fighter('Grace'), new Paladin('Ulder'), new Monk('Moana'), new Berzerker('Draven'), new Assassin('Carl')];
    }
  
    startGame() {
      console.log("La partie commence !");
      while (this.turnLeft > 0 && this.characters.some(char => char.status === 'playing')) {
        this.startTurn();
      }
      this.endGame();
    }
  
    startTurn() {
      console.log(`C'est le tour ${11 - this.turnLeft}`);
      this.characters = this.characters.sort(() => Math.random() - 0.5); // Mélange aléatoire des personnages
      this.characters.forEach(character => {
        if (character.status === 'playing') {
          console.log(`C'est le moment pour ${character.name} de jouer.`);
          // Logique pour choisir l'action du personnage (à implémenter)
        }
      });
      this.skipTurn();
    }
  
    skipTurn() {
      this.turnLeft--;
      console.log(`Il reste ${this.turnLeft} tours.`);
      if (this.turnLeft === 0) {
        this.characters.filter(char => char.status === 'playing').forEach(char => char.status = 'winner');
      }
    }
  
    watchStats() {
      this.characters.forEach(char => {
        console.log(`${char.name} - HP: ${char.hp}, Mana: ${char.mana}, Status: ${char.status}`);
      });
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
  
 
  