<template>
    <div class="lebel">
        <div class="lebel__picture" v-if="picture"><p>{{ picture }}</p></div>
        <div class="lebel__picture" v-if="!picture"><div class="no-emoji"></div></div>
        <div class="lebel__description">{{des}}</div>
    </div>
</template>

<script>
export default {
    props:{
        lebelPicture: String,
        lebelDes: String
    },
    data(){
        return{
            picture: this.lebelPicture,
            des: this.lebelDes
        }
    }
}
</script>

<style>
.lebel{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
}
.lebel__picture>p{
font-size: 2.5em;
}
.lebel__description{
    width: 150px;
}

.no-emoji{
    width: 55px;
    height: 55px;
    background-image: url('../assets/media/smile.png');
    background-size: contain;
}
</style>