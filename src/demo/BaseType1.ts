// hello world
var a: string = "Hello World";
console.log(a);

/**
 * 变量类型
 */
// number
var age: number = 18;
var stature:number = 185.5;
var bplus :number = Infinity;
console.log(age,stature,bplus);
// string
var str :string = "hello world!";
//boolean
var t :boolean = true;
var f:boolean = false;
//enum
enum Sex {men,feman,other="其他"}
enum Season{spring="春",summer="夏",autumn="秋",winter="东"};
console.log(Sex.men,Sex.other);
//any类型