<template>
    <div class="statistics__card">
        <div class="statistics__logo">
            <light-image :img="path" :height="height" :width="width" :shadow="shadow" :radius="radius"></light-image>
        </div>
        <div class="statistics__number">{{number}}</div>
        <div class="statistics__description">{{des}}</div>
    </div>
</template>

<script>
import LightImage from '../components/LightImage.vue'

export default {
    props:{
        imgPath: String,
        imgWidth: String,
        imgHeight: String,
        imgShadow: String,
        imgRadius: String,
        stataNumber: String,
        stataDes: String
    },
    data(){
        return{
            path: this.imgPath,
            width: this.imgWidth,
            height: this.imgHeight,
            shadow: this.imgShadow,
            radius: this.imgRadius,
            number: this.stataNumber,
            des: this.stataDes
        }
    },
  components:{
    LightImage
  }
}
</script>

<style>
</style>