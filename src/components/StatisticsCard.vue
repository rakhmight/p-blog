<template>
    <div class="statistics__card">
        <div class="statistics__logo">
            <light-image :img="path" :height="height" :width="width" :shadow="shadow" :radius="radius"></light-image>
        </div>
        <div class="statistics__number number">0</div>
        <div class="statistics__description">{{des}}</div>
    </div>
</template>

<script>
import LightImage from '../components/LightImage.vue'
import { CountUp } from 'countup.js'

export default {
    props:{
        imgPath: String,
        imgWidth: String,
        imgHeight: String,
        imgShadow: String,
        imgRadius: String,
        stataDes: String
    },
    data(){
        return{
            path: this.imgPath,
            width: this.imgWidth,
            height: this.imgHeight,
            shadow: this.imgShadow,
            radius: this.imgRadius,
            des: this.stataDes,
            number: [116,42,76,4]
        }
    },
  components:{
    LightImage
  },
  mounted() {
    const stataNumbers = document.querySelectorAll('.number')

    for(let i = 0; i!=stataNumbers.length; i++){
        let countUp = new CountUp(stataNumbers[i], this.number[i], { enableScrollSpy: true });
    }
  },
}
</script>

<style>
</style>