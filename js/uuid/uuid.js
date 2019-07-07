console.log("== uuid v4 (uuid lib) ==")
const uuid_v4 = require('uuid/v4');
console.log(uuid_v4()); // '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

console.log("== uuid v4 (random) ==")
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
console.log(uuidv4())
