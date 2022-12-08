<template>
    <transition name="fade">
        <div class="preloader" v-if="show">
            <div class="preloader__wrapper">
                <div class="sharingan"  v-bind:style="{'background-image': 'url(' + require('../assets/media/mangekyou-sharingan.svg') + ')'}"></div>
            </div>
        </div>
    </transition>
</template>

<script>
// TODO: передовать состояние в APP

export default {
    props:{
        showHomeLoader:Boolean
    },
    data(){
        return {
            show: this.showHomeLoader
        }
    },
    mounted(){
        this.showToggle()
    },
    methods:{
        showToggle(){
            setTimeout(()=>{
                this.show = false
                //this.show = this.$route.matched[0].props.default.showHomeLoader = false
            }, 3000)
        }
    }
}
</script>

<style>
.preloader{
   position: fixed;
   width: 100%;
   height: 100vh;
   z-index: 100;
   background-color: #1D1F21;
}

.preloader__wrapper{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sharingan{
    width: 150px;
    height: 150px;
    background-size: cover;
    animation: 3s linear infinite rotate;
    border-radius: 150px;
    box-shadow: 0px 0px 50px 30px rgba(189, 13, 13, 0.158);
    background-color: #bd0d0d28;
}

.fade-enter-active, .fade-leave-active{
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>