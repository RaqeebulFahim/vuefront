<template>
    <div class="row">
           <!-- Baisc Form Controls start -->
           <div class="col-md-12">
               <div class="card">
                   <div class="card-header">
                       <h5>Basic Form Controls</h5>
                   </div>
                   {{ formdata }}
                   <div class="card-body">
                       <form   @submit.prevent="formSubmit">
                       <div class="app-form">
                           <div class="mb-3">
                               <label for="username" class="form-label">name</label>
                               <input v-model="formdata.name" type="text" class="form-control" name="name" placeholder="Enter Your Username" id="username">
                           </div>
                           <div>
                               <button type="submit" class="btn btn-primary">Submit</button>
                           </div>
                       </div>
                   </form>
                   </div>
               </div>
           </div>
        
       </div>
   </template>
   
   <script  setup>
   import axios from 'axios';
   import { reactive } from 'vue';
   import { useRouter } from 'vue-router';
   
   
   const router = useRouter()
   const formdata= reactive({
       id:"",
       name:"",
   })
   
   const formSubmit=()=>{
       axios.post(`http://localhost/eCommerce/public/api/brands`,formdata)
       .then(res=>{
           console.log(res);
           router.push({path: '/brands'})
       })
       .catch(err=>{
           console.log(err);
           
       })
       console.log(formdata);
   
   }
   
   
   
   </script>
   
   <style>
   
   </style>