/**
 *  函数
 */
// 单个参数
function findOne(age:number):string{
    return "find "+age;
}
// 可选参数
function findTwo(age:number,size?:number):string{
    return "find: age="+age +" size="+size;
}
// 默认参数
function findThree(age:number,size:number=34):string{
    return "find: age="+age +" size="+size;
}
// 可变参数
function findFour(age:number,...others:string[]):string{
    var str:string = "find:";
    str+="age="+age;
    for(let i = 0 ; i<others.length ; i++){
        str+=" other"+i+" :"+others[i];
    }
    console.log("findFour",str);
    return str;
}
var one:string = findOne(18);
console.log("result one:",one)
var two:string = findTwo(18);
console.log("result two:",two)
findFour(18,"好","很好","非常好");
// 函数表达式
var fun1 = function(p1:string,p2:string):number{
    console.log(p1,p2);
    return 0;
}
// 箭头函数
var fun2 = (p1:any):any=>{
    console.log(p1);
    return 0;
}
/**
 * 变量作用域
 */
var nameStr:string = "刘德华"
function testName():void{
    var nameStr:string= "刘哈哈";
    console.log("print in method:",nameStr);
    var nameStr:string= "刘哈哈1";
}
testName();
console.log("print in outside:",nameStr);

// let关键字变量的作用域
function testArea():void{
    var nameA:string = '刘德华'
    {
         let  nameB:string = '小沈阳'
         console.log('技术胖整形成了'+nameB+'的样子')
    }
     console.log('技术胖整形成了'+nameA+'的样子');
    //  console.log('技术胖整形成了'+nameB+'的样子'); // 报错找不到变量
 }
 testArea()
