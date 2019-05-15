(function () {
    "use strict";

    angular.module('public')
        .service('AccountService', AccountService);

    AccountService.$inject = [];

    function AccountService() {
        var service = this;

        service.account = {
            hasData:      false,
            firstName:    null,
            lastName:     null,
            email:        null,
            phone:        null,
            favoriteDish: null
        };

        service.saveInfo = function (firstName, lastName, email, phone, favoriteDish) {
            service.account.hasData      = true;
            service.account.firstName    = firstName;
            service.account.lastName     = lastName;
            service.account.email        = email;
            service.account.phone        = phone;
            service.account.favoriteDish = favoriteDish;
        };


        service.getInfo = function () {
            return service.account;
        };
    }
})();
