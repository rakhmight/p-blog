<template>
    <div class="anime__carousel">
        <div class="carousel-items">
            
            <slider ref="slider" :options="options">
                <!-- slideritem wrapped package with the components you need -->
                <!-- <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem> -->
                <slideritem>
                    <ani-card :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" :acTitle="'91 days'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card>
                    <ani-card :acPicture="'url(https://pic-bstarstatic.akamaized.net/ugc/c31f6de702dedadf1d7203525b7b843e14e95bed.png@720w_405h_1e_1c_1f.webp)'" :acTitle="'Attack on Titan'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'best', color: '#6B32E4'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card>
                    <ani-card :acPicture="'url(https://ais-cf.tvnow.de/tvnow/format/12847_03artwork/1600x0/naruto.png)'" :acTitle="'Naruto'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'lovely', color: '#50DDE5'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card>
                    <ani-card :acPicture="'url(https://gcdn.lanetaneta.com/wp-content/uploads/2021/08/Los-fanaticos-de-Tokyo-Ghoul-estan-solicitando-un-rehacer-de.jpeg)'" :acTitle="'Tokyo Ghol'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'blood', color: '#E55050'},{name: '18+', color: '#333AEC'}]" :acDes="'This is a paragraph with more information about something important.'"></ani-card>
                </slideritem>
                <slideritem>
                    <ani-card :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" :acTitle="'91 days'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card>
                    <ani-card :acPicture="'url(https://pic-bstarstatic.akamaized.net/ugc/c31f6de702dedadf1d7203525b7b843e14e95bed.png@720w_405h_1e_1c_1f.webp)'" :acTitle="'Attack on Titan'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'best', color: '#6B32E4'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card>
                    <ani-card :acPicture="'url(https://ais-cf.tvnow.de/tvnow/format/12847_03artwork/1600x0/naruto.png)'" :acTitle="'Naruto'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'lovely', color: '#50DDE5'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card>
                    <ani-card :acPicture="'url(https://gcdn.lanetaneta.com/wp-content/uploads/2021/08/Los-fanaticos-de-Tokyo-Ghoul-estan-solicitando-un-rehacer-de.jpeg)'" :acTitle="'Tokyo Ghol'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'blood', color: '#E55050'},{name: '18+', color: '#333AEC'}]" :acDes="'This is a paragraph with more information about something important.'"></ani-card>
                </slideritem>
                <slideritem>
                    <ani-card :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" :acTitle="'91 days'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card>
                    <ani-card :acPicture="'url(https://pic-bstarstatic.akamaized.net/ugc/c31f6de702dedadf1d7203525b7b843e14e95bed.png@720w_405h_1e_1c_1f.webp)'" :acTitle="'Attack on Titan'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'best', color: '#6B32E4'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card>
                    <ani-card :acPicture="'url(https://ais-cf.tvnow.de/tvnow/format/12847_03artwork/1600x0/naruto.png)'" :acTitle="'Naruto'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'lovely', color: '#50DDE5'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card>
                    <ani-card :acPicture="'url(https://gcdn.lanetaneta.com/wp-content/uploads/2021/08/Los-fanaticos-de-Tokyo-Ghoul-estan-solicitando-un-rehacer-de.jpeg)'" :acTitle="'Tokyo Ghol'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'blood', color: '#E55050'},{name: '18+', color: '#333AEC'}]" :acDes="'This is a paragraph with more information about something important.'"></ani-card>
                </slideritem>
                <!-- Customizable loading -->


                <div slot="loading">loading...</div>
            </slider>
        </div>
    </div>
        <!-- Using the slider component -->
</template>

<script>// import slider components
import { slider, slideritem } from 'vue-concise-slider'
import AniCard from '../components/AniCard.vue'

export default {
   data () {
      return {
        //data list [array]
        // someList:[
        //   {
        //     html: 'slide1',
        //     style: {
        //       'background': '#1bbc9b'
        //     }
        //   },
        //   {
        //     html: 'slide2',
        //     style: {
        //       'background': '#4bbfc3'
        //     }
        //   },
        //   {
        //     html: 'slide3',
        //     style: {
        //       'background': '#7baabe'
        //     }
        //   }
        // ],
        //Slider configuration [obj]
        options: {
          currentPage: 0
        }
      }
    },
    components: {
      slider,
      slideritem,
      AniCard
    }
}
</script>

<style>
.anime__carousel{
}
.carousel-items{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
}

.slider-item{
    justify-content: space-around;
}
</style>