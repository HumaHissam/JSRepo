function askName(){
    var name = prompt("Please enter your name.");
   // alert("Hi " + name + ". Thankyou for visiting my website!");
     displayName(name);
   
};

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
        };

    if (currentHour >=5 && currentHour < 12){
alert("Good Morning " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " AM. Thankyou for visiting my website!");
 } else if (currentHour >= 12 && currentHour <= 18){
  alert("Good Afternoon " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " PM. Thankyou for visiting my website!");
 } else if (currentHour > 18){
  alert("Good Evening " + name + ". It is " + hour + ":" + currentDate.getMinutes() + " PM. Thankyou for visiting my website!");
 };
};



function displayRefrences(){
const myReference = [
  {refName : "Pervaiz", company:"abc", phone:"801-737-7222", comments:"abecsdjejhjewjfgjfbjf"},
  {refName : "Zaynab", company:"def", phone:"801-373-2222", comments:"abecsdjkejrherfjfgjfbjf"},
  {refName : "Hussain", company:"xyz", phone:"888-222-2222", comments:"abechefgjwegfsdjjfgjfbjf"}
]


var myList = "<ul>";
for (i = 0; i < myReference.length; i++ ){
  var dName = myReference[i].refName;
  var dCompany = myReference[i].company;
  var dPhone = myReference[i].phone;
  var dComments = myReference[i].comments;
 
  myList +=  "<li>" + dName + "</li> <li> " + dCompany + "</li><li>" + dPhone + "</li><li>" + dComments + "</li><br><br>";
 
}
myList += "</ul>";
//document.getElementById("ReferenceList").innerHTML = myList;
$("#ReferenceList").html(myList);
//$("#ReferenceList").innerHtml = myList; ---- didn't work
//$("#ReferenceList").val(myList); ---- didn't work
$("#ReferenceList").show();
}


$(document).ready(function(){
  $("#hideRefBtn").click(function(){
    $("#ReferenceList").hide();
  });
});

function contactForm(){
  var fName, lName, email, message, pText, pCursor;
// pText.innerHtml = "";
         try { 
          fName = document.getElementById("aaa").value;
          document.getElementById("p01").innerHTML = "";
          if (fName == "") {
          pText = document.getElementById("p01");
          pCursor = document.getElementById("aaa");
              throw ( "First Name");
          }
          
          lName = document.getElementById("bbb").value;
          document.getElementById("p02").innerHTML = "";
          if (lName == ""){
              pText = document.getElementById("p02");  
              pCursor = document.getElementById("bbb");  
              throw "Last Name";
          }

          email = document.getElementById("ccc").value;
          document.getElementById("p03").innerHTML = "";
          if (email == ""){
              pText = document.getElementById("p03");
              pCursor = document.getElementById("ccc");
              throw "email";
          }
          
          message = document.getElementById("ddd").value;
          document.getElementById("p04").innerHTML = "";
          if (message == ""){
              pText = document.getElementById("p04");
              pCursor = document.getElementById("ddd");
              throw "Message";
          }

         
      }
      catch(err) {
           // alert( err + " can not be left blank." + pText);
        pCursor.focus();
        if (err == "email"){
          pText.innerHTML = "Please enter a valid email" ;
        } else {
          pText.innerHTML = err + " can not be left blank.";
     
        }

                      
}
}