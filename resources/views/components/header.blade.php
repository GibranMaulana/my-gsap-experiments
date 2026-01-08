@props([
   'links' => [
      [
         'name' => 'HOME',
         'href' => route('home')
      ],
      [
         'name' => 'ABOUT',
         'href' => route('about')
      ],
      [
         'name' => 'TESTING GROUND',
         'href' => route('testing-ground')
      ],
      [
         'name' => 'MYWEBSITE',
         'href' => 'https://gibranmaulana.me'
      ]
   ]
])

<header class="fixed top-0 inset-x-0 flex justify-center p-10 z-50 pointer-events-none">
   <div class="w-full flex justify-between max-w-2xl text-lg pointer-events-auto backdrop-blur-sm">
      @foreach ($links as $l)
         <a href={{ $l['href'] }} class="font-display hover:tracking-widest hover:text-primary hover:scale-105 duration-200">{{ $l['name'] }}</a>
      @endforeach
   </div>
</header>