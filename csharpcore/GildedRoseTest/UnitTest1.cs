using System;
using System.Collections.Generic;
using System.Linq;
using GildedRoseKata;
using Xunit;

namespace GildedRoseTest
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var items = new List<Item> { new Item { Name = "Test", SellIn = 10, Quality = 20 } };
            var app = new GildedRose(items);

            app.UpdateQuality();

            Assert.Equal(9, items.First().SellIn);
            Assert.Equal(19, items.First().Quality);
        }
    }
}
