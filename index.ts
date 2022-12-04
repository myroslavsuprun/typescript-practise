// function Logger(logString: string) {
//     return function (constructor: Function) {
//         console.log(logString);
//     }
// }

// function AddProperty() {
//     return function (constructor: Function) {
//         console.log('Modify');
//         constructor.prototype.modify = true;
//         console.log(constructor);
//     }
// }

// @AddProperty()
// @Logger('Logging - controller')
// class Controller {
//     public id = 1;
//     public modify?: boolean
// }

// const controller = new Controller();

// console.log('Modified classes', controller.modify)

// interface IDecoration {
//     parent: string;
//     template: string;
// }

// function ControllerDecoration(config: IDecoration) {
//     return function <T extends { new(...args: any[]): { content: string } }>(originalConstructor: T) {
//         return class extends originalConstructor {
//             private element: HTMLElement;
//             private parent: HTMLElement;

//             constructor(...arg: any[]) {
//                 super(...arg);
//                 this.parent = document.getElementById(config.parent)!;
//                 this.element = document.createElement(config.template);

//                 this.element.innerHTML = this.content;

//                 this.parent.appendChild(this.element);
//             }
//         }
//     }
// }

// @ControllerDecoration({
//     parent: 'app',
//     template: 'H!',
// })
// class Controller {
//     public content = 'My custom controller';
// }

// const controller = new Controller();

// function ShowMeParams(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log('target', target);
//     console.log('name', name);
//     console.log('descriptor', descriptor);
// }

// class Notifier {
//     @ShowMeParams()
//     showMessage() {
//         console.log('Show message');
//     }
// }


// function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
//     const method = descriptor.value;

//     return {
//         configurable: true,
//         enumerable: false,
//         get() {
//             return (...args: any[]) => {
//                 const result = method.apply(this, args);

//                 return result + (result / 100 * taxPercent)
//             }
//         }
//     }
// }

// class Notifier {
//     @AutoBind
//     showMessage() {
//         console.log('Show message');
//     }
// }

// const notifier = new Notifier();

// const showMessage = notifier.showMessage;

// showMessage();


// function AddTax(taxPercent: number) {
//     return (_: any, _2: string, descriptor: PropertyDescriptor) => {
//        const method = descriptor.value;

//        return {
//            configurable: true,
//            enumerable: false,
//            get() {
//                return (...args: any[]) => {
//                    const result = method.apply(this, args);

//                    return result + (result / 100 * taxPercent)
//                }
//            }
//        }
//    }
// }

// class Payment {
//     @AddTax(20)
//     pay(money: number): number {
//         return money;
//     }
// }

// const payment = new Payment();

// console.log('Amount with tax: ', payment.pay(100));


// function CheckEmail(target: any, name: string, position: number) {
//     console.log('target', target);
//     console.log('name', name);
//     console.log('position', position);
// }

// class Person {
//     setEmail(@CheckEmail email: string) {
//         console.log(email);
//     }
// }

// function CheckEmail(target: any, name: string, position: number) {
//     if (!target[name].validation) {
//         target[name].validation = {};
//     }

//     Object.assign(target[name].validation, {
//         [position]: (value: string) => {
//             if (value.includes('@')) {
//                 return value;
//             }

//             throw new Error('No valid field');
//         }
//     });
// }

// function Validation(_: any, _2: string, descriptor: PropertyDescriptor) {
//     const method = descriptor.value;

//     return {
//         configurable: true,
//         enumerable: true,
//         get() {
//             return ((...args: any[]) => {
//                 if (method.validation) {
//                     args.forEach((item, index) => {
//                         if (method.validation[index]) {
//                            args[index] = method.validation[index](item);
//                         }
//                     });
//                 }
//                 return method.apply(this, args);
//             })
//         }
//     }
// }

// class Person {
//     @Validation
//     setEmail(@CheckEmail email: string) {
//         console.log(email);
//     }
// }

// const person = new Person();

// person.setEmail('test@gmail.com');

