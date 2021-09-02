$(document).ready(function(){
	$('body').on('click', '.open-modal', function(){
		let page = $(this).attr('page')
		console.log(page)
		$('.modal-container').removeClass('modal-container-open')
		$("#m"+page).addClass('modal-container-open')
	})
	$('body').on('click', '.overlay', function(){

		$('.modal-container').removeClass('modal-container-open')

	})
})

$('.dropdown .drop-btn').click(function () {

    // if ( $('.dropdown').hasClass('active') ) {
    //     $('.dropdown').removeClass('active');
    // } else {
    //     $('.dropdown').addClass('active');
    // }  

    $('.dropdown').toggleClass('active');

});


const windowRight = document.querySelector(".window-right");
const windowLeft = document.querySelector(".window-left");
const windowLefd = document.querySelector(".window-lefd");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(slider,1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
.fromTo(windowLeft, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
.fromTo(windowLefd, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
.fromTo(windowRight, 0.5, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, "-=0.5")
