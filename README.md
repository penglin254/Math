# Math
闲来无事，平时看到的一些有趣javascript题目。随手记录一下

ch01
===
不定参求和，非number类型需要过滤
验证下面的结果：
sum(112,2,'wwew',3,'s');

code:<br>

```
var countArr = {
    sum : function(){
	var count = null, lvArr = [];
	for(var i = 0;i< arguments.length;i++){
	if(Math.floor(arguments[i]) === arguments[i]){
		lvArr.push(arguments[i]);
                count += arguments[i];
        }
    } 
    return count;
    }
}
