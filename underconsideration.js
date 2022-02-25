const { Shop, Item } = require("./src/gilded_rose");

let item = new Item("Normal item", 15, 10);
let shop = new Shop([item]);
