<x-layouts.app namespace="home">
   <x-marquee text="HTTPS://GIBRANMAULANA.ME"/>
   <section class="relative min-h-screen flex flex-col justify-center p-10">
      <div class="flex flex-col">

         <div class="grid grid-cols-2">
            <div class="flex flex-col gap-6">
               <h1 class="text-7xl font-display leading-none">
                  ANIMATED COMPONENTS USING GSAP BUILD FOR FUN
               </h1>
               <p class="text-sm text-gray-300 w-3/4">
                  This is just some of the components i had in mind and implements them using gsap for animation and also a helped of barba.js (for transition).
               </p>

               <div class="flex gap-6 text-xl">
                  <x-button 
                     text="SEE MORE" 
                     href="{{ route('testing-ground')  }}"
                     background="primary"
                     text_color="text" />
                  <x-button 
                  text="LETS WORK"
                  href="https://gibranmaulana.me" 
                  background="secondary"
                  text_color="text"/>
               </div>

            </div>
         </div>

      </div>
   </section>
</x-layouts.app>