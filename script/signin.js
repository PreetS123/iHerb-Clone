let regdUser=JSON.parse(localStorage.getItem("signUpDetails"));

document.getElementById("frm").addEventListener("submit",formSubmit);

let form= document.getElementById("frm");

function formSubmit(event){
  event.preventDefault();            
   let email = form.email.value
   let pass=form.pass.value  
      
   let flag=false;
   for(let i=0; i < regdUser.length; i++)
   {
    console.log(email,pass)
     if(regdUser[i].email===email&& regdUser[i].pass===pass)
     {
       flag= true;
       
     }
   }
   if(flag===true){
     window.location.href= "index.html";
   }
}

