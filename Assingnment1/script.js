
function saveData()
{
    console.log("Hi");
    let name  = document.getElementById('name').value;
    let emailId = document.getElementById('email').value;
    let phoneNumber = document.getElementById('mobileNumber').value;
    let webURL = document.getElementById('webURL').value;
    let messege = document.getElementById('textArea').value;
    
    var data = name+","+emailId+","+phoneNumber+","+webURL +","+ messege;
    console.log(data);
    sessionStorage.setItem(name,data);
    
    displayData();
 }

 function displayData()
 {
    var head = document.getElementById('head');
    head.innerHTML ="<b/>We Have Received<b/>";
   
   var user = document.getElementById('para');
   user.innerHTML ="";
   var concatData="";

   for(i = 0 ; i< sessionStorage.length;i++ )
   {
        var name = sessionStorage.key(i);
        var data = sessionStorage.getItem(name).split(",");
        let userData =`Name : ${data[0]} <br/> Email : ${data[1]} <br/> PhoneNumber : ${data[2]} <br/> Website : ${data[3]} <br/>Messege : ${data[4]}  <br/> <br/> <br/>`;
        concatData += userData;
   }
   user.innerHTML=concatData;

   
   var foot = document.getElementById('foot');
   foot.innerHTML = "Thank You";
   
 }
