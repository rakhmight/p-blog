<template>
  <div class="contacts">
    <div class="contacts__wrapper">
        <div class="dream-team"></div>

        <div class="contacts__block">
          <div class="contacts__instagram">
            <div class="instagram">
              <img class="instagram__photo" crossorigin="anonymous" :src="user.profilePic ? user.profilePic : 'url(' + require('../assets/media/person.png') + ')'" />
              <div class="instagram__info">
                <div class="social">
                  <div class="social__logo" v-bind:style="{'background-image': 'url(' + require('../assets/media/instagram-logo.png') + ')'}"></div>
                  <p class="social__user-id"><a :href="`https://www.instagram.com/${user.nick}`" class="social__link">@{{ user.nick }}</a></p>
                </div>
                <p v-text="$ml.get('contactsSubs')+` ${user.subsCount}`"></p>
                <p v-text="$ml.get('contactsArticles')+` ${user.publicationsCount}`"></p>
              </div>
            </div>
          </div>

          <div class="contacts__other-social">
            <div class="telegram social social-additional">
              <div class="social__logo" v-bind:style="{'background-image': 'url(' + require('../assets/media/telegram-logo.png') + ')'}"></div>
              <p class="social__user-id"><a  v-if="user.contacts" :href="`https://t.me/${user.contacts.telegram}`" class="social__link">@{{ user.contacts.telegram }}</a></p>
            </div>
            <div class="mail social social-additional">
              <div class="social__logo" v-bind:style="{'background-image': 'url(' + require('../assets/media/mail-logo.png') + ')'}"></div>
              <p class="social__user-id" v-if="user.contacts">{{ user.contacts.mail }}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import getUserDatas from '@/services/getUserDatas'

export default {
  data (){
    return{
      user: {}
    }
  },
  mounted() {
    getUserDatas()
    .then((data)=>{
        this.user = { ...data }
    })
  },
}
</script>

<style>
.contacts{
    height: 100vh;
    width: 100%;
}

.contacts__wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.dream-team{
  height: 370px;
  width: 450px;
  background-image: url(../assets/media/team.svg);
}

.contacts__block{
  display: flex;
  flex-direction: row;
  width: 630px;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}

.instagram{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.instagram__photo{
  width: 120px;
  height: 120px;
  border-radius: 100px;
}

.instagram__info{
  display: flex;
  flex-direction: column;
}

.social{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.social__user-id{
  font-size: 22px;
}

.social__logo{
  width: 65px;
  height: 65px;
  background-size: cover;
}

.instagram__info>p{
  text-align: start;
  color:#8E8E8E;
  margin-left: 10px;
}

.instagram__info>p:not(:last-child){
  margin-bottom: 5px;
}

.contacts__other-social{
  display: flex;
  flex-direction: column;
}

.social__link{
  color: #fff
}


@media only screen and (max-width: 770px){
  .contacts__block{
    width: 100%;
    flex-direction: column;
  }
  .dream-team{
    width: 100%;
    height: 220px;
    background-size: contain;
    background-position: center;
  }
  .instagram__photo{
    width: 90px;
    height: 90px;
    border-radius: 100px;
    margin-right: 7px;
  }
  .social__logo{
    width: 40px;
    height: 40px;
  }
  .contacts__other-social{
    margin-top: 15px;
  }
  .social-additional:not(:first-child){
    margin-top: 15px;
  }
  .social__user-id{
    font-size: 1.3em;
  }
}
</style>