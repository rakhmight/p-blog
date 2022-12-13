<template>
    
    <div class="anicard">
        <div class="anicard__wallpaper" :style="{ backgroundImage: picture }"></div>
        <div class="anicard__content">
            <div class="anicard__content-main">
                <div class="anicard__title">{{title}}</div>
                <div class="anicard__description">{{des}}</div>
            </div>
            <div class="anicard__tags">
                <div class="anicard__tag" v-for="tag in tags" :style="{ backgroundColor: tag.color }">{{tag.name}}</div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        acPicture: String,
        acTitle: String,
        acTags: Array,
        acDes: String
    },
    data(){
        return{
            picture: this.acPicture,
            title: this.acTitle,
            tags: this.acTags,
            des: this.acDes
        }
    }
}
</script>

<style>
.anicard{
    background-color: #2A2E35;
    width: 250px;
    border-radius: 20px;
}
.anicard__wallpaper{
    width: 100%;
    height: 145px;
    background-size: cover;
    background-position: center;
    border-radius: 20px 20px 0 0;
}
.anicard__content{
    height: 225px;
    padding: 15px 7px;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.anicard__title{
    font-size: 20px;
}

.anicard__description{
    margin-top: 10px;
    font-size: 17px;
    color: #8E8E8E;
    white-space: pre-wrap;
}
.anicard__tags{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.anicard__tag::before{
    content: '#';
    margin-right: -2px;
}
.anicard__tag{
    display: block;
    border-radius: 5px;
    padding: 5px 7px;
    font-size: 16px;
    margin-top: 5px;
}
.anicard__tag:not(:first-child){
    margin-left: 5px;
}
</style>