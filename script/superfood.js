           
            

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
        img_url:"https://s3.images-iherb.com/smi/smi39001/c/2.jpg",
        desc:"Some By Mi, 30 Days Miracle Clear Spot Patch,18 Patches",
        id:"4160",
        offer_price:241.14,
        strike_price:301.43
    },
    {
        img_url:"https://s3.images-iherb.com/ptt/ptt80359/c/23.jpg",
        desc:"Petitfee, Gold Hydrogen Eye Patch, 60 Pieces",
        id:"31772",
        offer_price:618.14,
        strike_price:773.43
    },
    {
        img_url:"https://s3.images-iherb.com/smi/smi33366/c/2.jpg",
        desc:"Some By Mi, AHA, BHA, PHA 30 Days Miracle Toner,150ml",
        id:"8121",
        offer_price:1374.14,
        strike_price:1500.43
    },
    {
        img_url:"https://s3.images-iherb.com/rse/rse01732/c/0.jpg",
        desc:"Radient Seoul;, Hydrating Beauty Sheet , 1 Sheet Mask, 0.85 oz (25ml)",
        id:"8681",
        offer_price:80.14,
        strike_price:160.43
    },
    {
        img_url:"https://s3.images-iherb.com/rse/rse01957/c/2.jpg",
        desc:"Radient Seoul , Hydrating Bubble Cleansing Oil",
        id:"4800",
        offer_price:91.14,
        strike_price:320.43
    },
    {
        img_url:"https://s3.images-iherb.com/hei/hei76067/c/21.jpg",
        desc:"Heimish , All Clean Balm, 120",
        id:"11015",
        offer_price:980.14,
        strike_price:1230.43
    },
    {
        img_url:"https://s3.images-iherb.com/rse/rse01727/c/4.jpg",
        desc:"Radient Seoul, Balancing Charcoal Beauty Sheet Mask",
        id:"8325",
        offer_price:64.14,
        strike_price:121.43
    },
    {
        img_url:"https://s3.images-iherb.com/ptt/ptt80182/c/28.jpg",
        desc:"Petitfee, Black Pearl & Gold Hydrogen Eye Patch",
        id:"24149",
        offer_price:612.14,
        strike_price:701.43
    },
    {
        img_url:"https://s3.images-iherb.com/mhl/mhl05064/c/3.jpg",
        desc:"Mediheal, Collagen, Essential Lifting & Firming Beauty Mask",
        id:"5015",
        offer_price:161.14 ,
        strike_price:101.43
      },
    {
        img_url:"https://s3.images-iherb.com/ide/ide01942/c/2.jpg",
        desc:"Idealove, Rose to the Occassion, 1 Beauty Sheet Mask",
        id:"1208",
      strike_price:201.43,
        offer_price:80.14,
        strike_price:101.43
    },
    {
        img_url:"https://s3.images-iherb.com/crx/crx47051/c/4.jpg",
        desc:"Cosrx,Low pH Good Morning Gel Cleanser, 5.07 fl oz (150ml)",
        id:"11996",
        offer_price:771.14,
        strike_price:801.43
    },
    {
        img_url:"https://s3.images-iherb.com/gni/gni65359/c/2.jpg",
        desc:"G9skin, White In Milk Sun, SPF 50+ PA++++,40g",
        id:"2255",
        offer_price:823.14,
        strike_price:901.43
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
  