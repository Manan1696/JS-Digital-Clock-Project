function displayTime(){                     //will show time in clock 
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('livebox5');
    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';   //AM will show if time less than 12
    }
    if(hrs > 12){
        hrs = hrs - 12;      // to show 12hr clock format
    }
    document.getElementById('hour').innerHTML = hrs;     //hrs assigned to hours span tag
    document.getElementById('min').innerHTML = min;   //min assigned to minutes span tag
    document.getElementById('sec').innerHTML = sec;   //sec assigned to seconds span tag
   
}

setInterval(displayTime,1000);

