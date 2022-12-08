<template>
    <header>
        <div class="container">
          <div class="header__wrapper">
            <router-link to="/blog">
              <div class="logo"></div>
            </router-link>
            <nav class="header__nav">
              <router-link to="/"><p v-text="$ml.get('navMain')"></p></router-link>
              <router-link to="/contacts"><p v-text="$ml.get('navContacts')"></p></router-link>
              <router-link to="/blog"><p v-text="$ml.get('navBlog')"></p></router-link>
              <router-link to="/anime"><p v-text="$ml.get('navAnime')"></p></router-link>
              <a href="#" neutral-nav="true"><p v-text="$ml.get('navStatistic')"></p></a>
            </nav>

            <div class="languages">
              <div class="languages__menu">
                <div class="lang__menu-wrap">
                  <div class="lang__polygon"></div>
                  <div class="lang__logo"></div>
                </div>
                <ul>
                  <p v-text="$ml.get('langMenu')"></p>
                  <li
                  v-for="lang in $ml.list"
                  :key="lang"
                  @click="$ml.change(lang)"
                  v-text="lang"
                  :class="{'lang-active':$ml.current==lang}"
                  ></li>
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
    props: {
    },
    data(){
      return{
        showLoader:{
          home:true
        }
      }
    }
}
</script>

<style>
header{
  background-color: #070b18bb;
  height: auto;
  width: 100%;
  position: fixed;
  top:0;
  z-index: 5;
}
.header__wrapper{
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header__nav{
  display: flex;
  width: 554px;
  flex-direction: row;
  justify-content: space-between;
}
.header__nav>a{
  color:#fff;
  text-decoration: none;
}
a[aria-current]{
  text-decoration: underline;
  color: #2660F5;
}
a[neutral-nav]{
  color: #9f9f9f;
}
.header__nav>a>.neutral-nav{
  color:#5a5a5a;
  text-decoration: none;
}
.header__nav>a:hover{
  text-shadow:0 0 5px #399AF4,0 0 7px #399AF4, 0 0 10px #399AF4;
}
.lang-active{
  background-color: #5a5a5a;
}
.languages{
}
.languages__menu{
  position: relative;
}
.lang__menu-wrap{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.lang__polygon{
  width: 13px;
  height: 13px;
  background-image: url(../assets/media/polygon.svg);
  margin-right: 5px;
}
.lang__logo{
  width: 30px;
  height: 30px;
  background-image: url(../assets/media/translate.svg);
}
.languages__menu>ul{
  position: absolute;
  right: 0;
  display: none;
  font-size: 18px;
}
.languages__menu>ul>p{
  padding: 5px 0;
  border-bottom: #fff 1px solid;
  font-weight: 700;
  font-size: 16px;
}
.languages__menu:hover ul {
  transition: 1s;
  display: block;
  background-color: #070b18bb;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.3);
}
.languages__menu ul li {
  list-style: none;
  padding: 5px 60px;
}
.languages__menu ul li:hover {
  text-decoration: underline;
  cursor: pointer;
}

.logo{
  width: 40px;
  height: 40px;
  background-image: url('../assets/media/logo.svg');
}
</style>