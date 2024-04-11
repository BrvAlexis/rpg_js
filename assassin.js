import Character from './character.js';

export default class Assassin extends Character {
  constructor(name) {
    super(name, 6, 6, 20); // hp, dmg, mana
    
    this.shadowHitDamage = 7;
    this.shadowHitManaCost = 20;
    this.isShadowHitActive = false;
  }

 // Implémentation de l'attaque spéciale Shadow Hit
 shadowHit(target) {
  if (this.mana >= this.shadowHitManaCost) {
    this.mana -= this.shadowHitManaCost;
    target.takeDamage(this.shadowHitDamage);
    console.log(`${this.name} utilise Shadow Hit et inflige ${this.shadowHitDamage} dégâts à ${target.name}.`);
  } else {
    console.log(`${this.name} n'a pas assez de mana pour utiliser Shadow Hit.`);
  }
}
  // Surcharge de la méthode takeDamage pour inclure l'effet de Shadow Hit
  takeDamage(damage) {
    if (!this.isShadowHitActive) {
      super.takeDamage(damage);
    } else {
      console.log(`${this.name} esquive l'attaque grâce à Shadow Hit.`);
      this.isShadowHitActive = false; // L'effet ne dure qu'un tour
    }
  }

    // Surcharge de la méthode specialAttack pour utiliser Shadow Hit
  specialAttack(target) {
    this.shadowHit(target);
    this.isShadowHitActive = true; // Active l'effet d'esquive pour le prochain tour
  }
  
  // Méthode appelée à la fin du tour pour gérer les dégâts de retour de Shadow Hit
  endTurn() {
    if (this.isShadowHitActive && this.hp > 0) {
      this.takeDamage(this.shadowHitDamage);
      console.log(`${this.name} subit ${this.shadowHitDamage} points de dégâts en retour de Shadow Hit.`);
      this.isShadowHitActive = false;
    }
  }
}
