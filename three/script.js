let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");

main.addEventListener("mousemove", function(e){
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration:1,
    })
})

image.addEventListener("mouseenter", function(e){
    gsap.to(cursor, {
        scale:2
    })
})
image.addEventListener("mouseleave", function(e){
    gsap.to(cursor, {
        scale:1
    })
})