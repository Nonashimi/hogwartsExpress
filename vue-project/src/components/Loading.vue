<template>
     <div class="images">
        <img src="https://media.tenor.com/mC4I4kSl960AAAAj/owl-harry-potter.gif" alt="">
    </div>
 <div class="load" ></div>
    
</template>

<script setup>

</script>

<style scoped>
.load{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 5;
   
}
.images img{
    width: 200px;
}
.images{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center; 
    z-index: 10;

}

</style>
