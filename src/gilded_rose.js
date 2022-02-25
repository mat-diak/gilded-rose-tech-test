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
      // if item is not Brie and not a backstage pass
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        // and its quality is larger than 0
        if (this.items[i].quality > 0) {
          // and it is not sulfuras
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            // deduct one from quality
            console.log(`${this.items[i].name} --- 1`)
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      // this applies only to Aged Brie and Backstage passes
      } else {
        // if the item has quality less than 50
        if (this.items[i].quality < 50) {
          // add one to quality
          console.log(`${this.items[i].name}  --- 2`)
          this.items[i].quality = this.items[i].quality + 1;
          // if item is backstage pass
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            // and items sellIn date is less than 11
            if (this.items[i].sellIn < 11) {
              // and it's quality is less than 50
              if (this.items[i].quality < 50) {
                // add one to item quality
                console.log(`${this.items[i].name} --- 3`)
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            // and if the sellIn date is less than 6
            if (this.items[i].sellIn < 6) {
              // and the quality is less than 50
              if (this.items[i].quality < 50) {
                // add one to item quality
                console.log(`${this.items[i].name} --- 4`)
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }

      // For all 
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        // deduct one from SellIn
        console.log(`${this.items[i].name} --- 5`)
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      // if the sellIn is past
      if (this.items[i].sellIn < 0) {
        // and item is not Aged Brie
        if (this.items[i].name != "Aged Brie") {
          // and not a backstage pass to concert
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            // if the quality is more than 0
            if (this.items[i].quality > 0) {
              // if the item is not Sulfuras
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                // decrease quality by 1
                console.log(`${this.items[i].name}  --- 6`)
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
            // else ?? if the item is a backstage pass pass
          } else {
            // set quality to 0
            console.log(`${this.items[i].name} --- 7`)
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
          // else ?? if the item is 'Aged Brie'
        } else {
          // and the quality is less than 50
          if (this.items[i].quality < 50) {
            // add one to quality
            console.log(`${this.items[i].name} --- 8`)
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
    
    
      return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
