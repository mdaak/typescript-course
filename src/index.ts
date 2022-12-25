let a:string;
a='1';
const aa:any=4;
const b:string='as';
const c:number=3;
const d:boolean=true;

const ea:number[]=[2,3];
const f:(number|string)[]=[4,5,8]

//tuple
const g:[string,number,boolean]=['g',5,true]
const h:[string,boolean,number][]=[
    ['l',true,5],
    ['l',true,5],
    ['l',true,5]
]
//union
const e:number|string=6;
//enum  *****
enum i{
    up=5,
    down,
    left,
    right
}
console.log(i.right)

//object **** 
type ja={
    name:string,
    id:number
}
const j:ja={
name:'aa',
id:5
}

//type assertion
let cid:any=1;
// let customerId = <number>cid;
let customerId = cid as number;
customerId=54;

  
//function *****

function addNum(a:number,b:number):number{
    return a+b
}
/*****/
function add2number(a:string|number):void{
 console.log(a)
}
let user:(name:string, id:number)=> number;

//interface is like type
// ******** type takes union value but interface dos not take union value

//interface use in object and function


type Point = number | string;
interface UserInterface{
    readonly id:number,
    name:string,
     age?:45
}

const user1:UserInterface={
    id:255,
    name:'jjj'
}
//**** interface use in function */
interface MathFunc{
    (x:number,y:number):number
}
const add:MathFunc=(x:number,y:number):number=>x+y

// ****** class
class Person{
    userId:number;
    userName:string
    constructor(id:number, name:string){
        this.userId=id;
        this.userName=name
    }
    person(){
        return `${this.userName} is ragistered pace ${this.userId}`
    }
}

const amin = new Person(1,'alamin')
const aminKhan = new Person(10,'alamin khan')
console.log(amin.person())
console.log(aminKhan.person())

// practice class


class Games{
    id:number;
    name:string;
    playerCount:number;
    constructor(gId:number, gName:string, gPlayerCount:number){
        this.id=gId
        this.name=gName
        this.playerCount=gPlayerCount
    }
    footBall(){
        return `${this.id} number game is ${this.name} played by ${this.playerCount} player`
    }

}

const footBallMatch = new Games(1, 'foot ball', 10)
console.log(footBallMatch)
class Work extends Games{
    duration:number
    constructor(gId:number, gName:string, PlayerCount:number, duration:number){
        super(gId,gName,PlayerCount)
        this.duration=duration
    }
    work(){
        return `work extend ${this.id} ${this.name} ${this.playerCount} ${this.duration}`
    }
}
const workTest = new Work(5,'egg',5,6)
console.log(workTest.footBall())


//generics
function getArray(item:any[]):any[]{
    return new Array().concat(item)
}

const getNumber = getArray([2,3])
const getString = getArray(['ff','fff'])


function getArrays<T>(item:T[]):T[]{
    return new Array().concat(item)
}

let getNumbers = getArrays<number>([1,2,3]);
let getStrings = getArrays<string>(['ff','fff'])


//typescript install in react command
// npx create-react-app . --template typescript
//typescript in react