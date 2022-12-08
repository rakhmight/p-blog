<template>
  <div class="contacts">
    <div class="contacts__wrapper">
        <div class="dream-team"></div>

        <div class="contacts__block">
          <div class="contacts__instagram">
            <div class="instagram">
              <div class="instagram__photo" v-bind:style="{'background-image': 'url(' + require('../assets/media/instagram-photo.png') + ')'}"></div>
              <div class="instagram__info">
                <div class="social">
                  <div class="social__logo" v-bind:style="{'background-image': 'url(' + require('../assets/media/instagram-logo.png') + ')'}"></div>
                  <p class="social__user-id">@user_id</p>
                </div>
                <p v-text="$ml.get('contactsSubs')"></p>
                <p v-text="$ml.get('contactsArticles')"></p>
              </div>
            </div>
          </div>

          <div class="contacts__other-social">
            <div class="telegram social">
              <div class="social__logo" v-bind:style="{'background-image': 'url(' + require('../assets/media/telegram-logo.png') + ')'}"></div>
              <p class="social__user-id">@user_id</p>
            </div>
            <div class="mail social">
              <div class="social__logo" v-bind:style="{'background-image': 'url(' + require('../assets/media/mail-logo.png') + ')'}"></div>
              <p class="social__user-id">@user_id</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

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
</style>