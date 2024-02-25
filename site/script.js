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

// Получаем ссылки на все элементы списка
const listItems = list.getElementsByTagName('li');

// Добавляем обработчик события click на каждый элемент списка
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function() {
    // Устанавливаем класс для выбранного элемента списка
    this.classList.toggle('active');
	pulse[i].style.visibility = "inherit"
	setTimeout(()=>{console.log("Pulse!"); this.classList.toggle('active'); pulse[i].style.visibility = "hidden" }, 900);

	
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
	setTimeout(()=>{console.log("close door!");  homeHidden.classList.toggle('active'); home.classList.toggle('active'); header.classList.toggle('active');}, 100);
});