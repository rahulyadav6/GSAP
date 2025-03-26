
// let tl = gsap.timeline()

// tl.to("#box1", {
//     x:800,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// tl.to("#box2", {
//     x:800,
//     duration:1.5,
// })
// tl.to("#box3", {
//     x:800,
//     duration:1.5,
// })

// gsap.from("#page1 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })
// gsap.from("#page2 #box", {
//     scrollTrigger: {
//         trigger:"#page2 #box",
//         scroller: "body",
//         start:"top 80%",
//         end: "top 50%",
//         scrub: 1 
//     },
//     scale:0,
//     duration:2,
//     rotate:360
// })




gsap.from("#page2 h1", {
    opacity:0,
    duration:2,
    x:700,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        start: "top 80%",
        end:"bottom 50%",
        scrub:1
    }
})
gsap.from("#page2 h2", {
    opacity:0,
    duration:2,
    x:-700,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        start: "top 80%",
        end:"bottom 50%",
        scrub:1,
        // pin:1
    }
})
