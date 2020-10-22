$(document).ready(function() {
    $.ajax({
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + getUrlVars()["code"]
        },
        url: "https://app.asana.com/api/1.0/projects/1146674956832113/tasks"
    }).then(function(data) {
        $('#content').append(data);
    });
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}