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
                controller:  'menuAppController as controller',
                resolve: {
                    items: ['menuDataService', function (menuDataService) {
                        return menuDataService.getAllCategories();
                    }]
                }
            })
    }

})(window);
