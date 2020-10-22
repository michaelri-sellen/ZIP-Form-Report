$(document).ready(function() {
    $.ajax({
        url: "https://app.asana.com/-/oauth_authorize?response_type=code&client_id=1198884171549959&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob"
    }).then(function(data) {
        $('#content').append(data);
    });
});