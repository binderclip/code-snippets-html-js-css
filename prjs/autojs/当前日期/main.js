"nodejs";
const { setClip } = require('clip_manager');
const { showToast } = require("toast");
async function main() {
    var now = new Date();
    var dateString = now.getFullYear() +"-"+ String(now.getMonth() + 1).padStart(2, '0') +"-"+ String(now.getDate()).padStart(2, '0');
    setClip(dateString);
    showToast(dateString);
}

main();