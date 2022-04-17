// alert();

document.querySelector(".main-skill-container").addEventListener("mouseover",function(){
    document.querySelector("#nav-one").classList.add("active");
});
document.querySelector(".main-skill-container").addEventListener("mouseout",function(){
    document.querySelector("#nav-one").classList.remove("active");
});

//nav-item-two

document.querySelector(".main-Project-Section").addEventListener("mouseover",function(){
    document.querySelector("#nav-two").classList.add("active");
});
document.querySelector(".main-Project-Section").addEventListener("mouseout",function(){
    document.querySelector("#nav-two").classList.remove("active");
});

//nav-item-three

document.querySelector(".contact-container").addEventListener("mouseover",function(){
    document.querySelector("#nav-three").classList.add("active");
});
document.querySelector(".contact-container").addEventListener("mouseout",function(){
    document.querySelector("#nav-three").classList.remove("active");
});