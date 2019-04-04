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
	changeAge(){
		this.age += 1;
		console.log(this.age);
		$('#currentAge').text(this.age)
	}
	changeHunger(){
		this.hunger += 1;
		$('#currentHunger').text(this.hunger)

	}
	changeSleepiness(){
		this.sleepiness += 1;
		$('#currentSleepiness').text(this.sleepiness)

	}
	changeBoredom(){
		this.boredom += 1;
		$('#currentBoredom').text(this.boredom)

	}
	
	

}


	let intervalId = 0;
//game object
const game = {
	gameStarted: false,
	power: true,
	time: 0,
	intervalId: null,
	startGame(){
		const bender = new Tomagachi();
		this.intervalId = setInterval(() => {
			this.time += 1;	
			//console.log(this.time);
			if (this.time % 50 === 0){
				bender.changeAge();
			} 
			if (this.time % 10 === 0){
				bender.changeHunger();
			}
			if (this.time % 20 === 0){
				bender.changeSleepiness();
			}
			if (this.time % 5 === 0){
				bender.changeBoredom();
			}
		}, 100);

	},
	beerMe(){
		bender.hunger -= 5;
		$('#currentHunger').text(bender.hunger)
	},
	sleepMode(){
		bender.sleepiness -=5;
		$('#currentSleepiness').text(bender.sleepiness)
	},
	bend(){
		bender.boredom -=5;
		$('#currentBoredom').text(bender.boredom)
	}
}

//listeners

$('form').on('submit', (e)=>{
	e.preventDefault();
	const $inputValue = $('#nameInput').val();
	const $nameHeader = $('<h2/>')
	$('#userName').append(($nameHeader).text($inputValue));
	game.startGame();	
})

$('#beer').on('click', (e)=>{
	game.beerMe();
})

$('#sleep').on('click', (e)=>{
	game.sleepMode();
})

$('#bend').on('click', (e)=>{
	game.bend();
})











