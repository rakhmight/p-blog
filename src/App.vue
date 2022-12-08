<template>
  <div id="app">

    <div class="wrapper">
        <preloader-component :showHomeLoader="showHomeLoader"/>
        <header-component/>

          <main>
            <transition :name="routerTransition">
              <router-view/>
            </transition>
          </main>

          <footer-component v-if="!$route.meta.hideFooter" />
    </div>

  </div>
</template>


<script>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import PreloaderComponent from './components/PreloaderComponent.vue'

export default {
  data(){
    return{
      showHomeLoader: true
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
      }
  },
  mounted(){

  }
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
</style>