
/*
Exercise 1
const myHeading = document.querySelector ('h1');
myHeading.textContent = 'Hello world!';
Exercise 2
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/image1.png'){
        myImage.setAttribute ('src','images/image2.png');
    }   else{
        myImage.setAttribute ('src','images/image1.png');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function(){
    setUserName();
}

let myHeading = document.querySelector('h1');

function setUserName(){
    let myName= prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozzilla is cool, ' + myName;
    }
    
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
