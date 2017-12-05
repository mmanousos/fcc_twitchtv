$(document).ready(function() {

    function getAPI() {
        var url = "https://wind-bow.gomix.me/twitch-api";
        $.getJSON(url, function(val) {
        console.log(val);    
        });
    };
    getAPI();
    
// https://wind-bow.gomix.me/twitch-api
    
    
});