
var arr = [1,3,4,5,6]

var arr2 = ["Raju", 30, "bangalore",  undefined]


console.log(arr2[7])

console.log(arr2.length)

console.log(arr2[2])

console.log(arr2[arr2.length-2])

// adding the element push and unshift 
//push - to add element at the end of the array
//unshift - to add element at the biginning of the array

var arr3 = ["Raju", 30, "bangalore"]

arr3.push("Mahesh")

arr3.unshift("Shiva")

console.log(arr3)


// remove the element pop and shift 
//pop - to remove 1 element at the end of the array
//shift - to remove 1 element at the biginning of the array


var arr4  = ["Shiva" ,"Raju", 30, "bangalore", "Mahesh"]

arr4.pop()
arr4.shift()

console.log(arr4)

//sort() - sort elements in acending order 

arr5 = ["shiva", "Arun", "pradeep", "mahesh", "Raju"]

arr6 = arr5.sort()

console.log(arr6)

arr7 = [4,9,6,7,2,1]

arr8 = arr7.sort()
console.log(arr8)

console.log(arr8.reverse())

arr9 = ["shiva", "Arun", "pradeep", "mahesh", "Raju"]

arr9[1]= "girish"

console.log(arr9)

//includes - to check whether element is present or not 

console.log(arr9.includes("Raju"))

if(arr9.includes("Rekha")){

    console.log("element is present")
}
else {

    console.log("element is not present")
}

console.log(arr9.indexOf("pradeep"))


getelements = [3,5,6,7,8]

sortedarr = getelements.sort().reverse()

getelements === sortedarr 

//concat

getelements1 = [3,5,6,7,8]

strarr = ["shiva", "Arun", "pradeep", "mahesh", "Raju"]

finalarr = getelements1.concat(strarr)

console.log(finalarr)

strarr = [3,5,6,7,8,"shiva", "Arun", "pradeep", "mahesh", "Raju"]

// arr10 = strarr.slice(3)

// console.log(arr10)

arr11 = strarr.splice(3,5)


console.log(arr11)


newarr = ["shiva", "Arun", "pradeep", "mahesh", "Raju"]

str = newarr.join("")

console.log(str)

str2 = "Thimma raju"

arr12 = str2.split("")

console.log(arr12)

//======================================================

//write a JS program to reverse a string 

str = "Shivakumar Is from Bangalore"

revstr = str.split("").reverse().join("")

console.log(revstr)

//wap to check a string is palindrome or not 

str = "Mahesh"
revstr = str.split("").reverse().join("")


if(str == revstr){

    console.log("Given string is a palindrome")
}
else{

    console.log("Given string is not a palindrome")
}

//wap to check strings are anagram or not
str1 = "girish" 

str2 = "rajesh"

str3 = str1.split("").sort().join("")
str4 = str2.split("").sort().join("")

if(str3 == str4){

    console.log("Anagrams")
}
else{

    console.log("not Anagrams")
}


// str = "Shivakumar Is from Bangalore"

//output = "ramukavihS sI morf erolagnaB"