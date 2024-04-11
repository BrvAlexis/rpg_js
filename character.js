class Character {
    constructor(name, hp, dmg, mana,) {
      this.name = name;
      this.hp = hp;
      this.dmg = dmg;
      this.mana = mana;
      this.status = 'playing';
    }


    attack(target) {
      // Vérifiez si la cible est valide
      if (target && target.status === 'playing') {
        // Infligez des dégâts à la cible
        this.dealDamage(target);
        // Log de l'attaque
        console.log(`${this.name} attaque ${target.name}. Il lui inflige ${this.dmg} points de dégâts. ${target.name} a ${target.hp} points de vie restants.`);
      } else {
        console.log(`${this.name} ne peut pas attaquer car la cible n'est pas valide ou déjà éliminée.`);
      }
    }

    takeDamage(damage) {
        this.hp -= damage;
        console.log(`${this.name} a reçu ${damage} points de dégâts.`);
        if (this.hp <= 0) {
          this.hp = 0;
          this.status = 'loser';
          console.log(`${this.name} est éliminé et ne peut plus jouer ni être attaqué.`);
        }
      }
    
      dealDamage(target) {
        if (target) { // Vérifiez que la victime est définie
          target.takeDamage(this.dmg);
          if (target.hp === 0) {
            this.mana += 20;
            console.log(`${this.name} a tué ${target.name} et regagne 20 points de mana.`);
          }
        } else {
          console.log(`${this.name} essaie d'attaquer une cible qui n'existe pas ou est déjà éliminée.`);
        }
      }
      
      playTurn(characters) {
        // Logique pour choisir une action, par exemple attaquer un autre personnage
        const target = this.chooseTarget(characters);
        if (target) {
          this.attack(target);
        } else {
          console.log(`${this.name} n'a pas trouvé de cible.`);
        }
      }

      chooseTarget() {
        // Filtrer les personnages qui sont encore en jeu
        const playingCharacters = this.characters.filter(char => char.status === 'playing');
        
        // Vérifier s'il y a des personnages en jeu
        if (playingCharacters.length > 0) {
          // Choisir un personnage aléatoire parmi ceux qui sont encore en jeu
          const target = playingCharacters[Math.floor(Math.random() * playingCharacters.length)];
          
          // Retourner le personnage choisi
          return target;
        } else {
          // S'il n'y a pas de personnages en jeu, retourner null
          return null;
        }
      }

      // Méthode pour l'attaque spéciale à surcharger dans les classes dérivées
      specialAttack(target) {
        // Implémentation spécifique à chaque classe
      }

     
}