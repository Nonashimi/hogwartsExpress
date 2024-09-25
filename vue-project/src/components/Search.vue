<template>
    <div class="search" >
      <input type="text" placeholder="search ..." class = "search_character" :value="modelValue" @input ="updateValue" v-focus>
    </div>
</template>

<script setup>
const props = defineProps({
 modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) =>{
    emit('update:modelValue', event.target.value);
}
</script>

<style scoped>
.search{
  display: flex;
  align-items: center;
}
.search_character{
    padding: 10px 100px 10px 20px;
    outline: none;
    border-radius: 10px;
    border: none;

}

</style>