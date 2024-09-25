<template>
     <select name="" id="" :value="choseFaculty" @change="updateQuery" class = "pick">
      <option disabled selected >Выберите факультет для сортировки</option>
      <option value="Gryffindor">Gryffindor</option>
      <option value="Slytherin">Slytherin</option>
      <option value="Ravenclaw">Ravenclaw</option>
      <option value="Hufflepuff">Hufflepuff</option>
      <option value="">all</option>
    </select>
</template>

<script setup>
const props = defineProps({
 choseFaculty: String
});

const emit = defineEmits(['update:choseFaculty']);
const updateQuery = (event) =>{
  emit('update:choseFaculty', event.target.value);
};
</script>
<style scoped>
.pick{
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px 20px 10px 10px;
}
</style>

