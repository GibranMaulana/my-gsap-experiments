import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { marqueinit } from "../animations/Marquee";

export class AnimationManager {
   constructor() {
      this.lenis = null;
      this.rafId = null;
      this.active = false;      
   }
   
   init() {

      if (this.active) return;

      this.lenis = new Lenis({
         duration: 1.2,
         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         direction: 'vertical',
         gestureDirection: 'vertical',
         smooth: true,
         mouseMultiplier: 1,
         smoothTouch: false,
         touchMultiplier: 2,
      });

      this.lenis.on('scroll', ScrollTrigger.update);
      
      gsap.ticker.add((time) => {
         this.lenis.raf(time * 1000);
      });
   
      gsap.ticker.lagSmoothing(0);

      this.active = true;
   }

   refresh() {
      ScrollTrigger.refresh();
      if(this.active) this.lenis.resize();
   }

   stop() {
      if(this.active) this.lenis.stop();
   }

   start() {
      if(this.active) this.lenis.start();
   }
}