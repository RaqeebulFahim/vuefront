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
        {{ formdata }}
      </div>
      <form @submit.prevent="formSubmit" class="form">
        <fieldset>
          
          <div>
            <label for="name" class="form-label">Name:</label>
            <input v-model="categories.name" type="text" name="name" class="form-control">

            <label for="parent_id" class="form-label">Parent ID</label>
            <input v-model="categories.parent_id" type="text" name="parent_id" class="form-control">

            <button type="submit" class="btn btn-primary submit"> Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
   
  </div>
</template>

<script setup>


import api from '@/Api';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const {id}=useRoute().params
const router= useRouter();

console.log(id);

const categories = reactive({
  id:"",
  name:"",
  parent_id:"",
});


const formdata=reactive({
  name:"",
  parent_id:"",
})

onMounted(()=>{
    fetchCategories()
})

const fetchCategories=()=>{
    api.get(`/category/`+id)
    .then((result) => {
        console.log(result.data)
        categories.name= result.data.category.name
        categories.parent_id= result.data.category.parent_id
        // categories.value=result.data.category
    }).catch((err) => {
        console.log(err)
    });
}



const formSubmit=()=>{
api.put("/category/"+id, categories)
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