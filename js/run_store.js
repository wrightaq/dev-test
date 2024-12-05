// const { Shop, Item } = require("./src/shi_mart");
const { Shop, Item } = require("./src/new_shi_mart");

const items = [
  new Item("Bananas", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Eggs", 5, 7),
  new Item("Eggs", 12, 5),
  new Item("Canned Beans", 0, 80),
  new Item("Canned Beans", -1, 80),

  // This Baked good does not work properly yet!
  new Item("Baked Sourdough Bread", 3, 5),
];

const days = Number(process.argv[2]) || 5;
const ShiMart = new Shop(items);

for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  // ShiMart.updateQuality();
  ShiMart.updateItems()
}
