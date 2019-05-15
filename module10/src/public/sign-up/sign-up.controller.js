(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$http', 'ApiPath', 'AccountService'];

    function SignUpController($http, ApiPath, AccountService) {
        var controller = this;

        controller.firstName    = null;
        controller.lastName     = null;
        controller.email        = null;
        controller.phone        = null;
        controller.favoriteDish = null;
        controller.invalidDish  = false;
        controller.infoSaved    = false;

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
