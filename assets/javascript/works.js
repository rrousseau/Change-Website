$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if(wScroll > $('.work-pics').offset().top - ($(window).height() / 1.35)) {

		$('.work-pics figure').each(function(i){

			setTimeout(function(){
				$('.work-pics figure').eq(i).addClass('is-showing');
			}, 150 * (i+1));
		});

	}

});

$(function() {
	workBelt();
	proj1Load();
	proj2Load();
	proj3Load();
	proj4Load();
	proj5Load();
	proj6Load();
	proj7Load();
	proj8Load();
	proj9Load();
	proj10Load();
	proj11Load();
	proj12Load();
});

function workBelt() {

	$('.work-pics figure').click(function(){
		$('.work-belt').css('left','-100%');
		$('.work-container').show();
	});

	$('.work-return').click(function(){
		$('.work-belt').css('left','0%');
		$('.work-container').hide(900);
	});

}

function proj1Load() {
	$.ajaxSetup({ cache: false});

	$('.proj1').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj1HTML = './work/proj-1/proj-1.html';
			proj1Title = './work/proj-1/proj-1title.html';
		$('.project-load').load(proj1HTML);
		$('.project-title').load(proj1Title);

	});
}

function proj2Load() {
	$.ajaxSetup({ cache: false});

	$('.proj2').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj2HTML = './work/proj-2/proj-2.html';
			proj2Title = './work/proj-2/proj-2title.html';
		$('.project-load').load(proj2HTML);
		$('.project-title').load(proj2Title);

	});
}

function proj3Load() {
	$.ajaxSetup({ cache: false});

	$('.proj3').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj3HTML = './work/proj-3/proj-3.html';
			proj3Title = './work/proj-3/proj-3title.html';
		$('.project-load').load(proj3HTML);
		$('.project-title').load(proj3Title);

	});
}

function proj4Load() {
	$.ajaxSetup({ cache: false});

	$('.proj4').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj4HTML = './work/proj-4/proj-4.html';
			proj4Title = './work/proj-4/proj-4title.html';
		$('.project-load').load(proj4HTML);
		$('.project-title').load(proj4Title);

	});
}

function proj5Load() {
	$.ajaxSetup({ cache: false});

	$('.proj5').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj5HTML = './work/proj-5/proj-5.html';
			proj5Title = './work/proj-5/proj-5title.html';
		$('.project-load').load(proj5HTML);
		$('.project-title').load(proj5Title);

	});
}

function proj6Load() {
	$.ajaxSetup({ cache: false});

	$('.proj6').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj6HTML = './work/proj-6/proj-6.html';
			proj6Title = './work/proj-6/proj-6title.html';
		$('.project-load').load(proj6HTML);
		$('.project-title').load(proj6Title);

	});
}

function proj7Load() {
	$.ajaxSetup({ cache: false});

	$('.proj7').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj7HTML = './work/proj-7/proj-7.html';
			proj7Title = './work/proj-7/proj-7title.html';
		$('.project-load').load(proj7HTML);
		$('.project-title').load(proj7Title);

	});
}

function proj8Load() {
	$.ajaxSetup({ cache: false});

	$('.proj8').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj8HTML = './work/proj-8/proj-8.html';
			proj8Title = './work/proj-8/proj-8title.html';
		$('.project-load').load(proj8HTML);
		$('.project-title').load(proj8Title);

	});
}

function proj9Load() {
	$.ajaxSetup({ cache: false});

	$('.proj9').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj9HTML = './work/proj-9/proj-9.html';
			proj9Title = './work/proj-9/proj-9title.html';
		$('.project-load').load(proj9HTML);
		$('.project-title').load(proj9Title);

	});
}

function proj10Load() {
	$.ajaxSetup({ cache: false});

	$('.proj10').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj10HTML = './work/proj-10/proj-10.html';
			proj10Title = './work/proj-10/proj-10title.html';
		$('.project-load').load(proj10HTML);
		$('.project-title').load(proj10Title);

	});
}

function proj11Load() {
	$.ajaxSetup({ cache: false});

	$('.proj11').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj11HTML = './work/proj-11/proj-11.html';
			proj11Title = './work/proj-11/proj-11title.html';
		$('.project-load').load(proj11HTML);
		$('.project-title').load(proj11Title);

	});
}

function proj12Load() {
	$.ajaxSetup({ cache: false});

	$('.proj12').click(function(){

		var spinner = '<div class="loader">Loading...</div>',
			proj12HTML = './work/proj-12/proj-12.html';
			proj12Title = './work/proj-12/proj-12title.html';
		$('.project-load').load(proj12HTML);
		$('.project-title').load(proj12Title);

	});
}






