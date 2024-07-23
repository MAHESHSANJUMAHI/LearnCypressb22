const  student = {

    place : "Bangalore",
    course: "Cypress",
    durataion: 6 

}

console.log(student.place)
console.log(student.durataion)

//or 

console.log(student['place'])
console.log(student['durataion'])

student['place'] = "Hyderabad"

console.log(student.place)

delete student['durataion']

console.log(student.durataion)

console.log(student.firstname)

student['firstname'] = "Raju"

student['lastname'] = "G"

console.log(student)

//es6  for in 

const menuitems ={

    menu1 : "Admin",
    menu2 : "PIM",
    menu3: "Leave",
    menu4: "Time",
    menu5 : "Recruitment",
    menu6: "My Info",
    menu7 : "Performance",
    menu8 : "Dashboard",
    menu9: "Buzz",
    menu10: "Claim",
    menu11: "Maintenance",
    menu12: "Directory"
}

for(let raju in menuitems){

    console.log("started loop")
   
    console.log(menuitems[raju])

    console.log(menuitems)

    console.log("end loop")
}