/**
 * 接口声明
 */
interface Husband{
    sex:string;
    interest:string[];
    buy?:boolean;
    // nice(param01:string):boolean;
}
let myhusband01:Husband ={ sex:'男',interest:['看书','作家务']}
let myhusband02:Husband ={ sex:'男',interest:['看书','作家务'],buy:true}

/**
 * 规范函数类型接口
 */
interface SearchMan{
    (source:string,substr:string):boolean
}
let searchMan:SearchMan = function(source:string,substr:string):boolean{
    let flag = source.search(substr);
    return flag != -1;
}
