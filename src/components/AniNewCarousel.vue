<template>
    <div class="anime__carousel">
        <div class="carousel-items">
            
            <slider ref="slider" :options="options">

                <slideritem><ani-card :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" :acTitle="'91 days'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://pic-bstarstatic.akamaized.net/ugc/c31f6de702dedadf1d7203525b7b843e14e95bed.png@720w_405h_1e_1c_1f.webp)'" :acTitle="'Attack on Titan'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'best', color: '#6B32E4'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://ais-cf.tvnow.de/tvnow/format/12847_03artwork/1600x0/naruto.png)'" :acTitle="'Naruto'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'lovely', color: '#50DDE5'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://gcdn.lanetaneta.com/wp-content/uploads/2021/08/Los-fanaticos-de-Tokyo-Ghoul-estan-solicitando-un-rehacer-de.jpeg)'" :acTitle="'Tokyo Ghol'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'blood', color: '#E55050'},{name: '18+', color: '#333AEC'}]" :acDes="'This is a paragraph with more information about something important.'"></ani-card></slideritem>
                
                <slideritem><ani-card :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" :acTitle="'91 days'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://pic-bstarstatic.akamaized.net/ugc/c31f6de702dedadf1d7203525b7b843e14e95bed.png@720w_405h_1e_1c_1f.webp)'" :acTitle="'Attack on Titan'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'best', color: '#6B32E4'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://ais-cf.tvnow.de/tvnow/format/12847_03artwork/1600x0/naruto.png)'" :acTitle="'Naruto'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'lovely', color: '#50DDE5'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://gcdn.lanetaneta.com/wp-content/uploads/2021/08/Los-fanaticos-de-Tokyo-Ghoul-estan-solicitando-un-rehacer-de.jpeg)'" :acTitle="'Tokyo Ghol'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'blood', color: '#E55050'},{name: '18+', color: '#333AEC'}]" :acDes="'This is a paragraph with more information about something important.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459b929060902bb91d91156bcc2ce650.jpeg)'" :acTitle="'91 days'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'mafia', color: '#E55050'},{name: 'favorite', color: '#E5AA50'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://pic-bstarstatic.akamaized.net/ugc/c31f6de702dedadf1d7203525b7b843e14e95bed.png@720w_405h_1e_1c_1f.webp)'" :acTitle="'Attack on Titan'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'best', color: '#6B32E4'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://ais-cf.tvnow.de/tvnow/format/12847_03artwork/1600x0/naruto.png)'" :acTitle="'Naruto'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'lovely', color: '#50DDE5'}]" :acDes="'This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.'"></ani-card></slideritem>
                <slideritem><ani-card :acPicture="'url(https://gcdn.lanetaneta.com/wp-content/uploads/2021/08/Los-fanaticos-de-Tokyo-Ghoul-estan-solicitando-un-rehacer-de.jpeg)'" :acTitle="'Tokyo Ghol'" :acTags="[{name: 'anime', color: '#E550D7'},{name: 'blood', color: '#E55050'},{name: '18+', color: '#333AEC'}]" :acDes="'This is a paragraph with more information about something important.'"></ani-card></slideritem>

                <div slot="loading">loading...</div>
            </slider>
        </div>
    </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
import AniCard from '../components/AniCard.vue'

export default {
   data () {
      return {
        options: {
            currentPage: 0,
            autoplay:10000,
            loop:true,
            loopedSlides:1,
            slidesToScroll:4,
            thresholdTime:'1000',
            currentWindowSize: window.innerWidth
        }
      }
    },
    mounted() {
      this.currentRout = this.$router.currentRoute.path
        if(this.currentWindowSize>=770){
            this.options.slidesToScroll = 1
        }

      window.addEventListener('resize', (e) => {
        this.currentWindowSize = window.innerWidth

        if(this.currentWindowSize>=770){
            this.options.slidesToScroll = 1
        }
      });
    },
    components: {
      slider,
      slideritem,
      AniCard
    }
}
</script>

<style>
.carousel-items{
    /* display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative; */
}
.slider-item{
    width:285px
    /* justify-content: space-around; */
}

@media only screen and (max-width: 770px){
.slider-item{
    width:100%

}
}

</style>