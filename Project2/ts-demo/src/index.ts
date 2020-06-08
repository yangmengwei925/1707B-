let a:number = 100;

let b:string = 'hello';

let c:boolean = !!'hello';

let d;

// let e: Array<number> = [1,2,3];
let e: number[] = [1,2,3];

let direction: [string, string, string, string] = ['top', 'left', 'down', 'right']; 

enum statusCode {
    'top' = '100',
    'left' = '',
    'down' = '',
    'right' = ''
}

console.log(statusCode['right'], statusCode)

let f:{readonly a?: number} = {};

// console.log(f.a = 200)

interface AjaxType{
    code: number,   // 普通属性
    data?: AjaxType,  // 可有可无的属性
    readonly msg: string, // 只读属性
    [key: string]: any
} 

let g: AjaxType = {
    code: 200,
    data: {
        code: 100,
        msg: '请求成功'
    },
    msg: 'success',
    a: '',
    b: '',
    c: ''
}


// 函数
const add: (a:number, b:number, ...args: any)=>number = (a:number, b:number)=>a+b

add(1, 2, 3, 4, 5, 6);

// 泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap(['hello', 100])

swap([[], {}])

//泛型约束
function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

pick({a:1,b:2,c:3,d:4,e:5}, ['a', 'a', 'b'])

// 联合类型和交叉类型
let h: string | number | boolean = 100;

interface IA{
    click: Function,
    list: []
}

interface IB{
    totalNum: number,
    totalPrice: number
}

let i: IA & IB = {
    click: ()=>{},
    list: [],
    totalNum: 100,
    totalPrice: 1000
}
console.log('i的属性...')

let j = {};
console.log('j的click属性...', (j as IA).click)