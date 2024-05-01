package com.shimart;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ShiMartTest {

    @Test
    void Test1() {
        Item[] items = new Item[] { new Item("Test", 10, 20) };
        ShiMart app = new ShiMart(items);

        app.updateQuality();

        assertEquals(9, app.items[0].sellIn);
        assertEquals(19, app.items[0].quality);
    }

}
