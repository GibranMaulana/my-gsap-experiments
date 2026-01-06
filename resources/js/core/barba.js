import barba from '@barba/core';
import gsap from 'gsap';
import homeView from '../pages/home';
import aboutView from '../pages/about';
import { MarqueEffect } from '../animations/MarqueEffect';

export function initBarba(animator) {
    
   barba.init({
      
      views: [homeView, aboutView],
      
      debug: true,

      transitions: [{
            name: 'default',
            
            leave(data) {
               MarqueEffect();
               
               let tl = gsap.timeline();

               tl
                  .to(data.current.container, {
                     y: "-100dvh",
                     duration: 1.5,
                     ease: "power2.inOut"
                  })
                  .to('.curtain-overlay', {
                     y: 0, 
                     duration: 1.5,
                     ease: "power2.inOut"
                  }, "<");
                  
               return tl;
            },

            enter(data) {
               window.scrollTo(0, 0);

               let tl = gsap.timeline();

               tl
                  .from(data.next.container, {
                     y: "100dvh",
                     duration: 1.5,
                     ease: "power2.inOut" 
                  })
                  .fromTo('.curtain-overlay', { y: 0 }, {
                     y: "-100dvh",
                     duration: 1.5,
                     ease: "power2.inOut",
                     onComplete: () => {
                        gsap.killTweensOf(".marquee-left h1");
                        gsap.killTweensOf(".marquee-right h1");
                     }
                  }, "<")
                  .set('.curtain-overlay', { y: "200dvh" }) //reset
               
               return tl;
            },
            after(data) {
               
               animator.refresh();
               
            }
         },
      ]
   });
}