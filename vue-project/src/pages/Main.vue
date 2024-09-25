<template>
    <div class="functions">
        <search v-model="searchName" @click = "choosingHouse" />
        <pickByFaculty v-model:choseFaculty="choseFaculty" />
        <button class="openCreateModel" @click="mPage = true">Добавление персонажа</button>
        <ModelPage v-if="mPage" @hideModelPage = "hideModelPage" >  <PostCreate @clickCreate = 'ClickCreate' @hideModelPage = "hideModelPage"/>
        </ModelPage>
    </div>
<HeroList :arr = "searchQuery" :boolFetch = "boolFetch"/>
  <div class="observer"></div>
</template>

<script setup>
import HeroList from '@/components/HeroList.vue';
import PostCreate from "@/components/PostCreate.vue";
import ModelPage from '@/components/ModelPage.vue';
import search from '@/components/Search.vue';
import pickByFaculty from '@/components/pickByFaculty.vue';
import {computed, onMounted, provide, ref, watch} from 'vue';
import axios from 'axios';
const data = ref([]);
const mPage = ref(false);
const searchName = ref('');
const choseFaculty = ref('');
const page = ref(0);
const dataLength = ref(0);
const load = ref(false);
const boolFetch = ref(false);
let filteredData = [];
let searchQuery = [];
let count = 0;

//put data from MOKKY.DEV
const fetchPosts = async() =>{
  try {
    const response = await axios.get('https://33b6addbc0cb952f.mokky.dev/characters');
    dataLength.value = response.data.length;
    const min = 12 * page.value > response.data.length? response.data.length: 12 * page.value;
    const safe = response.data.slice(12 * (page.value-1), min);
    data.value = [...data.value, ...safe];
    page.value++;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

//Mounted
onMounted(async() =>{
    fetchPosts();
    const obser = document.querySelector('.observer');
  const options = {
  rootMargin: "0px",
  threshold: 1.0,
};
    const callback = function (entries) {
    if(entries[0].isIntersecting && 12 * (page.value-1) < dataLength.value){
      load.value = true;
      fetchPosts();
      load.value = false;
    }
};
  const observer = new IntersectionObserver(callback, options);
  observer.observe(obser);
});

//Computed
const filterDataBySearch =  () =>{
      return [...data.value].filter(d => d.name.toLowerCase().includes(searchName.value.toLowerCase()));
};
const choosingHouse = () =>{
  return filteredData.value.filter(d => {
    if(choseFaculty.value != ''){
     if (d.house == choseFaculty.value) {
      return true;
     }
     else
     return false;
    }
    return true;
   });
}
filteredData = computed(() =>{
   return  filterDataBySearch();
});
searchQuery = computed(() =>{
  return choosingHouse();
});
watch(searchQuery, () =>{
  count++;
  if(count > 1){
    setTimeout(() => {
    boolFetch.value = true;
  }, 200);
  }
});

//click Functions
const ClickCreate =async(post)=>{
  if((page.value-1) * 12 >= dataLength.value){
    data.value.push(post);
  }
  const res = await axios.post("https://33b6addbc0cb952f.mokky.dev/characters", post);
};
const clickDelete = async(id) =>{
  data.value = data.value.filter(d =>{
    if(d.id == id)
      return false;
    else
      return true;
  })
}
const hideModelPage = async() =>{
  mPage.value = false;
}

//provide 
provide('clickDelete', clickDelete);

</script>

<style scoped>
.functions{
   display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
.openCreateModel{
  border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #a62f32;
    color: #fff;
    transition: all .3s;
    padding: 10px 20px;
    font-size: 16px;
    margin: 20px 10px;
}
.openCreateModel:hover{
    background-color: #ca181e;
    transform: scale(1.03);
}

.observer{
  display: flex;
  justify-content: center;
}
.observer img{
  width: 70px;
}

</style>