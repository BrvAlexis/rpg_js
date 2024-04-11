import Character from './character.js';

export default class Monk extends Character {
  constructor(name) {
    super(name, 8, 2, 200); // hp, dmg, mana
    
    this.healAmount = 8;
    this.healManaCost = 25;
  }

  // Implémentation de l'attaque spéciale Heal
  heal() {
    if (this.mana >= this.healManaCost) {
      const healValue = this.hp + this.healAmount > this.maxHp ? this.maxHp - this.hp : this.healAmount;
      this.hp += healValue;
      this.mana -= this.healManaCost;
      console.log(`${this.name} utilise Heal et se soigne de ${healValue} points de vie.`);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Heal.`);
    }
  }

   // Surcharge de la méthode specialAttack pour utiliser Heal
   specialAttack() {
    console.log(`${this.name} utilise son attaque spéciale sur ${target.name}!`);
    
    this.heal(target);
  }


}
