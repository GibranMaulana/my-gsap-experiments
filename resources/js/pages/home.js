import RevealText from "../animations/RevealText";

let instances = [];

const homeView = {
   namespace: "home",

   beforeEnter(data) {
      const container = data.next.container;
      const textElements = container.querySelectorAll('[data-anim="reveal"]');
      textElements.forEach(el => {
         instances.push(new RevealText(el));
      });
   },

   beforeLeave(data) {
      instances.forEach(instances => instances.kill());
      instances = [];
   }
}

export default homeView;