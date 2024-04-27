//side navigation for nav bar on mobile
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let options = {
        edge: 'right'
    }
    let instances = M.Sidenav.init(elems, options);
    console.log(instances)
});

$(function(){   
//jQuery vars
    var $work = $('#work')
    var $about = $('#about')
    var $contact = $('#contact')
    var $skills = $('#skills')
    var $shortBioButton = $('.short-bio-button')
    var $longBioButton = $('.long-bio-button')
    var $longBio = $('#long-bio')
    var $shortBio = $('#short-bio')
    
//function to start typing animation in About section
    function startTyping(){
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 20,
            // callback: function(){
            //     $('.bio-buttons').fadeIn(4000)
            // }
        });
    }
    
//open and close from sidenav
    $('.js--mobile-work-open').on('click', function(){
        console.log('clicked')
        $about.hide()
        $contact.hide()
        
        $work.show()
        $skills.show()
    })    
    
    $('.js--mobile-about-open').on('click', function(){
        console.log('clicked')
        $work.hide()
        $contact.hide()
        
        $about.show(400, function(){
            //add typing if typing hasnt already happened
            if(!($('#typed').text())){
                startTyping()
            }
        })
        $skills.show()
    })    
    
    $('.js--mobile-contact-open').on('click', function(){
        console.log('clicked')
        $work.hide()
        $about.hide()
        $skills.hide()
        
        $contact.show()
    })
    
//slide animation from full screen nav
    $('.js--work-slide').on('click', function(){
        $about.hide()
        $contact.hide()
        
        $work.slideDown(2000)
        $skills.show()
    })    
    
    $('.js--about-slide').on('click', function(){
        $work.hide()
        $contact.hide()
        
        $about.slideDown('slow', function(){
            //add typing if typing hasnt already happened
            if(!($('#typed').text())){
                startTyping()
            }
        })
        
        $skills.show()
    })
    
    $('.js--contact-slide').on('click', function(){
        $work.hide()
        $about.hide()
        $skills.hide()
        
        $contact.slideDown('slow')
    })
    
//buttons to fade in/out short bio and long bio
    // $shortBioButton.on('click', function(){
    //     $longBio.fadeOut(1000)
    //     $shortBio.fadeIn(2000)
    // })
    
    // $longBioButton.on('click', function(){
    //     $shortBio.fadeOut(1000)
    //     $longBio.fadeIn(2000)
    // })

})
