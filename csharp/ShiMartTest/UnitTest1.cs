using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using csharp;

namespace ShiMartTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            IList<Item> items = new List<Item>
            {
                new Item { Name = "Test Item", SellIn = 10, Quality = 20 }
            };

            var app = new ShiMart(items);

            app.UpdateQuality();

            Assert.AreEqual(9, items.First().SellIn);
            Assert.AreEqual(19, items.First().Quality);
        }
    }
}
