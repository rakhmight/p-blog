<template>
  <article>
    <div class="post" :class="`post_${id}`" :post-id="id">
        <div class="post__carousel">
            <v-carousel>
                <v-carousel-item
                v-for="(item,i) in carouselItems"
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
                <light-text :text="title" :fontSize="'20px'"></light-text>
              </div>
              <div class="post__intro-data">
                <div class="post__intro-date">{{ date }}</div>
                <div class="post__intro-views">
                  <span>{{ views }}</span>
                  <div class="view-icon"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="post__line"></div>

          <div class="post__contentBox">
            {{ des }}
          </div>

          <div class="post__tags" v-if="currentRout == '/blog'">
            <div class="post__tag" v-for="tag in tags" :style="{ backgroundColor: tag.color }">{{tag.name}}</div>
          </div>

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
    props:{
      postTitle: String,
      postMedia: Array,
      postDate: String,
      postViews: Number,
      postTags: Array,
      postDes: String,
      postID: Number
    },
    data () {
      return {
        carouselItems: this.postMedia,
        title: this.postTitle,
        date: this.postDate,
        views: this.postViews,
        des: this.postDes,
        tags: this.postTags,
        id: this.postID,

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
  article:not(:first-child){
    margin-top: 30px;
  }
  
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

  .post__tags{
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
.post__tag::before{
    content: '#';
    margin-right: -2px;
}
.post__tag{
    display: block;
    border-radius: 5px;
    padding: 5px 7px;
    margin-top: 5px;
}
.post__tag:not(:first-child){
    margin-left: 5px;
}
</style>