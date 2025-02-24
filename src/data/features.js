import Robot from '../components/svg/Robot.vue';
import Chart from '../components/svg/Chart.vue';
import Clocks from '../components/svg/Clocks.vue';
import Smile from '../components/svg/Smile.vue';
import Arrow from '../components/svg/Arrow.vue';

export const features = [
  { icon: Robot, text: '500+ Chess Bots and counting', description: 'Each one with their own unique style and personality' },
  { icon: Chart, text: 'From Beginner to Grandmaster, with real Elo Ratings', description: 'Bot strength ranges from 100 to master level Elo, and are regularly checked to match real FIDE ratings' },
  { icon: Arrow, text: 'Play rated or casual', description: 'Compete and find your real level, or play just for fun' },
  { icon: Clocks, text: 'Bullet, Blitz, Rapid, or take your time', description: 'Select any time control, or play without the clock. The bots will adjust and use time as you expect!' },
  { icon: Smile, text: 'Genuine Human-like play', description:'Building on Leela and Maia Chess, our bots make the same mistakes a human would' },
];