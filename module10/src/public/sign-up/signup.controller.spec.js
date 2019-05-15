describe("Testing SignUpController - ", function () {

    var $controller;
    var $httpBackend;
    var ApiPath;
    var signUpController;

    beforeEach(function () {
        module('public');

        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            ApiPath      = $injector.get('ApiPath');
            $controller  = $injector.get('$controller');

            signUpController = $controller('SignUpController', {
                ApiPath: ApiPath
            });

            signUpController.favoriteDish = "SomeInvalidMenuItemId";
        });
    });


    it('should return error, invalid menu item', function () {
        $httpBackend.whenGET(ApiPath + '/menu_items/' + signUpController.favoriteDish + '.json').respond(500, {});

        expect(signUpController.invalidDish).toEqual(false);
        signUpController.checkDish();
        $httpBackend.flush();
        expect(signUpController.invalidDish).toEqual(true);
    });
});
