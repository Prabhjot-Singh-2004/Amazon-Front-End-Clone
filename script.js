const leftbutton=document.querySelector(".l-btn");
const rightbutton=document.querySelector(".r-btn");

rightbutton.addEventListener('click',function(event) {
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft +=800;
    event.preventDefault();
});
leftbutton.addEventListener('click',function(event) {
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft -=800;
    event.preventDefault();
})
const leftbutton1=document.querySelector(".btn1-b");
const rightbutton1=document.querySelector(".btn1-a");

rightbutton1.addEventListener('click',function(event) {
    const conent=document.querySelector('.product-slide-1');
    conent.scrollLeft +=800;
    event.preventDefault();
});
leftbutton1.addEventListener('click',function(event) {
    const conent=document.querySelector('.product-slide-1');
    conent.scrollLeft -=800;
    event.preventDefault();
})

const backtop=document.querySelector(".foot-panel1");
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})
const sidebar=document.querySelector(".sidebar");
const cross=document.querySelector(".fa-xmark");
const black=document.querySelector(".black");
const sidebtn=document.querySelector(".panel-all");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})
cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})

const sign=document.querySelector(".nav-signin");
const tri=document.querySelector(".triangle");
const signin=document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})