(function() {

   // Prevent variables from leaking into the parent scope.
   'use strict';

    // Define the overall module, controllers, and service for this app.
   angular.module('ShoppingListCheckOff',   [])
     .controller('ToBuyController',         ToBuyController)
     .controller('AlreadyBoughtController', AlreadyBoughtController)
     .service('shoppingListService',        ShoppingListCheckOffService)
     .filter('extraDollars',                ExtraDollarsFilter);

   // ------------------------------------------------------------------------------------------------

   function ShoppingListCheckOffService() {
      var service = this;

      var toBuyItems = [
        { name: "Butter (1 Pound)",           quantity:  1, pricePerItem: 1.23 },
        { name: "White Sugar (1 Pound)",      quantity:  2, pricePerItem: 2.34 },
        { name: "Brown Sugar (1 Pound)",      quantity:  1, pricePerItem: 5.67 },
        { name: "Eggs",                       quantity: 12, pricePerItem: 8.90 },
        { name: "Vanilla Extract (1 Bottle)", quantity:  1, pricePerItem: 1.35 },
        { name: "Flour (1 Pound)",            quantity:  5, pricePerItem: 7.91 },
        { name: "Baking Soda (Box)",          quantity:  1, pricePerItem: 2.46 },
        { name: "Baking Powder (Can)",        quantity:  1, pricePerItem: 8.02 },
        { name: "Salt (Shaker)",              quantity:  1, pricePerItem: 1.11 },
        { name: "Clove (Canister)",           quantity:  1, pricePerItem: 2.22 },
        { name: "Cinnamon (Sticks)",          quantity:  3, pricePerItem: 3.33 },
        { name: "Quick Oats (Pound)",         quantity:  5, pricePerItem: 4.44 }
      ];

      var boughtItems = [
      ];

      service.getToBuyItems = function () {
         return toBuyItems;
      };

      service.getBoughtItems = function () {
         return boughtItems;
      };

      service.buy = function (itemIndex) {
         // Remove the item from the "to buy" list (at the 0-based index).
         var item = toBuyItems.splice(itemIndex, 1)[0];

         // Move/Add that item onto the "bought" list.
         boughtItems.push(item);
      };
   }

   // ------------------------------------------------------------------------------------------------

   // Prevent minification issues by defining the dependency injection variables.
   ToBuyController.$inject = ['shoppingListService'];

   // Magic!
   function ToBuyController(shoppingListService) {
      var controller = this;

      controller.items = shoppingListService.getToBuyItems();

      controller.buy = function (itemIndex) {
         shoppingListService.buy(itemIndex);
      };
   }

   // ------------------------------------------------------------------------------------------------

   // Prevent minification issues by defining the dependency injection variables.
   AlreadyBoughtController.$inject = ['shoppingListService'];

   // Magic!
   function AlreadyBoughtController(shoppingListService) {
      var controller = this;

      controller.items = shoppingListService.getBoughtItems();
   }

   // ------------------------------------------------------------------------------------------------

   function ExtraDollarsFilter() {
      return function (input) {
         input = input || "";
         return "$$" + input;
      };
   }

   // ------------------------------------------------------------------------------------------------

})(window);
