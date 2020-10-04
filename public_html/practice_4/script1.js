/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log('ee');
function a() {

    return "Ok!";
}
//Scope

var x = 5;

function a(x) {
    
    x= x || 10;
    
   // var x = 2;

    x+=3;

    return x;

}

function b() {
        return x;
    }

function a() {
        return x;
    }
//x=10;
//console.log(x);

//String concat

var string = "String", string2=" 2";

string+=string2;
string=string+string2;

// Math (undefined)
x=5+6;

x=(6+9)/3;





//Equality + if
var x=0,y=false;

//x= x==y;
//x= x===y;

//True False

if (true && 1 && "Any text" && -1 && "false"){
    x=true;
};

if (false || 0 || "" || NaN || undefined || null){
    x=true;
} else {
    
  x=false;  
}

//{



// for loop

// цикл (визначаємо суму перших 10 натуральних чисел)
x=0;

for (var i=0; i<=10; i++){
    
x+=i;    
}


//виводимо результат функції відповідно до значення у полі вводу 
function a() { return document.getElementById('fname').value;}

//object creation ways

//створюємо об'єкт
//варіант 1
var some_object = new Object();

//визначаємо поля об'єкту
some_object.name="some_name";
some_object.weight=25;

//звертаємося до полів об'єкту
x=some_object['name'];
x=some_object.name;






x= "";
//цикл для "пробігання" по полям об'єкту(foreach)
for (some_var in some_object){
  x+=some_var+" = "+some_object[some_var]+", ";     
}

function a(){return x;}


//варіант 2
var some_object = {
    name: "some_name",
    weight: 25
};

//також можливо в об'єкті зберігати вкладені об'єкти та інші структури (масиви функції тощо)

var another_obj = {
    nested_obj: {name:"n",height:15},
    nested_funct: function(arg1){return arg1;},
    nested_array: [1,2,3,4,5],
    some_field: "field_value"
};


//arrays creation ways, length

//так само з масивами (взято з курсу на coursera https://www.coursera.org/learn/html-css-javascript-for-web-developers/home/welcome)
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
var names = ["Yaakov", "John", "Joe"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

//foreach з того ж курсу 
var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

//наступні питання розглянемо на лекції 29.09.2020


//fake namespaces

//IIFE
