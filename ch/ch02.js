/**
 * Copyright © 2016 CheYouYuan. All rights reserved.
 * Author: Lin
 * Email: 139193411@qq.com
 */

var mathArr = {
    odd: function (arr) {
        var oddArr = [], evenArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (Number.isInteger(arr[i])) { //es6判断类型
                if (arr[i] % 2 != 0) {
                    oddArr.push(arr[i]);
                } else {
                    evenArr.push(arr[i]);
                }
            }
        }
        return "偶数是：" + oddArr + ",奇数是：" + evenArr;
    }
}