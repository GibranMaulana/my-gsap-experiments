@props([
   'text' => 'Lorem Ipsum',
   'href' => route('home'),
   'background' => 'black',
   'text_color' => 'text',

])

<a href={{ $href }} 
   class="bg-{{ $background }} font-display text-{{ $text_color }} px-6 py-2 rounded-md 
          hover:tracking-widest hover:bg-white hover:text-black duration-300 hover:scale-105">
   {{ $text }}
</a>

