<template>
<div class="List" v-if = "arr.length > 0" v-auto-animate>
        <Post v-for="item in arr" :name = "item.name" :house = "item.house" :image = "item.image" :id = "item.id" :key = "item.id"/>
</div>
<load v-else-if="!boolFetch"/>
    <div class="emptyList"  v-else-if=" arr.length == 0 && boolFetch">
        <img src="@/assets/pngegg.png" alt="">
        <div class="emptylist_text">Здес пусто, добавьте персонажей</div>
    </div>


</template>

<script setup>
import Post from '@/components/Post.vue';
import load from '@/components/Loading.vue';
const props = defineProps({
    arr:Array,
    boolFetch: Boolean
});
</script>

<style scoped>
.List{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 10px;
}
.emptyList img{
 width: 30%;
}
.emptyList{
    text-align: center;
    margin: 0 auto;
    padding: 50px 0;
}
.emptylist_text{
    font-size: 25px;
    padding: 10px 0;
    color: #fff;
}


</style>