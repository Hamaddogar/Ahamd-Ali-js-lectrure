function  myfucntion(event){
     event.preventDefault()

 var username =document.getElementById("uname").value;
 var userpassword =document.getElementById("upass").value;
 var userstatus =document.getElementById("status").value;

  var myobject={
    username,
    userpassword,
    userstatus
  }

 var myarray=[]
  myarray.push(myobject)
 localStorage.setItem("Alldata",JSON.stringify(myarray))




}