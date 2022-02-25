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
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
          this._decreaseQuality(item)
      }
    } else {
      if (item.quality < 50) {
        this._increaseQuality(item)
        if (
          item.name == "Backstage passes to a TAFKAL80ETC concert"
        ) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              this._increaseQuality(item)
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              this._increaseQuality(item)
            }
          }
        }
      }
    }
    
    this._updateSellIn(this.items[0])

    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (
          item.name != "Backstage passes to a TAFKAL80ETC concert"
        ) {
          if (item.quality > 0) {
              this._decreaseQuality(item)
          }
        } else {
          item.quality = 0
        }
      } else {
        if (item.quality < 50) {
          this._increaseQuality(item)
        }
      }
    }
  }

  _decreaseQuality(item) {
    item.quality--
  }

  _increaseQuality(item) {
    item.quality++
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
