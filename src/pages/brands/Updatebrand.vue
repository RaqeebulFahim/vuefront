<template>
    <div class="row">
          <!-- Baisc Form Controls start -->
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">
                      <h5>Basic Form Controls</h5>
                  </div>
                    {{ formData }}
                  <div class="card-body">
                      <form @submit.prevent="submitData">
                          <div class="app-form">
                              <div class="mb-3">
                                  <label for="username" class="form-label">name</label>
                                  <input v-model="formData.name" type="text" class="form-control" placeholder="Enter Your Username" id="username">
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
  import api from '@/Api';
  import { onMounted, reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const router = useRouter()
  const {id}= useRoute().params
  onMounted(()=>{
      fetchBrand()
  })
  
  const fetchBrand=()=>{
      api.get(`/brands/${id}`)
      .then((result)=>{
          console.log(result.data);
          formData.id=result.data.brands.id
          formData.name=result.data.brands.name    
      })
      .catch((err)=>{
          console.log(err); 
      });
  }
  
  const formData=reactive({
  id:"",
  name:"",
  })
  
  const submitData =()=>{
      api.put("/brands/"+formData.id, formData)
      .then((result)=>{
          console.log(result.data);
          router.push({path: '/brands'})
      })
      .catch((err)=>{
          console.log(err); 
      })
  }
  
  </script>
  
  <style>
  
  </style>