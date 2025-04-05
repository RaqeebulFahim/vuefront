<script setup>
import  Header  from "./layouts/Header.vue";
import  Footer  from "./layouts/Footer.vue";
import Topbar from "./components/Topbar.vue";

</script>

<template>

   <div id="wrapper">
       
       <Topbar/>

        <Header/>

           <router-view>

           </router-view>
        

        <Footer/>

    
    </div>

</template>

<style scoped>

</style>
