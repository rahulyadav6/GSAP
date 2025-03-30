function breakText(){
    let h1 = document.querySelector("h1")
    let h1Text = h1.textContent;

    let splitedText = h1Text.split("");

    let halfValue = Math.floor(splitedText.length/2);

    let clutter = "";
     
    splitedText.forEach(function(ele, idx){
        if(idx < halfValue){
            clutter += `<span class="a">${ele}</span>`
        }else{
            clutter += `<span class="b">${ele}</span>`
        }
    })
    console.log(clutter);

    h1.innerHTML = clutter
}

breakText();


gsap.from("h1 .a", {
    y:70,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.15
})
gsap.from("h1 .b", {
    y:70,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:-0.15
})