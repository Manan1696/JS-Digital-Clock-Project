function displayTime(){               
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    // let hours = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('livebox5');
    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM'; 
    }
    if(hrs > 12){
        hrs = hrs - 12;   
    }
    document.getElementById('hour').innerHTML = hrs;   
    document.getElementById('min').innerHTML = min;  
    document.getElementById('sec').innerHTML = sec;  
   
}

setInterval(displayTime,1000);



var greetTextOne = document.querySelector('.message1');        
var greetTextTwo = document.querySelector('.message2');       

var elementOne = document.querySelector('#mor');
var textOne = document.querySelector('#cloOne');
textOne = elementOne.options[elementOne.selectedIndex].value;
console.log(textOne);

var elementTwo = document.querySelector('#after');
var textTwo = document.querySelector('#cloTwo');
textTwo = elementTwo.options[elementTwo.selectedIndex].value;

var elementThree = document.querySelector('#even');
var textThree = document.querySelector('#cloThree');
textThree = elementThree.options[elementThree.selectedIndex].value;

var elementFour = document.querySelector('#nigh');
var textFour = document.querySelector('#cloFour');
textFour = elementFour.options[elementFour.selectedIndex].value;



function clickMe(){
    textOne = elementOne.options[elementOne.selectedIndex].innerText;
    textTwo = elementTwo.options[elementTwo.selectedIndex].innerText;
    textThree = elementThree.options[elementThree.selectedIndex].innerText;
    textFour = elementFour.options[elementFour.selectedIndex].innerText;


    document.querySelector('#cloOne').textContent = textOne;
    document.querySelector('#cloTwo').textContent = textTwo;
    document.querySelector('#cloThree').textContent = textThree;
    document.querySelector('#cloFour').textContent = textFour;        
}

//     if(demoOne == realHr){
//         document.getElementById("greet1").innerText= "GOOD MORNING!! WAKE UP !!"
//         document.getElementById("greet_msg").innerText= "GRAB SOME HEALTHY BREAKFAST!!!"
//         document.getElementById("images").src= "Component.jpg";
//     }
// demoOne =  wake.options[wake.selectedIndex].value;
    
