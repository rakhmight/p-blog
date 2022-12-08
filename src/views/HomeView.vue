<template>
    
    <div class="home">

        <div class="layers">
            <div class="layer__content">
                <div class="layers__photo"></div>
                <div class="layers__title">Person</div>
                <div class="layers__subtitle">some text about youself</div>
            </div>

            <div class="avatar" left v-bind:style="{'background-image': 'url(' + require('../assets/media/naruto.svg') + ')'}"></div>
            <div class="avatar" right v-bind:style="{'background-image': 'url(' + require('../assets/media/itachi.svg') + ')'}"></div>

            <div class="layer layers_base" v-bind:style="{'background-image': 'url(' + require('../assets/media/layer-4.png') + ')'}"></div>
            <div class="layer layers_middle" v-bind:style="{'background-image': 'url(' + require('../assets/media/layer-3.png') + ')'}"></div>
            <div class="layer layers_front" v-bind:style="{'background-image': 'url(' + require('../assets/media/layer-1-2.png') + ')'}"></div>
            <div class="layer toning"></div>
        </div>

        <div class="clouds"></div>

        <div class="container">
            <section>
                <div class="main__title">
                    <light-text :text="$ml.get('homeStatTitle')"></light-text>
                </div>
                <div class="main__content stata-wrapper">

                    <div class="statistics">
                        <statistics-card :imgPath="'views'" :imgHeight="'72px'" :imgWidth="'72px'" :imgShadow="'0px 0px 20px 5px rgba(92, 38, 245, 0.5)'" :imgRadius="'10px'" :stataNumber="'116'" :stataDes="$ml.get('homeStatViewsDes')"></statistics-card>
                        <statistics-card :imgPath="'posts'" :imgHeight="'72px'" :imgWidth="'72px'" :imgShadow="'0px 4px 20px 5px rgba(38, 245, 158, 0.5)'" :imgRadius="'10px'" :stataNumber="'42'" :stataDes="$ml.get('homeStatPostsDes')"></statistics-card>
                        <statistics-card :imgPath="'anime'" :imgHeight="'72px'" :imgWidth="'72px'" :imgShadow="'0px 4px 20px 5px rgba(38, 146, 245, 0.5)'" :imgRadius="'10px'" :stataNumber="'76'" :stataDes="$ml.get('homeStatAnimeDes')"></statistics-card>
                        <statistics-card :imgPath="'mark'" :imgHeight="'72px'" :imgWidth="'72px'" :imgShadow="'0px 4px 20px 5px rgba(245, 113, 38, 0.5)'" :imgRadius="'10px'" :stataNumber="'4,5'" :stataDes="$ml.get('homeStatDesDes')"></statistics-card>
                    </div>

                </div>
            </section>

            <section>
                <div class="about-wrapper">
                    <div class="about">
                        <div class="about__image"></div>
                        <div class="about__content">
                            <div class="about__title">
                                <light-text :text="'Обо мне и мой блог'"></light-text>
                            </div>
                            <div class="about__description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, animi atque illum labore nemo impedit repellat! <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quasi eum consequatur nemo. Tempora, quis et? Consequatur laborum, nemo sequi reiciendis modi non laudantium corrupti dolorum rem facere repudiandae id!
                                </p>
                            </div>
                            <div class="about__subdes"><p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                            <div class="about__btn">
                                <btn :btnUrl="'/blog'" :btnText="'Перейти в блог'"></btn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="post-section">
                    <div class="post__title">
                        <light-text :text="'Последний пост блога'"></light-text>
                    </div>
                    <div class="post__content">
                        <post></post>
                    </div>
                </div>
            </section>

            <section>
                <div class="interests">
                    <div class="interests__title">
                        <light-text :text="'Мои интересы'"></light-text>
                    </div>
                </div>

                <div class="interests__content">
                    <lebel :lebelPicture="'int-taekwondo'" :lebelDes="'Taekwondo'"/>
                    <lebel :lebelPicture="'int-law'" :lebelDes="'Право и юриспруденция'"/>
                    <lebel :lebelPicture="'int-anime'" :lebelDes="'Аниме'"/>

                    <lebel :lebelPicture="'int-eng'" :lebelDes="'English language'"/>
                    <lebel />
                    <lebel />
                </div>
            </section>

            <section>
                <div class="anime">
                    <div class="anime__title">
                        <light-text :text="'Последние добавленные аниме'"></light-text>
                    </div>

                    <div class="anime__content"></div>
                </div>
            </section>
        </div>
    </div>

</template>

<script>
import parallaxPlugin from '../plugins/parallax'
import LightText from '../components/LightText.vue'
import StatisticsCard from '../components/StatisticsCard.vue'
import Btn from '../components/Btn.vue'
import Post from '../components/Post.vue'
import Lebel from '../components/Lebel.vue'

export default {
  data(){
    return {
    }
  },
  mounted(){
    parallaxPlugin()
  },
  components:{
    LightText,
    StatisticsCard,
    Btn,
    Post,
    Lebel
  }
}

</script>

<style>
.home{
  position: relative;
  will-change: transform;
}

.layers{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    position: relative;
    margin-bottom: 150px;
}

.layer{
    height: 100%;
    width: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
    will-change: transform;
    z-index: 2;
    transition: var(--transition);
}
.toning{
    background-color: rgba(0, 0, 0, 0.52);
    z-index: 1; 
}
.layers_wall{
    z-index: 0;
}

.layers_base{
    transform: translate3d(0, calc(var(--scrollTop) / 1.6),0);
    z-index: 0;
}

.layers_middle{
    transform: translate3d(0, calc(var(--scrollTop) / 2.5),0);
    z-index: 0;
}

.layers_front{
    transform: translate3d(0, calc(var(--scrollTop) / 5.7),0);
    z-index: 0;
}

.layer__content{
    z-index: 2; 
    transform: translate3d(0, calc(var(--scrollTop) / 2),0);
    transition: var(--transition);
}

.layers__photo{
    width: 150px;
    height: 150px;
    background-image: url(../assets/media/person.png);
    margin: 0 auto;
}

.layers__title{
    margin-top: 15px;
    font-size: 2em;
}
.layers__subtitle{
    color: #d2d1d1
}

.avatar{
    position: absolute;
    z-index: 2;
    transform: translate3d(0, calc(var(--scrollTop) / 3.5),0);
    transition: var(--transition);
    background-size: cover;
}
.avatar[right]{
    width: 437px;
    height: 509px;
    right:10%;
    bottom:10vh
}

.avatar[left]{
    width: 417px;
    height: 563px;
    left:10%;
    bottom:10vh
}

.clouds{
    position: absolute;
    top:92vh;
    background-image: url(../assets/media/clouds.svg);
    width: 100%;
    height: 223px;
    z-index: 2;
}

.main__title{
    margin-bottom: 40px;
}
.main__content{
}
.stata-wrapper{
    width: 982px;
}

.statistics{
    width: 100% ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.statistics__card{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.statistics__logo{
}
.statistics__number{
font-size: 3em;
padding: 10px 0 0px;
}
.statistics__description{

}
.views{
    background-image: url(../assets/media/statistic-views.svg);
}
.posts{
    background-image: url(../assets/media/statistic-posts.svg);
}
.anime{
    background-image: url(../assets/media/statistic-anime.svg);
}
.mark{
    background-image: url(../assets/media/statistic-mark.svg);
}

.about-wrapper{
    width: 979px;
}
.about{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
}
.about__image{
    width: 323px;
    height: 405px;
    background-color: #2A2E35;
    border-radius: 20px;
}
.about__content{
    width: 616px;
}

.about__title{
}
.about__description{
    padding: 20px 0 10px;
    word-wrap: break-word;
    line-height: 25px;
}
.about__subdes{
    color: #8E8E8E;
    line-height: 25px;
}
.about__btn{
    margin-top: 50px;
}

.post__content{
    margin-top: 30px;
}

.interests__content{
    width: 835px;
    height: 280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin-top: 30px;
}

</style>