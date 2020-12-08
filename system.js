document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline= new TimelineMax();
    timeline
    .from('.section-1-04',4,{
        y: -300,
        x: -50,
        ease: Power3.easeInOut
    }, '-=4' )
    .from('.section-1-01',4,{
        y: -120,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-02',4,{
        y: -200,
        x: -280,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-03',4,{
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    
    .from('.section-1-05',4,{
        y: -60,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-06',4,{
        y: -170,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-07',4,{
        y: 90,
        x: -270,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-08',4,{
        y: -40,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section-1-09',4,{
        y: 120,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')


    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-sec',
        duration : '200%',
        triggerHook : 0,
        offset: '30'
    })
    .setTween(timeline)
    .setPin('.first-sec')
    .addTo(controller);

    let timeline2 = new TimelineMax();
    timeline2
    .to('.image-wrapper-top .image-container', 4, {
        height: 0
    } );

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration : '200%',
        triggerHook : 0,
        offset: '30'
    })
    .setTween(timeline2)
    .setPin('.second-section')
    .addTo(controller);

    let timeline3 = new TimelineMax();
    timeline3
    .to('.section-3-01', 4, {
        y: -300,
        ease: Power3.easeInOut
    }, '-=4' )
    .to('.section-3-02', 4, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4' )
    .to('.section-3-03', 4, {
        y: -100,
        ease: Power3.easeInOut
    }, '-=4' )
    .to('.section-3-04', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4' )
    .to('.section-3-05', 4, {
        y: 100,
        ease: Power3.easeInOut
    }, '-=4' )
    .to('.section-3-06', 4, {
        y: 200,
        ease: Power3.easeInOut
    }, '-=4' )

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration : '200%',
        triggerHook : 0,
        offset: '30'
    })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);

    let timeline4 = new TimelineMax();
    timeline4
    .to('.section-4-01', 4, {
       autoAlpha : 0 
    })
    .from
    ('.section-4-02' ,4 ,{
        autoAlpha: 0
    } ,'-=4')
    .from('.section-4-03' ,4,{
        autoAlpha: 0
    } )
    .from('.section-4-04' ,4,{
        autoAlpha: 0
    })

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration : '200%',
        triggerHook : 0,
        offset: '50'
    })
    .setTween(timeline4)
    .setPin('.forth-section')
    .addTo(controller);

})
