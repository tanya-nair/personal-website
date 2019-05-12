console.log("mic test 123")
var heading=document.getElementById('project_heading')

function colorswitcher(){
	if (heading.style.color=="purple"){
		heading.style.color="black"
		heading.innerText="My Projects 🖥"

	}else{
		heading.style.color="purple"
		heading.innerText="My Creations 🎨"
	}
}
setInterval(colorswitcher, 1500)
