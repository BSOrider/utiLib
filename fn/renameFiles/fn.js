// var dir = "/home/ike/eduStuff/mp3/";
var dir = "/media/acr/4419-7314/A7X/";

var fs = require("fs");

fs.readdir(dir, function(err, files) {
  var name = "";
  for (var i = files.length - 1; i >= 0; i--) {
    name = files[i];
    console.log("ready to rename " + name);
    name = name.replace("Avenged Sevenfold", "A7X");
    name = name.replace(" Lyrics HD", "");
    console.log("renaming to " + name);
    fs.rename(dir + files[i], dir + name, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("successfully renamed");
      }
    });
  }
});
