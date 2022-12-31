<template>   
    <div>
        <div class="anime-cards-layout">

            <ani-card 
            v-for="item in items" 
            :key="item.item" 
            :acClass="['anime-cards-margin']" 
            :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" 
            :acTitle="'91 days'" 
            :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" 
            :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material. slpdksiopjgiosjdgggggggggggggggggggggggg'"
            :acPreview="'https://www.youtube.com/embed/fTUGk5vsVCA'"
            ></ani-card>

            <ani-card
            :acClass="['anime-cards-margin']" 
            :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" 
            :acTitle="'91 days'" 
            :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" 
            :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material. slpdksiopjgiosjdgggggggggggggggggggggggg'"
            :acPreview="'https://www.youtube.com/embed/5Z8Fifbu0eM'"
            ></ani-card>

            <ani-card
            :acClass="['anime-cards-margin']" 
            :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" 
            :acTitle="'Some another'" 
            :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" 
            :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material. slpdksiopjgiosjdgggggggggggggggggggggggg'"
            :acPreview="'https://www.youtube.com/embed/L4wCSzAMgqA'"
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
                // { item: 6 },
                // { item: 7 },
                // { item: 8 },
                // { item: 9 },
                // { item: 10 },
                // { item: 11 },
                // { item: 12 },
                // { item: 13 },
                // { item: 14 },
                // { item: 15 },
                // { item: 16 },
                // { item: 17 },
                // { item: 18 },
                // { item: 19 },
                // { item: 20 }
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