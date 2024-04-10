import Character from './Character.js';

export default class Monk extends Character {
  constructor(name) {
    super(8, 2, 200); // hp, dmg, mana
    this.name = name;
    this.healAmount = 8;
    this.healManaCost = 25;
  }

  // Implémentation de l'attaque spéciale Heal
  heal() {
    if (this.mana >= this.healManaCost) {
      this.hp += this.healAmount;
      this.mana -= this.healManaCost;
      console.log(`${this.name} utilise Heal et se soigne de ${this.healAmount} points de vie.`);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Heal.`);
    }
  }
}
