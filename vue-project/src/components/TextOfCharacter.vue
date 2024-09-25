<template>
<div class="text"><span class="title">{{ title }}: </span><span :class="class">{{ text }}</span></div>
<div class=""></div>
</template>
<script setup>
const props = defineProps({
 title: String,
 text: String,
 class:{
    type: String,
    default:''
 }
});
</script>
<style scoped>
.title{
    color: #8d8989;
    max-height: 27.2px;
}
.text{
    display: inline;
}


/* alive */
.alive{
    color: rgb(25, 219, 25);
}
.died{
    color: #d32228;
}
</style>