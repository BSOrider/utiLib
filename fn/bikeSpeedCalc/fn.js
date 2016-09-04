// BICYCLE SPEED CALCULATOR

// node speedCalc.js [cadence] [ring]x[cog] [wheel size]

var cadence = process.argv[2]

var ring = process.argv[3].split("x")[0]

var cog = process.argv[3].split("x")[1]

var wheel = process.argv[4]

var mph = ((cadence*60)*(((wheel*3.14)/12)/5280))*(ring/cog)

console.log(Math.round(mph*100)/100)
