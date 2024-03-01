$(document).ready(function(){
	$('.slider__flexbox-container').slick();
	$('.feedback__slider-container').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });
});

const pulse = document.querySelectorAll('.pulse');


const element = document.querySelectorAll('counter__cost-menu-list1 li');
const list = document.querySelector('.counter__cost-menu-list1');
let inputZone = document.getElementById('inputdonate');
inputZone.value = "";

// Получаем ссылки на все элементы списка
const listItems = list.getElementsByTagName('li');

// Добавляем обработчик события click на каждый элемент списка
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function() {
    // Устанавливаем класс для выбранного элемента списка
    this.classList.toggle('active');
	pulse[i].style.visibility = "inherit"
	setTimeout(()=>{console.log("Pulse!"); this.classList.toggle('active'); pulse[i].style.visibility = "hidden" }, 900);
	inputZone.value = listItems[i].textContent;
	
  });
}



let menuBtn = document.querySelector('.header__menu-burger');
let header = document.querySelector('.header');
let home = document.querySelector('.home');
let homeHidden = document.querySelector('.home-hidden');
let close = document.querySelector('.home__close');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	setTimeout(()=>{console.log("open door!"); header.classList.toggle('active');
	 homeHidden.classList.toggle('active'); home.classList.toggle('hide'); }, 100);
	
})

close.addEventListener('click', function(){
	close.classList.toggle('active');
	console.log('hi');
	setTimeout(()=>{console.log("close door!");  homeHidden.classList.toggle('active'); home.classList.toggle('hide'); header.classList.toggle('active'); close.classList.toggle('active');}, 100);
	menuBtn.classList.toggle('active');
});


let menuBtn2 = document.querySelector('.header__menu-burger');
let header2 = document.querySelector('.header');
let home2 = document.querySelector('.home');
let homeHidden2 = document.querySelector('.home-hidden');
let close2 = document.querySelector('.home__close');
menuBtn2.addEventListener('click', function(){
	menuBtn2.classList.toggle('active');
	setTimeout(()=>{console.log("open door!"); header2.classList.toggle('active');
	 homeHidden2.classList.toggle('active'); home2.classList.toggle('hide'); }, 100);
	
})

close2.addEventListener('click', function(){
	close2.classList.toggle('active');
	console.log('hi');
	setTimeout(()=>{console.log("close door!");  homeHidden.classList.toggle('active'); home.classList.toggle('hide'); header.classList.toggle('active'); close.classList.toggle('active');}, 100);
	menuBtn2.classList.toggle('active');
});


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


let inputEmail = document.getElementById('emailzone');
let inputButton = document.querySelector(".footer__button");
inputEmail.addEventListener('inputEmail', onInput);

const input2 = document.querySelector('input');


function onInput() {
	if (isEmailValid(inputEmail.value)) {
	  inputEmail.style.borderColor = 'green';
	  inputButton.style.color = 'green';
	  inputButton.style.borderColor = 'green';
	  console.log('true');
	} else {
	  inputEmail.style.borderColor = 'red';
	  inputButton.style.borderColor = 'red';
	  inputButton.style.color = 'red';
	  console.log('not true');
	}
  }
  
  
  
  function isEmailValid(value) {
	  return EMAIL_REGEXP.test(value);
  }

inputButton.addEventListener('click', function(){
	onInput();
});

