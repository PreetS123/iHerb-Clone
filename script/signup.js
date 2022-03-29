            

               document.getElementById("frm").addEventListener("submit",myForm);

               let signUp= JSON.parse(localStorage.getItem("signUpDetails"))||[];
               function myForm(){
                   event.preventDefault();
                   let Obj={
                       email: document.getElementById("email").value,
                       pass: document.getElementById("pwd").value,
                       user:document.getElementById("frst").value,
                   }
                   signUp.push(Obj);
                   localStorage.setItem("signUpDetails",JSON.stringify(signUp));
                   document.querySelector("input[type='submit']").addEventListener("click",function(){
                       window.location.href="signin.html";
                   });
               }