console.log("== array index ==")
var a = [1, 2, 3]
console.log(a)
console.log(a[0])
console.log(a[a.length-1]) // last one

console.log("== array splice ==")
var a1 = ["a", "b", "c"]
// start, delete, insert
a1.splice(1, 0, "x")
a1.splice(1, 0, "y")
a1.splice(5, 0, "z")
console.log(a1)
a1.splice(0, 2)
console.log(a1)

var a2 = ["a"]
a2.push("b")
a2.push("c")
console.log(a2)

var a3 = ["a", "b"]
var a4 = ["c", "d"]
console.log(a3.concat(a4))
console.log(a3)

var a5 = ["a", "a", "b"]
var s5 = new Set(a5)
console.log(s5)
var a6 = new Array(s5)
console.log(a6) // [ Set { 'a', 'b' } ]
var a7 = Array.from(s5)
console.log(a7) // [ 'a', 'b' ]
