window.addEventListener('DOMContentLoaded', () => {

// sticky head
window.onscroll = function() {myFunction()};
var header = document.getElementById("stickyHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
	$('body').toggleClass('over-h')
	// $('.site-info').css('display', 'none');
  });

let owl= $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        center: true,
        responsive:{
            0:{
                items:1
            },
            1049:{
                items:3
            }
        },
    })

})



$(document).ready(function() {
	
	if($.cookie('font_size')){
		$('*').css('font-size', $.cookie('font_size'));
	}
	if($.cookie('show_image') == 'N'){
		$('img').hide();		
	}
	if($.cookie('site_color')){
		if($.cookie('site_color') == 'wb'){
			$('*:not(.cecutient *):not(.cecutient)').css('background-color', '#FFF');
			$('*:not(.cecutient *):not(.cecutient)').css('background-image', 'none');
			$('*:not(.cecutient *):not(.cecutient)').css('color', '#000');
		} else if ($.cookie('site_color') == 'bw'){
			$('*:not(.cecutient *):not(.cecutient)').css('background-color', '#000');
			$('*:not(.cecutient *):not(.cecutient)').css('background-image', 'none');
			$('*:not(.cecutient *):not(.cecutient)').css('color', '#FFF');
		} else if ($.cookie('site_color') == 'bb'){
			$('*:not(.cecutient *):not(.cecutient)').css('background-color', '#9dd1ff');
			$('*:not(.cecutient *):not(.cecutient)').css('background-image', 'none');
			$('*:not(.cecutient *):not(.cecutient)').css('color', '#063462');
		}	
	}


  $('.box__item-blind').click(function(e) {
    e.preventDefault();
    $('.cecutient').fadeToggle();
  });
	
	$('#cecutient_props_usual').click(function(){
		$('.cecutient').attr('data-fontsize', '15');
		$('input[name=show_image]').filter('[value="Y"]').attr('checked', true);
		$('input[name=site_color]').filter('[value="Y"]').attr('checked', false);
		$('img').show();
		$('*').css('font-size', null);
		$('*').css('background-color', null);
		$('*').css('background-image', null);
		$('*').css('color', null);

		$.cookie("site_color", false, { expires: 7, path: '/' });
		$.cookie("show_image", false, { expires: 7, path: '/' });
		
		// редирект на текущую страницу. Можно использовать $_SERVER['REQUEST_URI'], если доступно
		curLocation = '/';
		window.location.href = curLocation;
	});
	
	$('#special_link').click(function(){
		if($('#cecutient_props').css('display') == 'none'){
			$('#cecutient_props').css('display', 'block');
			$('#cecutient_props_image').css('display', 'block');
			$('#cecutient_props_usual').css('display', 'block');
			$('#cecutient_props_color').css('display', 'block');
		} else {
			$('#cecutient_props').css('display', 'none');
			$('#cecutient_props_image').css('display', 'none');
			$('#cecutient_props_usual').css('display', 'none'); 
			$('#cecutient_props_color').css('display', 'none');
		}
		return false;
	});
	
  $('#special_link_mob').click(function(){
		if($('#cecutient_props').css('display') == 'none'){
			$('#cecutient_props').css('display', 'block');
			$('#cecutient_props_image').css('display', 'block');
			$('#cecutient_props_usual').css('display', 'block');
			$('#cecutient_props_color').css('display', 'block');
		} else {
			$('#cecutient_props').css('display', 'none');
			$('#cecutient_props_image').css('display', 'none');
			$('#cecutient_props_usual').css('display', 'none'); 
			$('#cecutient_props_color').css('display', 'none');
		}
		return false;
	});

	$('#fontminus').click(function(){
		size = $('#fontminus').closest('.cecutient').attr('data-fontsize');
		size = size - 2;
		if(size > 7) $('#fontminus').closest('.cecutient').attr('data-fontsize', size);
		$('*').css('font-size', size);
		$.cookie("font_size", size, { expires: 7, path: '/' });
		return false;
	});
	
	$('#fontplus').click(function(){
		size = $('#fontminus').closest('.cecutient').attr('data-fontsize');
		size = parseInt(size) + 2;
		$('#fontminus').closest('.cecutient').attr('data-fontsize', size);
		$('*').css('font-size', size);
		$.cookie("font_size", size, { expires: 7, path: '/' });
		return false;
	});
	
	$('input[name=site_color]').change(function(){
		if($(this).val() == 'wb'){
			$('*:not(.cecutient *):not(.cecutient)').css('background-color', '#FFF');
			$('*:not(.cecutient *):not(.cecutient)').css('background-image', 'none');
			$('*:not(.cecutient *):not(.cecutient)').css('color', '#000');
			$.cookie("site_color", 'wb', { expires: 7, path: '/' });
		} else if ($(this).val() == 'bw'){
			$('*:not(.cecutient *):not(.cecutient)').css('background-color', '#000');
			$('*:not(.cecutient *):not(.cecutient)').css('background-image', 'none');
			$('*:not(.cecutient *):not(.cecutient)').css('color', '#FFF');
			$.cookie("site_color", 'bw', { expires: 7, path: '/' });
		} else if ($(this).val() == 'bb'){
			$('*:not(.cecutient *):not(.cecutient)').css('background-color', '#9dd1ff');
			$('*:not(.cecutient *):not(.cecutient)').css('background-image', 'none');
			$('*:not(.cecutient *):not(.cecutient)').css('color', '#063462');
			$.cookie("site_color", 'bb', { expires: 7, path: '/' });
		}
	});

	$('input[name=show_image]').change(function(){
		if($(this).val() == 'Y'){
			$('img').show();
			$.cookie("show_image", 'Y', { expires: 7, path: '/' });
		} else {
			$('img').hide();
			$.cookie("show_image", 'N', { expires: 7, path: '/' });
		}
	});

});

