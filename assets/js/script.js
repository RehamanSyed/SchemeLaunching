$(document).ready(function() {

    $(".page-section2").hide();
    $("#launch").click(function() {
        $(".page-section1").hide();
        $(".page-section2").show();
    });
});


$({
    Counter: 0
}).animate({
    Counter: $('.Single1').text()
}, {
    duration: 10000,
    easing: 'swing',
    step: function() {
        $('.Single1').text(Math.ceil(this.Counter));

    }
});

$({
    Counter: 0
}).animate({
    Counter: $('.Single2').text()
}, {
    duration: 10000,
    easing: 'swing',
    step: function() {
        $('.Single2').text(Math.ceil(this.Counter));

    }
});


var my_time;
$(document).ready(function() {
    pageScroll();

});

function pageScroll() {
    var objDiv = document.getElementById("contain");
    objDiv.scrollTop = objDiv.scrollTop + 1;

    if (objDiv.scrollTop == (objDiv.scrollHeight - 200)) {
        objDiv.scrollTop = 0;
    }
    my_time = setTimeout('pageScroll()', 20);
}



setTimeout(function() {
    $('.page-section2').addClass('loaded');
    $('.loader-data').hide();
}, 2000);