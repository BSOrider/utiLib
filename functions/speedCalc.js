//Calculate speed based on bicycle data

// My freewheel:
// 14 16 18 21 26 32


// 14 16 19 23 28

//     50  34

// This is the highest gear that I currently use when climbing
var test1 = {
	cadence: 90,
	ring: 38,
	cog: 21,
	wheel: 26
}

// This is my current cruising gear (3-3)
var test2 = {
	cadence: 90,
	ring: 48,
	cog: 21,
	wheel: 26
}

// Prototype crusing gear
var test3 = {
	cadence: 90,
	ring: 50,
	cog: 23,
	wheel: 27.5	
}

// Prototype climbing gear
var test4 = {
	cadence: 90,
	ring: 34,
	cog: 19,
	wheel: 27.5	
}

// which object to run
var set = test3;

var cadence = set.cadence;

var ring = set.ring;

var cog = set.cog;

var wheel = set.wheel;

var mph = ((cadence*60)*(((wheel*3.14)/12)/5280))*(ring/cog);

console.log(Math.round(mph*100)/100 + " mph");
