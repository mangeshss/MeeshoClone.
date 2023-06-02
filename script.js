import BagsFootwear from "./data/BagsFootwear.js";
import BeautyHealth from "./data/BeautyHealth.js";
import Electronics from "./data/Electronics.js";
import HomeKitchen from "./data/HomeKitchen.js";
import JewelleryAccessories from "./data/JewelleryAccessories.js";
import Kids from "./data/Kids.js";
import Men from "./data/Men.js";
import WomenEthnic from "./data/WomenEthnic.js";
import WomenWestern from "./data/WomenWestern.js";

// That code for the search textbox.

let inputSearchE1=document.querySelector(".inputSearch")

let recentInput=[]
let formInputE1=document.getElementById("inputForm")
const listOfRecentE1=document.querySelector(".listOfRecent")
let listOfRecentHTMLE1=""

//for the closed icon
inputSearchE1.addEventListener("keydown",()=>{
        console.log(inputSearchE1);
        if(inputSearchE1.value){
            document.getElementById("closeSearch").style.display="block"
        }else{
            document.getElementById("closeSearch").style.display="none"
        }
})

formInputE1.addEventListener("submit",(e)=>{
   e.preventDefault()

   let listOfRecentHTMLE1=""


    recentInput.unshift( inputSearchE1.value);
    console.log(recentInput);

    if(recentInput.length>0){
        for(let i=0;i<recentInput.length>0;i++){
    listOfRecentHTMLE1+=`
    <div class="recentItem">
              <div class="recentSearchIcon">
                <img src="img/RecentSearch.png" />
              </div>
              <p>${recentInput[i]}</p>
            </div>
          
    `
        }
        listOfRecentE1.innerHTML= listOfRecentHTMLE1;
    }
})


/* WomenEthenic */

let womenEthic=document.getElementById("womenEthic");
function womenEthicFunc(){
    return WomenEthnic.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

womenEthic.innerHTML=womenEthicFunc();


/* WomenWestern */


let womenWest=document.getElementById("womenWest");
function womenWestFunc(){
    return WomenWestern.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

womenWest.innerHTML=womenWestFunc();

/* Men */

let men=document.getElementById("men");
function menFunc(){
    return Men.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

men.innerHTML=menFunc();

/*Kids*/

let kids=document.getElementById("kids");
function kidsFunc(){
    return Kids.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

kids.innerHTML=kidsFunc();

/* Home and Kitchen */

let handk=document.getElementById("handk");
function handkFunc(){
    return HomeKitchen.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

handk.innerHTML=handkFunc();

/* Beauty and Health */


let bandh=document.getElementById("bandh");
function bandhFunc(){
    return BeautyHealth.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

bandh.innerHTML=bandhFunc();


/* Jewellery and Accessories.  */

let janda =document.getElementById("janda");
function jandaFunc(){
    return JewelleryAccessories.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

janda.innerHTML=jandaFunc();

/*Bags and Footwear. */

let bandf=document.getElementById("bandf");
function bandfFunc(){
    return BagsFootwear.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

bandf.innerHTML=bandfFunc();

/*Electronics */


let ele=document.getElementById("ele");
function eleFunc(){
    return Electronics.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

ele.innerHTML=eleFunc();


/* Insted of that 9 function use following .


const reuseFun=(id,data)=>{
let temp=document.getElementById("id");
function tempFunc(){
    return data.map(el=>{
        let list="";
   
    list=el.data.map(element=>`<p>${element}</p>`).join(" ")
    return `
    <div class="column">
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
}).join("")
}

temp.innerHTML=tempFunc();
}

//and simply called it.
//use example is electronics.


reusefun("ele",Electronics);
*/



          