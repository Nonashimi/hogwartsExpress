<template>
    <div class="character" v-if = "boolFetch">
        <div class="title" v-scrollTop>
            <div class="back" @click = "$router.back()">
                <img src="@/assets/image.png" alt="">
            </div>
            <div class="name_info">
                <div class="name">{{ characterData.name }} / {{ characterData.actor }}</div>
                <div class="actor_species">{{ characterData.species }}, {{ characterData.wizard ?'wizard':'magle' }}</div>
            </div>
        </div>
    <div class="container">
        <div class="information">
                <img :src="characterData.image" alt="" class = "img">
                <div class="info_flex">
                    <div class="info">
                        <div class="about_name">
                        <TitleOfCharacter :text="'Names'" :house = 'characterData.house'/>
                        <TextOfCharacter :title ='"Имя"' :text ='characterData.name'/>
                        <TextOfCharacter :title="'Имя Актера'" :text = 'characterData.actor'/>
                        <TextOfCharacter :title = '"Прочие"' :text = 'alter_name'/>
                    </div>
                    <div class="about_information">
                        <TitleOfCharacter :text="'Information'" :house = 'characterData.house'/>
                        <TextOfCharacter :title = '"Статус"' :text = "characterData.alive?'alive':'died'" :class = "characterData.alive?'alive':'died'" />
                        <TextOfCharacter :title = '"Пол"' :text = 'characterData.gender'/>
                        <TextOfCharacter :title = '"Должность"' :text = 'characterData.status'/>
                        <TextOfCharacter :title = '"Расса"' :text = 'characterData.species'/>
                        <TextOfCharacter :title = '"Факультет"' :text = 'characterData.house'/>
                        <TextOfCharacter :title = '"Дата рождения"' :text = 'characterData.dateOfBirth'/>
                    </div>
                </div>
                <div class="faculty_img" :class = "characterData.house">
                </div>
            </div>
        </div>
        <div class="description">
            <TitleOfCharacter :text="'Description'" :house = 'characterData.house'/>
            <div class="description_text">
                <b>Описание: </b> <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, voluptatibus! Consectetur in, nulla consequuntur accusamus eveniet error facere maxime ut laborum aliquam distinctio! Placeat incidunt aliquid quaerat aut iusto impedit at optio? Ex rerum, voluptatem dicta, veritatis repellat iure, perferendis incidunt sequi laborum commodi corrupti nostrum nobis non. Quas quae adipisci nam officiis a sed repellendus expedita maxime esse, aspernatur reiciendis ipsa pariatur ad eum sequi dolore, quia aut quo amet maiores. Quaerat harum reiciendis tempore, ullam quibusdam nobis quasi! Neque mollitia laudantium molestiae velit animi. Officiis porro culpa quam exercitationem quisquam assumenda! Nam consequuntur hic nisi pariatur praesentium aut?</span>
            </div>
        </div>
    </div>
    </div>
    <load v-else/>
     
</template>

<script setup>
import {ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import load from '@/components/Loading.vue';
import TextOfCharacter from '@/components/TextOfCharacter.vue';
import TitleOfCharacter from '@/components/TitleOfCharacter.vue';
import axios from 'axios';
const nameId = ref('');
const route = useRoute();
const characterData = ref({});
const alter_name = ref(' ');
const boolFetch = ref(false);

nameId.value = route.params.name;
onMounted(async() =>{
    await fetchCharacter();
    await getAlter_name();
    await fetchCheck();
});
const fetchCheck = async() =>{
    
    setTimeout(() => {
        boolFetch.value = true;
    }, 200);
}
const getAlter_name = async() =>{
    const arr = characterData.value.alternate_names;
    if(arr){
    for(let i = 0; i < arr.length - 1; i++){
        alter_name.value += `${arr[i]}, `;
    }
    alter_name.value += arr[arr.length - 1];
}
};

const fetchCharacter = async() =>{
    const response = await axios.get('https://33b6addbc0cb952f.mokky.dev/characters');
    characterData.value = response.data.filter(d => d.name.replace(' ', '') == nameId.value)[0];
};

</script>
<style scoped>
.back{
 display: flex; 
 align-items: center;   
 cursor: pointer;
}
.back img{
    width: 30px;
    transition: all .3s;
}
.back img:hover{
    transform: translateX(-7px);
}
.title{
    display: flex;
    gap: 10px;
    align-items: center;
}
.name{
    color: #fff;
    font-size: 30px;
}
.actor_species{
    color: #8d8989;
    font-size: 16px;
}
.container{
    margin: 10px 20px;
}
.information{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
}
.img{
    width: 280px;
    height: 402.6px;
    margin: 0 auto;
    object-fit: cover;
}
.info{
    font-size: 16px;
    color: #fff;
    line-height: 2;
    width: 60%;
}
.info_other{
    display: inline;
}

.info_flex{
    display: flex;
    gap: 5%;
}
b{
    color: #8d8989;
    max-height: 27.2px;
}
.img_fac{
    height: 25px;
    width: 25px;
}


.about_information{
    margin: 5px 0;
}
.faculty_img{
    width: 35%;
    height: 402.6px;
    border-radius: 10px;
}


.description{
    padding: 20px 0;
    display: grid;
}
.description_text{
    display: inline;
    font-size: 16px;
    color: #dcdbdb;
    margin: 10px 0;
}

.Gryffindor{
    background-image: url('https://i.pinimg.com/originals/2e/aa/20/2eaa2039f127b9026bc13254a1c10488.jpg');
    background-repeat: no-repeat;
  background-size: cover;
}
.Slytherin{
    background-image: url('https://img.goodfon.ru/wallpaper/big/f/1d/slizerin-slytherin-zmeya.webp');
    background-repeat: no-repeat;
  background-size: cover;
}
.Ravenclaw{
    background-image: url('https://img.goodfon.ru/original/3200x1800/4/86/kogtevran-ravenclaw-fakultet.jpg');
    background-repeat: no-repeat;
  background-size: cover;
}
.Hufflepuff{
    background-image: url('https://i.pinimg.com/736x/ba/e0/3b/bae03b199c524e881bebe214ced4ab88.jpg');
    background-repeat: no-repeat;
  background-size: cover;
}
</style>