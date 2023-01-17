<template>
  <div id="app">
    
    <div data-app>
      <div class="wrapper">
          <let-it-snow v-bind="snowConf" :show="isWinter"></let-it-snow>

          <preloader-component :showHomeLoader="showHomeLoader"/>
          <header-component :isWinter="isWinter"/>
          <ul class="lightrope" v-if="isWinter">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div id="snow-container" v-if="isWinter"></div>
          <canvas id="confetti"></canvas>

          <main>
            <transition :name="routerTransition">
              <router-view :isWinter="isWinter"/>
            </transition>
          </main>

          <footer-component v-if="!$route.meta.hideFooter" />
      </div>
    </div>

  </div>
</template>


<script>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import PreloaderComponent from './components/PreloaderComponent.vue'
import checkWinter from './plugins/checkWinter'
//

export default {
  data(){
    return{
      showHomeLoader: true,
      isWinter:false,
      snowConf: {
          windPower : 1,  
          speed : 3,
          count : 12,
          size : 10,
          routerTransition: 'slide-left',
          opacity : 1,
          images: ['https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/snow.png',
                  'https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/snow.png',
                  'https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/sock.png',
                  'https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/tree.png']
      } 
    }
  },
  components: {
        PreloaderComponent,
        FooterComponent,
        HeaderComponent,
  },
  watch: {
      $route(to, from) {
          const routeDeep = ['/', '/contacts', '/blog', '/anime','/404']
          const toDepth = routeDeep.indexOf(to.path)
          const fromDepth = routeDeep.indexOf(from.path)
          this.routerTransition = toDepth > fromDepth ? 'slide-left' : 'slide-right'

          $('html').scrollTop(0);
      }
  },
  mounted(){
    this.show = true
    this.isWinter = checkWinter()
    
  },
}
</script>


<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root{
  --transition: transform
}

@font-face {
    font-family: NewStandardOld_f;
    src: url(./assets/fonts/NewStandardOld.ttf);
}
@import url('https://fonts.googleapis.com/css?family=Jim+Nightshade');
@import url('https://fonts.googleapis.com/css?family=Assistant:300');

body{
  background-color: #1D1F21;
  font-family: NewStandardOld_f, sans-serif;
  font-size: 1.2em;
  color:#fff;
  height: 100%;
}

#app {
  text-align: center;
}

.wrapper{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

#confetti{
    position:fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top:0;
}

.container {
  width:1140px;
  margin: 0 auto;
}

main{
  flex: 1 1 auto;
}


.slide-left-enter-active {
    animation-name: slide-left-in;
    animation-duration: .2s;
}
.slide-left-leave-active {
    animation-name: slide-left-out;
    animation-duration: .2s;
}
.slide-right-enter-active {
    animation-name: slide-right-in;
    animation-duration: .2s;
}
.slide-right-leave-active {
    animation-name: slide-right-out;
    animation-duration: .2s;
}
 
@keyframes slide-left-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
 
@keyframes slide-left-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
 
@keyframes slide-right-in{
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes slide-right-out  {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

section{
    width: 100%;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}



.lightrope {
	 text-align: center;
	 white-space: nowrap;
	 overflow: hidden;
	 position: fixed;
   top:74px;
   left: 0;
	 z-index: 1;
	 margin: 0;
	 padding: 0;
	 pointer-events: none;
	 width: 100%;
   height: 90px;
}
 .lightrope li {
	 position: relative;
	 animation-fill-mode: both;
	 animation-iteration-count: infinite;
	 list-style: none;
	 margin: 0;
	 padding: 0;
	 display: block;
	 width: 12px;
	 height: 28px;
	 border-radius: 50%;
	 margin: 20px;
	 display: inline-block;
	 background: rgba(0, 247, 165, 1);
	 box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 247, 165, 1);
	 animation-name: flash-1;
	 animation-duration: 2s;
}
 .lightrope li:nth-child(2n+1) {
	 background: rgba(0, 255, 255, 1);
	 box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.5);
	 animation-name: flash-2;
	 animation-duration: 0.4s;
}
 .lightrope li:nth-child(4n+2) {
	 background: rgba(247, 0, 148, 1);
	 box-shadow: 0px 4.6666666667px 24px 3px rgba(247, 0, 148, 1);
	 animation-name: flash-3;
	 animation-duration: 1.1s;
}
 .lightrope li:nth-child(odd) {
	 animation-duration: 1.8s;
}
 .lightrope li:nth-child(3n+1) {
	 animation-duration: 1.4s;
}
 .lightrope li:before {
	 content: "";
	 position: absolute;
	 background: #222;
	 width: 10px;
	 height: 9.3333333333px;
	 border-radius: 3px;
	 top: -4.6666666667px;
	 left: 1px;
}
 .lightrope li:after {
	 content: "";
	 top: -14px;
	 left: 9px;
	 position: absolute;
	 width: 52px;
	 height: 18.6666666667px;
	 border-bottom: solid #222 2px;
	 border-radius: 50%;
}
 .lightrope li:last-child:after {
	 content: none;
}
 .lightrope li:first-child {
	 margin-left: -40px;
}
 @keyframes flash-1 {
	 0%, 100% {
		 background: rgba(0, 247, 165, 1);
		 box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 247, 165, 1);
	}
	 50% {
		 background: rgba(0, 247, 165, 0.4);
		 box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 247, 165, 0.2);
	}
}
 @keyframes flash-2 {
	 0%, 100% {
		 background: rgba(0, 255, 255, 1);
		 box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 255, 255, 1);
	}
	 50% {
		 background: rgba(0, 255, 255, 0.4);
		 box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.2);
	}
}
 @keyframes flash-3 {
	 0%, 100% {
		 background: rgba(247, 0, 148, 1);
		 box-shadow: 0px 4.6666666667px 24px 3px rgba(247, 0, 148, 1);
	}
	 50% {
		 background: rgba(247, 0, 148, 0.4);
		 box-shadow: 0px 4.6666666667px 24px 3px rgba(247, 0, 148, 0.2);
	}
}

::-webkit-scrollbar {
    width: 15px; /* ширина для вертикального скролла */
    background-color: #141618;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: #2A2E35;
    border-radius: 1em;
}
</style>