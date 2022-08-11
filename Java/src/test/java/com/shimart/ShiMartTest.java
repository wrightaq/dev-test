package com.shimart;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ShiMartTest {

    @Test
    void foo() {
        Item[] items = new Item[] { new Item("foo", 0, 0) };
        ShiMart app = new ShiMart(items);
        app.updateQuality();
        assertEquals("fixme", app.items[0].name);
    }

}
