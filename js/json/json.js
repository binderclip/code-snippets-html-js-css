obj = {"a": "aa", "b": "bb"}
console.log(obj)
console.log({ "a": "aa" }.a)
// console.log({ "1": "aa" }.1)    // error
console.log({ "1": "aa" }["1"])
console.log({ 1: "aa" }["1"])
console.log({ 1: "aa" }[1])
console.log({ 1: "aa" }[2])
