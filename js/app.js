$(function(){   
    console.log('loaded')
    
//side navigation for nav bar on mobile
    $(".button-collapse").sideNav({
        closeOnClick: true
    });
    
//function to start typing animation in About section
    function startTyping(){
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 15,
            callback: function(){
                $('.bio-buttons').fadeIn(4000)
            }
        });
    }
    
//open and close from sidenav
    $('.js--mobile-work-open').on('click', function(){
        $('#about').hide()
        $('#contact').hide()
        
        $('#work').show()
    })    
    
    $('.js--mobile-about-open').on('click', function(){
        $('#work').hide()
        $('#contact').hide()
        
        $('#about').show(400, function(){
            //add typing if typing hasnt already happened
            if(!($('#typed').text())){
                startTyping()
            }
        })
    })    
    
    $('.js--mobile-contact-open').on('click', function(){
        $('#work').hide()
        $('#about').hide()
        
        $('#contact').show()
    })
    
//slide animation from full screen nav
    $('.js--work-slide').on('click', function(){
        $('#about').hide()
        $('#contact').hide()
        
        $('#work').slideDown('slow')
    })    
    
    $('.js--about-slide').on('click', function(){
        $('#work').hide()
        $('#contact').hide()
        
        $('#about').slideDown('slow', function(){
            //add typing if typing hasnt already happened
            if(!($('#typed').text())){
                startTyping()
            }
        })
    })
    
    $('.js--contact-slide').on('click', function(){
        $('#work').hide()
        $('#about').hide()
        
        $('#contact').slideDown('slow')
    })
    
    //typing in about section starts when scrolled to
//    var waypoint = new Waypoint({
//      element: $('.about-trigger'),
//      handler: function(direction) {
//        if(direction == 'down'){
//            
//            this.destroy()
//        }
//      },
//      offset: 50
//    })
    
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
