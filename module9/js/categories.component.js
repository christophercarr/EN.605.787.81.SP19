(function () {

    // Prevent variables from leaking into the parent scope.
    'use strict';

    // Define the component for menu app.
    angular.module('MenuApp').component('categoryList', {
        templateUrl: 'template/category.html',
        bindings: {
            items: '<'
        }
    });

})(window);
