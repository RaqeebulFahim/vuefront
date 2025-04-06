    
<script setup>
import api from '@/Api';
import { onMounted, ref } from 'vue';



const brands = ref([])

onMounted(()=>{
  fetchBrands()
})

const fetchBrands =()=>{
  api.get("/brands")
  .then(res=>{
    console.log(res.data.brands);
    brands.value = res.data.brands
  })
  .catch(err=>{
    console.log(err);
    
  })
}

const deletebrand = (id)=>{
  api.delete(`/brands/${id}`)
  .then(res=>{
    console.log(res);
    if (res.data.brands) {
      fetchBrands()
    }
  })
  .catch(err=>{
    console.log(err);
    
  })
}

</script>

    

<template>
  <div class="row m-1">
          <div class="col-12 ">
            <h4 class="main-title">List Table</h4>
            <ul class="app-line-breadcrumbs mb-3">
              <li class="">
                <a href="#" class="f-s-14 f-w-500"> 
                  <span>
                    <i class="ph-duotone  ph-table f-s-16"></i> Table
                  </span>
                </a>
              </li>
              <li class="active">
                <a href="#" class="f-s-14 f-w-500">List Table</a>
              </li>
            </ul>
          </div>
        </div>
<div class="row">
    <div class="col">
        <div class="card">
            <div class="card-header">
                <h6 class="btn btn-info"><RouterLink to="/createBrand">Add Brands</RouterLink></h6>
            </div>
            <div class="card-body">
                <div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="brand in brands">
                                <th>{{ brand.id }}</th>
                                <th>{{ brand.name }}</th>
                                <th>
                                  <RouterLink :to="`/brands/edit/${brand.id}`" class="btn btn-primary">Edit</RouterLink>
                                     <a class="btn btn-danger" @click="deletebrand(brand.id )">Delete</a>  
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</div>
</template>






<style></style>