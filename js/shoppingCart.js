// ***************************************************
// Shopping Cart functions

var shoppingCart = (function () {
    // Private methods and properties
    var cart = [];

    function Item(category, name, price, count) {
        this.category = category
        this.name = name
        this.price = price
        this.count = count
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();



    // Public methods and properties
    var obj = {};

    obj.addItemToCart = function (category, name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
             alert('item already exists in the cart!');
                return;
            }
        }

        console.log("addItemToCart:", name, price, count);

        var item = new Item(category, name, price, count);
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCart = function (name) { // Removes one item
        for (var i in cart) {
            if (cart[i].name === name) { // "3" === 3 false
                cart[i].count--; // cart[i].count --
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCartAll = function (name) { // removes all item name
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };


    obj.clearCart = function () {
        cart = [];
        saveCart();
    }


    obj.countCart = function () { // -> return total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    obj.totalCart = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

    obj.listCart = function () { // -> array of Items
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ----------------------------
    return obj;
})();

let total = 0;

const addCart = function(total, newValue) {
  newValue = parseFloat(newValue);
  let sum = total + newValue;
  if(isNaN(sum)){
    return total;
  }
  return sum;
}

const setText = function(content){
  $('#total').text(content);
}

const clickHandler = function (event) {
  event.preventDefault();
  let value = $(this).val();
  total = addValue(total, value);
  const displayTotal = total.toFixed(2)
  setText(displayTotal);
}

$('.btn').on('click', clickHandler);


