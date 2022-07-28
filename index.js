function displayTime(){               
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let hours = dateTime.getHours();
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
   
    var greetTextOne = document.querySelector('.message1');        
    var greetTextTwo = document.querySelector('.message2'); 
    var picture = document.querySelector('.image');

   if(hours == dataOne){
    greetTextOne.innerHTML= "GOOD MORNING!! WAKE UP !!";
    greetTextTwo.innerHTML= "GRAB SOME HEALTHY BREAKFAST!!!";
    picture.style.backgroundImage = "url('opencur.png')";
   }
   if(hours == dataTwo){
    greetTextOne.innerHTML= "GOOD Afternoon !!";
    greetTextTwo.innerHTML= "Time for a Lunch!!!";
    picture.style.backgroundImage = "url('lunch.png')";
   }
   if(hours == dataThree ){
    greetTextOne.innerHTML= "GOOD Evening !!";
    greetTextTwo.innerHTML= "Time for a Tea Break!!!";
    picture.style.backgroundImage = "url('evening.png')";
   }
   if(hours == dataFour){
    greetTextOne.innerHTML= "GOOD NIGHT !!";
    greetTextTwo.innerHTML= "CLOSE YOUR EYES AND GO TO SLEEP";
    picture.style.backgroundImage = "url('night1.png')";
   }

}

setInterval(displayTime,1000);
var elementOne = document.getElementById('mor');
var elementTwo = document.getElementById('after');
var elementThree = document.getElementById('even');
var elementFour = document.getElementById('nigh');


var textOne = elementOne.options[elementOne.selectedIndex].text;
var textTwo = elementTwo.options[elementTwo.selectedIndex].text;
var textThree = elementThree.options[elementThree.selectedIndex].text;
var textFour = elementFour.options[elementFour.selectedIndex].text;


var dataOne = elementOne.options[elementOne.selectedIndex].value;
var dataTwo = elementTwo.options[elementTwo.selectedIndex].value;
var dataThree = elementThree.options[elementThree.selectedIndex].value;
var dataFour = elementFour.options[elementFour.selectedIndex].value;



function clickMe(){
    textOne = elementOne.options[elementOne.selectedIndex].text;
    textTwo = elementTwo.options[elementTwo.selectedIndex].text;
    textThree = elementThree.options[elementThree.selectedIndex].text;
    textFour = elementFour.options[elementFour.selectedIndex].text;

    dataOne = elementOne.options[elementOne.selectedIndex].value;
    dataTwo = elementTwo.options[elementTwo.selectedIndex].value;
    dataThree = elementThree.options[elementThree.selectedIndex].value;
    dataFour = elementFour.options[elementFour.selectedIndex].value;


    document.querySelector('#cloOne').innerText = textOne;
    document.querySelector('#cloTwo').innerText = textTwo;
    document.querySelector('#cloThree').innerText = textThree;
    document.querySelector('#cloFour').innerText = textFour;        
}
