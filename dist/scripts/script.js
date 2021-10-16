$(document).ready(function() {
    $('.menu-btn').click(function() {
        $('.mobile-menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('#play-pause').click(function() {
        if($('#header-video').get(0).paused) {
            $('#header-video').get(0).play();
            $('#play-pause').html("Pause");
        } else {
            $('#header-video').get(0).pause();
            $('#play-pause').html("Play");
        }
    })
});

var typed = new Typed("#typing", {
    strings: ["web application developer", "software engineer", "full stack engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
});
