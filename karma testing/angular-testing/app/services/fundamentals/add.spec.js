describe("Addition and Subtraction", () => {
    var values = {};
    var a = 44;
    var b = 22;

    beforeEach(angular.mock.module('api.fundamentals'));

    beforeEach(inject(function(_Fundamentals_) {
        values = _Fundamentals_;
    }));
    it("should return addition value", () => {
        expect(values.add).toBe(66);
    });
    /*it("should return addition value", () => {
        expect(values.sub).toBe(22);
    });*/
});