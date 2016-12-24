$(function(){   
    console.log('loaded')
    
    //side navigation for nav bar on mobile
    $(".button-collapse").sideNav();
    
    var waypoint = new Waypoint({
      element: $('#about-trigger'),
      handler: function(direction) {
        if(direction == 'down'){
            $("#typed").typed({
                stringsElement: $('#typed-strings'),
                typeSpeed: 25
            });
            this.destroy()
        }
      },
      offset: 50
    })
})