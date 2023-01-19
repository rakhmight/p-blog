<template>
  <div class="anime-page">

    <div class="container">

      <div class="recent-anime">
        <div class="recent-anime__title">
          <light-text :text="'Недавно добавленные'"></light-text>
        </div>
        <ani-new-carousel></ani-new-carousel>
      </div>

      <div class="anime-searching-bar">
        <searching-bar :barClass="['anime-searching']"></searching-bar>
      </div>

      <div class="anime-category">
        <div class="category"
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="{ 'category_active': currentTab === tab }"
        v-on:click="currentTab = tab"
        >{{ tab }}</div>
      </div>

      
    <div class="anime-cards-layout-wrapper">
        <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>

    </div>

  </div>
</template>

<script>
import AniNewCarousel from '../components/AniNewCarousel.vue'
import LightText from '../components/LightText.vue'
import SearchingBar from '../components/SearchingBar.vue'
import TabAll from '../components/AnimePage/TabAll.vue'
import TabWatch from '../components/AnimePage/TabWatch.vue'
import TabWatched from '../components/AnimePage/TabWatched.vue'
import TabWill from '../components/AnimePage/TabWill.vue'
import TabFavorite from '../components/AnimePage/TabFavorite.vue'

export default {
  components:{
    AniNewCarousel,
    LightText,
    SearchingBar,
    TabAll,
    TabFavorite,
    TabWatch,
    TabWatched,
    TabWill
  },
  data() {
    return {  
      currentTab: 'All',
      tabs: ['All', 'Watch', 'Watched', 'Will','Favorite']
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}
</script>

<style>
.anime-page{
  margin-top: 120px;
  width: 100%;
  position: relative;
}

.recent-anime__title{
  margin-bottom: 20px;
}

.anime-searching-bar{
  margin-top: 30px;
}

.anime-category {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #2A2E35;
  margin-top: 30px;
  border-radius: 15px;
}
.category {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.category:not(:last-child){
  border-right: 1px solid #3B4048;
}
.category:first-child{
  border-radius: 15px 0 0 15px;
}
.category:last-child{
  border-radius: 0 15px 15px 0;
}
.category:hover:not(.category_active){
  border-bottom: 4px solid #3B4048;
}
.category_active{
  border-bottom: 4px solid #2660F5;
}

.anime-cards-layout{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.anime-cards-layout-wrapper{
  width: 100%;
}
.anime-cards-margin{
  margin-top: 30px;
}
.anime-card-preview{
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.04);
}

.anime-pages{
  margin-top: 10px;
}

.preview {
  position: fixed;
  top:300px;
  right: 20px;
  width: 330px;
  text-align: start;
  display: none;
}
.preview__video> iframe{
  border-radius: 5px;
  margin-top: 7px;
}
.preview__title {
  font-size: 32px;
  margin: 5px 0 10px;
}
.preview__tags{
  font-size: 18px;
  word-wrap: break-word;
}
.preview__tags>span:not(:first-child){
  margin-left: 5px;
}
.preview__tags>span::before{
  content: '#';
}


.theme--dark.v-pagination .v-pagination__item {
    background: #2A2E35;
}
.theme--dark.v-pagination .v-pagination__item:not(.v-pagination__item--active){
    color: #FFFFFF;
}
.theme--dark.v-pagination .v-pagination__navigation {
    background: #2A2E35;
}
.v-pagination{
  margin-top: 15px;
}
.theme--dark.v-pagination .v-pagination__item--active {
  color: #399AF4;
  box-shadow: 0px 3px 5px #55abfc80;
}
</style>
  