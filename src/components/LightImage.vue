<template>
    <div v-bind:style="{
        //'background-image': `url(${require(imgPath)})`,
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
        shadow: String,
        radius: String
    },
    data(){
        return{
            imgPath: this.img,
            imgShadow: this.shadow,
            imgRadius: this.radius,
        }
    }
}
</script>

<style>
.light-image{
    background-size: cover;
    width: 72px;
    height: 72px;
}

@media only screen and (max-width: 770px) {
.light-image{
    width: 55px;
    height: 55px;
}
}
</style>