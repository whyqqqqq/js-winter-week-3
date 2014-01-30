var shoppingCart = {
  stuff: [],
  itemIdIndex: 0,
  add: function (thing) {
    thing.id = this.itemIdIndex++;
    this.stuff.push(thing);
    return thing.id;
  },
  remove: function (itemId, removeHowMany) {
    var i = -1;
    this.stuff.forEach(function (item, index) {
      if (item.id === itemId)
        i = index;
    });
    if (i === -1) throw new Error("Item not found in shopping cart!");
    // now this.stuff[i] is the item we want to remove

    if (this.stuff[i].count <= removeHowMany) {
      this.stuff.splice(i, 1); // remove this item from the shopping cart!
    } else {
      this.stuff[i].count -= removeHowMany;
    }
  },
  list: function () {
    var outputStr = "";
    this.stuff.forEach(function (item) {
      outputStr += item.count + ' X ' + item.description + " at " + item.price + " each.\n"
    });
    return outputStr;
  },
  total: function () {
    var sum = 0;
    this.stuff.forEach(function (item) {
      sum += item.price * item.count;
    });
    return sum;
  }
};

var item1 = shoppingCart.add({description: "Huggies Little Snugglers Diapers",
                              count: 4,
                              price: 19.77});

var item2 = shoppingCart.add({description: "Tylenol Extra Strength Acetaminophen",
                              count: 2,
                              price: 22.38});

var item3 = shoppingCart.add({description: "Flents Quiet Please Foam Ear Plugs",
                              count: 10,
                              price: 11.50});

var item4 = shoppingCart.add({description: "Monsters Eat Whiny Children",
                              count: 1,
                              price: 11.07});

shoppingCart.remove(item3, 6);
shoppingCart.remove(item4, 1);

console.log(shoppingCart.list());

/* Should print:
[
'4 X Huggies Little Snugglers Diapers',
'2 X Tylenol Extra Strength Acetaminophen',
'4 X Flents Quiet Please Foam Ear Plugs',
]
*/

console.log(shoppingCart.total());

// Should print: 169.84