(function () {

    // Prevent variables from leaking into the parent scope.
    'use strict';

    // Define the routing for this app.
    angular.module('MenuApp').config(Config);

    // Prevent minification issues by defining the dependency injection variables.
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Config($stateProvider, $urlRouterProvider) {

        // Default to the home page if there is no matching URL.
        $urlRouterProvider.otherwise('/');

        $stateProvider

            // -----------------
            // Default/Home Page
            .state('home', {
                url:         '/',
                templateUrl: 'template/home.html'
            })

            // -------------------------
            // Show Available Categories
            .state('categories', {
                url:         '/categories',
                templateUrl: 'template/categories.html',
                controller:  'menuAppCategoryController as controller',
                resolve: {
                    items: ['menuDataService', function (menuDataService) {
                        return menuDataService.getAllCategories();
                    }]
                }
            })

            // --------------------------------
            // Show Items From A Given Category
            .state('items', {
                url:         '/items/{categoryShortName}',
                templateUrl: 'template/items.html',
                controller:  'menuAppItemController as controller',
                resolve: {
                    data: ['$stateParams', 'menuDataService', function ($stateParams, menuDataService) {
                        return menuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            })
    }

})(window);
