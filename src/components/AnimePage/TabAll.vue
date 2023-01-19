<template>   
    <div>
        <div class="anime-cards-layout">

            <ani-card 
            v-for="item in items" 
            :key="item.item"
            :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" 
            :acTitle="'91 days'" 
            :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" 
            :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material. slpdksiopjgiosjdgggggggggggggggggggggggg'"
            ></ani-card>

            <ani-card
            :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" 
            :acTitle="'91 days'" 
            :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" 
            :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material. slpdksiopjgiosjdgggggggggggggggggggggggg'"
            ></ani-card>

            <ani-card
            :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" 
            :acTitle="'Some another'" 
            :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" 
            :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material. slpdksiopjgiosjdgggggggggggggggggggggggg'"
            ></ani-card>

        </div>  

        <div class="anime-pages">
            <v-pagination
            v-model="page"
            :length="15"
            :total-visible="7"
            dark
            ></v-pagination>
        </div>
    </div>
</template>

<script>
import AniCard from '../AniCard.vue'

export default {
    data() {
        return {
            page: 1,    
            items: [
                { item: 1 },
                { item: 2 },
                { item: 3 },
                { item: 4 },
                { item: 5 },
            ]
        }
    },
    components:{
        AniCard
    }
}
</script>

<style>
    
</style>