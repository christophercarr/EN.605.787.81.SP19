(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['ApiPath', 'accountInfo'];

    function MyInfoController(ApiPath, accountInfo) {
        var controller = this;

        controller.basePath    = ApiPath;
        controller.accountInfo = accountInfo;
    }
})();
