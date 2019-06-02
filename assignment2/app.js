(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showToBuy = this;

  showToBuy.items = ShoppingListCheckOffService.getItems();

  showToBuy.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBought = this;
  showBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var items = [
    {name: "nugget", quantity: 1},
    {name: "cockles", quantity: 10},
    {name: "ponies", quantity: 25},
    {name: "tons", quantity: 100},
    {name: "monkeys", quantity: 500},
  ];

  var boughtitems = [];

  service.moveItem = function (itemIndex) {
    boughtitems.push(items[itemIndex]);
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return boughtitems;
  };

}

})();
