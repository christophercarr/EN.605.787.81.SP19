(function () {

    // Prevent variables from leaking into the parent scope.
    'use strict';

    // Define the item controller for menu app.
    angular.module('MenuApp').controller('menuAppItemController', MenuAppItemController);

    // ------------------------------------------------------------------------------------------------

    // Prevent minification issues by defining the dependency injection variables.
    MenuAppItemController.$inject = ['data'];

    function MenuAppItemController(data) {
        var controller = this;

        controller.category = data.category   || {};
        controller.items    = data.menu_items || [];
    }

})(window);
