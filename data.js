var fs = require("fs");
// console.log("\n *START* \n");
var content = fs.readFileSync("./public/test.txt");
// console.log("Output Content : \n"+ content);
// console.log("\n *EXIT* \n");
var signatures = JSON.parse(content);
// console.log("signatures is", signatures);

module.exports = signatures