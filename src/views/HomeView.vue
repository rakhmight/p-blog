<template>
    
    <div class="home" v-if="user">

        <div class="layers">
            <div class="layer__content">
                <div class="santa-hat" v-if="isWinter"></div>
                <!-- <div class="layers__photo" :style="{'background-image': user.profilePic}" crossorigin="anonymous"></div> -->
                <img class="layers__photo" crossorigin="anonymous" :src="user.profilePic ? user.profilePic : 'url(' + require('../assets/media/person.png') + ')'" />
                <div class="layers__title">{{ user.username ? user.username : 'Person' }}</div>
                <div class="layers__subtitle">{{ user.bio ? user.bio : 'bio' }}</div>
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
                        <statistics-card :imgPath="'mark'" :imgHeight="'72px'" :imgWidth="'72px'" :imgShadow="'0px 4px 20px 5px rgba(245, 113, 38, 0.5)'" :imgRadius="'10px'" :stataNumber="'4'" :stataDes="$ml.get('homeStatDesDes')"></statistics-card>
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
                        <post
                        :postTitle="'Скоро рождество!'"
                        :postMedia="[{src: 'https://images.freeimages.com/images/large-previews/f45/christmas-tree-in-the-office-1639599.jpg'},{src: 'https://images.freeimages.com/images/large-previews/6ee/christmas-composition-a-luminous-star-in-blue-colors-1641501.jpg'}]"
                        :postDate="'19.12.2022'"
                        :postViews="32"
                        :postTags="[{name: 'story', color: '#FF3300'},{name: 'christmas', color:'#006633'},{name: 'cookie', color:'#993300'},{name:'snow',color:'#0000CC'}]"
                        :postDes="'Unicode is an internationally recognized standard for identifying the different characters we see on our computer screens. Since computers only recognize zeros and ones (i.e. binary), each character is assigned a unique binary number. For example, the capital letter “A” has a Unicode character number of 65. A lowercase “a” has a Unicode character number..'"
                        :postID="3"
                        ></post>
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
                <div class="anime-list">
                    <div class="anime__title">
                        <light-text :text="'Последние добавленные аниме'"></light-text>
                    </div>

                    <div class="anime__content">
                        <div class="anime__carousel">
                            <ani-new-carousel></ani-new-carousel>
                        </div>
                    </div>

                    <div class="anime__btn">
                        <btn :btnUrl="'/anime'" :btnText="'Перейти к списку'" />
                    </div>
                </div>
            </section>

            <section>
                <div class="rand-quote">
                    <div class="quote__title">
                        <light-text :text="'Случайная цитата'"></light-text>
                    </div>

                    <div class="quote__content">
                        <div class="quote">
                            <div class="quote__main">
                                <div class="quote__picture">
                                    <div class="quote__icon"></div>
                                </div>
                                <div class="quote__metter">
                                    <div class="quote__text" id="quote-text">{{ quoteText }}</div>
                                    <div class="quote__author" id="quote-author">{{ quoteAuthor }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="grade">
                    <div class="grade__title">
                        <light-text :text="'Оцените блог'"></light-text>
                    </div>

                    <div class="grade__content">
                        <div class="grade__box" v-if="!appreciated">
                            <div class="grade__star grade__star_passive" v-on:click="grade(1)"></div>
                            <div class="grade__star grade__star_passive" v-on:click="grade(2)"></div>
                            <div class="grade__star grade__star_passive" v-on:click="grade(3)"></div>
                            <div class="grade__star grade__star_passive" v-on:click="grade(4)"></div>
                            <div class="grade__star grade__star_passive" v-on:click="grade(5)"></div>
                        </div>
                        <div class="grade__box" v-else>
                            <div class="grade__star grade__star_passive"></div>
                            <div class="grade__star grade__star_passive"></div>
                            <div class="grade__star grade__star_passive"></div>
                            <div class="grade__star grade__star_passive"></div>
                            <div class="grade__star grade__star_passive"></div>
                            <!-- <div class="grade__star grade__star_active"></div> -->
                        </div>

                        <div class="grade__text" v-if="gradeMark>0">Ваша оценка: {{gradeMark}}</div>
                        <div class="grade__text" v-else>Поставьте оценку 😉</div>
                    </div>
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
import axios from 'axios'
import JSConfetti from 'js-confetti'
import checkWinter from '../plugins/checkWinter'
import AniNewCarousel from '../components/AniNewCarousel.vue'
import getUserDatas from '@/services/getUserDatas'

export default {
  data(){
    return {
        quoteText: '',
        quoteAuthor: '',
        appreciated: false,
        gradeMark: 0,
        isWinter: false,
        user: {}
    }
  },
  mounted(){
    parallaxPlugin()
    this.getQuote()

    if(!this.appreciated){
        if(localStorage.getItem('grade')){
            this.appreciated = true
            this.gradeCurrentMark()
        } else {
            this.gradeWatch()
        }
    }

    this.exGrade()

    this.isWinter = checkWinter()

    getUserDatas()
    .then((data)=>{
        this.user = { ...data }
    })
  },
  watch:{
    appreciated: function (){
        this.exGrade()
        this.gradeCurrentMark()
    },
  },
  methods:{
    confetti: function (mark){
        let canvas = document.getElementById('confetti')
        const jsConfetti = new JSConfetti({ canvas })
        setTimeout(() => {
            jsConfetti.addConfetti()
        }, 500)

        let emoj
        if(mark==1){
            emoj = ['😑', '😑', '😑', '✨']
        }else if(mark==2){
            emoj = ['😐', '😐', '😐', '✨']
        }else if(mark==3){
            emoj = ['🙂', '🙂', '🙂', '✨']
        }else if(mark==4){
            emoj = ['😉', '😉', '😉', '✨']
        }else if(mark==5){
            emoj = ['🤩', '🤩', '🤩', '✨']
        }

        jsConfetti.addConfetti({
            emojis: emoj
        })
    },
    getQuote: function () {
      this.quoteText = 'Some text'
      this.quoteAuthor = 'Some author'
      let vq = this

      axios.get('https://type.fit/api/quotes')
        .then(function (response) {
            const allQuotes = response.data
            const indx = Math.floor(Math.random()*allQuotes.length)
            const quote=allQuotes[indx].text
            const author=allQuotes[indx].author

            vq.quoteText = quote
            vq.quoteAuthor = author ? author : 'Anonim'
        })
        .catch(function (error) {
          console.error(`Возникли проблемы с API цитат: ${error}`)
        })
    },
    gradeWatch: function () {
        let stars = document.querySelectorAll('.grade__star')

        for(let i = 0; i!=stars.length; i++){
            stars[i].addEventListener("mouseover", ()=>{
                for(let g=i; g!=-1; g--){
                    stars[g].classList.replace("grade__star_passive", "grade__star_onchoise")
                }
            })
            stars[i].addEventListener("mouseout", ()=>{
                for(let g=i; g!=-1; g--){
                    stars[g].classList.replace("grade__star_onchoise", "grade__star_passive")
                }
            })
        }
    },
    grade: function (mark){
        // СОХРАНЕНИЕ ОЦЕНКИ В БД

        let data = JSON.stringify({
            mark,
            date: new Date()
        })

        localStorage.setItem('grade', data)
        this.appreciated = true

        this.confetti(mark)
    },
    exGrade: function (){
        if(this.appreciated){
            let currentStars = document.querySelectorAll('.grade__star')
            let mark = JSON.parse(localStorage.getItem('grade'))

            for(let m = 0; m!=mark.mark; m++){
                currentStars[m].classList.add("grade__star_active")
            }
        }
    },
    gradeCurrentMark: function (){
        let mark = JSON.parse(localStorage.getItem('grade'))
        this.gradeMark = mark.mark
    }
  },
  components:{
    LightText,
    StatisticsCard,
    Btn,
    Post,
    Lebel,
    AniNewCarousel
  }
}
</script>

<style>
.home{
  position: relative;
  will-change: transform;
}

section{
    width: 100%;
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
    position: relative;
}
.santa-hat{
    position: absolute;
    height: 120px;
    width: 120px;
    top: -50px;
    left: -30px;
    background-image: url(../assets/media/santa-hat.svg);
    background-size: cover;
    transform: rotate(-6deg);
}

.layers__photo{
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 80px;
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

.anime-list{
    width: 100%;
}
.anime__content{
    margin-top: 30px;
    width: 100%;
}
.anime__btn{
    margin-top: 30px;
}
.anime__carousel{
}
.carousel-items{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
}
.carousel-controls{
    position: absolute;
}
.carousel-prev{

}
.carousel-next{
}



.quote{
    width: 980px;
    background-color: #2A2E35;
    padding: 15px 30px;
    border-radius: 15px;
}
.quote__main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.quote__text{
    width: 860px;
    text-align: start;
    font-size: 20px;
}
.quote__picture{
    border-right: 1px solid #505050;
    padding-right: 5px;
}
.quote__icon{
    width: 38px;
    height: 45px;
    background-image: url(../assets/media/quote.svg);
}
.quote__author{
    color: #7F8083;
    text-align: start;
    margin-top: 20px;
}
.quote__content{
    margin-top: 30px;
}


.grade__content{
    width: 100%;
    margin-top: 0px;
}
.grade__box{
    width: 525px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.grade__star{
    font-size: 70px;
    transition: color 0.2s ease-in-out;
}
.grade__star::before{
    content: '★';
}
.grade__star_passive{
    color: #868686;
}
.grade__star_onchoise{
    color: #9C7C29;
}
.grade__star_active{
    color:#E5AA11;
    text-shadow: 0px 0px 7px rgba(229, 170, 17, 0.8);
}
.grade__text{
    margin-top: 10px;
    color: #777;
}
</style>