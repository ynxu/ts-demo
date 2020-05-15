
/**
* 类,对象,接口 
*/

/**
 * 类的声明,变量声明,变量和作用域
 */
class XJJ{
    public name:string; // 公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
    private age:number;// 私有修饰符，只可以在类内使用private修饰的属性和行为。

    protected height:number;// 受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
    readonly weight:number;// 使用readonly修饰符将属性设置为只读，只读属性必须在生命时或者构造函数里被初始化（注意）。
    constructor(name:string,age:number,height:number,weight:number=99){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    print():void{
        console.log("method print:\n name:"+this.name,"age:"+this.age,"height:"+this.height);
    }

}
let xjj:XJJ = new XJJ("美女",18,175);
xjj.print();
console.log(xjj);
console.log(xjj.name)
// console.log(xjj.age);
// console.log(xjj.height);

/**
 * 类的继承 , 方法重写
 */
class SXJJ extends XJJ{
    /**
     * 类方法的重写
     */
    print():void{
        console.log("override:"+this.name+this.height);
    }
}
