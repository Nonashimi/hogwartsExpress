<script setup>
import {onMounted, ref, inject, computed} from 'vue';
const props = defineProps({
 name: String,
 house: String,
 image: String,
 id: Number,
});

const clickDelete = inject('clickDelete');
const deleted = ref();

const clickD = async () =>{
    deleted.value = true;
    clickDelete(props.id);
}

const routerName  = 
computed(() =>{
    return props.name.replace(' ', '');
}
   
);


</script>

<template>
        <div class="all" :class ='deleted?"notActive":""' @click = "$router.push(`/characters/${routerName}`)">
        <div class="post" :id = "id" :class = "house" >
        <div class="delete_btn" @click="clickD" @click.stop>
            <img src="@/assets/delete.png" alt="">
        </div>
        <div class="image_contain">
            <img :src="image" alt="" class = 'image' >
        </div>
        <div class="name">{{ name }}</div>
        <div class="title">{{ house }}</div>
    </div>
    </div>
    
    
</template>
<style scoped>
.post{
    padding: 25px;
    text-align: center;
    border-radius: 30px;
    color: #fff;
    transition: all .3s;
    -webkit-box-shadow: -2px 11px 23px 0px rgba(63, 71, 77, 0.2);
    -moz-box-shadow: -2px 11px 23px 0px rgba(63, 71, 77, 0.2);
    box-shadow: -2px 11px 23px 0px rgba(63, 71, 77, 0.2);
    position: relative;
    cursor: pointer;
}
.post:hover{
    transform: translateY(-15px);
}
.notActive{
    pointer-events: none;
}
.post:hover .delete_btn{
    display: flex;
}
.name, .title{
    font-size: 20px;
}
.name {
  width: 195px; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
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
.image{
    width: 180px;
    height: 265px;
    object-fit: cover;
    border-radius: 10px;
}
.image_contain{
    height: 85%;
}
.delete_btn img{
    width: 20px;
    height: 20px;
}
.delete_btn{
    width: 35px;
    height: 35px;
justify-content: center;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0.7;
    position: absolute;
    right: 5%;
    top: 6%;
    display: none;
    transition: all .3s;
}
.delete_btn:hover{
    opacity: 1;
    transform: translateY(-1px);
}

</style>