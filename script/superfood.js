           
            

var iherbpage=[
    {
        img_url:"https://s3.images-iherb.com/dev/dev00027/k/51.jpg",
        desc:"Deva, Vegan Vitamin D",
        id:"11367",
        offer_price:641.14,
        strike_price:801.43
    },
     {
        img_url:"	https://s3.images-iherb.com/atr/atr02929/k/19.jpg",
        desc:"Wobenzym N, Joint Tablets",
        id:"11376",
        offer_price:641.14,
        strike_price:801.43
    },
     {
        img_url:"https://s3.images-iherb.com/blb/blb00632/k/13.jpg",
        desc:"Bluebonnet Nutrition",
        id:"6943",
        offer_price:448.14,
        strike_price:641.43

    },
     {
        img_url:"https://s3.images-iherb.com/lex/lex23141/k/35.jpg",
        desc:"Life Extension ",
        id:"1445",
        offer_price:961.14,
        strike_price:1202.43
    },
     {
        img_url:"https://s3.images-iherb.com/nfs/nfs02056/k/21.jpg",
        desc:"Natural Factors",
        id:"29486",
        offer_price:208.14,
        strike_price:261.43
    },
     {
        img_url:"https://s3.images-iherb.com/miz/miz75159/k/5.jpg",
        desc:"Mizon Collange",
        id:"7386",
        offer_price:1432.14,
        strike_price:2981.43
    },
     {
        img_url:"https://s3.images-iherb.com/cgn/cgn02079/k/9.jpg",
        desc:"California Gold Nutrition",
        id:"216",
        offer_price:160.14,
        strike_price:320.43
    },
    {
        img_url:"https://s3.images-iherb.com/ezv/ezv72157/k/9.jpg",
        desc:"Elizaveccar CRE 100 Collangen",
        id:"6706",
        offer_price:190.14,
        strike_price:288.43
    },
    // edit from here
    {
        img_url:"https://s3.images-iherb.com/pif/pif50743/r/24.jpg",
        desc:"Some By Mi, 30 Days Miracle Turmerid Paste,18 Patches",
        id:"4160",
        offer_price:541.14,
        strike_price:801.43
    },
    {
        img_url:"https://s3.images-iherb.com/nav/nav02075/r/14.jpg",
        desc:"Petitfee, Navitas Coca Butter, 60 Pieces",
        id:"31772",
        offer_price:118.14,
        strike_price:373.43
    },
    {
        img_url:"https://s3.images-iherb.com/amh/amh50205/r/29.jpg",
        desc:"Some By Mi,Super Papaya Enzyme Plus,150ml",
        id:"8121",
        offer_price:374.14,
        strike_price:450.43
    },
    {
        img_url:"https://s3.images-iherb.com/amx/amx20264/r/29.jpg",
        desc:"Radient Seoul;, Hydrating Beauty Sheet , 1 Sheet Mask, 0.85 oz (25ml)",
        id:"8681",
        offer_price:80.14,
        strike_price:160.43
    },
    {
        img_url:"https://s3.images-iherb.com/rse/rse01957/c/2.jpg",
        desc:"All Flex , Radient Joint All In One ForMilk",
        id:"4800",
        offer_price:901.14,
        strike_price:1320.43
    },
    {
        img_url:"https://s3.images-iherb.com/thr/thr33602/r/21.jpg",
        desc:"Heimish , Thorne Green Tea",
        id:"11015",
        offer_price:1080.14,
        strike_price:1230.43
    },
    {
        img_url:"https://s3.images-iherb.com/now/now04732/r/19.jpg",
        desc:"WOW Seoul, Organio Oil",
        id:"8325",
        offer_price:164.14,
        strike_price:221.43
    },
    {
        img_url:"https://s3.images-iherb.com/nrt/nrt01947/r/29.jpg",
        desc:"Nature's Baunty , Milk Thirstle,100ml",
        id:"24149",
        offer_price:1612.14,
        strike_price:1701.43
    },
    {
        img_url:"https://s3.images-iherb.com/jrw/jrw18019/r/22.jpg",
        desc:"Mediheal, Collagen, B-12 Floart, P-5-P",
        id:"5015",
        offer_price:1161.14 ,
        strike_price:1501.43
      },
    {
        img_url:"https://s3.images-iherb.com/car/car01653/k/25.jpg",
        desc:"The herry Fincher , Fish Oil",
        id:"1208",
        offer_price:1800.14,
        strike_price:2101.43
    },
    {
        img_url:"https://s3.images-iherb.com/rna/rna80025/k/10.jpg",
        desc:"Cosrx,Ammature Hair Care oz (150ml)",
        id:"11996",
        offer_price:1771.14,
        strike_price:1801.43
    },
    {
        img_url:"https://s3.images-iherb.com/vtp/vtp49447/k/8.jpg",
        desc:"Vital Protein , Collange Pepetides",
        id:"2255",
        offer_price:2823.14,
        strike_price:3901.43
     }
  ]
  
   console.log(iherbpage)
  
  let container=document.getElementById("container")
  
  
  
  let data2=(iherbpage)=>{
      container.innerHTML=null;
    iherbpage.map(function(ele)
    {
      let Maindiv=document.createElement("div")
     
  
      let price=document.createElement("div")
  
      let image=document.createElement("img")
      image.src=ele.img_url;
  
      let descDiv= document.createElement("div")
      let desc=document.createElement("p")
      desc.innerText=ele.desc;
      descDiv.append(desc)
      descDiv.style.marginTop="20px"
      descDiv.style.color=" #1976d2"
  
  
      let stardiv=document.createElement("div")
      
      let star=document.createElement("span")
      star.innerText="☆"
      let star1=document.createElement("span")
      star1.innerText="☆"
      let star2=document.createElement("span")
      star2.innerText="☆"
      let star3=document.createElement("span")
      star3.innerText="☆"
       
      let strappendp=document.createElement("div")
  
      let starp=document.createElement("div")
      let id=document.createElement("p")
      id.innerText=ele.id;
      starp.append(id)
      starp.style.marginLeft="20px"
      starp.style.color="gray"
      starp.style.fontSize="13px"
      starp.setAttribute("class","starp")
  
      stardiv.append(star,star1,star2,star3)
      stardiv.setAttribute("class","rating ")
      stardiv.style.marginLeft="29px"
  
      strappendp.append(stardiv,starp)
      
      strappendp.setAttribute("id","strappendp")
  
      let btndiv= document.createElement("div")
  
      let Add=document.createElement("button")
      Add.innerText="Add To Cart";
      Add.addEventListener("click",function(){
        addToCart(ele);
    })
  
      btndiv.append(Add)
  
      let offer_price=document.createElement("p")
      offer_price.innerText="₹"+ele.offer_price;
      offer_price.style.color="#BD3C37"
  
      let strike_price=document.createElement("p")  
      strike_price.innerText="₹"+ele.strike_price;
      strike_price.style.textDecoration="line-through"  
      strike_price.style.color="grey"
  
      let offer=document.createElement("p")
  
      offer.innerText="20% Off";
  
     
  
  
      price.append(offer_price,strike_price,offer)
      price.setAttribute("class","price")
  
  
      let content= document.createElement("div")
      content.append(descDiv, strappendp,price)
      content.setAttribute("id","content")
      Maindiv.append(image,btndiv,content)
      
  
      container.append(Maindiv)
  
  
    })  
  }
  data2(iherbpage)
  
  
  function sortItem(){
      var sort = document.getElementById("sorting").value;
      console.log(sort)
      if(sort == "h2l"){
  
          iherbpage.sort(function(x,y){
              return y.offer_price-x.offer_price;
          }) 
          data2(iherbpage)   
      }
      else if(sort == "l2h"){
          iherbpage.sort(function(x,y){
              return x.offer_price-y.offer_price;
          })
          data2(iherbpage)
      }
  }
  
  var cartArr=JSON.parse(localStorage.getItem("cartDetails"))||[];
  function  addToCart(ele){
        cartArr.push(ele);
        ele.qty=1;
        localStorage.setItem("cartDetails",JSON.stringify(cartArr));
  }

  function search(){
      let searchText= document.getElementById("searchf").value;
      console.log(searchText)
      let filterData= iherbpage.filter(function(el){
          return el.desc.includes(searchText);
      })
      data(filterData);
  }
  