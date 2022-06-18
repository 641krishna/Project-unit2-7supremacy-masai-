let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

    //Silder Image Done...................................................

//All Product are here........................................

let elecData = [
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/BA/69/04edd92d-eadb-48d5-8f0a-f6833d3f0cc1.jpg.webp",
        disPrice:"6893.67",
        actPrice:"13788",
        name:"LEMFO T92 BTS.0 TWS Wireless",
        reviews:"13 reviews",
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/25/C7/dff41616-f508-4d9a-9279-9b43aee4ba5b.jpg.webp",
        disPrice:"14263.62",
        actPrice:"18225.96",
        name:"LOKMAT APPLIP Max 4GB+64GB",
        reviews:"116 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/B4/7C/8b5d1473-7564-43ff-a629-565fa3df6366.jpg.webp",
        disPrice:"11886.22",
        actPrice:"24010.97",
        name:"LOKMAT APPLLP 6 1.6 inch Smart",
        reviews:"12 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/8E/5E/eb8e5d88-3aa1-4d71-b295-31a9e65a6aec.jpg.webp",
        disPrice:"14659.86",
        actPrice:"22979.97",
        name:"LOKMAT APPLLP 7 1.6 inch 400*400",
        reviews:"14 reviews",
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/C0/B3/4a19158e-4557-4bd7-ab2d-4c16a24ff08a.jpg.webp",
        disPrice:"1584.14",
        actPrice:"3327.5752",
        name:"Flydigi Q1 Keyboard...... Mouse",
        reviews:"137 reviews",
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/92/1F/6b022593-0734-479e-9152-7cdc122c511c.jpg.webp",
        disPrice:"3565.31",
        actPrice:"6632.16",
        name:"Smart BMS 1A 2A 6A..... Balance",
        reviews:"31 reviews",
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/CA/80/a05fe045-7d40-42ad-b99e-4fbfea026c51.jpg.webp",
        disPrice:"3723.80",
        actPrice:"6338.95",
        name:"Tronsmart Splash 1 TWS Speaker...",
        reviews:"0 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/4A/C3/3147fba3-0986-4e28-828f-77488bfb3b5d.jpg.webp",
        disPrice:"2918.66",
        actPrice:"3961.54",
        name:"Karaoke Wireless-- Microphone",
        reviews:"13 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/ED/18/dc2a3969-9f41-4f58-a1ef-37d22ff4bcf0.jpg.webp",
        disPrice:"3961.54",
        actPrice:"4991.75",
        name:"[50 Days Standby]Kospet Rock 1.69",
        reviews:"354 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/BC/C8/d25dc6f5-0a84-4a57-a201-7ef42b82b863.jpg.webp",
        disPrice:"1425.65",
        actPrice:"2772.84",
        name:"Lenovo LP2 TWS bluetooth--- 5.0",
        reviews:"1360 reviews",
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/BD/CF/c1587418-354b-449f-978d-3bfb4d776cb9.jpg.webp",
        disPrice:"2614.35",
        actPrice:"5546.48",
        name:"BlitzWolf® BW-BTS6 bluetooth 5.0",
        reviews:"723 reviews",
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6A/2F/ff633c6f-3113-45d3-a9ba-9b7a8c40ceb9.jpg.webp",
        disPrice:"1980.38",
        actPrice:"3169.08",
        name:"800W --Full Tone Pure-- Bass Car",
        reviews:"6 reviews",
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/02/B2/b47bc08a-f4fd-490a-ad40-ee501e491555.jpg.webp",
        disPrice:"1828.48",
        actPrice:"2544.29",
        name:"ZEALOT ---- S32 Portable Wireless",
        reviews:"52 reviews",
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/B5/BB/26e3f029-f7d7-4ae3-bf0b-d6f4563ae3b1.jpg.webp",
        disPrice:"2385.22",
        actPrice:"18225.96",
        name:"B126 bluetooth 5.0 Speaker Alarm",
        reviews:"192 reviews",
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A6/91/0ec677bb-b6d8-4494-933b-f4516712cdb9.JPG.webp",
        disPrice:"1589.88",
        actPrice:"1589.88",
        name:"Professional Ultimae UHF Wireless",
        reviews:"21 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/B7/82/8ac9868a-9ce0-42fd-94f2-41b7cc467867.jpg.webp",
        disPrice:"1510.35",
        actPrice:"2146.62",
        name:"PLEXTONE GS1 3--in-- 1 Sound Card",
        reviews:"14 reviews",
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/D6/9C/25da79fc-e5f3-40c2-87af-677673ba9c2f.jpg.webp",
        disPrice:"2862.42",
        actPrice:"3896.36",
        name:"[Female Health Management] DT(kit)",
        reviews:"111 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/1B/9B/78efed22-5c4d-47f5-9665-50578537cd85.jpg.webp",
        disPrice:"1271.75",
        actPrice:"3180.56",
        name:"Bakeey A3 Wireless Lavalier genuine quality",
        reviews:"185 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/51/2F/8ee2ecdf-64d0-42b8-8296-196319afb4cf.JPG.webp",
        disPrice:"151.91",
        actPrice:"635.48",
        name:"5v 30*30*10mm 3010 Cooling Fan A+ thing",
        reviews:"178 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/64/A2/80b29855-c1bf-4456-8268-d8ea50cb5db7.jpg.webp",
        disPrice:"667.29",
        actPrice:"1192.21",
        name:"5/10/15 Channel EQ---->Equalizer Stage",
        reviews:"25 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/99/D3/81bf810c-e2dc-49fd-ae48-540ea9ba8b68.jpg.webp",
        disPrice:"237.81",
        actPrice:"715.01",
        name:"VHM-314 Upgraded Version BT5.0- ultimate",
        reviews:"90 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/18/0F/c78eab87-d57e-4fd2-a594-6682c068aba9.jpg.webp",
        disPrice:"33320.71",
        actPrice:"56468.24",
        name:"Artillery® Sidewinder X2 & Never stoppable",
        reviews:"2131 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/30/18/71c7df08-fe95-4b81-981d-232eb05ba472.jpg.webp",
        disPrice:"3578.23",
        actPrice:"4771.24",
        name:"Bakeey L13 1.3 inch IPS Full Touch Nice Quality",
        reviews:"149 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/71/12/d560121d-a349-4f35-a2fb-83e9fe2611b3.jpg.webp",
        disPrice:"36506.04",
        actPrice:"40482.73",
        name:"FLSUN® Super Racer(SR) 3D Printer & Scanner",
        reviews:"177 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/8D/7D/0aca3bf7-3ec9-44c5-afe6-cea61fb15faf.png.webp",
        disPrice:"30938.67",
        actPrice:"41651.08",
        name:"Creality 3D® Ender-3 S1 3D Printer with refills",
        reviews:"49 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/4E/A8/83444125-ee77-491d-9c19-6cf9e3438394.jpg.webp",
        disPrice:"22265.50",
        actPrice:"27136.15",
        name:"Creality 3D® Ender-3 V2 Upgraded Enhanced",
        reviews:"2463 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/65/FE/ecbb5bfd-f245-4c47-88bb-abae79a38a05.jpg.webp",
        disPrice:"23859.36",
        actPrice:"47719.51",
        name:"BlitzWolf® AirAux AA-SAR2 80W full Coup",
        reviews:"192 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/BE/29/7172562a-8431-46e1-8877-a1b5c3d25b36.jpg.webp",
        disPrice:"17417.91",
        actPrice:"24018.43",
        name:"ACERISON--- chargeable make life simple",
        reviews:"3484 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/2B/13/14b20017-2f76-4887-8ad4-a69dc30bd3b0.jpg.webp",
        disPrice:"38892.05",
        actPrice:"62802.31",
        name:"Creality 3D® Ender-3 S1 pro 3D ultimate",
        reviews:"32 reviews",
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/30/36/08304cbc-ab96-4423-b57d-ff49649e9967.jpg.webp",
        disPrice:"5248.44",
        actPrice:"11133.9",
        name:"[IN STOCK] Zeblaze Stratos 2 Updated",
        reviews:"108 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/85/A8/4f80d6ee-dfd3-46c1-96f9-f493a49ab004.jpg.webp",
        disPrice:"6680.05",
        actPrice:"15110.64",
        name:"BlitzWolf® BW-WA3 100W Premium",
        reviews:"852 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/32/83/fe953408-9e6f-4b95-88e3-8a47f3f4bf8c.jpg.webp",
        disPrice:"3657.76",
        actPrice:"7952.59",
        name:"Xiaomi Redmi Smart Band Pro 1.47",
        reviews:"332 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/24/EF/d264b16d-628f-4566-bb79-f4cf5184303a.jpg.webp",
        disPrice:"2623.82",
        actPrice:"5566.57",
        name:"[Global Version]Xiaomi Mi Band Latest 6",
        reviews:"1014 reviews",
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/68/F2/c3e02c91-4ace-4e56-af65-2501a14d017e.jpg.webp",
        disPrice:"46050.10",
        actPrice:"52968.75",
        name:"Creality 3D® CR-SCAN 01 Portable Carriable",
        reviews:"31 reviews",
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/0F/ED/f57c380c-14e5-4325-8e33-67d3f64567f2.jpg.webp",
        disPrice:"39249.16",
        actPrice:"63626.286",
        name:"TWO TREES® SP-5 Core XY Genuine Quality",
        reviews:"112 reviews",
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/4F/37/3bb899e9-db6f-486f-b1b0-ddc059b25b2c.jpg.webp",
        disPrice:"2385.22",
        actPrice:"5566.57",
        name:"SENBONO GTS3 1.69 inch HD Full Vision",
        reviews:"123 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/06/E5/49575612-184f-4139-95b1-5ff11e03d21a.jpg.webp",
        disPrice:"49231.45",
        actPrice:"49231.45",
        name:"Anycubic® Photon Mono X 6K SLA Easily carry",
        reviews:"9 reviews",
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/03/5B/bd0f503f-74c4-41a1-87d4-042339146293.jpg.webp",
        disPrice:"1351.28",
        actPrice:"2146.62",
        name:"Lenovo QT81 TWS bluetooth 5.0 play with love",
        reviews:"2559 reviews",
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/F2/16/b69da956-57fe-440d-a26f-eb780707f74e.jpg.webp",
        disPrice:"91463.13",
        actPrice:"112937.27",
        name:"ONE-NETBOOK PLAYER 1S(change Life)",
        reviews:"3 reviews",
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/BF/6E/e61b7766-277b-4693-88c8-41be80b8ac35.png.webp",
        disPrice:"4532.63",
        actPrice:"10338.616",
        name:"Xiaomi Redmi Watch 2 Lite 1.5 inch Smart",
        reviews:"138 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/4E/A8/83444125-ee77-491d-9c19-6cf9e3438394.jpg.webp",
        disPrice:"22265.50",
        actPrice:"27136.15",
        name:"Creality 3D® Ender-3 V2 Upgraded Enhanced",
        reviews:"2463 reviews",
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/65/FE/ecbb5bfd-f245-4c47-88bb-abae79a38a05.jpg.webp",
        disPrice:"23859.36",
        actPrice:"47719.51",
        name:"BlitzWolf® AirAux AA-SAR2 80W full Coup",
        reviews:"192 reviews",
    },
];
let cartItems = JSON.parse(localStorage.getItem("addToCart")) || [];
elecData.map(function(elem){
    let box= document.createElement("div")
    let img= document.createElement("img")
    img.setAttribute("src",elem.image)
    img.setAttribute("id",'product-imgs')

    let price = document.createElement("h3")
    price.innerText=elem.disPrice

    let acprice = document.createElement("p")
    acprice.innerText=elem.actPrice

    let name = document.createElement("p")
    name.innerText=elem.name

    let review = document.createElement("p")
    review.innerText=elem.reviews

    let butt = document.createElement("button")
    butt.innerText="Add To Cart";
    
    butt.addEventListener("click",function(){
        sendToCart(elem);
    })

    box.append(img,price,acprice,name,review,butt)
    document.querySelector("#container").append(box)

});
   function sendToCart(elem){
    if(checkProduct(elem.name) === true){
    cartItems.push(elem);
    localStorage.setItem("addToCart",JSON.stringify(cartItems))
    alert("Product Added Successfuly")
    }
    else{
        alert("Product Already Added")
    }
   }

   function checkProduct(name1){
    let filtered = cartItems.filter(function(elem){
        return elem.name === name1
    })
    if(filtered.length>0){
        return false;
    }
    else{
        return true;
    }
   }
//New Data--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

   let BoderData = [
    {
        image:"https://img.staticbg.com/myos/2022/0615/20220615065615_862.jpg.webp",
        disPrice:"Upto 60% off",
        stuff:"RC Toys",
        location: "",

    },
    {
        image:"https://img.staticbg.com/myos/2022/0615/20220615065732_421.jpg.webp",
        disPrice:"Buy 2 Get 50% off",
        stuff:"Outdoor Sport Sales",
        location: "",

    },
    {
        image:"https://img.staticbg.com/myos/2022/0613/20220613061914_459.jpg.webp",
        disPrice:"Half Price Per Day",
        stuff:"Tools & Auto & Mirror",
        location: "",
    },
    {
        image:"https://img.staticbg.com/myos/2022/0613/20220613061920_709.jpg.webp",
        disPrice:"Home & Healthy Sales",
        stuff:"Down to $9.99",
        location: "",
    },
    {
        image:"https://img.staticbg.com/myos/2022/0613/20220613061925_602.jpg.webp",
        disPrice:"Buy 2 Get 30% off",
        stuff:"Fashion Sale",
        location: "",
    },
    {
        image:"https://img.staticbg.com/myos/2022/0615/20220615065636_415.jpg.webp",
        disPrice:"New From $9.99",
        stuff:"Electronics Sale",
        location: "",
    },
    {
        image:"https://img.staticbg.com/myos/2022/0615/20220615070513_397.jpg.webp",
        disPrice:"Free Gifts Await You",
        stuff:"Money Box",
        location: "",
    },
];

BoderData.map(function(elem){
    let anchor=document.createElement("a")
    let box= document.createElement("div")
    let img= document.createElement("img")
    img.setAttribute("src",elem.image)
    img.setAttribute("id",'pro-imgs')
    anchor.setAttribute("href",elem.location)

    let price = document.createElement("p")
    price.innerText=elem.disPrice

    let stuff = document.createElement("p")
    stuff.innerText=elem.stuff

    anchor.append(img,price,stuff);
    


    box.append(anchor)
    document.querySelector("#P-border").append(box)

});



    let boodata=JSON.parse(localStorage.getItem("loginDetails")) || [];
    if(boodata.length>0){
        document.querySelector("#sign-in").innerText=boodata[0].name;
    }else{
        document.querySelector("#sign-in").innerText="sign-in";
    }


