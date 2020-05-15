/**
 * 装饰器
 */
/**
 * 装饰器组合
 */
function fDecorator() {
  console.log("fDecorator(): evaluated");
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("fDecorator(): called", target);
  };
}

function gDecorator() {
  console.log("gDecorator(): evaluated");
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("gDecorator(): called", target);
  };
}

class CDecorator {
  @fDecorator()
  @gDecorator()
  methodDecorator() {
    console.log("CDecorator(): methodDecorator()");
  }
}

new CDecorator().methodDecorator();

/**
 * 类装饰器
 * 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
 */
console.log("类装饰器");

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
let greeter = new Greeter("world");
console.log(greeter.greet());

// 重载构造函数
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter02 {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter02("world"));

/**
 * 方法装饰器
 * 方法装饰器表达式会在运行时当作函数被调用
 * 
 * arget: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象 
 * propertyKey: 成员的名字 
 * descriptor: 成员的属性描述符 {value: any, writable: boolean, enumerable: boolean, configurable: boolean}
 */
console.log("方法装饰器");
function enumerable(value: boolean) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}
class GreeterMethod {
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }
  @enumerable(false)
  greet() {
    return "hello " + this.greeting;
  }
}
let greeterMethodReturm: string = new GreeterMethod("GreeterMethod").greet();
console.log(greeterMethodReturm);

/**
 * 访问装饰器
 */
console.log("访问装饰器");
function configurable(value: boolean) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = value;
  };
}
class VisitDecorator {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  getX() {
    return this._x;
  }
  getY() {
    return this._y;
  }
}
/**
 * 属性装饰器
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列 2个参数：
 * 
 *  1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *  2. 成员的名字
 */
console.log("属性装饰器");
// 定义属性装饰器
import "reflect-metadata";
const formatMetadataKey = Symbol("format");
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
class GreeterProperty {
  @format("hello,%s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet():void {
    let formatStr = getFormat(this, "greeting");
    return formatStr.replace("%s", this.greeting);
  }
}
let propertyResult = new GreeterProperty("GreeterProperty").greet();
console.log(propertyResult);

/**
 * 参数装饰器
 * 参数装饰器表达式会在运行时当作函数被调用，传入下列 3个参数：
 * 
 *  1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *  2. 成员的名字
 *  3. 参数在函数参数列表中的索引
 */
console.log("参数装饰器");
const requiredMetadataKey = Symbol("required");

function required(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    requiredMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey
  );
}

// function validate(
//   target: any,
//   propertyName: string,
//   descriptor: TypedPropertyDescriptor<Function>
// ) {
//   let method = descriptor.value;
//   descriptor.value = function() {
//     let requiredParameters: number[] = Reflect.getOwnMetadata(
//       requiredMetadataKey,
//       target,
//       propertyName
//     );
//     if (requiredParameters) {
//       for (let parameterIndex of requiredParameters) {
//         if (
//           parameterIndex >= arguments.length ||
//           arguments[parameterIndex] === undefined
//         ) {
//           throw new Error("Missing required argument.");
//         }
//       }
//     }
//     return method.apply(this, arguments);
//   };
// }
class GreeterParam {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

//   @validate
  greet(@required name: string) {
    return "Hello " + name + ", " + this.greeting;
  }
}
