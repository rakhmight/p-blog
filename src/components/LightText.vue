<template>
    <p style="text-shadow: #fff 0px 0px 15px;" :style="currentFontSize" v-text="injectedText"></p>
</template>

<script>
export default {
    props:{
        text: String,
        fontSize: String
    },
    data(){
        return {
            injectedText: this.text,
            currentFontSize: this.fontSize ? `font-size: ${this.fontSize}` : 'font-size: 1.8em'
        }
    }
}
</script>