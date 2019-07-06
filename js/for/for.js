console.log("== l for in ==")
var l = ["foo", "bar", "baz"]
for (i in l) {
    console.log(i)
}
console.log("== l forEach ==")
l.forEach((s) => {
    console.log(s)
})
l.forEach((s, idx, arr) => {
    console.log(s, idx, arr)
})
console.log("== l for of ==")
for (s of l) {
    console.log(s)
}
