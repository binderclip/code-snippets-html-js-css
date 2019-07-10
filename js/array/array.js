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
