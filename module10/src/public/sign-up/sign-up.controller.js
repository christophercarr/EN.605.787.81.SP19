(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$http', 'ApiPath', 'AccountService'];

    function SignUpController($http, ApiPath, AccountService) {
        var controller = this;

        var existingInfo = AccountService.getInfo();

        controller.firstName    = existingInfo.firstName;
        controller.lastName     = existingInfo.lastName;
        controller.email        = existingInfo.email;
        controller.phone        = existingInfo.phone;
        controller.favoriteDish = existingInfo.hasData ? existingInfo.favoriteDish.short_name : null;
        controller.invalidDish  = false;
        controller.infoSaved    = false;

        controller.checkDish = function() {

            var onSuccess = function (response) {
                controller.invalidDish = false;
            };

            var onError = function (response) {
                controller.invalidDish = true;
            };

            $http.get(ApiPath + '/menu_items/' + controller.favoriteDish + '.json').then(onSuccess, onError);
        };

        controller.submit = function() {

            var onSuccess = function (response) {
                AccountService.saveInfo(controller.firstName, controller.lastName, controller.email, controller.phone, response.data);
                controller.invalidDish = false;
                controller.infoSaved   = true;
            };

            var onError = function (response) {
                controller.invalidDish = true;
                controller.infoSaved   = false;
            };

            $http.get(ApiPath + '/menu_items/' + controller.favoriteDish + '.json').then(onSuccess, onError);
        };
    }

})();
