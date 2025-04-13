

import api from '@/Api';
import axios from 'axios';
import { defineStore } from 'pinia';


export const useAuthStore=defineStore('auth',{
    state: ()=>({
        token: localStorage.getItem('token') || null,
        user: null,
    }),

    actions:{
        async login(credentials){
            try {
                const res= await api.post('/login', credentials);
                // console.log(res);

                console.log("token", res.data.authorisation.token);
                this.token=res.data.authorisation.token;
                this.user =res.data.user;

                // save token in localstorage 
                localStorage.setItem('token', this.token);

                // set token for future requests
                api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            } catch (error) {
                throw error;
            }
        }

        // logout(){
        //     this.token = null;
        //     this.user = null;
        //     localStorage.removeItem('token');
        //     delete axios.defaults.headers.common['Authorization'];
        // }

        // initAuth(){
        //     if(this.token){
        //         axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        //     }
        // }
    }
})

