console.log(true || false)
console.log(false || true)
console.log(false || true||false)
//В любом случае будет тру при || в любом месте. Это логическое или ||

console.log(false && true)
console.log(true && false)
console.log(true && false && true)
console.log(false && true && false)
//В любом случае будет фолс при && в любом месте. Это логическое и &&

console.log(true && false || true)
console.log(true && false || true && false)
console.log(true && false || true && true)
// И (&&) будет как умножение, а ИЛИ (||) будет как сложение - при очередности действия в примерах.

if(true && true || false){
    console.log("1")
} else {
    console.log("2")
}

let age = 18
let money = 1000
let dog =true

