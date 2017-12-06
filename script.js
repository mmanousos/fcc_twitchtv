$(document).ready(function() {

    
    var streamers = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "Faker", "pokimane"];

    
    // check if first stream is live
        // yes, pull info & push to appropriate field on site
        // no, move on to next streamer

    function getStream() {
        for (var i = 0; i<10; i++) {
            var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] + '?callback=?';
            
            $.getJSON(url, function(data) { // access API
                //console.log(data);
                var stream = data.stream;
 
                function streamOnline() {
                    var name = data.stream.channel.display_name;
                    var image = data.stream.channel.logo; 
                    var game = data.stream.game; // get the game
                    var link = "https://www.twitch.tv/" + name; // create the link
                    var stream = data.stream.channel.status; // get the status

                    var nameLink = "<a href='" + link + "' target='_blank'>" + name + "</a>"; // create clickable link of name

                    var statusDisplay = ''; // create a string for the status
                    statusDisplay += "Now streaming <a class='live' href='" + link + "' target='_blank'>" + game + " - " + stream + "</a>"; // fill the string with the link, game and stream
                    
                    var display = "<div class='row streamer-active'><div class='offset-sm-1 col-sm-10'><div class='row live'><div class='col-sm-3 offset-sm-3 streamer'><p>" + nameLink + " <img class='icon' src='" + image + "' alt='streamer icon'></p></div><div class='col-sm-6 streamer-status'><span class='status'>" + statusDisplay + "</span></div></div></div></div>";
                    $('.display-box').append(display);
                };
                
                function streamOffline() {
                    var apiLink = data._links.self;
                    var name = apiLink.substr(37);
                    var link = "https://www.twitch.tv/" + name; 
                    var nameLink = "<a href='" + link + "' target='_blank'>" + name + "</a>"; // create clickable link of name

                    var statusDisplay = name + " is currently offline.";
                    
                    var display = "<div class='row streamer-inactive'><div class='offset-sm-1 col-sm-10'><div class='row inactive'><div class='col-sm-3 offset-sm-3 streamer'><p>" + nameLink + "</p></div><div class='col-sm-6 streamer-status'><span class='status offline'>" + statusDisplay + "</span></div></div></div></div>";             
                    $('.display-box').append(display);        
                };
   
                if (stream !== null) { // if stream is active 
                    streamOnline();
                } else {               // if stream is inactive 
                    streamOffline(i); 
                }; 
            });    
        }
    }
    getStream();
    
    // click all-btn: displays all (removes '.hidden' class) & dims text of all-btn
    // click live-btn: hides ".inactive" & dims text of live-btn
    // click offline-btn: hides ".active" & dims text of offline-btn
    
   /* $('#all-btn').on("click", function(){
        $('.active')
    }); */
    
    $('#live-btn').on('click', function() {
        $('.streamer-inactive').addClass('hidden'); 
        $('#live-btn').addClass('dim');   
        if ($('.streamer-active').hasClass('hidden')) {
            $('.streamer-active').removeClass('hidden');  
            $('#offline-btn').removeClass('dim');    
        }; 
    });
    
    $('#offline-btn').on('click', function() {
        $('.streamer-active').addClass('hidden'); 
        $('#offline-btn').addClass('dim'); 
        if ($('.streamer-inactive').hasClass('hidden')) {
            $('.streamer-inactive').removeClass('hidden');  
            $('#live-btn').removeClass('dim');    
        }; 
    });
    
    $('#all-btn').on('click', function() {
        if ($('.streamer-inactive').hasClass('hidden')) {
            $('.streamer-inactive').removeClass('hidden');
        };
        if ($('#offline-btn').hasClass('dim')) {
            $('#offline-btn').removeClass('dim');
        };
        if ($('.streamer-active').hasClass('hidden')) {
            $('.streamer-active').removeClass('hidden');      
        };
        if ($('#live-btn').hasClass('dim')) {            
            $('#live-btn').removeClass('dim');    
        }; 
    });
    
    
    
});