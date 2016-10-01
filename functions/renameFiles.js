//Modify names of files in specific directory

// var dir = "/media/ike/4419-7314/Metallica/";
var dir = "/home/ike/Music/Metallica/";

var toReplace = " -";

var replaceWith = "-";

var fs = require("fs");

fs.readdir(dir, function(err, files) {
  var name = "";
  for (var i = files.length - 1; i >= 0; i--) {
    name = files[i];
    console.log("ready to rename " + name);
    name = name.replace(toReplace, replaceWith);
    console.log("renaming to " + name);
    fs.renameSync(dir + files[i], dir + name, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("successfully renamed");
      }
    });
  }
});
