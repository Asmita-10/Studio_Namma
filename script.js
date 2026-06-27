const locomotiveScroll = new LocomotiveScroll();
let navmid = document.querySelector('.nav-mid');
let page = document.querySelector('.main');
let b1 = document.querySelector('.b1');
let services=document.querySelector(".services");
let services_h3=document.querySelector(".services h3");
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let h = document.querySelectorAll('.h');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let b7 = document.querySelector('.b7');
let b8 = document.querySelector('.b8');
let nav=document.querySelector('.nav');
let h1=document.querySelector('.h1');
let body=document.querySelector('body');
let h3=document.querySelector('.h3');
let p=document.querySelector('.p');
let lineleft=document.querySelector('.line-left');
let floating_tag=document.querySelector('.floating-tag');
const cursor = document.querySelector(".cursor");
const playground = document.querySelector(".playground");
let isOpen = false;
let isdark=false;
let begin=document.querySelector('.begin-line');
let navleft=document.querySelector('.nav-left');

navleft.addEventListener("click", () => {
    if (!isdark) {
        body.style.backgroundColor = "black";
        navleft.textContent = "LIGHT MODE";
        if (b1) b1.style.backgroundColor = "black";
        if (h1) h1.style.color = "white";
        if (h3) h3.style.color = "white";
        if (p) p.style.color = "white";
        if (floating_tag) floating_tag.style.color = "white";
        if (b6) b6.style.backgroundColor = "black";
        if (b5) b5.style.backgroundColor = "black";
        if (services) services.style.backgroundColor = "black";
        if (b8) b8.style.backgroundColor = "black";
        if (nav) nav.style.color = "white";
        if (services_h3) services_h3.style.color = "white";

   if (playground) playground.style.color = "white";
    if (begin) begin.style.color = "white";
    if (maincontent) maincontent.style.color = "white";   
    isdark=true;
}
else{
    navleft.textContent="DARK MODE";
    b1.style.backgroundColor="white";
    nav.style.color='black';
    b5.style.backgroundColor="white";
    h1.style.color="black";
    if (playground) playground.style.color = "black";
    if (begin) begin.style.color = "black";
    if (maincontent) maincontent.style.color = "black";
    body.style.backgroundColor="white";
    isdark=false;
}
})

navmid.addEventListener("mouseover",() =>{
    if(!isOpen){
        navmid.textContent = "OPEN";
    }
});
navmid.addEventListener("mouseout",() =>{
    if(!isOpen){
        navmid.textContent = "MENU";
    }
});
navmid.addEventListener("click",() =>{
    if(!isOpen){
        b1.classList.add("moveDown");
        navmid.textContent = "CLOSE";
        isOpen = true;
    } else {
        b2.classList.remove("show");
        b1.classList.remove("moveDown");
        navmid.textContent = "MENU";
        isOpen = false;
    }
});

h.forEach((element) => {
    element.addEventListener("mouseover",() =>{
        element.style.marginLeft = "5%";
        element.style.transition = "all 0.7s ease";
    });
    element.addEventListener("mouseout",() =>{
        element.style.marginLeft = "0%";
        element.style.transition = "all 0.7s ease";
    });
});

let hoverBox = document.querySelector('.hover-box');
b1.addEventListener("mousemove",(dets)=>{
    hoverBox.style.left = dets.x + "px";
    hoverBox.style.top = dets.y + "px";
    hoverBox.style.display = "block";
});

b2.addEventListener("mousemove",(dets)=>{
    hoverBox.style.left = dets.x + "px";
    hoverBox.style.top = dets.y + "px";
    hoverBox.style.display = "block";
});



document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

playground.addEventListener("mouseenter", () => {
    cursor.classList.add("portfolio-hover");
});

playground.addEventListener("mouseleave", () => {
    cursor.classList.remove("portfolio-hover");
});

const cards = document.querySelectorAll(".project-card");
cards.forEach((card) => {
    const tag = card.parentElement.querySelector(".floating-tag");
    card.addEventListener("mousemove", (e) => {
        tag.style.left = e.clientX + 20 + "px";
        tag.style.top = e.clientY + 20 + "px";
    });
    card.addEventListener("mouseenter", () => {
        tag.style.opacity = "1";
    });
    card.addEventListener("mouseleave", () => {
        tag.style.opacity = "0";
    });
});

const serviceTitles = document.querySelectorAll(".services h1");

serviceTitles.forEach((title) => {
    title.addEventListener("mouseenter", () => {
        cursor.style.width = "160px";
        cursor.style.height = "50px";
        cursor.style.borderRadius = "12px";
    });

    title.addEventListener("mouseleave", () => {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.borderRadius = "50%";
    });
});

// let foot = document.querySelector('.foot-logo');
// window.addEventListener("scroll",() => {
//     let scroll = window.scrollY;
//     if(scroll > 7000){
//         let stretch = 1 + (scroll - 7000) / 1000;
//         foot.style.transform = `scale(${stretch})`;
//     } else {
//         foot.style.transform = "scale(1)";
//     }
// })

let image1=document.querySelectorAll(".image1");
let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
image1.forEach((img)=>{
    img1.addEventListener("mouseover",()=>{
        
    });
})

let interval;
let index=0;
let text=document.querySelector(".p");
let details=document.querySelector(".i1");
let maincontent=document.querySelector('.main-content');
let image=document.querySelectorAll('.image');
let images=document.querySelector('.images');
details.addEventListener("mouseenter",()=>{
  images.style.visibility="visible";
  index=0;
  image[index].style.opacity=1;
  interval=setInterval(()=>{
    image.forEach((element)=>{
      element.style.opacity=0;
    });
      index++;
      if(index>=image.length){
        index=0;
      }
      image[index].style.opacity=1;
},1000);
});
details.addEventListener("mouseleave",()=>{
    clearInterval(interval);  
    image.forEach((element)=>{
      element.style.opacity=0;
      element.style.transform = "translateY(100px)";
    });
  images.style.visibility="hidden";
  index=0;
  });


let interval2;
let index2=0;
let count2=0;
let zCounter=1;
let detail2=document.querySelector(".i2");
let image2=document.querySelectorAll('.image2');
let images2=document.querySelector('.images2');


detail2.addEventListener("mouseenter",()=>{
  images2.style.visibility="visible";
  index2=0;
  count2++;

  if(count2%2==0){
    image2.style.height="250px";
    image2.style.width="290px";
    image2.style.transform=rotate(30);
}
else{
    image2.style.height="290px";
    image2.style.width="250px";
    image2.style.transform=rotate(-30);
}

  image2[index].style.opacity=1;
  interval2=setInterval(()=>{
    image2.forEach((element)=>{
        
      element.style.opacity=0;
      element.style.transform = "translateY(100px)";
    element.style.zIndex = zCounter++;
    });
      index2++;
      if(index2>=image2.length){
        index2=0;
      }
      image2[index2].style.opacity=1;
},1000);
});




detail2.addEventListener("mouseleave",()=>{
    clearInterval(interval);  
    image2.forEach((element)=>{
      element.style.opacity=0;  
  element.style.transform = "translateY(100px)";

    });
  images2.style.visibility="hidden";
  zCounter=1;
  index2=0;
  });