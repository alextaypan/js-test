const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name == newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        return this.potions.splice(this.potions.indexOf(potion), 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        return (this.potions[this.potions.indexOf(potion)].name = newName);
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
};
