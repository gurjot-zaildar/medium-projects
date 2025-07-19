let button = document.querySelectorAll("button");
let main = document.querySelectorAll(".main");
let box = document.querySelectorAll(".box");

button.forEach(function(button){
button.addEventListener('mouseenter',function(){
    button.style.color='rgba(255, 255, 255, 1)'
    button.style.backgroundColor="rgba(68, 118, 255, 1)"
})
})
button.forEach(function(button){
button.addEventListener('mouseout',function(){
    button.style.color='rgba(69, 69, 69, 1)'
    button.style.backgroundColor="rgba(255, 255, 255, 1)"
})
})
button.forEach(function(button){
button.addEventListener('click',function(){
    button.style.color='rgba(0, 72, 255, 1)'
    button.style.backgroundColor="rgba(38, 255, 0, 1)"
})
})
box.forEach(function(box){
box.addEventListener('mouseenter',function(){
    box.style.backgroundColor='rgb(10, 173, 232)';
    box.querySelectorAll("h1").forEach(function(e1){
        e1.style.color="white"
    })
})
})
box.forEach(function(box){
box.addEventListener('mouseout',function(){
    box.style.backgroundColor='rgba(255, 255, 255, 1)';
    box.querySelectorAll("h1").forEach(function(e1){
        e1.style.color="black"
    })
})
})