(function () {

    // Prevent variables from leaking into the parent scope.
    'use strict';

    // Define the item component for menu app.
    angular.module('MenuApp').component('items', {
        templateUrl: 'template/item.html',
        bindings: {
            items: '<'
        }
    });

})(window);
