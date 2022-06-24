// res1 = isNaN(123) //This function returns true if the value is not a number
// console.log(res1)

// res2 = isFinite(123/0) //This function returns true if the value is a finite number
// console.log(res2)

// res3 = eval("2+2") //This function evaluates javascript code
// console.log(res3)

// res4 = Number("123") //This function converts a string to a number
// console.log(res4)

// res5 = parseInt("123xyz") //This function converts a string to an integer
// // parseInt will parse up to the first non-digit character whereas Number() converts type 
// console.log(res5)

// res6 = parseFloat("123xyz") //This function converts a string to a floating point number
// console.log(res6)

// uri = "my favourite? color=black"
// console.log(encodeURI(uri))

// uriDeocde = "my%20favourite?%20color=black"
// console.log(decodeURI(uriDeocde))

// // Number Methods
// num1 = new Number(123.54)
// console.log(num1.constructor) // returns the constructor function

// num2 = 12.75
// console.log(num2.toExponential()) // returns number object with exponential notation
// console.log(num2.toExponential(4)) 

// num3 = new Number(199.588)
// console.log(num3.toLocaleString()) // returns number object with locale string

// num4 = new Number(100/3)
// console.log(num4.toPrecision()) // returns number object with precision
// console.log(num4.toPrecision(2))

// num5 = new Number(100/3)
// console.log(num5.valueOf()) // returns the primitive value of the number object

// // Boolean Methods
// str1 = new Boolean(false)
// console.log(str1.toString()) // returns the string value of the boolean object


// // String Methods
// str2 = "Welcome my fellas"
// console.log(str2.charAt(11)) // returns the character at the specified index

// str3 = "Oh"
// console.log(str3.charCodeAt(0)) // returns the unicode value of the character at the specified index

// console.log(str3.concat(" ", str2, "!")) // returns the concatenated string

// str4 = "Hasta la vista"
// console.log(str4.indexOf("vista")) // returns the index of the first occurrence of the specified string
// console.log(str4.lastIndexOf("vista")) // returns the index of the last occurrence of the specified string

// str5 = "Amazing new world"
// console.log(str5.length) // returns the length of the string

// str6 = "This is my address 124.1, Main St, London, UK"
// re = /(address \d+(\.\d)*)/i
// console.log(str6.match(re)) // returns the matches of the regular expression

// str7 = "Every day is a new day"
// console.log(str7.split(" ")) // returns an array of strings
// console.log(str7.split(" ", 5)) // returns an array of strings

// str8 = "I will always love you"
// console.log(str8.slice(5, 10)) // returns the string from the specified start index to the specified end index
// console.log(str8.slice(5, -1)) 

// str9 = "Roses are red, violets are blue"
// console.log(str9.substring(0, 3)) // returns the string from the specified start index to the specified end index
// console.log(str9.substr(15,5)) // returns the string from the specified start index to the specified end index

// str10 = "I will come back to you"
// console.log(str10.toLocaleUpperCase()) // returns the string in upper case


// // Array Methods
// arr1 = new Array(1, 2, 3, 4, 5)
// arr2 = new Array("a", "b", "c", "d", "e")
// arr3 = arr1.concat(arr2)
// console.log(arr3)


// arr4 = [25,36,47,58,69]
// function isBig(element) {
//     return element > 50
// }
// console.log(arr4.every(isBig)) // returns true if all elements in the array satisfy the specified condition

// const ages = [12, 17, 8, 21, 14, 11]
// const result = ages.filter(checkAdult) // returns an array of elements that satisfy the specified condition

// function checkAdult(age) {
//     return age >= 18
// }
// console.log(result)

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.forEach(myFunction)

//     function myFunction(item, index) {
//         text=""
//         text+= index + ": " + item + "\n"
//         console.log(text)
//     }

// const movies = ["The Godfather", "The Shawshank Redemption", "The Godfather II", "The Dark Knight", "12 Angry"]

// moviesJoiner1 = movies.join(" | ")
// console.log(moviesJoiner1)

// moviesJoiner2 = movies.join(" ") 
// console.log(moviesJoiner2)

// const mapper = movies.map(mapFunction) 

//     function mapFunction(item, index) {
//         return (
//           item.toString().toUpperCase()
//         )
//     }

// console.log(mapper)

// const cities = ["London", "Paris", "New York", "Tokyo", "Seoul"]
// console.log(cities.pop()) // returns the last element of the array and removes it from the array


// const newCities = cities.push("Sydney") // adds the specified element to the end of the array

// cities.forEach(cityFunction)

// function cityFunction(item, index) {
//     city = ""
//     city += index + ": " + item + "\n"
//     console.log(city)
// }


// const actors = ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp", "Angelina Jolie"]

// const newActors = actors.shift() // returns the first element of the array and removes it from the array
// console.log(newActors)

// const moreActors = actors.unshift("Tom Hanks") // adds the specified element to the beginning of the array
// console.log(moreActors)

// const actors_list = actors.splice(2,2, "Robert Downey Jr", "Mark Ruffalo") // returns the removed elements and inserts the specified elements at the specified index

// console.log(actors_list)

// const prime_numbers = [2, 3, 5, 7, 11]

// const sum_numbers = prime_numbers.reduce(reduceFunction)

// function reduceFunction(total, num) {
//     return total + num
// }

// console.log(sum_numbers)

// const sub_numbers = prime_numbers.reduceRight(subFunction)

// function subFunction(total, num) {
//     return total - num
// }

// console.log(sub_numbers)

// console.log(prime_numbers.sort()) // returns the sorted array
// console.log(prime_numbers.reverse()) // returns the reversed array

const numArr = ['a', 'b', 1,'r', 4]
numArr.push('L')
console.log(numArr)
