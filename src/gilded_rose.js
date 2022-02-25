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
      this._updateItem(this.items[0]);
    }
    return this.items;
  }

  _updateItem(item) {
    if (!this._isSulfuras(item)) {
      this._updateQuality(item)
      this._updateSellIn(item)
    }
  }

  _updateQuality(item) {
    switch(item.name) {
      case "Aged Brie":
        (item.sellIn > 0) ?  this._increaseQuality(item, 1) : this._increaseQuality(item, 2)
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        if (item.sellIn > 10) {
          this._increaseQuality(item, 1)
          break;
        } else if (item.sellIn > 5) {
          this._increaseQuality(item, 2)
          break;
        } else if (item.sellIn > 0) {
          this._increaseQuality(item, 3)
          break;
        } else {
          this._decreaseQuality(item, item.quality)
          break;
        }
      default:
        (item.sellIn > 0) ? this._decreaseQuality(item, 1) : this._decreaseQuality(item, 2)
    }
  }

  _decreaseQuality(item, times) {
    for (let i = times; i > 0 && item.quality > 0; i--) {
      item.quality--;
    }
  }

  _increaseQuality(item, times) {
    for (let i = times; i > 0 && item.quality < 50; i--) {
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
