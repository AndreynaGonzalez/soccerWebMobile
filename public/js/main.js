$(document).ready(function () {
    $("#pills-h").click(function () {
        $("#pills-home").show("slow");
        $("#pills-schedule").hide(3000);
        $("#pills-maps").hide(3000);
        $("#pills-teams").hide(3000);
        $("#pills-login").hide(3000);

    });
});

$(document).ready(function () {
    $("#pills-s").click(function () {
        $("#pills-home").hide(3000);
        $("#pills-schedule").show("slow");
        $("#pills-maps").hide(3000);
        $("#pills-teams").hide(3000);
        $("#pills-login").hide(3000);

    });
});

$(document).ready(function () {
    $("#pills-m").click(function () {
        $("#pills-home").hide(3000);
        $("#pills-schedule").hide(3000);
        $("#pills-maps").show("slow");
        $("#pills-teams").hide(3000);
        $("#pills-login").hide(3000);
        $("#pills-foro").hide(3000);


    });
});

$(document).ready(function () {
    $("#pills-t").click(function () {
        $("#pills-home").hide(3000);
        $("#pills-schedule").hide(3000);
        $("#pills-maps").hide(3000);
        $("#pills-teams").show("slow");
        $("#pills-login").hide(3000);
        $("#pills-foro").hide(3000);


    });
});

$(document).ready(function () {
    $("#pills-l").click(function () {
        $("#pills-home").hide(3000);
        $("#pills-schedule").hide(3000);
        $("#pills-maps").hide(3000);
        $("#pills-teams").hide(3000);
        $("#pills-login").show("slow");
        $("#pills-foro").hide(3000);



    });
});

$(document).ready(function () {
    $("#pills-f").click(function () {
        $("#pills-home").hide(3000);
        $("#pills-schedule").hide(3000);
        $("#pills-maps").hide(3000);
        $("#pills-teams").hide(3000);
        $("#pills-login").hide(3000);
        $("#pills-foro").show("slow");



    });
});


function matchCounter() {
    var launch = new Date('2017', '06', '14', '11', '15');
    var days = $('.tg-days');
    var hours = $('.tg-hours');
    var minutes = $('.tg-minutes');
    var seconds = $('.tg-seconds');
    setDate();

    function setDate() {
        var now = new Date();
        if (launch < now) {
            days.html('<h3>0</h3><h4>Day</h4>');
            hours.html('<h3>0</h3><h4>Hour</h4>');
            minutes.html('<h3>0</h3><h4>Minute</h4>');
            seconds.html('<h3>0</h3><h4>Second</h4>');
        } else {
            var s = -now.getTimezoneOffset() * 60 + (launch.getTime() - now.getTime()) / 1000;
            var d = Math.floor(s / 86400);
            days.html('<h3>' + d + '</h3><h4>Day' + (d > 1 ? 's' : ''), '</h4>');
            s -= d * 86400;
            var h = Math.floor(s / 3600);
            hours.html('<h3>' + h + '</h3><h4>Hour' + (h > 1 ? 's' : ''), '</h4>');
            s -= h * 3600;
            var m = Math.floor(s / 60);
            minutes.html('<h3>' + m + '</h3><h4>Minute' + (m > 1 ? 's' : ''), '</h4>');
            s = Math.floor(s - m * 60);
            seconds.html('<h3>' + s + '</h3><h4>Second' + (s > 1 ? 's' : ''), '</h4>');
            setTimeout(setDate, 1000);
        }
    }
}
matchCounter();