$(function() {
		var isMobile = {
				Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
				BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
				iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
				Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
				any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
			};

			if ( !isMobile.any() ) {
		    // Код не для телефонов
				//  var $headerVideo = $('#bgndVideo').YTPlayer({
				// 	quality: 'hd720',
				// 	anchor: 'top, top'
				// 	// mobileFallbackImage: '../img/header-bg.jpg'
				// });

		  }

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".header nav").toggleClass('active');
        return false;
    });

   

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Accordeon-----------------------------------
		$('.acordeon-link').click(function(e) {
			e.preventDefault();
			var $currentItem = $(this).closest('.acordeon-item'),
				$mark = $(this).find('.requirements-link__mark');

			$mark.toggleClass('active');
			if($mark.hasClass('active')){
				$mark.text('–');
			}else{
				$mark.text('+');
			}
			if($currentItem.hasClass('acordeon-item-with-sublist')){

				$mark.toggleClass('opened');
				$currentItem.find('.acordeon-sublist')
				.stop(true, true)
				.slideToggle();
				$currentItem.siblings()
				.find('.acordeon-sublist')
				.stop(true, true)
				.slideUp();

				$currentItem.siblings()
				.find('.requirements-link__mark')
				.text('+');


			}else{
				return;
			}
		});
// end Accordeon-----------------------------------
	$(document).ready(function(){

		if($('.tooltip').length > 0){
			
			var calcPopup = $('.tooltip').tooltipster({
				interactive: true,
				trigger: 'click',
				arrow: true,
				side: 'bottom',
				contentCloning: true,
				debag: true,
				distance: 12
			});
		}
		
	});

});
 // google-map-footer
  	var map,
  		contactsMap;
  	var	main_color = '#fff',
		saturation_value= -20,
		brightness_value= 5;

	//we define here the style of the map
	var style= [ 
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},  
	    {	//poi stands for point of interest - don't show these lables on the map 
			featureType: "poi.school",
			elementType: "geometry.fill",
			stylers: [
				{visibility: "off"},
				{color: '#EFEFEF'}
			]
		},
		{	//poi stands for point of interest - don't show these lables on the map 
			featureType: "poi.sports_complex",
			elementType: "geometry.fill",
			stylers: [
				{visibility: "off"},
				{color: '#EFEFEF'}
			]
		},
		{	//poi stands for point of interest - don't show these lables on the map 
			featureType: "poi.medical",
			elementType: "geometry.fill",
			stylers: [
				{visibility: "off"},
				{color: '#EFEFEF'}
			]
		},
		 {	//poi stands for point of interest - don't show these lables on the map 
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		 {	
			featureType: "poi.park",
			elementType: "geometry.fill",
			stylers: [
				// { hue: main_color },
				{ visibility: "on" },
				{color: '#000'}
				// { lightness: brightness_value }, 
				// { saturation: saturation_value }
			]
		},
		{
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "on"}
	        ]
	    }, 
	    {
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'geometry.fill',
	        stylers: [
	            {color: "dbdbdb"}
	        ]
	    }, 
		{ 	
			//don't show local road lables on the map
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 	
			//don't show local road lables on the map
			featureType: "road.local", 
			// elementType: "geometry.fill", 
			stylers: [
				{visibility: "off"}
				// {color: "#fff"} 
			] 
		},
		{ 
			//don't show arterial road lables on the map
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"}
			] 
		},
		{ 
			
			featureType: "administrative.land_parcel", 
			elementType: "geometry.fill", 
			stylers: [
				// { hue: main_color },
				{ visibility: "on" },
				{color: '#F6F6F6'}
				// { lightness: brightness_value }, 
				// { saturation: saturation_value }
			] 
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		}, 
		//style different elements on the map
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "off" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "off" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			// elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "off" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			// elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "off" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station.bus",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "off" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "off" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			elementType: "geometry.fill",
			stylers: [
				// { hue: main_color },
				{ visibility: "on" },
				{color: '#F6F6F6'}
				// { lightness: brightness_value }, 
				// { saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				// { hue: main_color },
				{ visibility: "on" },
				{color: '#DBDBDB'} 
				// { lightness: brightness_value }, 
				// { saturation: saturation_value }
			]
		}, 
		{
			featureType: "road.highway",
			elementType: "labels.text.fill",
			stylers: [
				// { hue: main_color },
				{ visibility: "on" },
				{color: '#616161'} 
				// { lightness: brightness_value }, 
				// { saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry.fill",
			stylers: [
				// { hue: main_color },
				{ visibility: "on" }, 
				{color: '#CACACA'}
				// { lightness: brightness_value }, 
				// { saturation: saturation_value }
			]
		},
			{ 
			
			featureType: "administrative.land_parcel", 
			elementType: "geometry.fill", 
			stylers: [
				// { hue: main_color },
				{ visibility: "off" },
				{color: '#000'}
				// { lightness: brightness_value }, 
				// { saturation: saturation_value }
			] 
		}
		
	];

  	function initMap() {
  		var image = {
      		url: 'img/icons/map-marker.png'
      	};
      	var marker = new google.maps.Marker({
      		position: {lat: 50.005531, lng: 36.233364},
			    // title: 'Вне зоны доступа', // "Хинт"
			    icon: image
			});

  		if($('#footer-map').length > 0){

	      map = new google.maps.Map(document.getElementById('footer-map'), {
	        center: {lat: 50.005531, lng:  36.233364},
	        zoom: 16,
	        disableDefaultUI: true, //отмена всех дефолтных элементов управления
	       
	       // добавление необходимых элементов управления вручную
	        zoomControl: true,
	        mapTypeControl: true,
	        fullscreenControl: true,
	        styles: style
	        // gestureHandling: 'none' //запрет на прокручивание карты
	      });
	      marker.setMap(map);
  		}
  		
  		if($('#contacts-map').length > 0){

	      contactsMap = new google.maps.Map(document.getElementById('contacts-map'), {
	        center: {lat: 50.005531, lng:  36.233364},
	        zoom: 16,
	        disableDefaultUI: true, //отмена всех дефолтных элементов управления
	       
	       // добавление необходимых элементов управления вручную
	        zoomControl: true,
	        mapTypeControl: true,
	        fullscreenControl: true
	        // styles: style
	        // gestureHandling: 'none' //запрет на прокручивание карты
	      });
	      marker.setMap(contactsMap);
  		}

    }
  // end of google-map-footer

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	// Owl
		$('#product-car').owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: [],
			dotd: false,
			responsiveClass: true
			
		});
	// end of Owl
});
