var student_array = [];

var name1 = document.getElementById("name1").value;
var name2  = document.getElementById("name2").value;
var name3  = document.getElementById("name3").value;
var name4  = document.getElementById("name4").value;

function submit() 
{

    
    var name1 = document.getElementById("name1").value;
    var name2  = document.getElementById("name2").value;
    var name3  = document.getElementById("name3").value;
    var name4  = document.getElementById("name4").value;



    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);


    console.log(student_array);
    document.getElementById("result").innerHTML = student_array;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline";

}

function sort()
{
    student_array.sort();
    console.log(student_array);
    document.getElementById("result").innerHTML = student_array;
}