@props([
   'text' => "placeholder",
   'repeat' => 3
])

<section class="bg-primary">
   <div class="marquee-container flex w-full overflow-hidden">
      <div class="marquee-content flex w-fit text-8xl font-display text-nowrap">
         @for ($i = 0; $i < $repeat; $i++)
            <h1 class="">{{ $text  }} | </h1>
         @endfor
      </div>
   </div>
   <div class="marquee-container-rev flex w-full overflow-hidden">
      <div class="marquee-content-rev flex w-fit text-8xl font-display text-nowrap">
         @for ($i = 0; $i < $repeat; $i++)
            <h1 class="">{{ $text  }} | </h1>
         @endfor
      </div>
   </div>
</section>