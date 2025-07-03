let score="33"
console.log(typeof(score))
let Valscore=Number(score)
console.log(typeof(Valscore))
console.log(Valscore)


score="33abc"
console.log(typeof(score))
Valscore=Number(score)
console.log(typeof(Valscore))
console.log(Valscore)  //not NaN


let bo=1
let bolval=Boolean(bo)
console.log(bolval)

bo="alpha"
bolval=Boolean(bo)
console.log(bolval)



let num=33
let str =String(num)
console.log(str)
console.log(typeof(str))



console.log("1"+2)
console.log(1+"2")
console.log("1"+2)




let al=function(){
    console.log("hello")
}
al()





let a=123.845
console.log(a.toPrecision(3))
a=1000000
console.log(a.toLocaleString('en-in'))


console.log(Math.sqrt(25))
console.log((Math.random())*10)


let date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.getDate().toString()+date.getDay().toString())





let arr1=[1,2,3,4,5,6,7]
let arr2=[8,9,0]
let arr3=[...arr1,...arr2]
console.log(`Array ${arr3}`)

let arr4=[1,2,3,[4,5],6,[7,8,[9,0,12,[13,145,67]]]]
console.log(`Array ${arr4}`)
let arr5=arr4.flat(Infinity)
console.log(`Array ${arr5}`)

//convert to arry
console.log(Array.isArray("Piyush"))
console.log(Array.from("Piyush"))
console.log(Array.from({name:"Piyuhs"})) //give impty arry tell to the basic of arry to make key or value

//make an array of objs
let sc1=2
let sc2=4
let sc3=6
let scarr=Array.of(sc1,sc2,sc3)
console.log(`Array sc : ${scarr}`)




//intervier obj add a symbol key in the object
let exkey=Symbol("Hello") 
console.log(typeof(exkey))
console.log(exkey)
let obj1={
    name :"Piyush",
    age:19,
    exkey:"alpha"
}
console.log(typeof(obj1.exkey))
console.log(obj1)
//correct way
let obj2={
    name :"Piyush",
    age:19,
    [exkey]:"alpha"
}
console.log(typeof(obj2[exkey]))
console.log(obj2)

obj2.greeting=function(){
    console.log(`hello js use ${this.name}`)
}
console.log(obj2.greeting())
obj2.greetingOnly=function(){
    console.log("Hello buddy")
}
console.log(obj2.greetingOnly())


//-----------Basic Finish Here------------//



