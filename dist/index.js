"use strict";
let a;
a = '1';
const aa = 4;
const b = 'as';
const c = 3;
const d = true;
const ea = [2, 3];
const f = [4, 5, 8];
//tuple
const g = ['g', 5, true];
const h = [
    ['l', true, 5],
    ['l', true, 5],
    ['l', true, 5]
];
//union
const e = 6;
//enum  *****
var i;
(function (i) {
    i[i["up"] = 5] = "up";
    i[i["down"] = 6] = "down";
    i[i["left"] = 7] = "left";
    i[i["right"] = 8] = "right";
})(i || (i = {}));
console.log(i.right);
const j = {
    name: 'aa',
    id: 5
};
//type assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
customerId = 54;
//function *****
function addNum(a, b) {
    return a + b;
}
/*****/
function add2number(a) {
    console.log(a);
}
let user;
const user1 = {
    id: 255,
    name: 'jjj'
};
const add = (x, y) => x + y;
// ****** class
class Person {
    constructor(id, name) {
        this.userId = id;
        this.userName = name;
    }
    person() {
        return `${this.userName} is ragistered pace ${this.userId}`;
    }
}
const amin = new Person(1, 'alamin');
const aminKhan = new Person(10, 'alamin khan');
console.log(amin.person());
console.log(aminKhan.person());
// practice class
class Games {
    constructor(gId, gName, gPlayerCount) {
        this.id = gId;
        this.name = gName;
        this.playerCount = gPlayerCount;
    }
    footBall() {
        return `${this.id} number game is ${this.name} played by ${this.playerCount} player`;
    }
}
const footBallMatch = new Games(1, 'foot ball', 10);
console.log(footBallMatch);
class Work extends Games {
    constructor(gId, gName, PlayerCount, duration) {
        super(gId, gName, PlayerCount);
        this.duration = duration;
    }
    work() {
        return `work extend ${this.id} ${this.name} ${this.playerCount} ${this.duration}`;
    }
}
const workTest = new Work(5, 'egg', 5, 6);
console.log(workTest.footBall());
//generics
function getArray(item) {
    return new Array().concat(item);
}
const getNumber = getArray([2, 3]);
const getString = getArray(['ff', 'fff']);
function getArrays(item) {
    return new Array().concat(item);
}
let getNumbers = getArrays([1, 2, 3]);
let getStrings = getArrays(['ff', 'fff']);
//typescript install in react command
// npx create-react-app . --template typescript
//typescript in react
