<x-layouts.app namespace="home">
   <div style="min-height: 50dvh">Spacer</div>

   <a href="{{ route("about")  }}" class="">about</a>
   
   <h1 data-anim="reveal" class="text-4xl">
       This will animate on scroll!
   </h1>
   
   <div style="height: 200vh">Spacer for scroll</div>
</x-layouts.app>