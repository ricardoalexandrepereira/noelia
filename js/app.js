document.addEventListener("DOMContentLoaded", function(){


    Splitting();
    luxy.init();

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();
    t1.from(".title .char", 1, {opacity:0, yPercent:30  , stagger:0.06, ease:"back.out"});
   /*  t1.to(".header__img",2 ,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, ease:"expo.out"},"-=1") */
    t1.from(".header__marq",2 ,{opacity:0, yPercent:100, ease:"expo.out"},"-=1.5")
    t1.from(".nav",2 ,{opacity:0, yPercent:-100, ease:"expo.out"},"-=1.5")
    t1.from(".logo",1 ,{opacity:0, xPercent:-100, ease:"expo.out"},"-=1.6")
    t1.from(".div",2 ,{opacity:0, yPercent:100, ease:"expo.out"},"-=1.7")


    const gsapSq = gsap.utils.toArray(".section-title__square");
    gsapSq.forEach((gSq, i) => {
        const rotat = gsap.from(gSq,3 ,{rotation:720});
        ScrollTrigger.create({
            trigger:gSq,
            animation:rotat,
            start:"top bottom",
            scrub:1.9,
            
        })
    });

    function header(){
        gsap.to('.title_parallax',{
            scrollTrigger:{
                trigger:".header",
                start:"top top",
                scrub:1.9
            },
            xPercent:-150
        })

        gsap.to('.logo',{
            scrollTrigger:{
                trigger:".header",
                start:"top top",
                scrub:1.9,
                
            },
            yPercent:-150,
            scale:.4
        })


        gsap.to('.header .stroke',{
            scrollTrigger:{
                trigger:".header",
                start:"top top",
                scrub:1.9
            },
            xPercent:50
        })

        gsap.to('.header__img',{
            scrollTrigger:{
                trigger:".header",
                start:"top top",
                scrub:1.9
            },
            xPercent:-70
        })

        /* gsap.to('.header__img img',{
            scrollTrigger:{
                trigger:".header",
                start:"top top",
                scrub:1.9
            },
            scale:1.3
        }) */


        gsap.to('.header__marq-wrapp',{
            scrollTrigger:{
                trigger:".header",
                start:"top top",
                scrub:1.9
            },
            xPercent:-50
        })

        gsap.to('.header__marq-star img',{
            scrollTrigger:{
                trigger:".header",
                start:"top top",
                scrub:1.9
            },
            rotate:-720
        })
    }

    header()


    function about(){
        gsap.from(".about__img", {
            scrollTrigger:{
                trigger:".about",
                start:"top bottom",
                scrub:1.9
            },
            yPercent:80
        })

        gsap.from(".about__img img", {
            scrollTrigger:{
                trigger:".about",
                start:"top bottom",
                scrub:1.9
            },
            scale:1.6
        })


        gsap.to(".about__txt", {
            scrollTrigger:{
                trigger:".about",
                start:"top bottom",
                scrub:1.9
            },
            yPercent:50
        })
     }

    about()

    function benefits(){
        gsap.from(".benefits__num",{
            x:(i, el)=>(1 - parseFloat(el.getAttribute("data-speed"))),
            scrollTrigger:{
                trigger:".benefits__list",
                start:"top bottom",
                scrub:1.9
            }
        })
    }
    benefits()
 

function portefolio(){
    gsap.from(".work__item, .work__item-num",{
        y:(i, el)=>(1 - parseFloat(el.getAttribute("data-speed"))),
        scrollTrigger:{
            trigger:".work",
            start:"top bottom",
            scrub:1.9
        }
    })
    gsap.from(".work__item-img img",{
        scale:1.6,
        scrollTrigger:{
            trigger:".work__wrapp",
            start:"top bottom",
            scrub:1.9
        }
    })
}
portefolio()

function serv(){
    gsap.from(".serv__item-arrow",{
        x:(i, el)=>(1 - parseFloat(el.getAttribute("data-speed"))),
        scrollTrigger:{
            trigger:".serv__list",
            start:"top bottom",
            scrub:1.9
        }
    })
}
serv()

function footer(){

    gsap.from(".footer__div span",{
        y:(i, el)=>(1 - parseFloat(el.getAttribute("data-speed"))),
        opacity:0,
        scrollTrigger:{
            trigger:".footer",
            start:"top bottom",
            end:"bottom bottom",
            scrub:1.9
        }
     })
}
footer()


}) ;