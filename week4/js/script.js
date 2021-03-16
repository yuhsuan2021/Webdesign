var name ="Angelina";
alert("Hello" + name);

var name="Yu";
var age = 18;
var isBoy = true;
var fruits = ["apple","banana","peach"];

alert(name); //Yu
alert(age); //18
alert(isBoy); //true
alert(fruits[0]); //apple
alert(fruits[2]); //peach

function addition(num){
	return num+10;
}
var age = 28;
var trueage = addition(age);
alert(trueage); //"38"

var age2 = 15;
var trueage2 = addition(age2);
alert(trueage2); //"25"

function test(){
	a     = 123;
	var b = 456;
	if(a  == 123) var c = 789;
}

document.getElementById("byid").innerHTML = "我來自id";
document.getElementById("byid").style.color = "blue";

document.getElementsByClassName("byclass")[0].innerHTML = "我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize = "30px";

document.getElementsByTagName("div")[2].innerHTML = "我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily = "微軟正黑體"

document.getElementsByTagName("p")[0].innerHTML = "ddeeeffff";
document.getElementsByTagName("p")[0].style.color = "blue"

