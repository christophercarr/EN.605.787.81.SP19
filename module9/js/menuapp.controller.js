(function() {

    // Prevent variables from leaking into the parent scope.
    'use strict';

    // Define the controller for menu app.
    angular.module('MenuApp').controller('menuAppController', MenuAppController);

    // ------------------------------------------------------------------------------------------------

    // Prevent minification issues by defining the dependency injection variables.
    MenuAppController.$inject = ['items'];

    function MenuAppController(items) {
        var controller = this;

        controller.items = items;

        console.log("Menu App Controller: (items)", controller.items);
    }

})(window);
