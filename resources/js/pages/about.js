import gsap from "gsap";
import RevealText from "../animations/RevealText";
import { MarqueEffect } from "../animations/MarqueEffect";

let instances = [];

const aboutView = {
   namespace: "about",

   beforeEnter(data) {
      const container = data.next.container;
      const textElements = container.querySelectorAll('[data-anim="reveal"]');
      textElements.forEach(el => {
         instances.push(new RevealText(el));
      });
      
      MarqueEffect();
   },

   beforeLeave(data) {
      instances.forEach(instances => instances.kill());
      instances = [];
      
      gsap.killTweensOf(".marquee-left h1");
      gsap.killTweensOf(".marquee-right h1");
   }
}

export default aboutView;