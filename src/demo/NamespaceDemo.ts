
/**
 * 命名空间
 */
namespace Space01{
    export class DH{
        public name:string="刘德华";
        talk():void{
            console.log(this.name);
        }
    }
}
namespace Space02{
    export class DH{
        public name:string="马德华";
        talk():void{
            console.log(this.name);
        }
    }
}
let dehua01:Space01.DH = new Space01.DH();
let dehua02:Space02.DH = new Space02.DH();
dehua01.talk();
dehua02.talk();
