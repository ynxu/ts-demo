"use strict";
// hello world
var a = "Hello World";
console.log(a);
/**
 * 变量类型
 */
// number
var age = 18;
var stature = 185.5;
var bplus = Infinity;
console.log(age, stature, bplus);
// string
var str = "hello world!";
//boolean
var t = true;
var f = false;
//enum
var Sex;
(function (Sex) {
    Sex[Sex["men"] = 0] = "men";
    Sex[Sex["feman"] = 1] = "feman";
    Sex["other"] = "\u5176\u4ED6";
})(Sex || (Sex = {}));
var Season;
(function (Season) {
    Season["spring"] = "\u6625";
    Season["summer"] = "\u590F";
    Season["autumn"] = "\u79CB";
    Season["winter"] = "\u4E1C";
})(Season || (Season = {}));
;
console.log(Sex.men, Sex.other);
//any类型
