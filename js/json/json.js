obj = {"a": "aa", "b": "bb"}
console.log(obj)
console.log({ "a": "aa" }.a)
// console.log({ "1": "aa" }.1)    // error
console.log({ "1": "aa" }["1"])
console.log({ 1: "aa" }["1"])
console.log({ 1: "aa" }[1])
console.log({ 1: "aa" }[2])

console.log("== json to string ==")
console.log(JSON.stringify(obj))
console.log(JSON.stringify(obj, null, 2))
