export default class Character {
    constructor(hp, dmg, mana) {
      this.hp = hp;
      this.dmg = dmg;
      this.mana = mana;
      this.status = 'playing';
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
    
      dealDamage(victim) {
        victim.takeDamage(this.dmg);
        if (victim.hp === 0) {
          this.mana += 20;
          console.log(`${this.name} a tué ${victim.name} et regagne 20 points de mana.`);
        }
      }
    
      // Méthode pour l'attaque spéciale à surcharger dans les classes dérivées
      specialAttack(target) {
        // Implémentation spécifique à chaque classe
      }
    }