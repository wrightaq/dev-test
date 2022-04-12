package com.gildedrose;

public class TexttestFixture {
    public static void main(String[] args) {
        Item[] items = new Item[] {
                new Item("Bananas", 10, 20),
                new Item("Aged Brie", 2, 0),
                new Item("Eggs", 5, 7),
                new Item("Eggs", 12, 5),
                new Item("Canned Beans", 0, 80),
                new Item("Canned Beans", -1, 80),

                // This Baked good does not work properly yet!
                new Item("Baked Sourdough Bread", 3, 6) };

        GildedRose app = new GildedRose(items);

        int days = 2;
        if (args.length > 0) {
            days = Integer.parseInt(args[0]) + 1;
        }

        for (int i = 0; i < days; i++) {
            System.out.println("-------- day " + i + " --------");
            System.out.println("name, sellIn, quality");
            for (Item item : items) {
                System.out.println(item);
            }
            System.out.println();
            app.updateQuality();
        }
    }

}
