<template>
<div class="content" @click="$emit('hideModelPage')" >
    <div @click.stop class="content_slot">
          <slot></slot>
    </div>
</div>
</template>

<script setup>
const emit = defineEmits(['hideModelPage']);
</script>

<style scoped>
.content{
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.6);
    z-index: 3;
}
.content_slot{
    margin: auto;
    padding: 10px;
    background-color: #2f292b;
    border-radius: 20px;
    width: 60%;
}
</style>