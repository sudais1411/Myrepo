//Clouser Assignment no1;


// function clouser(data){
// return function(ghi){
//     document.write(data+ghi)
// }
// }
// let myFunction = clouser(5);
// let myFunction2 = clouser(" Hello ");
// myFunction(5);
// myFunction2(" Sudais Ahmed How Are You");

//Assignment no 3
// let myPara = document.getElementById("para")
// myPara.innerHTML=" Hi How Are You";
// console.log(myPara);

//Assignment 4

// function myfun(){
//     let main = document.getElementById("main");
//     let first = document.getElementById("first");
//     first.innerHTML= "<li> My First List</li>";
//     let second = document.getElementById("second");
//     second.innerHTML= "<li> My Second List</li>";
//     let third = document.getElementById("third");
//     third.innerHTML= "<li> My Third List</li>";
//     let fourth = document.getElementById("fourth");
//     fourth.innerHTML= "<li> My Fourth List</li>";


//     console.log(main);
// }
// myfun();
// myfun();

//Assignment no 5


// function mysub(){
//     let para2 = document.getElementById("para2");
//     para2.innerHTML="<b>I Have Changed Para2</b>"
//     para2.style.backgroundColor="red";
// }
// mysub();

//Assignment no 6 
// let newStudent = localStorage.getItem("Students");
// let Students = newStudent ? JSON.parse(newStudent): [];
// function myStudents(){
//     let Student = {
//         name: prompt("Enter Your Name"),
//         rollNo: prompt("Enter Your Roll Num"),
//         fatherName:prompt("Enter Your Father Name"),
//         className:prompt("Enter Your Class Name"),
//     };
//     Students.push(Student);
//     console.log(Students);
//     let stringify = JSON.stringify(Students)
//     localStorage.setItem("Students", stringify);
// }

//ASSIGNMENT2

//  function myfun(def, time){
// console.log(def);
// if(time>0){
//     myfun(def, time -1)
// }
//  }
//  myfun("hello", 5);