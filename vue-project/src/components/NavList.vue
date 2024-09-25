<template>
<NavLi v-for="item, index in arr" :text = 'item.text' :src = "item.image" :isActive = "item.isActive" :router = "item.router" :key = "index" @click = '$emit("clickLi", item)' />
</template>
<script setup>  
import NavLi from '@/components/NavLi.vue';
    const props = defineProps({
        arr:Array
    });
    const emit = defineEmits(['clickLi']);
</script>
<style scoped>

</style>