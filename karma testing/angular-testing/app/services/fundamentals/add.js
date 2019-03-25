(function () {
    'use strict';

    angular.module('api.fundamentals', [])
        .factory('Fundamentals', () => {
            var values = {};
            var a = 44;
            var b = 22;
            values.add = function add(a, b) {
                return a+b;
            };

            values.sub = function sub(a, b){
                return a-b;
            };

            return values;
        });
});
