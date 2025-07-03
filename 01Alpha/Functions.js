console.log("hello Funn")
function Add(num1,num2){
    console.log(num1+num2)
}
Add
Add(2,5)
function Sub(num1,num2){
    return (num1+num2)
}
let result=Sub(5,7)
console.log(result)

function login(username){
    return `${username}`
}
console.log(login()) //give undefined
console.log(login("Piyush"))


//when we have not info abot the numbers of paramets or arguments
//use rest operator/spread operator both same ...
function MyCartPrice(...itms){
    return itms
}
console.log(MyCartPrice(12,15,14,16,6))
console.log(12,16,34)


//--------------variable function
let hey=function(){
    console.log("Hello buddy")

}
hey()

//-------------Arrow function
let Addition=(a,b)=> (a+b)
console.log(Addition(3,5))


//----IIFE automatically run when app start
;(function chai(){
    console.log("Db connected");
})();

(() =>{
    console.log("Db connected");
})();