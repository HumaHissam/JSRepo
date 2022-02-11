

function askName(){
    var name = prompt("Please enter your name.");
   // alert("Hi " + name + ". Thankyou for visiting my website!");
     displayName(name);
   
}

function displayName(name) {
  var name
   // alert("Hi " + name + ". Thankyou for visiting my website! " + cDay + cMonth + cYear );
  let currentDate = new Date();
  let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  
  let currentHour = currentDate.getHours();
      
  let hour = null ; 
        if (currentHour == 0){
                              hour = 12 ; 
                             // alert("Good Morning " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " AM. Thankyou for visiting my website!");
        }
        else if (currentHour > 0 && currentHour < 12){
                              hour = currentHour;
                             // alert("Good Morning " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " AM. Thankyou for visiting my website!");
        }
        else if (currentHour == 12){
                              hour = currentHour;
                              //alert("Good AfterNoon " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " PM. Thankyou for visiting my website!");
        }
    
        else if (currentHour > 12 && currentHour <= 23){
                              hour = currentHour - 12;
                             // alert("Good Evening " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " PM. Thankyou for visiting my website!");
        }

    if (currentHour >=5 && currentHour <= 12){
alert("Good Morning " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " AM. Thankyou for visiting my website!");
 } else if (currentHour >= 12 && currentHour <= 18){
  alert("Good Afternoon " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " PM. Thankyou for visiting my website!");
 } else if (currentHour > 18){
  alert("Good Evening " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " PM. Thankyou for visiting my website!");
 }
}

