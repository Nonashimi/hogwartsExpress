<template>
<div class="PostCreate">
    <input type="text" class="name" v-model="post.name" placeholder="Name" v-focus>
    <input type="text" class="actor-name" v-model="post.actor_name" placeholder="Actor Name">
    <input type="text" class="alter names" v-model="post.alter_names" placeholder="Alternate names (doesn't matter)">
    <input type="text" class="status" v-model="post.status" placeholder="Status">
    <input type="text" class="image" v-model="post.image" placeholder="Image URL">
    <input type="text" class="species" v-model="post.species" placeholder="Species">
    <div class="radio">
        Wizard
        <label >
            Yes <input type="radio" name="isWizard" :value="true" id="" v-model="post.isWizard">
        </label>
        <label >
            No <input type="radio" name="isWizard" :value="false" v-model="post.isWizard">
        </label>
    </div>

    <div class="radio">
        Alive
        <label >
            Yes <input type="radio" name="isAlive" :value="true" id="" v-model="post.isAlive">
        </label>
        <label >
            No <input type="radio" name="isAlive" :value="false" v-model="post.isAlive">
        </label>
    </div>
    <div class="radio">
        <label >
            Male <input type="radio" name="Gender" id="" value="male" v-model="post.Gender">
        </label>
        <label >
            Female <input type="radio" name="Gender" value="female" v-model="post.Gender">
        </label>
    </div>
    <input type="text" name="" id="" class = "stat" placeholder="Post" v-model = "post.status">
    <input type="date" class="dateOfBirth" v-model="post.dateOfBirth" placeholder="date of birth">
    <select class = "house" v-model="post.house" >
      <option disabled >Выберите факультет</option>
      <option value="Gryffindor">Gryffindor</option>
      <option value="Slytherin">Slytherin</option>
      <option value="Ravenclaw">Ravenclaw</option>
      <option value="Hufflepuff">Hufflepuff</option>
    </select>
    <button @click="createPost" :class = 'bool?"":"notActive"'>Add</button>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
const post = ref({
    name:'',
    actor_name:'',
    house:'',
    image:'',
    species:'',
    isWizard:'',
    isAlive:'',
    Gender:'',
    dateOfBirth:'',
    alter_names: '',
    status: ''
});
const bool = ref(false);

watch(post, async(newVal) =>{
 if(areAllFieldsFilled()){
        bool.value = true;
 }else{
    bool.value = false;
 }
},
{deep: true});

const areAllFieldsFilled = () =>{
    let bool = true;
    for(const key in post.value){
        if(key === 'alter_names')
        continue;
        if(post.value[key] === ''){
            bool = false;
        }
    }
    return bool;
}

const emit = defineEmits(['clickCreate', 'hideModelPage']);
const createPost = async() =>{
    if(areAllFieldsFilled){
        post.value.id = Date.now();
        emit("clickCreate", post.value);
        post.value = {
            name:'',
            house:'',
            image:'',
        }

        setTimeout(() => {
            emit('hideModelPage');
        }, 100);
        

    }
    else{
        alert("emty input or select :(");
    }
}
</script>

<style scoped>
.PostCreate{
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    margin: 0 50px;
    gap: 10px;
    padding: 20px 0 30px;
}
.createTitle{
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    margin: 0 0 0 50px;
}
.PostCreate input{
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    outline: none;
}
.PostCreate select{
    border: none;
    outline: none;
    border-radius: 5px;
}
button{
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #a62f32;
    color: #fff;
    transition: all .3s;
    padding: 10px 20px;
}
.notActive{
    background-color: rgb(81, 79, 79);
    pointer-events: none;
}
button:hover{
    background-color: #ca181e;
    transform: scale(1.03);
}

.radio{
    color: #fff;
    display: flex;
    gap: 10px;
}
</style>