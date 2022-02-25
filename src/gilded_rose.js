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
    for (let i = 0; i < this.items.length; i++) {
      if (!this._isSulfuras(this.items[0])) {
        this._updateItem(this.items[0]);
      }
    }
    return this.items;
  }

  _updateItem(item) {
    if (item.name === "Aged Brie") {
      this._increaseQuality(item);
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      this._increaseQuality(item);
      if (item.sellIn < 11) {
        this._increaseQuality(item);
      }
      if (item.sellIn < 6) {
        this._increaseQuality(item);
      }
    } else {
      this._decreaseQuality(item);
    }

    if (item.sellIn <= 0) {
      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        item.quality = 0;
      } else if (item.name === "Aged Brie") {
        this._increaseQuality(item);
      } else {
        this._decreaseQuality(item);
      }
    }

    // updates sell in for all items except for
    this._updateSellIn(this.items[0]);
  }

  _decreaseQuality(item) {
    if (item.quality > 0) {
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
