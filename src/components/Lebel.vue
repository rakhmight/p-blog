<template>
    <div class="lebel">
        <div class="lebel__picture" v-bind:class="picture"></div>
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
    flex-direction: row;
    width: 350px;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    font-size: 20px;
}
.lebel__picture{
    width: 80px;
    height: 80px;
    background-color: #2A2E35;
    border-radius: 75px;
    background-position: center center;
}
.lebel__description{
    width: 260px;
}

.int-taekwondo{
    background-image: url(../assets/media/taekwondo.svg);
}
.int-law{
    background-image: url(../assets/media/law.svg);
}
.int-anime{
    background-image: url(../assets/media/otaku.svg);
}
.int-eng{
    background-image: url(../assets/media/eng.svg);
}
</style>