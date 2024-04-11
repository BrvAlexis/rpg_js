

class Berzerker extends Character {
  constructor(name) {
    super(name, 8, 4, 0); // hp, dmg, mana
    
    this.rageBonus = 1;
  }

   // Implémentation de l'attaque spéciale Rage
   rage() {
      if (this.hp > this.rageBonus) {
      this.dmg += this.rageBonus; // Augmente l'attaque du Berzerker
      this.hp -= this.rageBonus; // Réduit les points de vie du Berzerker
      console.log(`${this.name} utilise Rage et gagne +1 attaque pour tout le reste de la partie mais perd 1 hp.`);
      } else {
      console.log(`${this.name} ne peut pas utiliser Rage car cela le tuerait.`);
      }
    }
    // Surcharge de la méthode specialAttack pour utiliser Rage
    specialAttack() {
    this.rage();
    }

}
