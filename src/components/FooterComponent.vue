<template>
    <footer>
      <div class="container">
        <div class="footer-wrapper">

          <div class="footer__nav footer-box">
            <nav>
              <router-link to="/">Главная</router-link>
              <router-link to="/contacts">Контакты</router-link>
              <router-link to="/blog">Блог</router-link>
              <router-link to="/anime">Аниме</router-link>
              <a class="neutral-nav" @click="showStatistics">Статистика</a>
            </nav>
          </div>

          <div class="footer__msg footer-box">
            <div class="footer__des">Сайт блога запущен в тестовом режиме с кучей багов, ошибок и trash-кодом</div>
            <div class="footer__form">
              <review/>
            </div>
          </div>

          <div class="footer__dev footer-box">
            <div class="footer__dev-wrapper">
              <div class="footer__dev-des">developed by:</div>
              <div class="footer__dev-logo"></div>
              <div class="footer__dev-contacts">
                <div class="footer__ico">
                  <v-icon
                  slot="prepend"
                  color="#777"
                  size="28"
                  >
                  mdi-email
                  </v-icon>
                </div>
                <div class="footer__mail">mr.rakhimov@mail.com</div>
            </div>
            </div>
          </div>

        </div>
      </div>
      
      <div class="footer__copy">v.1.0 | "p-blog" | 
        <v-icon
                  slot="prepend"
                  color="#777"
                  size="20"
                  >
                  mdi-copyright
                  </v-icon>
        since 2022</div>
    </footer>
</template>

<script>
import Review from './Review.vue'

export default {
  name: 'FooterComponent',
  props: {
    //
  },
  components:{
    Review
  },
  methods: {
    showStatistics: function(){
         let currentRout = this.$router.currentRoute.path

        if(currentRout != '/'){
          this.$router.push('/')
          setTimeout(()=>{
            window.scrollTo({
              top:700,
              behavior: 'smooth'
            })
          },500)
        }else{
            window.scrollTo({
              top:700,
              behavior: 'smooth'
            })
        }
      }
  },
}
</script>

<style>
footer{
  margin-top: 50px;
  height: auto;
  background-color: #070B18;
  z-index: 5;
}
footer>.container{
  height: 100%;
}
.footer-wrapper{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  height: 200px;
}

.footer-box,.footer__nav>nav{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer__nav{
}
.footer__nav>nav{
  align-items: flex-start;
}
.footer__nav>nav>a:not(:first-child){
  margin-top: 5px;
}
.footer__nav>nav>a:not(.neutral-nav){
  color:#fff;
  text-decoration: none;
}
.footer__nav>nav>a:hover{
  cursor: pointer;
}
.footer__nav>nav>a:not(.router-link-exact-active,.neutral-nav):hover{
  text-shadow:0 0 5px #399AF4,0 0 7px #399AF4, 0 0 10px #399AF4;
}
.footer__nav>nav>a[aria-current]{
  text-decoration: underline;
  color: #2660F5;
}
.neutral-nav{
  color:#5a5a5a;
  text-decoration: none;
}
.neutral-nav:hover{
  text-shadow:0 0 5px rgba(255, 255, 255, 0.171),0 0 7px rgba(255, 255, 255, 0.171), 0 0 10px rgba(255, 255, 255, 0.171);
}

.footer__msg{
  align-items: center;
  text-align: center;
}
.footer__form{
  margin-top: 30px;
  width: 300px;
  padding: 1px;
}

.footer__copy{
  background-color: #04050a;
  padding: 10px 0;
  color: #777;
}

.footer__dev {
  align-items: flex-end
}
.footer__dev-des{
  color: #777;
  margin-bottom: 5px;
}
.footer__dev-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__dev-logo{
  background-image: url(../assets/media/dev-logo.svg);
  width: 160px;
  height: 70px;
  background-size: contain;
}
.footer__dev-contacts{
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
}
.footer__mail{
  background-color: #2A2E35;
  border-radius: 3px;
  padding: 4px 10px;
  margin-left: 5px;
}

@media only screen and (max-width: 770px){
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 20px 0;
    align-items: center;
}

.footer__nav{
  display:none
}

.footer__dev-wrapper{
  margin-top: 30px;
}

.footer__dev-des{
  margin-bottom: -7px;
}
}
</style>