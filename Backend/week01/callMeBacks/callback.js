function greet(name, cb){

console.log("Hello", name)
cb()

}

console.log(greet("Mike", () => console.log("Callback Fired")))