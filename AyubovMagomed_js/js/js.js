let name = 'Magomed' // string
let age = 16 // number
if(age > 15){
    console.log(`Hello ${name}!`)
}else(console.log('Доступ запрещен!'))
function viewMoney(){
    console.log('Here is your 10$')
}

function getMoney(cash){
    return `Here is your ${cash}$` 
} 

viewMoney()
console.log(getMoney(15))

function block(block1){
    console.log(Math.pow(block1, 2))
}
block(10)

function getMaxNumber(a, b, c) {
    if (a >= b && a >= c) {
      console.log(a);
    } else if (b >= a && b >= c) {
      console.log(b);
    } else {
      console.log(c);
    }
  }
  
  getMaxNumber(12, 66, 9);

function Discrm(a ,b ,c){
    console.log(b * b) - (4 * a * c)
}

console.log(Discrm(3, 11, 3))

function foo(a, b) {
    if(a % 2 && b % 2) {
        return a + b;
    } else if(a % 2 || b % 2) {
        if(a % 2) {
            return a;
        }
        return b;
    } else {
        return a * b;
    }
}

console.log(foo(11, 24))