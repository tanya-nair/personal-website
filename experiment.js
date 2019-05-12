console.log("testing...")
var body=document.getElementById("body_text")

body.style.background="#BDFFFD"

var bubble=document.getElementById("left_bubble")

setInterval(() => {
    console.log("bubbblleeessss")
    bubble.style.top=Math.floor(Math.random()*800) + 'px'
    bubble.style.left=Math.floor(Math.random()*800)+ 'px'
}, 800);