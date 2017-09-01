'use strict';

/*************************************************
 * Export module
 */
module.exports = Logic;

/*************************************************
 * Define logic
 */
function Logic(value) {
    this.value = value;

    this.hello = function () {
        return "hello world: " + this.value;
    };

}

