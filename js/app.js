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
	evolve1(){
		$('#bender').attr('src', 'http://slurmed.com/fanart/juliet/009_teen-bender.jpg')
	}
	evolve2(){
		$('#bender').attr('src', 'https://vignette.wikia.nocookie.net/en.futurama/images/4/43/Bender.png/revision/latest?cb=20150206072725')
	}
	beerMe(){
		this.hunger -= 1;
		$('#currentHunger').text(this.hunger)
	}
	sleepMode(){
		this.sleepiness -= 1;
		$('#currentSleepiness').text(this.sleepiness)
	}
	bend(){
		
		this.boredom -= 1;
		$('#currentBoredom').text(this.boredom)
	}
	dead(){
		$('#bender').attr('src', 'https://gamepedia.cursecdn.com/futuramaworldsoftomorrow_gamepedia_en/thumb/d/d1/Ghost_Bender.png/132px-Ghost_Bender.png?version=bf72706ffeaa982ee4de295ef3956a2a')
		//$('#top').replaceWith($('<img/>').attr('src', 'http://i.imgur.com/1agHb.jpg'));
		$('#bottom').replaceWith($('<h1/>').text('Your bending unit has kicked the can. Play again.'))

	}
}


let intervalId = 0;
//game object
const game = {
	gameStarted: false,
	power: true,
	time: 0,
	intervalId: null,
	currentPet: null,
	startGame(){
		const bender = new Tomagachi();
		this.currentPet = bender;
		this.intervalId = setInterval(() => {
			this.time += 1;	
			//console.log(this.time);
			if (this.time % 50 === 0){
				this.currentPet.changeAge();
			} 
			if (this.time % 15 === 0){
				this.currentPet.changeHunger();
			}
			if (this.time % 20 === 0){
				this.currentPet.changeSleepiness();
			}
			if (this.time % 10 === 0){
				this.currentPet.changeBoredom();
			}
			if (this.currentPet.age >= 5){
				this.currentPet.evolve1();
			}
			if (this.currentPet.age >= 10){
				this.currentPet.evolve2();
			}
			if (this.currentPet.hunger >=10 || this.currentPet.boredom >= 10 || this.currentPet.sleepiness >=10){
				this.currentPet.dead();
				clearInterval(this.intervalId);
			}
		}, 100);

	},
	
}

//listeners

$('form').on('submit', (e)=>{
	e.preventDefault();
	const $inputValue = $('#nameInput').val();
	const $nameHeader = $('<h2/>')
	$('#userName').append(($nameHeader).text($inputValue));
	game.startGame();	
})


//these events are not able to acced the functions contained within them
$('#beer').on('click', (e)=>{
	game.currentPet.beerMe();
})

$('#sleep').on('click', (e)=>{
	game.currentPet.sleepMode();
})

$('#bend').on('click', (e)=>{
	game.currentPet.bend();
})











