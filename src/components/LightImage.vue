<template>
    <div v-bind:style="{
        //'background-image': `url(${require(imgPath)})`,
        'height': imgHeight,
        'width': imgWidth,
        'box-shadow': imgShadow,
        'border-radius': imgRadius,
        }"
         v-bind:class="imgPath"
         class="light-image">
    </div>
</template>
<script>
export default {
    props:{
        img: String,
        width: String,
        height: String,
        shadow: String,
        radius: String
    },
    data(){
        return{
            imgPath: this.img,
            imgWidth: this.width,
            imgHeight: this.height,
            imgShadow: this.shadow,
            imgRadius: this.radius,
        }
    }
}
</script>

<style>
.light-image{
    background-size: cover;
}
</style>