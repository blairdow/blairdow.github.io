$(function(){   
    console.log('loaded')
    
    //side navigation for nav bar on mobile
    $(".button-collapse").sideNav({
        closeOnClick: true
    });
    
    //scroll animation from nav
    $('.js--scroll-to-work').on('click', function(){
        $('html, body').animate({
            scrollTop: $('.js--section-work').offset().top}, 1000)
    })    
    
    $('.js--scroll-to-about').on('click', function(){
        $('html, body').animate({
            scrollTop: $('.js--section-about').offset().top}, 1000)
    })
    
    $('.js--scroll-to-contact').on('click', function(){
        $('html, body').animate({
            scrollTop: $('.js--section-contact').offset().top}, 1000)
    })
    
    //typing in about section starts when scrolled to
    var waypoint = new Waypoint({
      element: $('#about-trigger'),
      handler: function(direction) {
        if(direction == 'down'){
            $("#typed").typed({
                stringsElement: $('#typed-strings'),
                typeSpeed: 15,
                callback: function(){
                    $('.bio-buttons').fadeIn(4000)
                }
            });
            this.destroy()
        }
      },
      offset: 50
    })
    
    //buttons to fade in/out short bio and long bio
    $('.short-bio-button').on('click', function(){
        $('#long-bio').fadeOut(1000)
        $('#short-bio').fadeIn(2000)
    })
    
    $('.long-bio-button').on('click', function(){
        $('#short-bio').fadeOut(1000)
        $('#long-bio').fadeIn(2000)
    })

})
