console.log("== new Date ==")
var date1 = new Date('December 17, 1995 03:24:00')
console.log(date1)
// Sun Dec 17 1995 03:24:00 GMT...
var date2 = new Date('1995-12-17T03:24:00')
// Sun Dec 17 1995 03:24:00 GMT...
console.log(date2)
var date3 = new Date('1995-12-17 03:24:00')
console.log(date3)
var date4 = new Date('1995-12-17 04:24:00')
var now = new Date()
console.log(now); // 2019-07-05T14:58:44.880Z

console.log("== compare dates ==")
console.log(date1 === date2)
// expected output: false
console.log(date3 > date4)

console.log("== math of dates ==")
console.log(date1 - date2)
// expected output: 0

console.log("== timestamp ==")
var ts = Date.now()
console.log(ts) // 1562338724879
var ts2 = + new Date()
console.log(ts2) // 1562338778067

console.log("== time format ==")
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(now.toLocaleDateString("zh-CN", options))

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://www.w3schools.com/js/js_dates.asp
// https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
// javascript Date format(js日期格式化) - 一路前行 - 博客园
// https://www.cnblogs.com/zhangpengshou/archive/2012/07/19/2599053.html
