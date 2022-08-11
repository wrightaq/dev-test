# -*- coding: utf-8 -*-
import unittest

from shi_mart import Item, ShiMart


class ShiMartTest(unittest.TestCase):
    def test_foo(self):
        items = [Item("foo", 0, 0)]
        shi_mart = ShiMart(items)
        shi_mart.update_quality()
        self.assertEquals("fixme", items[0].name)

        
if __name__ == '__main__':
    unittest.main()
