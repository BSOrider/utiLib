//Modify names of files in specific directory

// var dir = "/media/ike/4419-7314/Metallica/";
var dir = "/home/ike/Music/Metallica/";

var fs = require("fs");

fs.readdir(dir, function(err, files) {
    var name = "";
    var startPos;
    var endPos;
    var dontUse;
    for (var i = files.length - 1; i >= 0; i--) {
        name = files[i];
        if (name.indexOf('(') > 0 && name.indexOf(')') > 0) {
            startPos = name.indexOf('(');
            endPos = name.indexOf(')');
            console.log("removing '(*)' from " + name);
            // dontUse = name.substr(startPos, endPos);
            name = name.substr(0,startPos) + name.substr(endPos+1);
            console.log(name);
            fs.renameSync(dir + files[i], dir + name, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("successfully renamed");
                }
            });
        }else{
        	console.log("No changes made");
        }

    }
});
