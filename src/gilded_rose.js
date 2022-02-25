class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
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
      if (!this._isSulfuras(this.items[0])) {
        this._updateItem(this.items[0]);
      }
    }

    return this.items;
  }

  _updateItem(item) {
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
        this._decreaseQuality(item);
    } else {
      this._increaseQuality(item);
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          this._increaseQuality(item);
        }
        if (item.sellIn < 6) {
          this._increaseQuality(item);
        }
      }
    }

    if (item.sellIn <= 0) {
      if (item.name != "Aged Brie") {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          this._decreaseQuality(item);
        } else {
          item.quality = 0;
        }
      } else {
        this._increaseQuality(item);
      }
    }
    this._updateSellIn(this.items[0]);
  }

  _decreaseQuality(item) {
    if(item.quality > 0) {
      item.quality--;
    }
  }

  _increaseQuality(item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  _updateSellIn(item) {
    item.sellIn--;
  }

  _isSulfuras(item) {
    return item.name === "Sulfuras, Hand of Ragnaros";
  }
}

module.exports = {
  Item,
  Shop,
};
