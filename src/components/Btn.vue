<template>
    <a
    v-bind:href="url"
    class="btn">
    {{text}}
    </a>
</template>

<script>
export default {
    props:{
        btnUrl: String,
        btnText: String
    },
    data(){
        return{
            url: this.btnUrl,
            text: this.btnText
        }
    }
}
</script>

<style>
.btn{
    /* !!!!!!!!!!!!!!!!!! Почистить стили !!!!!!!!!!!!!!! */
    background: #2660F5;
    border-radius: 5px;
    padding: 10px 50px;
    text-decoration: none;
    color: #fff;
    box-shadow: 0px -5px 10px 5px rgba(38, 96, 245, 0.2), -5px 0px 10px 5px rgba(38, 96, 245, 0.2), 5px 0px 10px 5px rgba(38, 96, 245, 0.2), 0px 5px 10px 5px rgba(38, 96, 245, 0.2);
    transition: box-shadow 0.2s ease-in-out;
}

.btn:hover{
    box-shadow: 0px -5px 10px 7px rgba(38, 96, 245, 0.2), -5px 0px 10px 7px rgba(38, 96, 245, 0.2), 5px 0px 10px 7px rgba(38, 96, 245, 0.2), 0px 5px 10px 7px rgba(38, 96, 245, 0.2);
}
</style>