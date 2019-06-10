"use strict";
exports.__esModule = true;
function addAvailibilty(a) {
    return function (targetClass) {
        return /** @class */ (function () {
            function class_1() {
                this.availible = a;
            }
            return class_1;
        }());
    };
}
exports.addAvailibilty = addAvailibilty;
