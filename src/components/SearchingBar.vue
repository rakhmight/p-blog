<template>
    <div>
        <div class="serching-bar" v-bind:class="classSB" v-if="currentWindowSize >= 770">
            <div class="searching-bar__by-title">
                <v-text-field label="search by title" dark>
                    <v-icon
                    slot="prepend"
                    color="red"
                    >
                    mdi-magnify
                    </v-icon>
                </v-text-field>
            </div>

            <div class="searching-bar__by-tags">
                <v-select
            v-model="e7"
            :items="states"
            label="search by hashtags"
            multiple
            chips
            hint="What are the target hashtags"
            persistent-hint
            dark
            clearable
            deletable-chips
            ></v-select>

            </div>

            <div class="searching-bar__search-btn">
                <button>Поиск</button>
            </div>
        </div>

        <div class="serching-bar" v-bind:class="classSB" v-if="currentWindowSize < 770">
            <v-expansion-panels dark>
                <v-expansion-panel>
                <v-expansion-panel-header color="#2A2E35">
                    Расширенный поиск
                </v-expansion-panel-header>
                <v-expansion-panel-content color="#2A2E35">
                    <v-text-field label="search by title" dark>
                    </v-text-field>
                    
                    <v-select
                    style="margin-top:20px"
                    v-model="e7"
                    :items="states"
                    label="search by hashtags"
                    multiple
                    chips
                    hint="What are the target hashtags"
                    persistent-hint
                    dark
                    clearable
                    deletable-chips
                    ></v-select>

                    <div class="searching-bar__search-btn">
                        <button>Поиск</button>
                    </div>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        barClass: Array,
    },
    data() {
        return {
            classSB: this.barClass,
            currentWindowSize: window.innerWidth,
            e7: [],
            states: [
            'Alabama', 'Alaska', 'American Samoa', 'Arizona',
            'Arkansas', 'California', 'Colorado', 'Connecticut',
            'Delaware', 'District of Columbia', 'Federated States of Micronesia',
            'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada',
            'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
            'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
            'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
            'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
            'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
            ],
        }
    },
    mounted() {
        window.addEventListener('resize', (e) => {
            this.currentWindowSize = window.innerWidth
        });
    },
    
}
</script>

<style>
.serching-bar{
  padding: 15px;
  background-color: #2A2E35;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.searching-bar__by-title{
    width: 500px;
    background-color: #3B4048;
    border-radius: 15px;
    padding: 7px;
    max-height: 54px;
}
.searching-bar__by-tags{
    width: 455px;
    background-color: #3B4048;
    border-radius: 15px;
    padding: 7px;
}

.searching-bar__search-btn>button{
    padding: 14px 35px;
    background-color: #2660F5;
    border-radius: 5px;
}

.v-text-field fieldset, .v-text-field .v-input__control {
    margin-left: 5px;
}
.v-input__append-outer, .v-input__prepend-outer{
    margin-top: 8px;
}
.v-text-field__details{
    display: none;
}
.v-text-field{
    margin: 0;
    padding: 0;
}
.v-input__slot{
    margin-bottom: 0;
}
.v-select.v-select--chips .v-select__selections{
    min-height: 32px;
}
.theme--light.v-list {
    background: #434850;
    color: rgb(255 255 255 / 87%);
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgb(225 225 225 / 87%);
}


@media only screen and (max-width: 770px){
    .v-expansion-panel-header{
        justify-content: space-between;
        padding: 0;
        min-height: auto;
    }
    .v-expansion-panel::before{
        box-shadow: none;
    }
    .v-expansion-panel--active > .v-expansion-panel-header {
        min-height: auto
    }
    .v-expansion-panel-content__wrap {
        padding: 15px 5px 0;
    }

    .searching-bar__search-btn{
        margin-top: 20px;
    }

    .searching-bar__search-btn>button {
    padding: 7px;
    width: 70%;
    background-color: #2660F5;
    border-radius: 5px;
}
}
</style>