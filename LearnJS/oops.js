

// function add(num1, num2){

//     console.log(num1+num2)
// }


// add(4,7)

// function substract(num1, num2){

//     console.log(num1-num2)
// }

// substract(40,20)

class calculator{


    num1 = 40 
    str = "Raju"

     printmessage(){

        console.log("sample method")
     }

     add(num1, num2){
        console.log(num1+num2)

     }

     substract(num1, num2){
        console.log(num1-num2)

     }

     multiply(num1, num2){
        console.log(num1*num2)

     }

}


// const cal1 = new calculator()

// console.log(cal1.str)

// cal1.printmessage()
// cal1.add(3,8)


// const cal2 = new calculator()


// console.log(cal2.str)

// cal2.printmessage()
// cal2.add(3,8)

// const cal3 = new calculator()


// console.log(cal3.str)

// cal3.printmessage()
// cal3.add(3,8)

// class classname{

//     //variables 

//     //methods 
// }

//const obj1 = new classname()

//constrctor 

// constructor is method it automatically invoked when we create object



// class employee{

//     static str = "Raju"
    
//     num1 = 40

//     constructor(num1, num2){

//          console.log("result : " +(num1+num2))
//     }

//     static display(){

//         console.log("bla bla")
//     }
//     method2(){

//         console.log("bla bla")
//     }
//     method3(){

//         console.log("bla bla")
//     }
// }




// // static methods / variables 

// // non methods / veriables 

// console.log(employee.str)

// console.log(employee.num1)

// employee.display()



// class student {

//     stuname
//     stuplace
//     stucourse

//    details(name, course, place){

//        this.stuname = name
//        this.stucourse = course
//        this.stuplace = place
//    }

//    displaydetails(){
 
//     console.log(this.stuname, this.stucourse, this.stuplace)
      
//    }

//    method4(){

//     this.displaydetails()

//    }
// }

// const obj1 = new student()

// //obj1.details("Mahesh", "cypress", "blr") // setting the data

// obj1.displaydetails() // getting the data

// class A {

//     m1(){

//         console.log("This is Method 1")
//     }

//     m2(){

//         console.log("This is Method 2")
//     }

//     m3(){

//         console.log("This is Method 3")
//     }
// }

// class B extends A{

//     x1(){

//         console.log("This is Method x1")
//     }

//     x2(){

//         console.log("This is Method x2")
//     }

//     x3(){

//         console.log("This is Method x3")
//     }
// }

// class C extends B{

//     A1(){

//         console.log("This is Method A1")
//     }

//     A2(){

//         console.log("This is Method A2")
//     }

//     A3(){

//         console.log("This is Method A3")
//     }
// }


// const  raju = new C()

// raju.m1() // A

// raju.x1() //B
 
// raju.A3() // C



// class studentinfo {

//     m1(){

//         console.log("This is Method 1")
//     }

//     m2(){

//         console.log("This is Method 2")
//     }

//     m3(){

//         console.log("This is Method 3")
//     }
// }

// studentinfo.prototype.stuname = "Girish"

// studentinfo.prototype.m4 = function(){

//     console.log("This method is M4")
// }
// const stu1 = new studentinfo()

// const stu2 = new studentinfo()

// stu1.m1()

// stu2.m1()

// console.log(stu1.stuname)

// console.log(stu2.stuname)

// stu1.m4()

// stu2.m4()

class A{
 
    add(num1, num2){
	  
	  console.log("Perent class method")

      console.log(num1+num2)
	}
}

 
class B extends A{
 
    add(num1, num2, num3){
	 
	 console.log("child class method")
     console.log(num1+num2+num3)
	}

    m3(){
   
        this.m4()

    }

    m4(){

        
    }
}

const obj = new A()

obj.add(3,6,9)

//asyn await - not required for cypress 

// promises 

// sets and maps