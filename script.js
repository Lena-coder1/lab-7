//mouse event
//click button
const button = document.getElementById("btnEvent");

button.addEventListener("mouseenter" ,function(){
    this.style.backgroundColor = "green"
});

button.addEventListener("mousedown",function(){
    setTimeout(function(){
        alert("mouse over the button!");
    },1000);

});

 // not click button
button.addEventListener("mouseleave" ,function(){

    this.style.backgroundColor = "darkred";

})

button.addEventListener("mouseup" ,function(){
    setTimeout(function(){
        alert("mouse away from the button!");
    },1000);
})

//keyboard  event
const output = document.getElementById("keyboardInfo"); 
document.getElementById("keyInput").addEventListener('keydown', function(event) {
   output.value =`last Key : ${event.key}`;
   
});


//form event

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submit');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');

    form.addEventListener('submit',function(event){
        event.preventDefault();
        alert(`first Name:${firstName.value} , last Name:${lastName.value}`)
    });

    firstName.addEventListener('input', function() {
        console.log('First Name Input changed: ', this.value);
    });

    lastName.addEventListener('input', function() {
        console.log('Last Name Input changed: ', this.value);
    });
    
})


//focus events

const input = document.getElementById("input");
const msg = document.getElementById("message");
input.addEventListener("focus", (event)=>{
    event.target.style.background = "lightyellow";
    msg.textContent =" on the input feild";
});

input.addEventListener("blur",(event)=>{
    event.target.style.background = "darkgreen";
    msg.textContent = " need to still fill this feild";
})

//