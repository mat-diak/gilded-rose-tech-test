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

    describe('when normal item', () => {
      describe('when in date', () => {
        it('decreases quality by 1 and sellIn by 1', () => {
          const item = new Item('Normal item', 5, 30)
          const shop = new Shop([item]);
          shop.updateQuality();
          expect(shop.items[0].quality).toEqual(29)
          expect(shop.items[0].sellIn).toEqual(4)
        })
      });

      describe('when out of date', () => {
        describe('when sellIn is 0', () => {
          it('decreases quality by 2 and sellIn by 1', () => {
            const item = new Item('Normal item', 0, 30)
            const shop = new Shop([item]);
            shop.updateQuality();
            expect(shop.items[0].quality).toEqual(28)
            expect(shop.items[0].sellIn).toEqual(-1)
          });
        });
        
        it('decreases quality by 2 and sellIn by 1', () => {
          const item = new Item('Normal item', -3, 30)
          const shop = new Shop([item]);
          shop.updateQuality();
          expect(shop.items[0].quality).toEqual(28)
          expect(shop.items[0].sellIn).toEqual(-4)
        });

        describe('when quality is 0', () => {
          it('does not decrease quality', () => {
            const item = new Item('Normal item', -3, 0)
            const shop = new Shop([item]);
            shop.updateQuality();
            expect(shop.items[0].quality).toEqual(0)
          });
        });
      });
    });
  });
});