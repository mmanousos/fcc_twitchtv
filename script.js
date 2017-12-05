$(document).ready(function() {

    var streamers = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    // cycle through array of streamers to get their streams
    // push stream data to new array
    // cycle through new array to check if they are streaming
    // if streaming, push link + game & status to site
    
    var streamData = [];

    function getStream() {    
        for (var i = 0; i<8; i++) {
            var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] + '?callback=?';
            $.getJSON(url, function(data) {
                streamData.push(data);
                return streamData;
            }); 
        }; 
    };

    getStream();
    
    
    setTimeout(function() {
       console.log(streamData); 
    }, 5000);

    
/* Possibly due to slow connection, array is not populating fully before executing subsequent commands. Resulting in my array calls passing through as "undefined". */    


    
/*    function checkStream(streamData) {
        for (var i = 0; i<8; i++) {
            var stream = streamData[i];     
            if (stream !== null) {
                console.log(stream);
            }; 
        };
    };
    checkStream();
        
    /*    var stream = streamData[i]
        
        var stream = data.stream; 
        if (stream != null) {
            var game = data.stream.game;
            var link = data._links.channel;
            var stream = data.stream.channel.status;
            console.log(game + " - " + stream);
            var html = ""; 
            html += "<a class='live' href='" + link + "'>" + game + " - " + stream + "</a>";
            $(this).find('.status').html(html); 
        };
             

    }; */
});