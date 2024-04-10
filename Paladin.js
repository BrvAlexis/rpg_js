import Character from './Character.js';

export default class Paladin extends Character {
  constructor(name) {
    super(name, 16, 3, 160); // hp, dmg, mana
    
    this.healingLightingDamage = 4;
    this.healingAmount = 5;
    this.healingLightingManaCost = 40;
  }

  // Implémentation de l'attaque spéciale Healing Lighting
  healingLighting(target) {
    if (this.mana >= this.healingLightingManaCost) {
      this.mana -= this.healingLightingManaCost;
      target.takeDamage(this.healingLightingDamage);
      this.hp += this.healingAmount;
      console.log(`${this.name} utilise Healing Lighting et inflige ${this.healingLightingDamage} dégâts à ${target.name}, tout en se soignant de ${this.healingAmount} points de vie.`);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Healing Lighting.`);
    }
  }
}
