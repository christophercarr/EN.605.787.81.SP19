(function () {

    // Prevent variables from leaking into the parent scope.
    'use strict';

    // Define the category component for menu app.
    angular.module('MenuApp').component('categories', {
        templateUrl: 'template/category.html',
        bindings: {
            items: '<'
        }
    });

})(window);
