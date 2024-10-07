function mouseeffect(){
    var one = document.querySelector("#img1")
one.addEventListener("mouseenter",function(){
    this.style.opacity="1";
})
one.addEventListener("mouseleave",function(){
    this.style.opacity="0";
})

var two = document.querySelector("#img2")
two.addEventListener("mouseenter",function(){
    this.style.opacity="1";
})
two.addEventListener("mouseleave",function(){
    this.style.opacity="0";
})


var three = document.querySelector("#img3")
three.addEventListener("mouseenter",function(){
    this.style.opacity="1";
})
three.addEventListener("mouseleave",function(){
    this.style.opacity="0";
})

var texts = document.querySelectorAll(".textleft")
texts.addEventListener("mouseenter",function(){
    this.style.opacity="0";
})

}
mouseeffect()

gsap.from("#div1 img",{

y:200
})