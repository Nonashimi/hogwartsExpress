<template>
<div class="title" :class ='facultyForTitle' >{{ text }}</div>
</template>
<script setup>
import {onMounted, ref} from 'vue';
const props = defineProps({
    text: String,
    house:String
});
const facultyForTitle = ref('');
const getFacultyTitle = async() =>{
    const faculty = props.house;
    if(faculty == "Gryffindor"){
        facultyForTitle.value = "grif";
    }
    else if(faculty == "Slytherin"){
        facultyForTitle.value = 'slyth';
    }else if(faculty == "Ravenclaw"){
        facultyForTitle.value = 'rave';
    }else if(faculty == "Hufflepuff"){
        facultyForTitle.value = "huff";
    }
};

onMounted( async()=>{
    await getFacultyTitle();
}
);
</script>
<style scoped>
.title{
    padding: 2px 0 2px 10px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 5px;
    color: #fff;
    line-height: 2;

}

/* Faculty */
.grif{
    background-color: #a62f32;
    border-left: 5px solid #7b1c1f;
}
.slyth{
    background-color: #1b5c43;
    border-left: 5px solid #154030;
}
.rave{
    background-color: #1c5576;
    border-left: 5px solid #17384c;
}
.huff{
    background-color: #c9981b;
    border-left: 5px solid #97700e;
}


</style>
