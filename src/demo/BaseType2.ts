
 /**
  * 引用类型
  */
 let obj01 = {
    name:"哈哈哈",
   age:18,
   say:function(){
       console.log("say hahaha !");
   }
}
/**
 * 数组 --
 */ 
let arr01:number[] =[];
let arr02:number[] =[1,2,3];
let arr03:Array<string> = ["name1","name2","name3"];
//  console.log(arr01,arr02);

/**
*  元祖
*/
// 01声明
let tupe01:[number,string];
// 02 赋值
tupe01=[1,"hello"];

/**
* 字符串
*/
let strA:string="string a";
let strB:String = new String("string b"); // [String: 'string b']
console.log(strB);
// 字符串长度
let strALength:number = strA.length;
// 查找字符串
let strAIndex:number = strA.indexOf("a");
// 截取字符串
let strASubString:string = strA.substring(2,strA.length);
// 替换字符串
let strAReplace:string = strA.replace("a","x");

/**
* 日期对象
*/
let date00:Date = new Date(); // 2018-12-11T07:11:36.844Z
let date01:Date = new Date(1000); // 1970-01-01T00:00:01.000Z
let date02:Date = new Date('2018/09/06 05:30:00'); //2018-09-05T21:30:00.000Z
let date03:Date = new Date('2018-09-06 05:30:00');
let date04:Date = new Date('2018-09-06T05:30:00');
// let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);
console.log(date02,date03,date04) // 

/**
* 正则表达式
*/
console.log("=================")
console.log("正则表达式")
let reg01:RegExp = new RegExp("helloworld")  //表示字符串规则里含有 helloworld
console.log(reg01)
let reg02:RegExp = new RegExp("helloworld","gi")
console.log(reg02)
let regTest01:boolean = reg01.test("helloworld01")
let regTest02 = reg01.exec("01helloworld01")// [ 'helloworld',index: 2,input: '01helloworld01',groups: undefined ]
console.log(regTest01,regTest02); 
