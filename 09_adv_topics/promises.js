//creation
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete');
        resolve(); // Resolve the promise after the async task
    }, 1000);
});

promiseOne.then(function() {
    console.log('Promise consume');
});

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log('Async 2 resolved')
});
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username:"chai",email:"chauhanpiyush922@gmail.com"}); // Resolve the promise after the async task
    }, 1000);
});
promiseThree.then(function() {
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error=true;
        if(!error){
            resolve({username:"PIYUSH",password:"123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 1000);
});
promiseFour.then((user)=>  {
    console.log(user.username);
});