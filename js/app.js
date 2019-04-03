console.log("Hang Looooooose");

//tomagachi class
class Tomagachi {
	constructor(name){
		this.name = name
		this.hunger = 0
		this.sleepiness = 0
		this.boredom = 0
		this.age = 0

	}




}


	let intervalId = 0;
//game object
const game = {
	
	timer(){
		intervalId = window.setInterval(() => {
			age++;
			
		}, 100);

	}
}


game.timer();
console.log(this.age);
//listeners

$('form').on('submit', (e)=>{
	e.preventDefault();
	const $inputValue = $('#nameInput').val();
	const $nameHeader = $('<h2/>')
	$('#userName').append(($nameHeader).text($inputValue));
	


})













