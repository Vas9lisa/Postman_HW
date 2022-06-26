let user_name = "Mariia"
// let name2 = Mariia NO! (cntrl+/)
// console.log(user_name) 

let age = 26
// console.log(age)

let person = user_name + " " + age
// console.log(person)
// console.log(user_name + "___" + age)

let user_age = 30
let work_period = 10
let total_time = user_age + work_period
// console.log(total_time)
// console.log("total_time = " + total_time)
// console.log("total_time =", total_time)
// console.log("total_time =", total_time, typeof(total_time))
// console.log("total_time = " + total_time, typeof("total_time =" + total_time))
let total_time1 = user_age - work_period
// console.log("total_time1 =", total_time1)
let total_time2 = user_age * work_period
// console.log("total_time2 =", total_time2)
let total_time3 = user_age / work_period
// console.log("total_time3 =", total_time3)

let morning = false
// console.log("morning =",morning, typeof(morning))

let evening = true
// console.log("evening =",evening, typeof(evening))

let apples = 10
let cherry = 20
let compare = apples > cherry
// console.log(compare)
// console.log("compare =", compare)
let compare1 = apples < cherry
// console.log("compare1 =", compare1)
let compare2 = apples > cherry
console.log("compare2 =", compare2)
let compare3 = apples <= cherry
// console.log("compare3 =", compare3)
let compare4 = apples >= cherry
// console.log("compare4 =", compare4)


if (compare){
    // console.log("compare is", compare)
}



if (compare3){
    // console.log("compare3 is", compare3)
}



if (compare3){
    // console.log("__compare3 is", compare3)
} else {
    // console.log("!!_compare3 is", false)
}



if (compare2){
    console.log("__compare2 is", compare2)
} else if (apples == 15) {
    console.log("apples ==", apples)
} else {
    console.log("!!_compare2 is", false)
}