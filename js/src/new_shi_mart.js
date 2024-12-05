//instead of a series of conditionals to update each item break them
//into their own seperate functions and call them in succession
//this will increase readability and make updating rules for each item
//easier as well as make it easier to add new items in a clear way

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

  updateAgedBrie(brie) {
    brie.sellIn = brie.sellIn - 1;

      if (brie.quality < 50){
        brie.quality = brie.items + 1;
      }

    return brie;
  }

  updateBakedSourdoughBread(bread) {
    bread.sellIn = bread.sellIn - 1;

    if (bread.quality == 1) {
      bread.quality = 0
    }
    if (bread.quality > 0 && bread.quality != 1) {
      bread.quality = bread.quality - 2;
    }

    return bread;
  }

  updateNonSpecialItems(item) {
    item.sellIn = item.sellIn - 1;
    item.quality = item.quality - 1;
    return item;
  }

  updateItems() {
    for (let i = 0; i < this.items.length; i++) {

      if(this.items[i].name == 'Aged Brie') {
        this.updateAgedBrie(this.items[i])
      } else if (this.items[i].name == 'Baked Sourdough Bread') {
        this.updateBakedSourdoughBread(this.items[i])
      } else if(this.items[i].name == 'Canned Beans') {
        //do I change sellIn? if so make canned beans function
        continue;
      } else {
        this.updateNonSpecialItems(this.items[i]);
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}