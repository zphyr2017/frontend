var express = require("express");
var app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'tracker')));


/*Start the Server*/

app.listen(3000,function(){
console.log("It's Started on PORT 3000");
});