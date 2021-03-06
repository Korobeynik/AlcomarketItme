
$(window).on('load', function() {
	$('.preloader').delay(100).fadeOut('slow');
});

window.onload = function() {
		if($(window).width() < 1200) {
  		$(".mobile").addClass('side-nav');
  		$(".mobile").attr('id', 'slide-out');
  	} else {
  		$(".mobile").removeClass('side-nav');
  	}
};

$(window).resize(function() {
   if($(window).width() < 1200) {
  	$(".mobile").addClass('side-nav');
  	$(".mobile").attr('id', 'slide-out');
  } else {
  	$(".mobile").removeClass('side-nav');
  }
});	



$(function() {

	$(".overlay").removeClass('active');

	

	$('.hamburger').on('click', function(e) {
		e.preventDefault();
  	$(this).toggleClass('opened');
  	$(".side-nav").toggleClass('active');
  	//$(".overlay").addClass('active');
	});

	
	$('.filter__mobile').click( function(){
		$('.filter').slideToggle();
	});

	$('.comments__form select').select();


	//$(".hamburger").sideNav();

	// $('.hamburger').sideNav({
 //      menuWidth: 300, // Default is 300
 //      edge: 'right', // Choose the horizontal origin
 //      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
 //      draggable: true // Choose whether you can drag to open on touch screens,
    
 //    }
 //  );

 	$('.category__item-hidden').slideUp(200);

	$('.see-more').on('click', function() {
		$(this).closest('.filter__form__category').find('.category__item-hidden').slideToggle(200);
	});

	$('select').material_select();


	$('#search-input').focus(function(event) {
		$('.placeholder').css('display', 'none');
	});

	$('#search-input').blur(function(event) {
		$('.placeholder').css('display', 'block');
	});

	$('.button-collapse').sideNav('show');

	$('.slider-product').owlCarousel({
		loop:true,
		margin: 12,
		navText : "",
		items:4,
		nav:true,
		smartSpeed: 300,
		//autoplay: true,
		//autoplaySpeed: 2000,
		autoplayTimeout: 2000,
		autoplayHoverPause: false,
		//center: true,
		//touchDrag: true,
		responsiveClass: true,
		responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },

        800:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        },
         1600:{
            items:4,
            nav:true,
            loop:true,
            margin: 50
        }
    }		
	});

});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,
        zoomControl: false,
        scrollwheel: false,
        scaleControl: false,
        rotateControl: false,
        panControl: false,
        mapMaker: false,
        disableDefaultUI: false,
        streetViewControl: false,
        signInControl: false,
        mapTypeControl: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(59.907830, 30.316904), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#e9e9e9"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f5f5f5"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 29
			            },
			            {
			                "weight": 0.2
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 18
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f5f5f5"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#dedede"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "saturation": 36
			            },
			            {
			                "color": "#333333"
			            },
			            {
			                "lightness": 40
			            }
			        ]
			    },
			    {
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f2f2f2"
			            },
			            {
			                "lightness": 19
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#fefefe"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#fefefe"
			            },
			            {
			                "lightness": 17
			            },
			            {
			                "weight": 1.2
			            }
			        ]
			    }
			]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);


    var neighborhoods = [
        // Main
        {lat: 59.907830, lng: 30.316904, title: 'Title 1', content: 'Text text text', icon: 'map-icon.svg'},
        {lat: 59.907744, lng: 30.341108, title: 'Title 1', content: 'Text text text', icon: 'map-icon.svg'},
        {lat: 59.907430, lng: 30.386904, title: 'Title 1', content: 'Text text text', icon: 'map-icon.svg'},
        {lat: 59.901503, lng: 30.343597, title: 'Title 1', content: 'Text text text', icon: 'map-icon.svg'},
    ];


    /* Info windows
    =========================*/
    infoWindow = new google.maps.InfoWindow();

    function displayMarkers() {

       // this variable sets the map bounds and zoom level according to markers position
       var bounds = new google.maps.LatLngBounds();

       // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
       for (var i = 0; i < neighborhoods.length; i++){

          var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
          var name = neighborhoods[i].title;
          var icon = neighborhoods[i].icon;
          var content = neighborhoods[i].content;

          createMarker(latlng, name, content, icon, i * 250);

          // Marker’s Lat. and Lng. values are added to bounds variable
          bounds.extend(latlng);
       }

    }


    function createMarker(latlng, title, content, icon, timeout) {

        window.setTimeout(function() {
           var marker = new google.maps.Marker({
              map: map,
              position: latlng,
              clickable: true,
              icon: {
                url: "img/" + icon
              },
              animation: google.maps.Animation.DROP
           });

           google.maps.event.addListener(marker, 'click', function() {
              var infoContent = '<div id="info_container">' +
              '<h3 class="info_title">' + title + '</h3><div>' + content + '</div></div>';

              infoWindow.setContent(infoContent);
              infoWindow.open(map, marker);

           });

        }, timeout);

    }

    displayMarkers();





    // Enable scroll zoom after click on map
    map.addListener('click', function() {
       map.setOptions({
           scrollwheel: true
       });
    });


    // Enable scroll zoom after drag on map
    map.addListener('drag', function() {
       map.setOptions({
           scrollwheel: true
       });
    });


    // Disable scroll zoom when mouse leave map
    map.addListener('mouseout', function() {
       map.setOptions({
           scrollwheel: false
       });
    });


    /* Map center on resize
    =========================*/
    var getCen = map.getCenter();

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(getCen);
    });



}

