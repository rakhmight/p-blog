<template>
  <article>
    <div class="post">
        <div class="post__carousel">
            <v-carousel>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
              </v-carousel-item>
            </v-carousel>
        </div>

        <div class="post__main">
          <div class="post__intro">
            <div class="post__intro-icon"></div>
            <div class="post__intro-content">
              <div class="post__intro-title">
                <light-text :text="'Какая никакая история'" :fontSize="'20px'"></light-text>
              </div>
              <div class="post__intro-data">
                <div class="post__intro-date">07.11.2022</div>
                <div class="post__intro-views">
                  <span>32</span>
                  <div class="view-icon"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="post__line"></div>

          <div class="post__contentBox">
            <p>Unicode is an internationally recognized standard for identifying the different characters we see on our computer screens.</p>
            <p>Since computers only recognize zeros and ones (i.e. binary), each character is assigned a unique binary number. For example, the capital letter “A” has a Unicode character number of 65. A lowercase “a” has a Unicode character number..</p>
          </div>

          <div class="post__tags" v-if="currentRout == '/blog'">Blog</div>

          <div class="post__btn" v-else>
            <btn :btnUrl="'/blog'" :btnText="'Перейти в блог'"/>
          </div>
        </div>

    </div>
  </article>
</template>

<script>
import LightText from './LightText.vue';
import Btn from './Btn.vue';

export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],

        currentRout: ''
      }
    },
    components:{
      LightText,
      Btn
    },
    mounted() {
      this.currentRout = this.$router.currentRoute.path
    }
}
</script>

<style>
  .post{
    background-color: #2A2E35;
    border-radius: 15px;
    text-align: start;
    width: 780px;
  }
  .post__main{
    padding: 15px 30px;
  }
  .post__line{
    width: 100%;
    margin: 15px 0;
    border-bottom: 1px solid #717171
  }
  .post__intro{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .post__intro-icon{
    width: 50px;
    height: 50px;
    background-image: url(../assets/media/title.svg);
  }
  .post__intro-content{
    width: 660px;
    display: flex;
    flex-direction: column;
  }
  .post__intro-data{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 16px;
    color: #7c7c7c;
    margin-top: 3px;
  }
  .view-icon{
    width: 25px;
    height: 25px;
    background-image: url(../assets/media/views.svg);
    margin-left: 5px;
  }
  .post__intro-views{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .post__contentBox{
    font-size: 18px;
    font-weight: 100;
  }
  .post__contentBox>p{
    text-indent: 15px;
    line-height: 22px;
  }
  .post__contentBox>p:not(:last-child){
    margin-bottom: 5px;
  }

  .post__btn{
    margin: 30px 0 5px;
    display: flex;
    justify-content: center;
  }

  .v-window__next{
      right: 0;
  }
  .post__carousel{
      width: 100%;
      height: 500px;
  }
  .v-item-group{
      border-radius: 15px 15px 0 0;
  }
  .v-carousel__controls {
      height: 30px;
  }
  .v-btn--icon.v-size--default{
      height: 27px;
      width: 27px;
  }
</style>