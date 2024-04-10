import Character from './Character.js';

export default class Berzerker extends Character {
  constructor(name) {
    super(name, 8, 4, 0); // hp, dmg, mana
    
    this.rageBonus = 1;
  }

  // Implémentation de l'attaque spéciale Rage
  rage() {
    this.dmg += this.rageBonus; // Augmente l'attaque du Berzerker
    this.hp -= this.rageBonus; // Réduit les points de vie du Berzerker
    console.log(`${this.name} utilise Rage et gagne +1 attaque pour tout le reste de la partie mais perd 1 hp.`);
    if (this.hp <= 0) {
      console.log(`${this.name} est tombé au combat en utilisant Rage.`);
    }
  }
}
