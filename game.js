class Game {
  constructor() {
    this.turnLeft = 10;
    this.characters = [];
    this.gameLog = document.getElementById('game-log');
  }

  startGame() {
   
    this.addCharacter(new Fighter('Grace'));
    this.addCharacter(new Paladin('Ulder'));
    this.addCharacter(new Monk('Moana'));
    this.addCharacter(new Berzerker('Draven'));
    this.addCharacter(new Assassin('Carl'));
    console.log('Personnages créés.');
    console.log('Liste des personnages :');
    this.characters.forEach(character => {
        console.log(`${character.name} - HP: ${character.hp}, DMG: ${character.dmg}, MANA: ${character.mana}`);
    });
    console.log('Démarrage du jeu...');
    while (this.turnLeft > 0 && this.characters.some(char => char.status === 'playing')) {
      this.startTurn();
      this.skipTurn();
    }
    this.endGame();
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  createCharacter() {
    const name = prompt("Entrez le nom du personnage :");
    const hp = parseInt(prompt("Entrez les points de vie du personnage :"), 10);
    const dmg = parseInt(prompt("Entrez les points de dégât du personnage :"), 10);
    const mana = parseInt(prompt("Entrez les points de mana du personnage :"), 10);
    if (isNaN(hp) || isNaN(dmg) || isNaN(mana)) {
      console.log("Veuillez entrer des nombres valides.");
      return this.createCharacter();
    }
    const character = new Character(name, hp, dmg, mana);
    this.addCharacter(character);
  }

  startTurn() {
    console.log(`C'est le tour ${11 - this.turnsLeft}`);
    const playingCharacters = this.characters.filter(char => char.status === 'playing');
    const randomOrder = playingCharacters.sort(() => Math.random() - 0.5);
    randomOrder.forEach(character => {
      if (character.status === 'playing') {
        console.log(`C'est le moment pour ${character.name} de jouer.`);
        const action = prompt(`Quelle action ${character.name} doit-il effectuer ? Entrez "attack" pour une attaque normale ou "special" pour une attaque spéciale.`);
        if (action !== 'attack' && action !== 'special') {
          console.log("Veuillez entrer 'attack' ou 'special'.");
          return;
        }
        const targetName = prompt(`Qui ${character.name} doit-il attaquer ? Entrez le nom du personnage.`);
        const target = this.characters.find(char => char.name === targetName && char.status === 'playing');
        if (!target) {
          console.log("Ce personnage n'existe pas ou a été éliminé. Veuillez choisir un autre personnage.");
          return;
        }
        if (action === 'attack') {
          character.dealDamage(target);
        } else if (action === 'special') {
          character.specialAttack(target);
        }
      }
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
game.addCharacter(new Fighter('Alex', 100, 10, 50));
game.addCharacter(new Paladin('Sam', 150, 15, 30));
console.log('Personnages créés.');

// Démarrage du jeu
console.log('Démarrage du jeu...');
game.startGame();
