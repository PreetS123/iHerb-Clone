      import navbar from "../component/nav.js";
      let head= document.getElementById("topnav");
      head.innerHTML= navbar();
    //   console.log(head)

      import { footdiv1, footdiv2, footdiv3, footdiv4 } from "../component/foot.js";

      let foot1= document.getElementById(divfoot1);
      foot1.innerHTML= footdiv1();
      console.log(foot1)

      let foot2= document.getElementById(divfoot2);
      foot2.innerHTML= footdiv2();
      console.log(foot2)

      let foot3= document.getElementById(divfoot3);
      foot3.innerHTML= footdiv3();
      console.log(foot3)

      let foot4= document.getElementById(divfoot4);
      foot4.innerHTML= footdiv4();
      console.log(foot4)
    