console.log("== array index ==")
var a = [1, 2, 3]
console.log(a)
console.log(a[0])
console.log(a[a.length-1]) // last one

console.log("== array splice ==")
var a1 = ["a", "b", "c"]
a1.splice(1, 0, "x")
a1.splice(1, 0, "y")
a1.splice(5, 0, "z")
console.log(a1)
