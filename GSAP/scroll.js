gsap.from("#page1 #box",{ 
scale:0,
duration:1,
delay:1,
rotate:360
})
gsap.from("#page2 #box",{ 
scale:0,
duration:1,
rotate:360,
scrollTrigger:{
    trigger:"#page2 #box",
    scroller:"body",
    markers:true,
    start:"top 80%",
    end:"top 40%",
    scrub:true
}
})
gsap.from("#page3 h1",{ 
opacity:0,
x:500,
duration:2,
scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"body",
    markers:true,
    start:"top 80%"
}
})
gsap.from("#page3 h2",{ 
    opacity:0,
    x:-500,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"body",
        // markers:true,
        // start:"top 80%"
}
})
gsap.to("#page4 h1",{
    transform:"translateX(-90%)",
    duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})
