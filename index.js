
let numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++){

  document.querySelectorAll('.drum')[i].addEventListener('click', function(){

    let buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML)
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
  })
}


  document.addEventListener('keydown', function(event){
        makeSound(event.key);
        makeAnimation(event.key);
  });





function makeSound(key) {


  switch (key) {
    case "w":
      let audio1 = new Audio('sounds/crash.mp3');
      audio1.play();
      audio1.volume = 0.1;
      break;
    case 'a':
      let audio2 = new Audio('sounds/kick-bass.mp3');
      audio2.play();
      audio2.volume = 0.1;
      break;
    case 's':
      let audio3 = new Audio('sounds/snare.mp3');
      audio3.play();
      audio3.volume = 0.1;
      break;
    case 'd':
      let audio4 = new Audio('sounds/tom-1.mp3');
      audio4.play();
      audio4.volume = 0.1;
      break;
    case 'j':
      let audio5 = new Audio('sounds/tom-2.mp3');
      audio5.play();
      audio5.volume = 0.1;
      break;
    case 'k':
      let audio6 = new Audio('sounds/tom-3.mp3');
      audio6.play();
      audio6.volume = 0.1;
      break;
    case 'l':
      let audio7 = new Audio('sounds/tom-4.mp3');
      audio7.play();
      audio7.volume = 0.1;
      break;

    default:
      console.log('nani');

    }

}





function makeAnimation(currentKey){
  let activeButton = document.querySelector('.'+currentKey);
  activeButton.classList.add('pressed');


  setTimeout(function(){
      activeButton.classList.remove('pressed');
    }, 100);

}
