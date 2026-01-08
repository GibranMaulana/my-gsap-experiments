import gsap from 'gsap'

export const marqueinit = () => {
   const marqueeContainers = document.querySelectorAll('.marquee-container');
   const marqueeContainersRev = document.querySelectorAll('.marquee-container-rev')
   if(!marqueeContainers) { return }
   if(!marqueeContainersRev) { return }

   marqueeContainers.forEach((c) => {
      const marqueeContent = c.querySelector('.marquee-content');
      if(!marqueeContent) { return }

      document.fonts.ready.then(() => {
         if (c.children.length === 1) {
            const clone = marqueeContent.cloneNode(true);
            c.appendChild(clone);
         }

         const width = marqueeContent.offsetWidth

         gsap.killTweensOf(c.children)
         gsap.fromTo(c.children,
            {
               x: 0
            },
            {
               x: -1 * width,
               duration: 40,
               ease: "none",
               repeat: -1
            }
         )
      })
   })

   marqueeContainersRev.forEach((c) => {
      const marqueeContent = c.querySelector('.marquee-content-rev');
      if(!marqueeContent) { return }

      document.fonts.ready.then(() => {
         if (c.children.length === 1) {
            const clone = marqueeContent.cloneNode(true);
            c.appendChild(clone);
         }

         const width = marqueeContent.offsetWidth

         gsap.killTweensOf(c.children)
         gsap.fromTo(c.children,
            {
               x: -1 * width
            },
            {
               x: 0, 
               duration: 40,
               ease: "none",
               repeat: -1
            }
         )
      })
   })

   console.log('marque-init')
}
