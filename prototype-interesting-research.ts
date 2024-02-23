console.log('1',({}).prototype === ({}).__proto__) // ?

function func1() {}
console.log('2', func1.prototype === func1.__proto__) // ?


function func2() {}
function func3() {}

console.log('3',func2.__proto__ === func3.__proto__)


let Component = (props) => {
    return `<div>I dont know</div>>`
}

console.log('4', Component.prototype === Object.prototype)

let age = 18

console.log('5',age.prototype === Number.prototype)
console.log('6',age.__proto__ === Number.prototype)