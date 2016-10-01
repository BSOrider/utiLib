//Calculate speed based on bicycle data

var cadence = 90;

var ring = 48;

var cog = 21;

var wheel = 26;

var mph = ((cadence*60)*(((wheel*3.14)/12)/5280))*(ring/cog);

console.log(Math.round(mph*100)/100 + " mph");
