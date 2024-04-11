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
      
      chooseTarget(characters) {
        // Filtrer les personnages qui peuvent être attaqués
        const targets = characters.filter(char => char.status === 'playing' && char !== this);
        // Choisir une cible aléatoirement
        return targets[Math.floor(Math.random() * targets.length)];
      }
      
      

      // Méthode pour l'attaque spéciale à surcharger dans les classes dérivées
      specialAttack(target) {
        // Implémentation spécifique à chaque classe
      }

      showStats() {
        console.log(`${this.name} - HP: ${this.hp}, DMG: ${this.dmg}, Mana: ${this.mana}, Status: ${this.status}`);
      }
    }