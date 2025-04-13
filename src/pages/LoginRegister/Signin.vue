<template>
  <div class="container-xxl">
        <div class="row vh-100 d-flex justify-content-center">
            <div class="col-12 align-self-center">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-4 mx-auto">
                            <div class="card">
                                <div class="card-body p-0 bg-black auth-header-box rounded-top">
                                    <div class="text-center p-3">
                                        <a href="index.html" class="logo logo-admin">
                                            <img src="/backend_assets/images/logo-sm.png" height="50" alt="logo" class="auth-logo">
                                        </a>
                                        <h4 class="mt-3 mb-1 fw-semibold text-white fs-18">Let's Get Started Rizz</h4>   
                                        <p class="text-muted fw-medium mb-0">Sign in to continue to Rizz.</p>  
                                    </div>
                                </div>
                                <div class="card-body pt-0"> 
                                    {{ loginObj }}    

                                    <form class="my-4" @submit.prevent="handleLogin">            
                                        <div class="form-group mb-2">
                                            <label class="form-label" for="email">Email</label>
                                            <input v-model="loginObj.email" type="email" class="form-control" id="email" name="email" placeholder="Enter email">                               
                                        </div><!--end form-group--> 
            
                                        <div class="form-group">
                                            <label class="form-label" for="userpassword">Password</label>                                            
                                            <input type="password" v-model="loginObj.password" class="form-control" name="password" id="userpassword" placeholder="Enter password">                            
                                        </div><!--end form-group--> 
            
                                        <div class="form-group row mt-3">
                                            <div class="col-sm-6">
                                                <div class="form-check form-switch form-switch-success">
                                                    <input class="form-check-input" type="checkbox" id="customSwitchSuccess">
                                                    <label class="form-check-label" for="customSwitchSuccess">Remember me</label>
                                                </div>
                                            </div><!--end col--> 
                                            <div class="col-sm-6 text-end">
                                                <RouterLink to="authrecover" class="text-primary ms-2 text-muted font-13">  Forget Password? </RouterLink>                                    
                                            </div><!--end col--> 
                                        </div><!--end form-group--> 
            
                                        <div class="form-group mb-0 row">
                                            <div class="col-12">
                                                <div class="d-grid mt-3">
                                                    <button class="btn btn-primary" role="button"  type="submit">Log In <i class="fas fa-sign-in-alt ms-1"></i></button>
                                                </div>
                                            </div><!--end col--> 
                                        </div> <!--end form-group-->                           
                                    </form><!--end form-->
                                    <div class="text-center  mb-2">
                                        <p class="text-muted">Don't have an account ?  <RouterLink to="Register" class="text-primary ms-2"> Free Register</RouterLink></p>
                                        
                                        <h6 class="px-3 d-inline-block">Or Login With</h6>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <a href="#" class="d-flex justify-content-center align-items-center thumb-md bg-blue-subtle text-blue rounded-circle me-2">
                                            <i class="fab fa-facebook align-self-center"></i>
                                        </a>
                                        <a href="#" class="d-flex justify-content-center align-items-center thumb-md bg-info-subtle text-info rounded-circle me-2">
                                            <i class="fab fa-twitter align-self-center"></i>
                                        </a>
                                        <a href="#" class="d-flex justify-content-center align-items-center thumb-md bg-danger-subtle text-danger rounded-circle">
                                            <i class="fab fa-google align-self-center"></i>
                                        </a>
                                    </div>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end card-body-->
            </div><!--end col-->
        </div><!--end row-->                                        
    </div>
</template>

<script  setup>
import { useAuthStore } from '@/store/AuthStore';
// import { useAuthStore } from '@/stores/auth'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';



const auth = useAuthStore();
const router= useRouter();
const loginObj = reactive({
    email: "",
    password: "",
})

const handleLogin =()=>{
    try {
        auth.login(loginObj)
        router.push("/home");
        // setTimeout(() => {
        //     if(auth.token){
               
        //     }
        //     // router.push("/login");
        //     console.log("timeout");
            
        // },2000);
        
    } catch (error) {
        console.log(error)
    }
}

</script>

<style>

</style>