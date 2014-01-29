var shoppingCart = {
  // implement me!
  cart: [],
  add: function (thing) {
			if (thing) {
			this.cart.push(thing);
			}
		}
  ,
  remove: function (thing) {
				var index = this.cart.indexOf(thing)
				if (index >= 0) {
					this.cart.splice(index, 1);
				}
			}
  ,
  //Count shows as undefined. Is this because it's declared outside of the object? How do I reference the varialbe
  //stored outside the object?
  list: function () {
  			this.cart.forEach(function (thing) {
  				console.log(this.cart.count + ' x ' + this.cart.description);
  			});
  		},
  //cash is showing as undefined. How do I reference the array that I've added my totals to outside of the object?
  total: this.cash.reduce(function(a, b) {
    		return a + b;
    })
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