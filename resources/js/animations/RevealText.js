import gsap from 'gsap';

export default class RevealText {

   constructor(element) {
      this.element = element;
      this.ctx = null;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         gsap.from(this.element, {
            scrollTrigger: {
               trigger: this.element,
               start: "top 80%", 
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
         })
      }, this.element)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}