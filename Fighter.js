import Character from './Character.js';

export default class Fighter extends Character {
  constructor(name) {
    super(12, 4, 40); // hp, dmg, mana
    this.name = name;
    this.darkVisionDamage = 5;
    this.damageReduction = 2;
    this.darkVisionManaCost = 20;
    this.isDarkVisionActive = false;
  }

  // Implémentation de l'attaque spéciale Dark Vision
  darkVision(target) {
    if (this.mana >= this.darkVisionManaCost) {
      this.mana -= this.darkVisionManaCost;
      target.takeDamage(this.darkVisionDamage);
      this.isDarkVisionActive = true;
      console.log(`${this.name} utilise Dark Vision et inflige ${this.darkVisionDamage} dégâts à ${target.name}.`);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Dark Vision.`);
    }
  }

  // Surcharge de la méthode takeDamage pour inclure la réduction des dégâts
  takeDamage(damage) {
    if (this.isDarkVisionActive) {
      super.takeDamage(damage - this.damageReduction);
      this.isDarkVisionActive = false; // L'effet ne dure qu'un tour
      console.log(`${this.name} a activé Dark Vision et réduit les dégâts reçus de ${this.damageReduction}.`);
    } else {
      super.takeDamage(damage);
    }
  }
}
