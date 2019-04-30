(function () {

    // Prevent variables from leaking into the parent scope.
    'use strict';

    // Define the category controller for menu app.
    angular.module('MenuApp').controller('menuAppCategoryController', MenuAppCategoryController);

    // ------------------------------------------------------------------------------------------------

    // Prevent minification issues by defining the dependency injection variables.
    MenuAppCategoryController.$inject = ['items'];

    function MenuAppCategoryController(items) {
        var controller = this;

        controller.items = items || [];
    }

})(window);
