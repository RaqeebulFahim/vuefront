<template>
  <div>
   <div class="title">
    <h4>Stocks</h4>
   </div>

   <div class="index">
    <button class="btn btn-info"><router-link to="/createstock">Add Stocks</router-link></button>
    <table class="table table-striped">
        <thead class="table-dark">
            <tr class="table-dark">
                <th>ID</th>
                <th>Product ID</th>
                <th>Transacation Type</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="stock in stocks">
                <td>{{ stock.id }}</td>
                <td>{{ stock.product_id }}</td>
                <td>{{ stock.transaction_type }}</td>
                <td>{{ stock.quantity }}</td>
                <td>
                    <router-link class="btn btn-info" :to="`/stocks/edit/${stock.id}`"> Edit</router-link>
                    <a @click="deleteStock(stock.id)" class="btn btn-danger">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
   </div>
    
  </div>
</template>

<script  setup>
import api from '@/Api';
import { onMounted, ref } from 'vue';


const stocks = ref([]);

onMounted(()=>{
    fetchStocks();
    })

    // http://localhost/VueCompositionApi/eCommerce/public/api/stocks
const fetchStocks=()=>{
    api.get("/stocks")
    .then((result) => {
        console.log(result.data)
        stocks.value=result.data.stocks
    }).catch((err) => {
        console.log(err)
    });
}

const deleteStock=(id)=>{
    api.delete(`/stocks/${id}`)
    .then((result) => {
        console.log(result.data)
        if (result.data.stocks) {
            fetchStocks();
        }
    }).catch((err) => {
        console.log(err)
    });
}

</script>

<style>

</style>