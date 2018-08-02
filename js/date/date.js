var date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);
// expected output: 0
var date3 = new Date('1995-12-17 03:24:00');
console.log(date3);
var date4 = new Date('1995-12-17 04:24:00');
console.log(date3 > date4);

var ts = Date.now();
console.log(ts);
var now = new Date();
console.log(now);

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://www.w3schools.com/js/js_dates.asp
