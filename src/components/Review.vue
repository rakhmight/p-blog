<template>
    <v-dialog
      v-model="dialog"
      width="500"
      dark
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
            <div class="review">
                <div class="review__ico">
                    <v-icon
                            slot="prepend"
                            color="#fff"
                            size="20"
                            >
                            mdi-send
                    </v-icon>
                </div>
                <div class="review__txt">Оставить отзыв</div>
            </div>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Оставьте отзыв
        </v-card-title>
        
        <v-divider></v-divider>
        
        
        <div class="card-container">
            <div class="review__author">
                <v-text-field
                        label="Имя (псевдоним либо контакт на соц. сеть)"
                        required
                        :rules="rules"
                        hide-details="auto"
                ></v-text-field>
            </div>

            <div class="review__content">
                <v-textarea
                solo
                name="input-7-4"
                label="Напишите отзыв"
                ></v-textarea>
            </div>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Отправить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
</template>

<script>
export default {
    data () {
      return {
        dialog: false,
        rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      }
    },
}
</script>

<style>
.review{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #2660F5;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    box-shadow: 0px -5px 10px 5px rgba(38, 96, 245, 0.2), -5px 0px 10px 5px rgba(38, 96, 245, 0.2), 5px 0px 10px 5px rgba(38, 96, 245, 0.2), 0px 5px 10px 5px rgba(38, 96, 245, 0.2);
}
.review:hover{
    cursor: pointer;
    box-shadow: 0px -5px 10px 7px rgba(38, 96, 245, 0.2), -5px 0px 10px 7px rgba(38, 96, 245, 0.2), 5px 0px 10px 7px rgba(38, 96, 245, 0.2), 0px 5px 10px 7px rgba(38, 96, 245, 0.2);
}
.review__ico{
    margin-right: 10px;
}
.review__txt{
    color: #fff;
}

.v-btn:not(.v-btn--round,.v-card__actions>.v-btn).v-size--default {
    height: auto; 
    min-width: auto;
    width: 100%;
    padding: 0;
}
.theme--dark.v-card{
    background-color: #2A2E35;
}

.v-card__actions>.v-btn{
    background-color: #2660F5;
    width: 200px;
    border-radius: 5px;
    padding: 5px;
    margin: 0 auto;
}
.v-card__actions{
    flex-direction: column;
}

.card-container{
    padding: 30px 10px;
    width: 100%;
}
.review__author{
    margin-bottom: 15px;
}
</style>