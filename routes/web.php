<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/about', function() {
   return view('about');
})->name('about');

Route::get('/testing-ground', function() {
   return view('testing-ground');
})->name('testing-ground');