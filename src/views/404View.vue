<template>
    <div class="page">
        <div class="page__wrapper">
            <p class="page__comment first" v-text="$ml.get('pageComment')"></p>
            <p class="page__comment" v-text="$ml.get('pageComment2')"></p>
            <div class="page__404">
                <div class="page__number">4</div>
                <div class="page__anbu" v-bind:style="{'background-image': 'url(' + require('../assets/media/anbu.svg') + ')'}"></div>
                <div class="page__number">4</div>
            </div>
            <div class="page__btn">
                <btn :btnUrl="'/'" :btnText="$ml.get('pageBtn')"></btn>
            </div>
        </div>
    </div>
</template>

<script>
import
 Btn from "../components/Btn.vue"

export default {
    data(){
        return{

        }
    },
    components:{
        Btn
    }
}
</script>

<style>
.page{
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 2;
}

.page__wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.page__comment{
    margin-bottom: 15px;
    color: rgb(145, 145, 145);
}

.page__comment.first{
    margin-bottom: 3px;
}

.page__404{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.page__number{
    font-family: 'Inter';
    font-size: 250px;
}

.page__anbu{
    width: 300px;
    height: 263px;
    background-size: 300px 263px;
    position:relative;
}

.page__anbu:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-size: 300px 263px;
    background: url(../assets/media/anbu.svg);
    background-repeat: no-repeat;
    opacity:.5;
    mix-blend-mode:hard-light;
}
.page__anbu:before{
    animation:animate .4s linear infinite;
}

.page__btn{
    margin-top: 70px;
}

@keyframes animate{
	0%{
	background-position: 0 0;
	filter:hue-rotate(0deg);
	}
	10%{
	background-position: 5px 0;
	}
	20%{
	background-position: -5px 0;
	}
	30%{
	background-position: 5px 0;
	}
	40%{
	background-position: 5px 0;
	}
	50%{
	background-position: -5px 0;
	}
	60%{
	background-position: -15px 0;
	}
	70%{
	background-position: 0 -5px;
	}
	80%{
	background-position: -5px -5px;
	}
	81%{
	background-position: 0 0;
	}
	100%{
	background-position: 0 0;
	filter:hue-rotate(360deg);
	}
}
</style>