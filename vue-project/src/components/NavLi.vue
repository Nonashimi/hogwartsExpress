<template>
<div class="nav_li" @click="$router.push(`/${router}`)">
            <div class="nav_li_flex">
                <img :src="src" alt="" class = "nav_img">
            {{ text }}
            </div>
            <div class="line" :class = "isActive?'active':''"></div>
        </div>
</template>
<script setup>
const props = defineProps({
    text: String,
    src: String,
    router: String,
    isActive: Boolean
});
</script>
<style scoped>
    .nav_li_flex{
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-weight: 600;
    justify-content: center;
}
.nav_li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.nav_li:hover .line{
    width: 100%;
}
.line{
    background-color: #fff;
    height: 2px;
    width: 0;
    transition: all .3s;
}
.active{
    width: 100%;
}
.nav_img{
    width: 25px;
}
</style>