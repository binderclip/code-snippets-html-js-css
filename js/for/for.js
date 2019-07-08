var l = ["foo", "bar", "baz"]
console.log("== l for i++ ==")
for (var i = 0; i < l.length; i++) {
    console.log("" + i + ": " + l[i])
}

console.log("== l for in ==")
for (is in l) {
    console.log(is + ", " + (is + 0)) // 'is' is string
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
