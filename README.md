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

ch03
===
用js实现如下代码，给定一个只包含整数且长度为n的数组A，在A中是否能找到a，b，c3个数，使得a+b+c=0？如果能找到，则找到所有可能，如果没找到，则输出没有找到。

code:</br>

~~~
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
~~~

## 关于MathArr
1.有问题请提交github issue上。<br>
2.有什么好的建议或者改进可以联系作者。

## 联系方式
wechat : 139193411<br>
qq : [139193411](http://wpa.qq.com/msgrd?v=3&uin=139193411&site=qq&menu=yes)

