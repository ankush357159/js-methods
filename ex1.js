res1 = isNaN(123) //This function returns true if the value is not a number
console.log(res1)

res2 = isFinite(123/0) //This function returns true if the value is a finite number
console.log(res2)

res3 = eval("2+2") //This function evaluates javascript code
console.log(res3)

res4 = Number("123") //This function converts a string to a number
console.log(res4)

res5 = parseInt("123xyz") //This function converts a string to an integer
// parseInt will parse up to the first non-digit character whereas Number() converts type 
console.log(res5)

res6 = parseFloat("123xyz") //This function converts a string to a floating point number
console.log(res6)

uri = "my favourite? color=black"
console.log(encodeURI(uri))

uriDeocde = "my%20favourite?%20color=black"
console.log(decodeURI(uriDeocde))