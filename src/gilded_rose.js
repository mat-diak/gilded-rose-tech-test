class Item {
  // makes an item with name, SellIn date, and quality
  constructor(name, sellIn, quality) {
    // string
    this.name = name;
    // integer
    this.sellIn = sellIn;
    // integer
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateItems() {
    // for each item
    for (let i = 0; i < this.items.length; i++) {
      if (!this._isSulfuras(this.items[0])) { this._updateItem(this.items[0]) }
    }

    return this.items;
  }

  _updateItem(item) {
    // if item is not Brie and not a backstage pass
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      // and its quality is larger than 0
      if (item.quality > 0) {
        // and it is not sulfuras
          // deduct one from quality
          console.log(`${item.name} --- 1`);
          item.quality = item.quality - 1;
      }
      // this applies only to Aged Brie and Backstage passes
    } else {
      // if the item has quality less than 50
      if (item.quality < 50) {
        // add one to quality
        console.log(`${item.name}  --- 2`);
        item.quality = item.quality + 1;
        // if item is backstage pass
        if (
          item.name == "Backstage passes to a TAFKAL80ETC concert"
        ) {
          // and items sellIn date is less than 11
          if (item.sellIn < 11) {
            // and it's quality is less than 50
            if (item.quality < 50) {
              // add one to item quality
              console.log(`${item.name} --- 3`);
              item.quality = item.quality + 1;
            }
          }
          // and if the sellIn date is less than 6
          if (item.sellIn < 6) {
            // and the quality is less than 50
            if (item.quality < 50) {
              // add one to item quality
              console.log(`${item.name} --- 4`);
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    
    this._updateSellIn(this.items[0])

    // if the sellIn is past
    if (item.sellIn < 0) {
      // and item is not Aged Brie
      if (item.name != "Aged Brie") {
        // and not a backstage pass to concert
        if (
          item.name != "Backstage passes to a TAFKAL80ETC concert"
        ) {
          // if the quality is more than 0
          if (item.quality > 0) {
            // if the item is not Sulfuras
              // decrease quality by 1
              console.log(`${item.name}  --- 6`);
              item.quality = item.quality - 1;
          }
          // else ?? if the item is a backstage pass pass
        } else {
          // set quality to 0
          console.log(`${item.name} --- 7`);
          item.quality =
            item.quality - item.quality;
        }
        // else ?? if the item is 'Aged Brie'
      } else {
        // and the quality is less than 50
        if (item.quality < 50) {
          // add one to quality
          console.log(`${item.name} --- 8`);
          item.quality = item.quality + 1;
        }
      }
    }
  }

  _updateSellIn(item) {
      item.sellIn--
  }

  _isSulfuras(item) {
    return item.name === "Sulfuras, Hand of Ragnaros"
  }
}

module.exports = {
  Item,
  Shop,
};
