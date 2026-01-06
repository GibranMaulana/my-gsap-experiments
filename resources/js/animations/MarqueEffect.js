import gsap from "gsap"

export function MarqueEffect() {
   
   gsap.to(".marquee-left h1", {
      xPercent: -100, 
      repeat: -1, 
      duration: 40,
      ease: "linear"
   });

   gsap.fromTo(".marquee-right h1", 
      { xPercent: -100 },
      { 
         xPercent: 0, 
         repeat: -1, 
         duration: 40, 
         ease: "linear" 
      }
   );
}