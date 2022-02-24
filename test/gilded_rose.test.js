const { Shop, Item } = require("../src/gilded_rose");

describe('Shop', () => {
  describe('updateQuality', () => {
    describe('when Sulfurus', () => {
      it('stays the same', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
        let shop = new Shop(item);
        shop.updateQuality();
        expect(item.quality).toEqual(80)
        expect(item.sellIn).toEqual(0)
      });

      it('stays the same', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', -1, 80)
        let shop = new Shop(item);
        shop.updateQuality();
        expect(item.quality).toEqual(80)
        expect(item.sellIn).toEqual(-1)
      });
    });
  });
});