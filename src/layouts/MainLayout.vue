<script setup>



import Topbar from "@/components/Topbar.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

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
