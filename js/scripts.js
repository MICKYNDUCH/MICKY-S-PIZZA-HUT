var pizza = [
    { name: "GRILLED CHICKEN PIZZA" },
    { name: "CORN PIZZA" },
    { name: "VEGGIES PIZZA" },
    { name: "MEAT PIZZA" },
    { name: "PEPPERONI PIZZA" },
]
var pizzaPrices =[
{
  size: "small",
  price: 800,
},
{
  size: "medium",
  price: 1200,
},
{
  size:"large",
  price: 1500,
}
]
var crust :[
    {
        name: "cheese",
        price: 200,
    },
    {
        name: "bread",
        price: 150,
    },
    {
        name: "STUFFED",
        price: 150,
    },
    {
      name:"crackers",
      price:150,
    }
];

var toppings =["meat", "cheese", "crackers", "stuffed"]

Pizza.prototype.setSize = function (size) {
    const pizzaSize = pizzaSizes.find((pizzaSize) => pizzaSize.size == size);
    if (pizzaSize) {
        this.size = pizzaSize;
        this.calculateTotal();
    }
};

Pizza.prototype.setCrust = function (name) {
    const pizzaCrust = pizzaCrusts.find((pizzaCrust) => pizzaCrust.name == name);
    if (pizzaCrust) {
        this.crust = pizzaCrust;
        this.calculateTotal();
    }
};

Pizza.prototype.setTopings = function (toppings) {
    this.toppings = toppings;
    this.calculateTotal();
};

Pizza.prototype.calculateTotal = function () {
    const toppingPrice = 100;

    if (this.size) {
        this.price = this.size.price;
    }

    if (this.crust) {
        this.price = this.price + this.crust.price;
    }

    // Add Topping Price
    this.price += this.toppings.length * toppingPrice;

    this.price *= this.quantity;
};

Pizza.prototype.calculateTotal = function () {
    const toppingPrice = 100;

    if (this.size) {
        this.price = this.size.price;
    }

    if (this.crust) {
        this.price = this.price + this.crust.price;
    }

    // Add Topping Price
    this.price += this.toppings.length * toppingPrice;

    this.price *= this.quantity;
};
