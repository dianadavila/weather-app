// wenatchee
$.simpleWeather({
    location: '98801',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.wenatchee .temp').text(weather.temp);
      $('.wenatchee .city').text(weather.city);
      $('.wenatchee img').attr('src', weather.image);
      $('.wenatchee .title').text(weather.title);
      
      // If this condition, show this icon
        if ( 26 >= weather.code && 30 <= weather.code  ) {
            
         $('.wenatchee .wi').addClass('wi-day-cloudy');   
            
        }
        
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
      $('body').append('<p>No Weather. :-|</>');    
    }
  
  });

// Seattle
$.simpleWeather({
    location: '98105',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.seattle .temp').text(weather.temp);
      $('.seattle .city').text(weather.city);
      $('.seattle img').attr('src', weather.image);
       $('.seattle .title').text(weather.title);
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
      $('body').append('<p>No Weather. :-|</>');    
    }
  
  });

// leavenworth
$.simpleWeather({
    location: '98826',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.leavenworth .temp').text(weather.temp);
      $('.leavenworth .city').text(weather.city);
      $('.leavenworth img').attr('src', weather.image);
       $('.leavenworth .title').text(weather.title);
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
      $('body').append('<p>No Weather. :-|</>');    
    }
  
  });

// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo img').attr('src', weather.image);
      $('.geo .title').text(weather.title);    
        
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};