/**
 * Copyright © 2016 CheYouYuan. All rights reserved.
 * Author: Lin
 * Email: 139193411@qq.com
 */

var mathArr = {
    zero: function (arr) {
        var x;
        for (var i = 0; i < arr.length - 2; i++) {
            x = i;
            for (var j = x - 1; j >= 0; j--) {
                for (var k = x + 1; k < arr.length; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        console.log(arr[i], arr[j], arr[k])
                    }
                }
            }
        }
    }
}