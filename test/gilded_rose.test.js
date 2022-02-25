const { Shop, Item } = require("../src/gilded_rose");

describe('Shop', () => {
  describe('updateItems', () => {
    describe('when Sulfurus', () => {
      it('stays the same', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
        let shop = new Shop([item]);
        shop.updateItems();
        expect(item.quality).toEqual(80)
        expect(item.sellIn).toEqual(0)
      });

      it('stays the same', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', -1, 80)
        let shop = new Shop([item]);
        shop.updateItems();
        expect(item.quality).toEqual(80)
        expect(item.sellIn).toEqual(-1)
      });
    });

    describe('when normal item', () => {
      describe('when in date', () => {
        it('decreases quality by 1 and sellIn by 1', () => {
          const item = new Item('Normal item', 5, 30)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(29)
          expect(shop.items[0].sellIn).toEqual(4)
        })

        describe('when quality is 0', () => {
          it('does not decrease quality', () => {
            const item = new Item('Normal item', 5, 0)
            const shop = new Shop([item]);
            shop.updateItems();
            expect(shop.items[0].quality).toEqual(0)
            expect(shop.items[0].sellIn).toEqual(4)
          });
        });
      });

      describe('when out of date', () => {
        describe('when sellIn is 0', () => {
          it('decreases quality by 2 and sellIn by 1', () => {
            const item = new Item('Normal item', 0, 30)
            const shop = new Shop([item]);
            shop.updateItems();
            expect(shop.items[0].quality).toEqual(28)
            expect(shop.items[0].sellIn).toEqual(-1)
          });
        });
        
        it('decreases quality by 2 and sellIn by 1', () => {
          const item = new Item('Normal item', -3, 30)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(28)
          expect(shop.items[0].sellIn).toEqual(-4)
        });

        describe('when quality is 0', () => {
          it('does not decrease quality', () => {
            const item = new Item('Normal item', -3, 0)
            const shop = new Shop([item]);
            shop.updateItems();
            expect(shop.items[0].quality).toEqual(0)
          });
        });
      });
    });

    describe('when Aged Brie', () => {
      describe('when in date', () => {
        it('descreases sellIn by 1 and increases quality by 1', () => {
          const item = new Item('Aged Brie', 2, 0)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(1)
          expect(shop.items[0].sellIn).toEqual(1)
        });

        describe('when quality is 50', () => {
          it('does not increase quality', () => {
            const item = new Item('Aged Brie', 2, 50)
            const shop = new Shop([item]);
            shop.updateItems();
            expect(shop.items[0].quality).toEqual(50)
            expect(shop.items[0].sellIn).toEqual(1)
          });
        });
      });

      describe('when out of date', () => {
        it('increaes quality by 2', () => {
          const item = new Item('Aged Brie', -3, 3)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(5)
          expect(shop.items[0].sellIn).toEqual(-4)
        });

        describe('when sellIn is 0', () => {
          it('increases quality by 2', () => {
            const item = new Item('Aged Brie', 0, 3)
            const shop = new Shop([item]);
            shop.updateItems();
            expect(shop.items[0].quality).toEqual(5)
            expect(shop.items[0].sellIn).toEqual(-1)
          });
        });

        describe('when quality is 50', () => {
          it('does not increase quality', () => {
            const item = new Item('Aged Brie', -5, 50)
            const shop = new Shop([item]);
            shop.updateItems();
            expect(shop.items[0].quality).toEqual(50)
            expect(shop.items[0].sellIn).toEqual(-6)
          });
        });

        describe('when quality is 49', () => {
          it('increases quality by 1', () => {
            const item = new Item('Aged Brie', -5, 49)
            const shop = new Shop([item]);
            shop.updateItems();
            expect(shop.items[0].quality).toEqual(50)
            expect(shop.items[0].sellIn).toEqual(-6)
          });
        });
      });
    });

    describe('when Backstage passes', () => {
      describe('when sellIn above 10', () => {
        it('increases quality by 1', () => {
          const item = new Item('Backstage passes to a TAFKAL80ETC concert', 14, 0)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(1)
          expect(shop.items[0].sellIn).toEqual(13)
        });

        describe('when quality is 50', () => {
          it('does not increase quality', () => {
            const item = new Item('Backstage passes to a TAFKAL80ETC concert', 22, 50)
            const shop = new Shop([item]);
            shop.updateItems();
            expect(shop.items[0].quality).toEqual(50)
            expect(shop.items[0].sellIn).toEqual(21)
          });
        });
      });

      describe('when sellIn is between 6..10', () => {
        it('increases quality by 2', () => {
          const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(2)
          expect(shop.items[0].sellIn).toEqual(9)
        });

        it('increases quality by 2', () => {
          const item = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 0)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(2)
          expect(shop.items[0].sellIn).toEqual(5)
        });

        describe('when quality is 49', () => {
          it('increases quality by 1', () => {
            const item = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(50)
          expect(shop.items[0].sellIn).toEqual(5)
          });
        });
      });

      describe('when sellIn is 1 to 5', () => {
        it('increases quality by 3', () => {
          const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(3)
          expect(shop.items[0].sellIn).toEqual(4)
        });

        it('increases quality by 3', () => {
          const item = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 0)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(3)
          expect(shop.items[0].sellIn).toEqual(0)
        });

        describe('when quality is 48', () => {
          it('increases quality by 2', () => {
            const item = new Item('Backstage passes to a TAFKAL80ETC concert', 3, 48)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(50)
          expect(shop.items[0].sellIn).toEqual(2)
          });
        });
      });

      describe('when sellIn is 0 or less', () => {
        it('sets quality to 0', () => {
          const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(0)
          expect(shop.items[0].sellIn).toEqual(-1)
        });

        it('sets quality to 0', () => {
          const item = new Item('Backstage passes to a TAFKAL80ETC concert', -5, 30)
          const shop = new Shop([item]);
          shop.updateItems();
          expect(shop.items[0].quality).toEqual(0)
          expect(shop.items[0].sellIn).toEqual(-6)
        });
      });
    });
  });
});