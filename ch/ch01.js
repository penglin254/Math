/**
 * Copyright © 2016 CheYouYuan. All rights reserved.
 * Author: Lin
 * Email: 139193411@qq.com
 */

var mathArr = {
    sum: function () {
        var count = null, lvArr = [];
        for (var i = 0; i < arguments.length; i++) {
            if (Math.floor(arguments[i]) === arguments[i]) {
                lvArr.push(arguments[i]);
                count += arguments[i];
            }
        }
        return count;
    }
}