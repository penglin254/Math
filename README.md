# Math
闲来无事，平时看到的一些有趣javascript题目。随手记录一下。

ch01
---
不定参求和，非number类型需要过滤
验证下面的结果：
sum(112,2,'wwew',3,'s');

code:<br>
```
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
```


ch02
===
简单的奇偶数判断:(虽然很简单，但还是写下)

code:</br>

~~~
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
~~~


##关于 MathArr
1.有问题请提交github issue上。<br>
2.有什么好的建议或者改进可以联系作者。

## 联系方式
wechat : 139193411<br>
qq : [139193411](http://wpa.qq.com/msgrd?v=3&uin=139193411&site=qq&menu=yes)

