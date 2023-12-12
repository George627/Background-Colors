const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

	const colorKeyframes = new KeyframeEffect(
		button, 
		[{backgroundColor: color1.value, borderColor: color2.value},
			{backgroundColor: color2.value, borderColor: color1.value}],
		{ duration: 2000, fill: "forwards", iterations: 'Infinity', direction: 'alternate'}, 
	);

	const colorAnimation = new Animation(
		colorKeyframes,
		document.timeline,
	  );
			  
	colorAnimation.play();
}

const switchColors = () => {
	const swapColor = color1.value;
	color1.value = color2.value;
	color2.value = swapColor;

	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);