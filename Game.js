import chalk from 'chalk';
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

    addNewCharacter(characterData) {
      // Logique pour ajouter un nouveau personnage à la liste
      this.characters.push(characterData);
    } 
  
    startGame() {
      console.log("La partie commence !");
      while (this.turnLeft > 0 && this.characters.some(char => char.status === 'playing')) {
        this.startTurn();
      }
      this.endGame();
    }
  
    startTurn() {
      console.log(chalk.blue(`C'est le tour ${11 - this.turnLeft}`));
      this.characters = this.characters.sort(() => Math.random() - 0.5); // Mélange aléatoire des personnages
      this.characters.forEach(character => {
        if (character.status === 'playing') {
          console.log(chalk.magenta(`C'est le moment pour ${character.name} de jouer.`));
          character.playTurn(this.characters);
        }
      });
      this.skipTurn();
    }
  
    skipTurn() {
      this.turnLeft--;
      console.log(chalk.yellow(`Il reste ${this.turnLeft} tours.`));
      if (this.turnLeft === 0) {
        this.characters.filter(char => char.status === 'playing').forEach(char => char.status = 'winner');
      }
    }
  
    watchStats() {
      this.characters.forEach(char => {
        console.log(chalk.green(`${char.name} - HP: ${char.hp}, Mana: ${char.mana}, Status: ${char.status}`));
      });
    }
  
    endGame() {
      const winners = this.characters.filter(char => char.status === 'winner');
      if (winners.length) {
        console.log(chalk.bgGreen.black("Les gagnants sont :"));
        winners.forEach(winner => console.log(chalk.green(winner.name)));
      } else {
        console.log(chalk.red("Il n'y a pas de gagnants."));
      }
    }
  }
  
 
  