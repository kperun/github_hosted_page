(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('AlreadyBoughtController', BoughtController)
        .controller('ToBuyController', BuyController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    BuyController.$inject = ['ShoppingListCheckOffService'];
    function BuyController(ShoppingListFactory) {
        var shoppingList = ShoppingListFactory;
        var list = this;
        list.items = shoppingList.getToBuyItems();

        list.buyItem = function (name, quantity) {
            shoppingList.removeItemFromToBuy(name);
            shoppingList.addItemToBought(name, quantity);
            console.log("frombuy", shoppingList.getBoughtItems());
        }

        list.addItem = function (name, quantity) {
            shoppingList.addItem(name, quantity, true, false);
        }

        list.removeItem = function (name) {
            shoppingList.removeItem(name, true, false);
        }

        list.isEmpty = function () {
            return shoppingList.getToBuyItems().length == 0;
        }

    }

    BoughtController.$inject = ['ShoppingListCheckOffService'];
    function BoughtController(ShoppingListFactory) {
        var shoppingList = ShoppingListFactory;
        var list = this;
        list.items = shoppingList.getBoughtItems();

        list.addItem = function (name, quantity) {
            shoppingList.addItem(name, quantity, false, true);
        }

        list.removeItem = function (name) {
            shoppingList.removeItem(name, false, true);
        }

        list.isEmpty = function () {
            return shoppingList.getBoughtItems().length == 0;
        }

        list.getItems = function () {
            console.log(shoppingList.getBoughtItems());
        }

    };

    function ShoppingListCheckOffService() {
        var service = this;

        // list of items
        var toBuyItems = [];
        var boughtItems = [];

        toBuyItems.push({
            name: 'cookies',
            quantity: '10'
        });
        toBuyItems.push({
            name: 'cola',
            quantity: '2'
        });
        toBuyItems.push({
            name: 'chips',
            quantity: '3'
        });
        toBuyItems.push({
            name: 'sandwich',
            quantity: '12'
        });
        toBuyItems.push({
            name: 'fanta',
            quantity: '2'
        });
        toBuyItems.push({
            name: 'beer',
            quantity: '6'
        });
        toBuyItems.push({
            name: 'meat',
            quantity: '4'
        });
        toBuyItems.push({
            name: 'vegis',
            quantity: '3'
        });
        toBuyItems.push({
            name: 'cheese',
            quantity: '10'
        });
        toBuyItems.push({
            name: 'cake',
            quantity: '1'
        });
        

        service.addItemToBought = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            boughtItems.push(item);
        };

        service.removeItemFromToBuy = function (name) {
            var index = -1;
            for (var item in toBuyItems) {
                if (toBuyItems[item].name === name) {
                    index = toBuyItems.indexOf(toBuyItems[item]);
                    break;
                }
            }
            if (index > -1) {
                toBuyItems.splice(index, 1);
            }
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        }
    }
    
})();