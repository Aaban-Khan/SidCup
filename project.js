const crsr=document.querySelector("#cursor");
const blur=document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-200+"px"
    blur.style.top=dets.y-200+"px"
})

let h5all=document.querySelectorAll("#nav h5")
h5all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale="2.5"
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale="1"
        crsr.style.border="0px solid #95c11e"
        crsr.style.backgroundColor="#95c11e"
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"95px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }

})

gsap.from("#cards-container",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
        stagger:true
    }

})

gsap.from("#colon1",{
    y:-40,
    x:-40,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 25%",
        end:"top 50%",
        // markers:true,
        scrub:2,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 91%",
        end:"top 100%",
        // markers:true,
        scrub:2,
    }
})
gsap.from("#page4 h1",{
    y:30,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 90%",
        end:"top 80%",
        // markers:true,
        scrub:1,
    }
})