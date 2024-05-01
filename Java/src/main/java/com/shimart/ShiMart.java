package com.shimart;

class ShiMart {
    Item[] items;

    public ShiMart(Item[] items) {
        this.items = items;
    }

    public void updateQuality() {
        for (int i = 0; i < items.length; i++) {
            if (!items[i].name.equals("Canned Beans")) {
                items[i].sellIn = items[i].sellIn - 1;
            }

            if (items[i].name.equals("Aged Brie")) {
                if (items[i].quality < 50) {
                    items[i].quality = items[i].quality + 1;
                }

            } else {
                if (items[i].quality > 0) {
                    if (!items[i].name.equals("Canned Beans")) {
                        items[i].quality = items[i].quality - 1;
                    }
                }
            }



            if (items[i].sellIn < 0) {
                if (items[i].name.equals("Aged Brie")) {
                    if (items[i].quality < 50) {
                        items[i].quality = items[i].quality + 1;
                    }

                } else {
                    if (items[i].quality > 0) {
                        if (!items[i].name.equals("Canned Beans")) {
                            items[i].quality = items[i].quality - 1;
                        }
                    }
                }
            }
        }
    }
}
