class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  //add Baked Sourdough Bread to the for loop to change its quality and sellIn
  //Conditions for Baked items:
    // past sellIn date quality degrades 2x
    // for baked: not canned beads
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].name != 'Canned Beans') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].name == 'Aged Brie') {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
      }
      //add condition for odd days so that quality wont drop below 0
      // two seperate conditions for 0 and for one
        //for one change the quality degradation to -1 or set it equal to zero
      if (this.items[i].name == 'Baked Sourdough Bread') {
        if (this.items[i].quality == 1) {
          this.items[i].quality = 0;
        }
        if (this.items[i].quality > 0 ) {
          this.items[i].quality = this.items[i].quality - 2;
        }
      }
      else {
        if (this.items[i].quality > 0 && this.items[i].name != 'Canned Beans') {
          this.items[i].quality = this.items[i].quality - 1;
        }
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name == 'Aged Brie') {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
        //add condition so quality wont go below 0 for odd inputs
        if (this.items[i].name == 'Baked Sourdough Bread') {
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 2;
          }
        } else {
          if (this.items[i].quality > 0 && this.items[i].name != 'Canned Beans') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
