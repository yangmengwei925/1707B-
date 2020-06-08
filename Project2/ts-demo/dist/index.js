"use strict";
var a = 100;
var b = 'hello';
var c = !!'hello';
var d;
// let e: Array<number> = [1,2,3];
var e = [1, 2, 3];
var direction = ['top', 'left', 'down', 'right'];
var statusCode;
(function (statusCode) {
    statusCode["top"] = "100";
    statusCode["left"] = "";
    statusCode["down"] = "";
    statusCode["right"] = "";
})(statusCode || (statusCode = {}));
console.log(statusCode['right'], statusCode);
var f = {};
var g = {
    code: 200,
    data: {
        code: 100,
        msg: '请求成功'
    },
    msg: 'success',
    a: '',
    b: '',
    c: ''
};
// 函数
var add = function (a, b) { return a + b; };
add(1, 2, 3, 4, 5, 6);
// 泛型
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap(['hello', 100]);
swap([[], {}]);
//泛型约束
function pick(o, names) {
    return names.map(function (n) { return o[n]; });
}
pick({ a: 1, b: 2, c: 3, d: 4, e: 5 }, ['a', 'a', 'b']);
// 联合类型和交叉类型
var h = 100;
var i = {
    click: function () { },
    list: [],
    totalNum: 100,
    totalPrice: 1000
};
console.log('i的属性...');
var j = {};
console.log('j的click属性...', j.click);
