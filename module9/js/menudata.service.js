(function () {

    // Prevent variables from leaking into the parent scope.
    'use strict';

    // Define the service for data app.
    angular.module('data').service('menuDataService', MenuDataService);

    // Prevent minification issues by defining the dependency injection variables.
    MenuDataService.$inject = ['$http'];

    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            var requestConfig = {
                method: 'GET',
                url:    'https://davids-restaurant.herokuapp.com/categories.json'
            };

            var onSuccess = function (response) {
                return response.data;
            };

            return $http(requestConfig).then(onSuccess);
        };

        service.getItemsForCategory = function (categoryShortName) {
            var requestConfig = {
                method: 'GET',
                url:    'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
            };

            var onSuccess = function (response) {
                return response.data;
            };

            return $http(requestConfig).then(onSuccess);
        };
    }

})(window);
