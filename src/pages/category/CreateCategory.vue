<template>
  <div>
    <div class="title">
      <h4>Create Category</h4>
    </div>
    <div>
      <router-link class="btn btn-info index" to="/category">Category Index</router-link>
    </div>

    <div>
      <div class="show">
        {{ formData }}
      </div>
      <form @submit.prevent="formSubmit" class="form">
        <fieldset>
          
          <div>
            <label for="name" class="form-label">Name:</label>
            <input v-model="formData.name" type="text" name="name" class="form-control">

            <label for="parent_id" class="form-label">Parent ID</label>
            <input v-model="formData.parent_id" type="text" name="parent_id" class="form-control">

            <button type="submit" class="btn btn-primary submit"> Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
   
  </div>
</template>

<script setup>

import api from '@/Api';
// import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router= useRouter();
const formData=reactive({
  name:"",
  parent_id:"",
})

const formSubmit=()=>{
// axios.post("http://localhost/VueCompositionApi/eCommerce/public/api/category", formData)
api.post("/category", formData)
.then((result) => {
  console.log(result)
  router.push("/category")
}).catch((err) => {
  console.log(err)
});
}

</script>

<style>

.index{
  margin: 10px;
}

.title{
  background-color: aquamarine;
  margin: 10px;
  padding: 10px;
  text-align: center;
}

.form{
  margin: 20px;
  padding: 20px;
  background-color: beige;
}

.submit{
  margin: 10px;
}

.show{
  background-color: rgb(89, 247, 110);
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  font-weight: 100;
}
</style>