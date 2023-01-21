<template>
    <div class="blog">

      <div class="container">

        <div class="blog-header blog-box">
          <div class="blog-header__wallpaper">
            <light-text :text="'Autumn'" :fontSize="'1.4em'"></light-text>
          </div>
          <div class="blog-header__content">
            <div class="blog-header__about">
              <img class="blog-header__user-picture" crossorigin="anonymous" :src="user.profilePic ? user.profilePic : 'url(' + require('../assets/media/person.png') + ')'" />
              <div class="blog-header__user-datas">
                <div class="blog-header__user-id">{{ user.username }}</div>
                <div class="blog-header__user-status">{{ user.bio }}</div>
              </div>
            </div>
            <div class="blog-header__art-count">author of 12 articles</div>
          </div>
        </div>

        
        <div class="blog-searching">
          <searching-bar></searching-bar>
        </div>

        <div class="blog-main">
          <div class="blog-posts">

            <post
            :postTitle="'Скоро рождество!'"
            :postMedia="[{src: 'https://images.freeimages.com/images/large-previews/f45/christmas-tree-in-the-office-1639599.jpg'},{src: 'https://images.freeimages.com/images/large-previews/6ee/christmas-composition-a-luminous-star-in-blue-colors-1641501.jpg'}]"
            :postDate="'19.12.2022'"
            :postViews="32"
            :postTags="[{name: 'story', color: '#FF3300'},{name: 'christmas', color:'#006633'},{name: 'cookie', color:'#993300'},{name:'snow',color:'#0000CC'}]"
            :postDes="'Unicode is an internationally recognized standard for identifying the different characters we see on our computer screens. Since computers only recognize zeros and ones (i.e. binary), each character is assigned a unique binary number. For example, the capital letter “A” has a Unicode character number of 65. A lowercase “a” has a Unicode character number..'"
            :postID="3"
            ></post>

            <post
            :postTitle="'Детство - наше драгоценное время'"
            :postMedia="[{src: 'https://images.freeimages.com/images/large-previews/415/brotherhood-at-sunset-1-1244631.jpg'},{src: 'https://images.freeimages.com/images/large-previews/af4/sparklers-2-1200038.jpg'}]"
            :postDate="'08.12.2022'"
            :postViews="22"
            :postTags="[{name: 'story', color: '#FF3300'},{name: 'childhood', color:'#CC3333'}]"
            :postDes="'Unicode is an internationally recognized standard for identifying the different characters we see on our computer screens. Since computers only recognize zeros and ones (i.e. binary), each character is assigned a unique binary number. For example, the capital letter “A” has a Unicode character number of 65. A lowercase “a” has a Unicode character number..'"
            :postID="2"
            ></post>

            <post
            :postTitle="'Знакомство с культурой Южной Кореи'"
            :postMedia="[{src: 'https://images.freeimages.com/images/large-previews/0cc/arquitectura-korea-1631410.jpg'},{src: 'https://images.freeimages.com/images/large-previews/de6/korean-architecture-9-1200760.jpg'}, {src: 'https://images.freeimages.com/images/large-previews/d22/palace-in-seoul-1620253.jpg'}]"
            :postDate="'21.11.2022'"
            :postViews="12"
            :postTags="[{name: 'story', color: '#FF3300'},{name: 'korea', color:'#FF0099'},{name:'travel', color:'#CC6600'}]"
            :postDes="'Unicode is an internationally recognized standard for identifying the different characters we see on our computer screens. Since computers only recognize zeros and ones (i.e. binary), each character is assigned a unique binary number. For example, the capital letter “A” has a Unicode character number of 65. A lowercase “a” has a Unicode character number..'"
            :postID="1"
            ></post>

          </div>


          <div class="blog-orient">
            <div class="blog-review">
              <review/>
            </div>

            <div class="blog-alert">
              <v-alert
                v-model="alert"
                dismissible
                type="info"
                dark
              >
                Вначале будут отображены последние <strong>20 публикаций</strong> (так же в Timestamp).<br>Чтобы подгрузить остальные скрольте страницу ниже.
              </v-alert>
            </div>

            <div class="blog-timestamp">
              <div class="timestamp">
                <div class="timestamp__header">
                  <div class="timestamp__ico"></div>
                  <div class="timestamp__title">Timestamp</div>
                </div>

                <div class="timestamp__container">

                  <div class="timestamp__box">
                    <div class="timestamp__year"><light-text :text="'2022'" :fontSize="'1.2em'"></light-text></div>
                    <div class="timestamp__mouth">December</div>
                    <div class="timestamp__day" to-post="3">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">19.12</div>
                      <div class="timestamp__post-title current-article">Скоро рождество!🎄🎁</div>
                    </div>
                    <div class="timestamp__day" to-post="2">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">08.12</div>
                      <div class="timestamp__post-title">Детство - наше драгоценное время😊</div>
                    </div>
                    <div class="timestamp__mouth">November</div>
                    <div class="timestamp__day" to-post="1">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">21.11</div>
                      <div class="timestamp__post-title">Знакомство с культурой Южной Кореи🌎</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">14.11</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">14.11</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">14.11</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                  </div>

                  <div class="timestamp__box">
                    <div class="timestamp__year"><light-text :text="'2021'" :fontSize="'1.2em'"></light-text></div>
                    <div class="timestamp__mouth">December</div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, obcaecati perspiciatis! Fuga ipsa explicabo cum! Vero aliquid doloremque, aperiam quam ut iure incidunt repellendus necessitatibus maxime facere sit rerum dolore.</div>
                    </div>
                    <div class="timestamp__day">
                      <div class="timestamp__node"></div>
                      <div class="timestamp__date">25.12</div>
                      <div class="timestamp__post-title">Просто заполнитель</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </template>
  
<script>
import Post from "../components/Post.vue"
import LightText from "../components/LightText.vue"
import SearchingBar from "../components/SearchingBar.vue"
import Review from "../components/Review.vue"
import getUserDatas from '@/services/getUserDatas'

export default {
    data () {
      return {
        alert: true,
        user: {}
      }
    },
  components:{
    Post,
    LightText,
    SearchingBar,
    Review
  },
  watch:{
  },
  mounted() {
    getUserDatas()
    .then((data)=>{
        this.user = { ...data }
    })

    const posts = document.querySelectorAll('.timestamp__day')

    for(let i = 0; i!=posts.length; i++){
      let postID = posts[i].getAttribute('to-post')
        let desiredPost = document.querySelector(`.post_${postID}`)

      posts[i].addEventListener('click', ()=>{
        desiredPost.scrollIntoView({
          behavior: 'smooth',
          block: 'start' 
        })
      })

      // Функция проверки находиться ли статья в поле видимости браузера
      // запуск функции при появлении блока в области видимости окна js

     }

  },
}
</script>

<style>
.blog{
  margin-top: 120px;
  width: 100%;
  position: relative;
}

.blog-header {
  width: 100%;
  height: 360px;
  background-color: #2A2E35;
  border-radius: 15px;
}
.blog-header__wallpaper {
  width: 100%;
  height: 250px;
  background-image: url(../assets/media/blog-wallpaper.png);
  background-position: center;
  background-size: cover;
  border-radius: 15px 15px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 15px;
}
.blog-header__content {
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: space-between;
}
.blog-header__about{
  display: flex;
  flex-direction: row;
}
.blog-header__user-picture {
  width: 80px;
  height: 80px;
  border-radius: 80px;
  border: 1px solid #fff;
}
.blog-header__user-datas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  margin-left: 15px;
}
.blog-header__user-id {
  font-size: 22px;
}
.blog-header__user-status {
  color: #717171;
  font-size: 18px;
}
.blog-header__art-count {
  color: #717171;
  font-size: 18px;
}


.blog-searching{
  margin-top: 30px;
}


.blog-main{
  width: 100%;
  display: grid;
  grid-template-columns: 780px 360px;
  margin-top: 30px;
}
.blog-posts{

}

.blog-orient{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.blog-review{
  width: 330px;
  margin-bottom: 30px;
}

.blog-alert{
  width: 330px;
}

.blog-timestamp{
  display: flex;
  width: 100%;
  justify-content: flex-end;
  position: sticky;
  top:120px;
}
.timestamp{
  width: 330px;
  text-align: start;
}

.timestamp__header {
  display: flex;
  flex-direction: row;
  padding: 0 0 10px;
  border-bottom: 1px solid #717171;
  align-items: center;
}
.timestamp__ico {
  width: 25px;
  height: 25px;
  background-image: url(../assets/media/time.svg);
}
.timestamp__title {
  font-size: 1.2em;
  margin-left: 10px;
}
.timestamp__box {
  padding: 20px 0 40px;
}
.timestamp__box:not(:last-child){
  border-bottom: 1px solid #717171;
}
.timestamp__year {
  margin-bottom: 10px;
}
.timestamp__mouth::before{
  content: '■';
  font-size: 1.5em;
  color: #717171;
  margin-right: 7px;
}
.timestamp__mouth {
  font-size: 1.2em;
  margin-bottom: 25px;
}
.timestamp__day {
  display: flex;
  flex-direction: row;
  font-size: 0.9em;
  position: relative;
}
.timestamp__day:hover>.timestamp__post-title:not(.current-article){
  text-decoration: underline;
}
.timestamp__day:hover{
  cursor: pointer;
}
.current-article{
  color: #399AF4;
}
.timestamp__node{
  display: block;
  position: absolute;
  top:-18px;
  height: 53px;
  width: 13px;
  background-image: url(../assets/media/node.svg);
}
.timestamp__date::before{
  content: '';
  display: block;
  height: 100%;
  border-left: 1px solid #717171;
  position: absolute;
  bottom: -15px;
  left: -13px;
}

.timestamp__day:not(:last-child){
  margin-bottom: 25px;
}
.timestamp__date {
  color: #717171;
  margin-left: 20px;
  position: relative;
}
.timestamp__post-title {
  margin-left: 10px;
  padding-right: 4px;
}

.timestamp__container{
  max-height: 80vh;
  overflow: scroll;
  overflow-x: hidden;
  border-bottom: 1px solid #717171;
}

.theme--dark.v-icon{
  color: #2660F5;
}
.v-alert.theme--dark.v-sheet{
background-color: #2A2E35;
}


@media only screen and (max-width: 770px){
  .blog-orient{
    display: none
  }
  
  .blog-header__content{
    flex-direction: column;
  }

  .blog-main {
    width: 100%;
    display: flex;
}

.blog-header__art-count{
  display: none;
}
.blog-header__content{
  height: auto;
}
.blog-header{
  height: auto;
}
.blog-header__content{
  padding: 10px;
}
.blog-header__content{
  align-items:flex-start;
}
.blog-header__user-status{
font-size: 1em;
}
.blog-header__user-id{
  font-size: 1.3em;
}
}
</style>