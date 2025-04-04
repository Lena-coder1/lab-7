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
    this.style.backgroundColor = "darkred"
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


//