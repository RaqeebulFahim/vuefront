<template>
  <div>
    <div class="title">
        <h4>Category Table</h4>
    </div>
    <div>
        <router-link class="btn btn-info create" to="/createcategory">Create Category</router-link>
    </div>
    <div class="tab">
        <table class="table">
            <thead>
                <tr class="table-dark">
                    <td>ID</td>
                    <td>Name</td>
                    <td>Parent ID</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                    <td>{{ category.parent_id }}</td>
                    <td class="btn btn-group">
                        <router-link class="btn btn-info" :to="`/category/edit/${category.id}`">Edit</router-link>
                        <a class="btn btn-danger" @click="deletecategory(category.id)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
  </div>
</template>

<script setup>
import api from '@/Api';
import { onMounted, ref } from 'vue';


const categories = ref([]);

onMounted(()=>{
    fetchCategories()
})

const fetchCategories=()=>{
    api.get(`/category`)
    .then((result) => {
        console.log(result.data)
        categories.value=result.data.category
    }).catch((err) => {
        console.log(err)
    });
}

const deletecategory=(id)=>{
    api.delete(`/category/${id}`)
    .then((result) => {
        console.log(result)
        if (result.data.category) {
            fetchCategories()
        }
    }).catch((err) => {
        console.log(err)
    });

}

</script>


<style scoped>

.title{
 text-align: center;
 background-color: aquamarine;
 margin: 10px;
 padding: 10px;
}

.create{
    margin: 10px;
}

</style>