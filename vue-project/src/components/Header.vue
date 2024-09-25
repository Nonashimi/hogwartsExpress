<template>
<div class="header">
    <div class="logo" @click = "$router.push('/')" v-on:click=" update">
            <img src="@\assets\icons8-owl-100.png" alt="" class="logo_img">
        <div class="logo_text">
            Hogwarts Express
        </div>
    </div>
    <nav class = 'nav'>
        <NavList :arr = "li" @clickLi = 'clickLi'/>
    </nav>
    </div>
</template>

<script setup>
import NavList from '@/components/NavList.vue';
import {ref} from 'vue';
import harryPotterImage from '@/assets/icons8-harry-potter-48.png';
const li = ref([
    {
        text: 'Characters',
        image: harryPotterImage,
        isActive: false,
        router: 'characters'
    }
]);

const clickLi = (list) =>{
    update();
    list.isActive = true;
}
const update = ()=>{
    let length = li.value.length;
    for(let i = 0; i < length; i++){
        li.value[i].isActive = false;
    }
}
</script>
<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    padding: 35px 35px 20px 35px;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom: 1px solid #4e4d4d;

}
.logo{
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 3px;
}
.logo_img{
    width: 45px;
}
.logo_text{
    font-size: 20px;
    color: #fff;
    font-weight: 600;
}


/* nav */

.nav{
    color: #fff;
    display: flex;
    gap: 30px;
    list-style: none;
    padding-right: 30px;
}

</style>