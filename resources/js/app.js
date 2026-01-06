import './bootstrap'; // Standard Laravel bootstrap
import { registerGlobals } from './core/global';
import { AnimationManager } from './core/animate';
import { initBarba } from './core/barba';

registerGlobals();

const animator = new AnimationManager();
animator.init();

initBarba(animator);

console.log('App initialized');