(function() {

   // Prevent variables from leaking into the parent scope.
   'use strict';

    // Define the overall module, controllers, and service for this app.
   angular.module('NarrowItDownApp',        [])
      .controller('NarrowItDownController', NarrowItDownController)
      .service('menuSearchService',         MenuSearchService);

   // ------------------------------------------------------------------------------------------------

   // Prevent minification issues by defining the dependency injection variables.
   MenuSearchService.$inject = ['$http'];

   function MenuSearchService($http) {
       var service = this;

       service.getMatchedMenuItems = function (searchTerm) {
           var requestConfig = {
               method: "GET",
               url:    "https://davids-restaurant.herokuapp.com/menu_items.json"
           };

           var onSuccess = function (response) {
               var safeTerm   = (searchTerm || "").toLowerCase();
               var hasTerm    = (safeTerm.length > 0);
               var hasData    = (response && response.data && response.data.menu_items);
               var foundItems = [];

               if (hasTerm && hasData) {
                   var responseItems = response.data.menu_items;
                   var index;

                   for (index = 0; index < responseItems.length; index++) {
                       var currentItem     = responseItems[index];
                       var safeDescription = (currentItem.description || "").toLowerCase();

                       if (safeDescription.indexOf(safeTerm) >= 0) {
                           foundItems.push(currentItem);
                       }
                   }
               }

               console.log("Found: ", foundItems);
               return foundItems;
           };

           return $http(requestConfig).then(onSuccess);
       };
   }

   // ------------------------------------------------------------------------------------------------

   // Prevent minification issues by defining the dependency injection variables.
   NarrowItDownController.$inject = ['menuSearchService'];

   // Magic!
   function NarrowItDownController(menuSearchService) {
       var controller = this;

       controller.searchTerm = "";
       controller.found      = [];

       controller.beginSearch = function () {
           menuSearchService.getMatchedMenuItems(controller.searchTerm).then(function(response) {
               controller.found = response;
           });
       };
   }

   // ------------------------------------------------------------------------------------------------

})(window);
