
class Paladin extends Character {
  constructor(name) {
    super(name, 16, 3, 160); // hp, dmg, mana
    
    this.healingLightingDamage = 4;
    this.healingAmount = 5;
    this.healingLightingManaCost = 40;
    this.maxHp = 20; // Ajout d'une limite à la santé maximale
  }

    // Implémentation de l'attaque spéciale Healing Lighting
    healingLighting(target) {
      if (this.mana >= this.healingLightingManaCost) {
        this.mana -= this.healingLightingManaCost;
        target.takeDamage(this.healingLightingDamage);
        const healValue = this.hp + this.healingAmount > this.maxHp ? this.maxHp - this.hp : this.healingAmount;
        this.hp += healValue;
        console.log(`${this.name} utilise Healing Lighting et inflige ${this.healingLightingDamage} dégâts à ${target.name}, tout en se soignant de ${healValue} points de vie.`);
      } else {
        console.log(`${this.name} n'a pas assez de mana pour utiliser Healing Lighting.`);
      }
    }

     // Surcharge de la méthode specialAttack pour utiliser Healing Lighting
  specialAttack(target) {
    console.log(`${this.name} utilise son attaque spéciale sur ${target.name}!`);
    this.healingLighting(target);
  }

}
